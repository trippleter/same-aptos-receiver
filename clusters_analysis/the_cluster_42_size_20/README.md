As you can see from the cluster_42_size_20_aptos_bridge_data.csv file, all of the Aptos transactions occurred on Polygon network:

Start: 2024-01-01 02:16:32.000 (https://polygonscan.com/tx/0x68120fe1bef7d5224fc6c6a9b973d3d9ec8455b4c977f11302c0238da857080d)

Finish: 2024-01-01 02:49:24.000 (https://polygonscan.com/tx/0xd49c39b8ace4350254daf5b25b5a96273253d4673deae8f3bdecd763d790226a)

All the Aptos transactions occurred within: 0 hours, 32 minutes

Our custom similarity software pointed out that EVERY wallet in this cluster (20/20) with the SAME DATE on bsc called such functions as:

- 0x095ea7b3, on date: 2024-01-20, called Binance-Peg BSC-USD (BSC-USD)

And on Optimism:

- 0xeedfa7cd, on date: 2024-01-19, called 0x2967e7bb9daa5711ac332caf874bd47ef99b3820
(These transaction data is in cluster_42_onchain_data.csv file)



Optimism transactions are 1:1 in every wallet, and the dates look the same (01/19/24 - 20-30$ ETH deposit, 04/07/24 - 700-800$ deposit from Binance on all wallets):

<img width="717" alt="Screenshot 2024-05-29 at 5 34 41 AM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/7722c6ab-59cb-4cb4-a852-11e1cb1682b0">
<img width="730" alt="Screenshot 2024-05-29 at 5 34 49 AM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/e4e5a9a9-e18c-45f2-9a3b-a9c2fa8dcd77">
<img width="745" alt="Screenshot 2024-05-29 at 5 34 54 AM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/42cddece-ebdb-484e-a869-d69a1dfcb225">
<img width="700" alt="Screenshot 2024-05-29 at 5 34 59 AM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/d2eb18f9-3cf0-42bd-bab8-a668b5299d2a">

Thus, by looking at the evidence above it is obvious - this is a sybil cluster and it is controlled by 1 entity
