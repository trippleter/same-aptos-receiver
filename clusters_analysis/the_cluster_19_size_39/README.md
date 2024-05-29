As you can see from the cluster_19_size_39_aptos_bridge_data.csv file, all of the Aptos transactions occurred on Arbitrum network:

Start: 2023-09-16 10:52:20.000 (https://arbiscan.io/tx/0xadfd7e48d8c34a9c26531a82811b9b9a696547bb25de44c9e4bc3100472ab8cd)

Finish: 2023-09-16 11:49:37.000 (https://arbiscan.io/tx/0xe36123bcc2b2a073ebecce8f25b7925926497528068b5d894651d6ab02d62bd8)

All the Aptos transactions occurred within: 0 hours, 57 minutes

Our custom similarity software pointed out that all wallets in this cluster (39/39) on Eth called such functions as:

- 0x1249c58b, on date: 2023-06-04, called 0x932261f9fc8da46c4a22e31b45c4de60623848bf

And on Arbitrum:

- 0xca23bb4c, on date: 2023-09-16, called LayerZero: Aptos Token Bridge
- 0x656f3d64, on date: 2023-09-16, called 0x53b08dbd70327b7ba3b7886fc9987bc985d27262
- 0x4ae67c59, on date: 2023-10-07, called 0x7a08b29a7ad4a19a5eca0c82f5f082872488d135
- 0x4002a9a6, on date: 2023-10-07, called 0x7a08b29a7ad4a19a5eca0c82f5f082872488d135
- 0xa22cb465, on date: 2023-10-07, called 0xf899e65254d8723b9bc8dbd87758cf8090fdbad4
- 0x3593564c, on date: 2023-10-28, called 0xec8b0f7ffe3ae75d7ffab09429e3675bb63503e4
- 0x2e4dbe8f, on date: 2023-10-29, called 0x9e6ef7f75ad88d4edb4c9925c94b769c5b0d6281
- 0xd0e30db0, on date: 2023-11-04, called Wrapped Ether (WETH)
- 0x095ea7b3, on date: 2023-11-04, called Wrapped Ether (WETH)
- 0x095ea7b3, on date: 2023-11-04, called Arbitrum Foundation: ARB Token
- 0x2e4dbe8f, on date: 2023-11-07, called 0x9e6ef7f75ad88d4edb4c9925c94b769c5b0d6281
- 0x2e4dbe8f, on date: 2023-11-12, called 0x9e6ef7f75ad88d4edb4c9925c94b769c5b0d6281
- 0x00000000, on date: 2023-11-14, called 0x00000000000000adc04c56bf30ac9d3c0aaf14dc
- 0x95f38e77, on date: 2023-11-18, called 0x072b65f891b1a389539e921bdb9427af41a7b1f7
- 0xa9059cbb, on date: 2023-11-18, called Arbitrum Foundation: ARB Token
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
(These transaction data is in cluster_19_onchain_data.csv file)

This guy looks similar to the previous one since he also has these spam of ETH wraps:
<img width="742" alt="Screenshot 2024-05-28 at 11 36 05 PM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/837cea44-c39d-4bbf-a114-23898d474410">
<img width="749" alt="Screenshot 2024-05-28 at 11 36 37 PM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/fe0fbccc-2cde-4581-b8fb-f2fcf961bb5f">
<img width="797" alt="Screenshot 2024-05-28 at 11 36 58 PM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/d4af7cc4-bd25-4116-96ee-40907bf76620">
<img width="821" alt="Screenshot 2024-05-28 at 11 37 14 PM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/f0d604da-89d3-4d23-92c3-47c30383f791">

Thus, there are no doubts these wallets are controlled by the same person.
