const fs = require('fs');
const readline = require('readline');
const path = require('path');

// Gets all wallet txs EVM-Aptos network that are not in the intialList.txt

// Create a set of wallet addresses from the initialList.txt file
const initialListFilePath = 'initialList.txt';
const walletSet = new Set(fs.readFileSync(initialListFilePath, 'utf8').split('\n').map(line => line.trim()));

// Define the projects to filter by
const projects = ['Aptos Bridge', 'Bitcoin Bridge', 'PancakeSwap'];

// Create read and write streams
const csvFilePath = '2024-05-15-snapshot1_transactions.csv';
const rl = readline.createInterface({
    input: fs.createReadStream(csvFilePath),
    crlfDelay: Infinity
});

// Create a writable stream for the processed wallets file
const processedWalletsStream = fs.createWriteStream('processed_walls.txt', { flags: 'a' });

let lineCount = 0;

rl.on('line', (line) => {
    if (lineCount % 1000000 === 0) {
        console.log(`Processed ${lineCount} lines`);
    }
    lineCount++;

    const columns = line.split(',');

    const SOURCE_CHAIN = columns[0];
    const DESTINATION_CHAIN = columns[3];
    const SENDER_WALLET = columns[6];
    const PROJECT = columns[8];
    const sender_length = SENDER_WALLET.length;

    if (projects.includes(PROJECT)) {
        if (sender_length >= 55) {
            // aptos wallets are written in data/apt_d.csv (these are aptos wallets in order to later filter )
            fs.appendFileSync(path.join('data', 'apt_d.csv'), line + '\n');
        } else if (SENDER_WALLET.length === 42 && !walletSet.has(SENDER_WALLET) && DESTINATION_CHAIN == '') {
            const destinationFile = path.join('data', `${SOURCE_CHAIN}_d.csv`);
            fs.appendFileSync(destinationFile, line + '\n');
            processedWalletsStream.write(SENDER_WALLET + '\n');
        } else if (SENDER_WALLET.length !== 42 && SENDER_WALLET.length !== 0) {
            console.log(line);
        }
    }
});

rl.on('close', () => {
    console.log('Processing completed.');
    processedWalletsStream.end();
});
