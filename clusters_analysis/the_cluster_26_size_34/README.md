As you can see from the cluster_26_size_34_aptos_bridge_data.csv file, all of the Aptos transactions occurred on Arbitrum network:

Start: 2023-09-16 12:20:02.000 (https://arbiscan.io/tx/0x4f9bc99d913ad07552c49aeecc443a06ff0cac0e0d3093aba01a9cf023df834e)

Finish: 2023-09-16 13:40:27.000 (https://arbiscan.io/tx/0xc023ecdcbde0044d7144e4c86239195e9a25b2945058317b3e5dd71c43810a87)

All the Aptos transactions occurred within: 1 hours, 20 minutes


Our custom similarity software pointed out that all wallets in this cluster (34/34) on Eth called such functions as:

- 0x1249c58b, on date: 2023-06-04, called 0x932261f9fc8da46c4a22e31b45c4de60623848bf

And on Arbitrum:

- 0x656f3d64, on date: 2023-09-16, called 0x53b08dbd70327b7ba3b7886fc9987bc985d27262
- 0xca23bb4c, on date: 2023-09-16, called LayerZero: Aptos Token Bridge
- 0x4ae67c59, on date: 2023-10-07, called 0x7a08b29a7ad4a19a5eca0c82f5f082872488d135
- 0x4002a9a6, on date: 2023-10-07, called 0x7a08b29a7ad4a19a5eca0c82f5f082872488d135
- 0x2e4dbe8f, on date: 2023-10-29, called 0x9e6ef7f75ad88d4edb4c9925c94b769c5b0d6281
- 0xd0e30db0, on date: 2023-11-04, called Wrapped Ether (WETH)
- 0x095ea7b3, on date: 2023-11-04, called Wrapped Ether (WETH)
- 0x095ea7b3, on date: 2023-11-04, called Arbitrum Foundation: ARB Token
- 0x2e4dbe8f, on date: 2023-11-12, called 0x9e6ef7f75ad88d4edb4c9925c94b769c5b0d6281
- 0x00000000, on date: 2023-11-14, called 0x00000000000000adc04c56bf30ac9d3c0aaf14dc
- 0xa9059cbb, on date: 2023-11-16, called Arbitrum Foundation: ARB Token
- 0x95f38e77, on date: 2023-11-18, called 0x072b65f891b1a389539e921bdb9427af41a7b1f7
- 0x2e4dbe8f, on date: 2023-11-19, called 0x9e6ef7f75ad88d4edb4c9925c94b769c5b0d6281
- 0x39509351, on date: 2023-11-24, called handleAUD (fxAUD)
- 0x877c7b8a, on date: 2023-11-24, called 0x434b5245f6fe54d0c9f881d55c2ba27fe7132d89
- 0x4f6970d9, on date: 2023-11-24, called 0x434b5245f6fe54d0c9f881d55c2ba27fe7132d89
- 0xa9059cbb, on date: 2023-11-24, called handleAUD (fxAUD)
- 0x2646478b, on date: 2023-11-25, called 0x09bd2a33c47746ff03b86bce4e885d03c74a8e8c
- 0x2e4dbe8f, on date: 2023-12-03, called 0x9e6ef7f75ad88d4edb4c9925c94b769c5b0d6281
- 0x415565b0, on date: 2024-05-21, called 0x: Exchange Proxy
(These transaction data is in cluster_26_onchain_data.csv file)


Fantom network looks identical, with 0.2 FTM deposit on 01/20/24 and 5 useless swaps with low value using 0x protocol:

<img width="733" alt="Screenshot 2024-05-29 at 12 54 29 AM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/aeeddb3e-f956-45ef-b996-f61bdb928173">
<img width="784" alt="Screenshot 2024-05-29 at 12 54 35 AM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/b279af3d-f353-45e9-b2c8-57681fac2eda">
<img width="840" alt="Screenshot 2024-05-29 at 12 54 40 AM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/2f6ca1d8-2435-4236-9f17-b90c2af916e5">
<img width="831" alt="Screenshot 2024-05-29 at 12 54 47 AM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/784b8988-734c-4d0a-8510-a935c8700906">

Also a similar thing occurs on Arbitrum network:
<img width="737" alt="Screenshot 2024-05-29 at 12 56 07 AM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/5bba0251-48f2-4d34-97fb-3141d641b6d2">
<img width="683" alt="Screenshot 2024-05-29 at 12 56 12 AM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/bf320fb2-54ea-4366-8a36-ecb97e38a500">
<img width="689" alt="Screenshot 2024-05-29 at 12 56 25 AM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/ddaa67e2-5e77-487d-bdd1-67f9fb3701f0">
