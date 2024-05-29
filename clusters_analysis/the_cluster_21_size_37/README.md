As you can see from the cluster_21_size_37_aptos_bridge_data.csv file, all of the Aptos transactions occurred on Arbitrum network:

Start: 2023-09-16 09:16:19.000 (https://arbiscan.io/tx/0x88ff02f27b8dc9c5a97cff29baa47d6454b83f3783a1c7ea14792f502e0c16d3)

Finish: 2023-09-16 10:13:36.000 (https://arbiscan.io/tx/0xce0aa2bf814e5f105772e894eb21fefc31a0f815d71a78b7a0b068602f7488eb)

All the Aptos transactions occurred within: 0 hours, 57 minutes

Our custom similarity software pointed out that all wallets in this cluster (37/37) on Eth called such functions as:

- 0x1249c58b, on date: 2023-06-03, called 0x932261f9fc8da46c4a22e31b45c4de60623848bf
- 0xd85d3d27, on date: 2023-08-26, called 0x8d0802559775c70fb505f22988a4fd4a4f6d3b62

And on Arbitrum:

- 0xca23bb4c, on date: 2023-09-16, called LayerZero: Aptos Token Bridge
- 0x4ae67c59, on date: 2023-10-07, called 0x7a08b29a7ad4a19a5eca0c82f5f082872488d135
- 0x4002a9a6, on date: 2023-10-07, called 0x7a08b29a7ad4a19a5eca0c82f5f082872488d135
- 0xd0e30db0, on date: 2023-11-04, called Wrapped Ether (WETH)
- 0x095ea7b3, on date: 2023-11-04, called Wrapped Ether (WETH)
- 0x095ea7b3, on date: 2023-11-04, called Arbitrum Foundation: ARB Token
- 0x2e4dbe8f, on date: 2023-11-05, called 0x9e6ef7f75ad88d4edb4c9925c94b769c5b0d6281
- 0x301a3720, on date: 2023-11-11, called 0xe05dd51e4eb5636f4f0e8e7fbe82ea31a2ecef16
- 0x095ea7b3, on date: 2023-11-11, called 0xaf88d065e77c8cc2239327c5edb3a432268e5831
- 0xf305d719, on date: 2023-11-11, called 0x530476d5583724a89c8841eb6da76e7af4c0f17e
- 0x00000000, on date: 2023-11-14, called 0x00000000000000adc04c56bf30ac9d3c0aaf14dc
- 0xa9059cbb, on date: 2023-11-18, called Arbitrum Foundation: ARB Token
- 0x2e4dbe8f, on date: 2023-11-19, called 0x9e6ef7f75ad88d4edb4c9925c94b769c5b0d6281
- 0xa9059cbb, on date: 2023-11-24, called handleAUD (fxAUD)
- 0x2646478b, on date: 2023-11-25, called 0x09bd2a33c47746ff03b86bce4e885d03c74a8e8c
- 0x2e4dbe8f, on date: 2023-12-03, called 0x9e6ef7f75ad88d4edb4c9925c94b769c5b0d6281
- 0xd0e30db0, on date: 2024-02-24, called Wrapped Ether (WETH)
- 0x415565b0, on date: 2024-05-18, called 0x: Exchange Proxy
(These transaction data is in cluster_21_onchain_data.csv file)

<img width="738" alt="Screenshot 2024-05-28 at 11 48 44 PM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/7571dd52-2ba1-45be-9482-18b2dbcd0271">
<img width="731" alt="Screenshot 2024-05-28 at 11 48 55 PM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/99dd814d-3c67-41c8-92aa-215ff970fc1b">

<img width="867" alt="Screenshot 2024-05-28 at 11 49 09 PM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/8ad41fe1-d6ba-4882-856d-fde342ecea78">

We have already seen such a cluster with farming LPT token swaps and wrapping a couple of wei on Arbitrum network, so this cluster can easily be considered sybil.


