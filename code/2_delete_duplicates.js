const fs = require('fs');
const csv = require('csv-parser');

// If a certain wallet has more than 1 tx, only the first one is kept, the rest are erased.

// Run for multiple networks
const chain = 'Polygon zkEVM_d';
const csvFilePath = `data/${chain}.csv`; // Input CSV file path
const outputFilePath = `2_data_no_dups/${chain}.csv`; // Output CSV file path
const processedFilePath = 'already_processed.txt'; // File to keep track of processed wallets

// Column headers for the CSV file
const headers = ['SOURCE_CHAIN', 'SOURCE_TRANSACTION_HASH', 'SOURCE_CONTRACT', 'DESTINATION_CHAIN', 'DESTINATION_TRANSACTION_HASH', 'DESTINATION_CONTRACT', 'SENDER_WALLET', 'SOURCE_TIMESTAMP_UTC', 'PROJECT', 'NATIVE_DROP_USD', 'STARGATE_SWAP_USD'];

// Flag to indicate if the input file has headers
const hasHeaders = false; // Set to true if your input file has headers

// Load already processed wallets into a Set
const processedWallets = new Set();
if (fs.existsSync(processedFilePath)) {
    const processedData = fs.readFileSync(processedFilePath, 'utf-8');
    processedData.split(/\r?\n/).forEach(line => {
        if (line.trim()) {
            processedWallets.add(line.trim());
        }
    });
}

// Create a write stream for the output file
const writeStream = fs.createWriteStream(outputFilePath); // Create a write stream to the output file
writeStream.write(headers.join(',') + '\n'); // Write headers to the output file

// Create a write stream for the processed wallets file
const processedWriteStream = fs.createWriteStream(processedFilePath, { flags: 'a' }); // Append to the processed wallets file

// Read the CSV file and process it
fs.createReadStream(csvFilePath) // Create a read stream from the input CSV file
    .pipe(csv({ headers: hasHeaders ? undefined : headers, skipLines: hasHeaders ? 0 : 1 })) // Pipe the read stream into the csv-parser to parse CSV data
    .on('data', (row) => { // 'on' method to handle 'data' event, which is triggered for each row of data
        const senderWallet = row['SENDER_WALLET']; // Extract the SENDER_WALLET value from the current row
        if (!processedWallets.has(senderWallet)) { // Check if the SENDER_WALLET has not been processed before
            processedWallets.add(senderWallet); // Add the SENDER_WALLET to the Set of processed wallets
            processedWriteStream.write(senderWallet + '\n'); // Write the new wallet to the processed wallets file
            const rowString = headers.map(header => row[header]).join(','); // Convert the row object to a comma-separated string
            writeStream.write(rowString + '\n'); // Write the row string to the output file
        }
    })
    .on('end', () => { // 'on' method to handle 'end' event, which is triggered when the entire file has been processed
        console.log('CSV file successfully processed and written to output.'); // Log a message indicating completion
        writeStream.end(); // Close the write stream
        processedWriteStream.end(); // Close the processed wallets write stream
    })
    .on('error', (err) => { // 'on' method to handle 'error' event, which is triggered in case of an error during processing
        console.error('Error processing CSV file:', err); // Log the error message
    });
