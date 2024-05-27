const fs = require('fs');
const csv = require('csv-parser');
const { parse } = require('json2csv');

// Based on selectors of the input data gets the Aptos receiver address.

const inputFilePath = '3_data_input_evm/input_eth.csv';
const outputFilePath = '4_aptos_parse/test_out.csv';
const badInputFilePath = 'bad_input_apt.csv';

function extractAptosAddress(input) {
    const selector = input.slice(0, 10);
    if (selector === '0xca23bb4c') {
        return '0x' + input.slice(10, 74).replace(/^0+/, '');
    } else if (selector === '0x76a9099a' || selector === '0x563476dc') {
        return '0x' + input.slice(74, 138).replace(/^0+/, '');
    } else if (selector === '0xb09bbd91' || selector === '0x9064aa17') {
        return '0x' + input.slice(138, 202).replace(/^0+/, '');
    } else if (selector === '0x2cdf0b95' || selector === '0x85154849' || selector == '0x8bcb586c') {
        if (input.slice(74, 138).replace(/^0+/, '') === '6c') {
            return '0x' + input.slice(138, 202).replace(/^0+/, '');
        } else {
            console.log('bad network', input);
        }
    } else if (selector === '0xf316d227') {
        return '0x' + input.slice(266, 330).replace(/^0+/, '');
    } else if (selector != '0xb1dc65a4' && selector != '0x7bbaf1ea' && selector != '0x78923903') {
        console.log(input);
    }
    return null;
}

const results = [];
const badResults = [];
fs.createReadStream(inputFilePath)
    .pipe(csv({ headers: false }))
    .on('data', (data) => {
        const row = {
            SENDER_WALLET: data[0],
            TX_INPUT: data[1],
            TX_HASH: data[2],
            NETWORK: data[3]
        };
        const aptosWallet = extractAptosAddress(row.TX_INPUT);
        if (aptosWallet) {
            results.push({
                SENDER_WALLET: row.SENDER_WALLET,
                APTOS_WALLET: aptosWallet,
                TX_HASH: row.TX_HASH,
                NETWORK: row.NETWORK
            });
        } else {
            badResults.push(row);
        }
    })
    .on('end', () => {
        const fields = ['SENDER_WALLET', 'APTOS_WALLET', 'TX_HASH', 'NETWORK'];
        const csvData = parse(results, { fields, header: false });
        
        // Check if the output file exists to add headers if it's the first run
        if (!fs.existsSync(outputFilePath)) {
            fs.writeFileSync(outputFilePath, fields.join(',') + '\n');
        }
        fs.appendFileSync(outputFilePath, csvData + '\n');
        console.log('CSV file successfully processed and saved to', outputFilePath);

        const badFields = ['SENDER_WALLET', 'TX_INPUT', 'TX_HASH', 'NETWORK'];
        const badCsvData = parse(badResults, { fields: badFields, header: false });
        
        // Check if the bad input file exists to add headers if it's the first run
        if (!fs.existsSync(badInputFilePath)) {
            fs.writeFileSync(badInputFilePath, badFields.join(',') + '\n');
        }
        fs.appendFileSync(badInputFilePath, badCsvData + '\n');
        console.log('Bad input CSV file saved to', badInputFilePath);
    });
