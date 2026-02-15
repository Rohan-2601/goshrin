const fs = require('fs');
const path = require('path');

// Configuration
const DATA_DIR = path.join(__dirname, '..', 'data');
const INPUT_FILE = path.join(DATA_DIR, 'applications.json');
const OUTPUT_FILE = path.join(DATA_DIR, 'applications.csv');

// Helper to escape CSV fields
function escapeCsvField(field) {
  if (field === null || field === undefined) {
    return '';
  }
  const stringField = String(field);
  // If the field contains comma, quote, or newline, wrap in quotes and escape internal quotes
  if (stringField.includes(',') || stringField.includes('"') || stringField.includes('\n')) {
    return `"${stringField.replace(/"/g, '""')}"`;
  }
  return stringField;
}

// Main execution
try {
  if (!fs.existsSync(INPUT_FILE)) {
    console.error(`Error: Input file not found at ${INPUT_FILE}`);
    process.exit(1);
  }

  const rawData = fs.readFileSync(INPUT_FILE, 'utf-8');
  let data;
  try {
    data = JSON.parse(rawData);
  } catch (e) {
    console.error('Error: Failed to parse JSON data', e);
    process.exit(1);
  }

  if (!Array.isArray(data) || data.length === 0) {
    console.log('No data found to export.');
    process.exit(0);
  }

  // Extract headers from the first object, or all unique keys if strictness is needed
  // specific order preference: id, submittedAt, name, email, phone, handle, type, category
  const allKeys = new Set();
  data.forEach(item => Object.keys(item).forEach(k => allKeys.add(k)));
  
  const preferredOrder = ['id', 'submittedAt', 'name', 'email', 'phone', 'handle', 'type', 'category'];
  const headers = Array.from(allKeys).sort((a, b) => {
    const idxA = preferredOrder.indexOf(a);
    const idxB = preferredOrder.indexOf(b);
    if (idxA !== -1 && idxB !== -1) return idxA - idxB;
    if (idxA !== -1) return -1;
    if (idxB !== -1) return 1;
    return a.localeCompare(b);
  });

  const csvRows = [];
  
  // Add Header Row
  csvRows.push(headers.map(h => escapeCsvField(h.toUpperCase())).join(','));

  // Add Data Rows
  data.forEach(item => {
    const row = headers.map(header => escapeCsvField(item[header]));
    csvRows.push(row.join(','));
  });

  fs.writeFileSync(OUTPUT_FILE, csvRows.join('\n'));
  console.log(`Successfully exported ${data.length} records to ${OUTPUT_FILE}`);

} catch (error) {
  console.error('An unexpected error occurred:', error);
  process.exit(1);
}
