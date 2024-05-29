As you can see from the cluster_46_size_20_aptos_bridge_data.csv file, all of the Aptos transactions occurred on Ethereum network:

Start: 2022-11-01 06:13:35.000 (https://etherscan.io/tx/0x8cd093853717464384acdd8da33043e117fc04cdd77e61adc96afb8bfcfa2cef)

Finish: 2022-11-01 06:30:23.000 (https://etherscan.io/tx/0xdc7482bafb5d508d8dccd5007eaec2a875af9c654db23b9447a225ec3f66356e)

All the Aptos transactions occurred within: 0 hours, 16 minutes

Our custom similarity software pointed out that EVERY wallet in this cluster (20/20) with the SAME DATE on eth called such functions as:

- 0x439370b1, on date: 2022-10-29, called Arbitrum: Delayed Inbox
- 0xf2c298be, on date: 2022-10-29, called 0x6f922284798de645e8bc1040450d32bde963c992
- 0xca23bb4c, on date: 2022-11-01, called Layer Zero: Aptos Bridge
- 0x5f575529, on date: 2022-11-17, called Metamask: Swap Router

And on Bsc:

- 0x2e7ba6ef, on date: 2023-03-22, called 0x046fcfb05d717851006c0f336d10afa3b7c3f58e
- 0xa9059cbb, on date: 2023-03-22, called SPACE ID (ID)
(These transaction data is in cluster_46_onchain_data.csv file)
