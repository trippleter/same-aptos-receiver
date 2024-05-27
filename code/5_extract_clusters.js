const fs = require('fs');
const csv = require('csv-parser');
const { parse } = require('json2csv');

// Clusters all the EVM addresses with the same Aptos receiver parameters

const inputFilePath = '4_aptos_parse/test_out.csv';
const outputCsvPath = '5_final_data/final_all.csv';
const outputTxtPath = '5_final_data/final_all.txt';
const minClusterLength = 20; // Change this to your desired minimum cluster length

const walletClusters = {};

fs.createReadStream(inputFilePath)
    .pipe(csv())
    .on('data', (data) => {
        const { SENDER_WALLET, APTOS_WALLET } = data;
        if (APTOS_WALLET in walletClusters) {
            walletClusters[APTOS_WALLET].push(data);
        } else {
            walletClusters[APTOS_WALLET] = [data];
        }
    })
    .on('error', (err) => {
        console.error('Error reading CSV file:', err);
    })
    .on('end', () => {
        let validClusters = Object.values(walletClusters).filter(cluster => cluster.length >= minClusterLength);
        
        // Sort clusters by length in descending order
        validClusters = validClusters.sort((a, b) => b.length - a.length);

        try {
            // Write to CSV
            const csvFields = ['SENDER_WALLET', 'APTOS_WALLET', 'TX_HASH', 'NETWORK'];
            const csvData = parse(validClusters.flat(), { fields: csvFields });
            fs.writeFileSync(outputCsvPath, csvData);
            console.log('Clustered CSV file saved to', outputCsvPath);
        } catch (err) {
            console.error('Error writing CSV file:', err);
        }

        try {
            // Write to TXT
            const txtData = validClusters.map(cluster => cluster.map(wallet => wallet.SENDER_WALLET).join('\n')).join('\n' + '-'.repeat(60) + '\n');
            fs.writeFileSync(outputTxtPath, txtData);
            console.log('Clustered TXT file saved to', outputTxtPath);
        } catch (err) {
            console.error('Error writing TXT file:', err);
        }
    });
