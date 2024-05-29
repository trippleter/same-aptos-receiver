As you can see from the cluster_11_size_21_aptos_bridge_data.csv file, all of the Aptos transactions occurred on Arbitrum network:

Start: 2023-04-26 07:42:47.000 (https://arbiscan.io/tx/0xf73a4c99a545a77b9333bc22041aa75ad3c308f411f01efce4c83dd886090df9)

Finish: 2023-04-26 11:32:40.000 (https://arbiscan.io/tx/0x5621cd8f783d0820b88bc3e1aecca954c3d863f6a9cef23ca13f3db5afb0bdcc)

All the Aptos transactions occurred within: 3 hours, 49 minutes

Our custom similarity software pointed out that EVERY wallet in this cluster (21/21) with the SAME DATE on arbitrum called such functions as:

- 0x1114cd2a, on date: 2023-03-31, called Stargate: Router ETH
- 0x1114cd2a, on date: 2023-04-26, called Stargate: Router ETH
- 0xca23bb4c, on date: 2023-04-26, called LayerZero: Aptos Token Bridge
(All transaction data is in cluster_11_onchain_data.csv)
