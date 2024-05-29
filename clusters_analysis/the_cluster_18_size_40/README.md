As you can see from the cluster_18_size_40_aptos_bridge_data.csv file, all of the Aptos transactions occurred on Arbitrum network:

Start: 2023-09-16 20:32:58.000 (https://arbiscan.io/tx/0x38414e979b22e7c8096ecbd3839016ac72bcb19708f3ea48f64a31443137aef0)

Finish: 2023-09-16 21:56:12.000 (https://arbiscan.io/tx/0x3524dbb03946ed0064ffae8024b9009ea4fb6e7964f6f216c4352976d38d7f2f)

All the Aptos transactions occurred within: 1 hours, 23 minutes

Our custom similarity software pointed out that all wallets in this cluster (40/40) on eth called such functions as:

- 0x1249c58b, on date: 2023-06-04, called 0x932261f9fc8da46c4a22e31b45c4de60623848bf
(These transaction data is in cluster_18_onchain_data.csv file)
Our custom similarity software pointed out that all wallets in this cluster (40/40) on arbitrum called such functions as:

- 0xca23bb4c, on date: 2023-09-16, called LayerZero: Aptos Token Bridge
- 0x656f3d64, on date: 2023-09-16, called 0x53b08dbd70327b7ba3b7886fc9987bc985d27262
- 0x2e4dbe8f, on date: 2023-10-29, called 0x9e6ef7f75ad88d4edb4c9925c94b769c5b0d6281
- 0xd0e30db0, on date: 2023-11-04, called Wrapped Ether (WETH)
- 0x095ea7b3, on date: 2023-11-04, called Wrapped Ether (WETH)
- 0x2e4dbe8f, on date: 2023-11-05, called 0x9e6ef7f75ad88d4edb4c9925c94b769c5b0d6281
- 0x2e4dbe8f, on date: 2023-11-12, called 0x9e6ef7f75ad88d4edb4c9925c94b769c5b0d6281
- 0x00000000, on date: 2023-11-14, called 0x00000000000000adc04c56bf30ac9d3c0aaf14dc
- 0x95f38e77, on date: 2023-11-18, called 0x072b65f891b1a389539e921bdb9427af41a7b1f7
- 0x2e4dbe8f, on date: 2023-11-19, called 0x9e6ef7f75ad88d4edb4c9925c94b769c5b0d6281
- 0x39509351, on date: 2023-11-24, called handleAUD (fxAUD)
- 0x877c7b8a, on date: 2023-11-24, called 0x434b5245f6fe54d0c9f881d55c2ba27fe7132d89
- 0x4f6970d9, on date: 2023-11-24, called 0x434b5245f6fe54d0c9f881d55c2ba27fe7132d89
- 0xa9059cbb, on date: 2023-11-24, called handleAUD (fxAUD)
- 0x2646478b, on date: 2023-11-25, called 0x09bd2a33c47746ff03b86bce4e885d03c74a8e8c
- 0x2e4dbe8f, on date: 2023-11-26, called 0x9e6ef7f75ad88d4edb4c9925c94b769c5b0d6281
- 0x4c674c2d, on date: 2023-11-28, called 0x1e0e556b7f310c320ba22b5dec0a0755c1c9854b
- 0x2e4dbe8f, on date: 2023-12-03, called 0x9e6ef7f75ad88d4edb4c9925c94b769c5b0d6281
- 0xd0e30db0, on date: 2024-02-24, called Wrapped Ether (WETH)
(These transaction data is in cluster_18_onchain_data.csv file)


<img width="775" alt="Screenshot 2024-05-28 at 11 29 28 PM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/1398a31a-cbad-450f-837e-67c3eb3d317d">
<img width="799" alt="Screenshot 2024-05-28 at 11 29 33 PM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/395caeb2-2590-42d7-bd3c-44be15be0582">
<img width="750" alt="Screenshot 2024-05-28 at 11 29 41 PM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/75fea9ba-79ea-438d-bf76-48c048bc0c41">
<img width="794" alt="Screenshot 2024-05-28 at 11 29 54 PM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/bc2ec267-74c9-4ad8-8ca6-cf75e072a707">

Spam of ETH wrappings in PolygonZkevm and Arbitrum Nova (05/23 and 05/27 accordingly) also confirms that this cluster is indeed sybil.
