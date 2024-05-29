As you can see from the cluster_22_size_36_aptos_bridge_data.csv file, all of the Aptos transactions occurred on Arbitrum network:

Start: 2023-09-16 10:15:06.000 (https://arbiscan.io/tx/0x54352f2eb40a0ade899d517589ff79f803f162fd012a34ad1b8614e854e4adb1)

Finish: 2023-09-16 10:49:25.000 (https://arbiscan.io/tx/0xbbb722902902a6f104092817f56cdd4d911260e3c797d3c65dd28b857640e563)

All the Aptos transactions occurred within: 0 hours, 34 minutes


Our custom similarity software pointed out that all wallets in this cluster (36/36) on Eth called such functions as:

- 0x1249c58b, on date: 2023-06-04, called 0x932261f9fc8da46c4a22e31b45c4de60623848bf
- 0xd85d3d27, on date: 2023-08-26, called 0x8d0802559775c70fb505f22988a4fd4a4f6d3b62

And on Arbitrum:

- 0xca23bb4c, on date: 2023-09-16, called LayerZero: Aptos Token Bridge
- 0x4ae67c59, on date: 2023-10-07, called 0x7a08b29a7ad4a19a5eca0c82f5f082872488d135
- 0x4002a9a6, on date: 2023-10-07, called 0x7a08b29a7ad4a19a5eca0c82f5f082872488d135
- 0xa22cb465, on date: 2023-10-07, called 0xf899e65254d8723b9bc8dbd87758cf8090fdbad4
- 0x3593564c, on date: 2023-10-28, called 0xec8b0f7ffe3ae75d7ffab09429e3675bb63503e4
- 0x2e4dbe8f, on date: 2023-10-29, called 0x9e6ef7f75ad88d4edb4c9925c94b769c5b0d6281
- 0xd0e30db0, on date: 2023-11-04, called Wrapped Ether (WETH)
- 0x095ea7b3, on date: 2023-11-04, called Wrapped Ether (WETH)
- 0x095ea7b3, on date: 2023-11-04, called Arbitrum Foundation: ARB Token
- 0x301a3720, on date: 2023-11-11, called 0xe05dd51e4eb5636f4f0e8e7fbe82ea31a2ecef16
- 0x095ea7b3, on date: 2023-11-11, called 0xaf88d065e77c8cc2239327c5edb3a432268e5831
- 0xf305d719, on date: 2023-11-11, called 0x530476d5583724a89c8841eb6da76e7af4c0f17e
- 0x2e4dbe8f, on date: 2023-11-12, called 0x9e6ef7f75ad88d4edb4c9925c94b769c5b0d6281
- 0x00000000, on date: 2023-11-14, called 0x00000000000000adc04c56bf30ac9d3c0aaf14dc
- 0x95f38e77, on date: 2023-11-18, called 0x072b65f891b1a389539e921bdb9427af41a7b1f7
- 0x2e4dbe8f, on date: 2023-11-19, called 0x9e6ef7f75ad88d4edb4c9925c94b769c5b0d6281
- 0x39509351, on date: 2023-11-24, called handleAUD (fxAUD)
- 0x877c7b8a, on date: 2023-11-24, called 0x434b5245f6fe54d0c9f881d55c2ba27fe7132d89
- 0x4f6970d9, on date: 2023-11-24, called 0x434b5245f6fe54d0c9f881d55c2ba27fe7132d89
- 0x2646478b, on date: 2023-11-25, called 0x09bd2a33c47746ff03b86bce4e885d03c74a8e8c
- 0x2e4dbe8f, on date: 2023-11-26, called 0x9e6ef7f75ad88d4edb4c9925c94b769c5b0d6281
- 0x4c674c2d, on date: 2023-11-28, called 0x1e0e556b7f310c320ba22b5dec0a0755c1c9854b
- 0x2e4dbe8f, on date: 2023-12-03, called 0x9e6ef7f75ad88d4edb4c9925c94b769c5b0d6281
- 0xd0e30db0, on date: 2024-02-24, called Wrapped Ether (WETH)
- 0x415565b0, on date: 2024-05-20, called 0x: Exchange Proxy
(These transaction data is in cluster_22_onchain_data.csv file)

Here we see a lot of similar spam tranasactions on Arbitrum network (including pendle and wrapping of ETH with tiny amounts)
<img width="753" alt="Screenshot 2024-05-29 at 12 09 32 AM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/c04d0ef1-7c9c-4ff3-b3e9-cdc78384eb2a">
<img width="756" alt="Screenshot 2024-05-29 at 12 09 43 AM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/733e7375-96c5-4cc8-a11a-b6d1a5085802">
<img width="752" alt="Screenshot 2024-05-29 at 12 09 55 AM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/16b042de-1437-4c38-9259-020bca89d224">
<img width="771" alt="Screenshot 2024-05-29 at 12 10 18 AM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/aa873b16-c37c-4749-9023-42c2498d9c5d">


Ethereum network also looks like one of the clusters we analyzed above:
<img width="740" alt="Screenshot 2024-05-29 at 12 19 50 AM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/e069c1ff-5da8-4445-9763-ee0ef6cd78a6">
<img width="945" alt="Screenshot 2024-05-29 at 12 19 58 AM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/b8734034-20b0-48e3-89b4-be70dced72ad">

Thus, these wallets are sybils
