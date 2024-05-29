As you can see from the cluster_13_size_49_aptos_bridge_data.csv file, all of the Aptos transactions occurred on Arbitrum network:

Start: 2023-09-17 12:56:25.000 (https://arbiscan.io/tx/0xc05aa3c44399638b2b8f46e87f2a0e1f4ee2c7055506af3d47f5e4885dba355c)

Finish: 2023-09-17 13:47:30.000 (https://arbiscan.io/tx/0x92a4594173e4d17f34e49512f7138b1944bd72b911e19313dd5a60faf99bf7d9)

All the Aptos transactions occurred within: 0 hours, 51 minutes

Our custom similarity software pointed out that all wallets in this cluster (49/49) on Eth called such functions as:

- 0xd85d3d27, on date: 2023-08-26, called 0x8d0802559775c70fb505f22988a4fd4a4f6d3b62

And on Arbitrum:

- 0x656f3d64, on date: 2023-09-17, called 0x53b08dbd70327b7ba3b7886fc9987bc985d27262
- 0xca23bb4c, on date: 2023-09-17, called LayerZero: Aptos Token Bridge
- 0x4ae67c59, on date: 2023-10-06, called 0x7a08b29a7ad4a19a5eca0c82f5f082872488d135
- 0x4002a9a6, on date: 2023-10-06, called 0x7a08b29a7ad4a19a5eca0c82f5f082872488d135
- 0x2e4dbe8f, on date: 2023-10-22, called 0x9e6ef7f75ad88d4edb4c9925c94b769c5b0d6281
- 0x2e4dbe8f, on date: 2023-10-29, called 0x9e6ef7f75ad88d4edb4c9925c94b769c5b0d6281
- 0x2e4dbe8f, on date: 2023-11-12, called 0x9e6ef7f75ad88d4edb4c9925c94b769c5b0d6281
- 0x00000000, on date: 2023-11-14, called 0x00000000000000adc04c56bf30ac9d3c0aaf14dc
- 0x3ce33bff, on date: 2023-11-15, called 0x23981fc34e69eedfe2bd9a0a9fcb0719fe09dbfc
- 0x95f38e77, on date: 2023-11-18, called 0x072b65f891b1a389539e921bdb9427af41a7b1f7
- 0x2e4dbe8f, on date: 2023-11-19, called 0x9e6ef7f75ad88d4edb4c9925c94b769c5b0d6281
- 0x877c7b8a, on date: 2023-11-24, called 0x434b5245f6fe54d0c9f881d55c2ba27fe7132d89
- 0x4f6970d9, on date: 2023-11-24, called 0x434b5245f6fe54d0c9f881d55c2ba27fe7132d89
- 0x2646478b, on date: 2023-11-25, called 0x09bd2a33c47746ff03b86bce4e885d03c74a8e8c
- 0x2e4dbe8f, on date: 2023-11-26, called 0x9e6ef7f75ad88d4edb4c9925c94b769c5b0d6281
- 0x4c674c2d, on date: 2023-11-28, called 0x1e0e556b7f310c320ba22b5dec0a0755c1c9854b
- 0x415565b0, on date: 2024-05-22, called 0x: Exchange Proxy
(These transaction data is in cluster_13_onchain_data.csv file)


Manual Analysis:
<img width="993" alt="Screenshot 2024-05-28 at 10 10 08 PM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/7d1daadb-ebab-45ad-b68c-23cf09a3e2cf">
<img width="997" alt="Screenshot 2024-05-28 at 10 10 16 PM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/63f14f91-070e-4260-8373-1c1a35349278">
<img width="1003" alt="Screenshot 2024-05-28 at 10 10 49 PM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/a1e52979-1eba-4786-96bb-51669c4333c1">
<img width="969" alt="Screenshot 2024-05-28 at 10 10 57 PM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/ab171b80-0f69-431d-8f04-f71de9059943">

Looking at the Ethereum activity of all wallets, it is obvious, that this is an actual cluster. Same days in different months, and same activity (mint Zerion NFT - 06/04/23, mint Eigen world 08/26/23, Zaphrodite NFT - 05/25/24) 

Also, other chains look identical, Arbitrum: 
<img width="729" alt="Screenshot 2024-05-28 at 10 13 36 PM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/13c498a1-de66-48e9-a9c1-8f62762e994e">
<img width="759" alt="Screenshot 2024-05-28 at 10 13 46 PM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/a58e6f21-fb73-4b6e-90a2-5d8ff2fcad84">
<img width="779" alt="Screenshot 2024-05-28 at 10 14 11 PM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/c025a3ac-2053-479e-b786-1997f2f5c89e">

Given all that, and initial Aptos receiver clustering method, and 51 minutes difference between those Aptos bridges, there is no doubt this is indeed a cluster of sybils.
