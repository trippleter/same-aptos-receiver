As you can see from the cluster_29_size_32_aptos_bridge_data.csv file, all of the Aptos transactions occurred on Arbitrum network:

All the Aptos transactions occurred within: 2 days, 4 hours, 50 minutes ( transactions were made in 2 reps: 2023-04-25 16:13:55.000 - 16:47:46.000 and 2023-04-27 20:40:45.000 - 21:04:26.000) 

This is only 30 minute difference in both of them, so it is obvious, this is a sybil cluster, also:


Our custom similarity software pointed out that all wallets in this cluster (32/32) on Arbitrum called such functions as:

- 0xca23bb4c, on date: 2023-04-25, called LayerZero: Aptos Token Bridge
- 0xca23bb4c, on date: 2023-04-27, called LayerZero: Aptos Token Bridge
(All transaction data is in cluster_29_onchain_data.csv)

100% similarity on Arbitrum chain:
<img width="1033" alt="Screenshot 2024-05-29 at 1 10 27 AM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/76d325f1-8f26-4a63-b346-661897e70c0d">
<img width="752" alt="Screenshot 2024-05-29 at 1 10 34 AM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/2ab98476-17c5-4f11-9520-691ea627d784">
<img width="744" alt="Screenshot 2024-05-29 at 1 10 40 AM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/e4cd635a-a36d-44ab-b823-d47d7cdb65d9">
<img width="728" alt="Screenshot 2024-05-29 at 1 10 46 AM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/a2d85e9e-acc3-4767-81c0-c60abb389e2f">

Which leaves us with no doubt in this cluster
