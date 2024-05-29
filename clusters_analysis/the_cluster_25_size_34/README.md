As you can see from the cluster_25_size_34_aptos_bridge_data.csv file, all of the Aptos transactions occurred on Arbitrum network:

Start: 2023-05-20 18:32:07.000 (https://arbiscan.io/tx/0x567ee86fef98d080b843c84eb461373784c1684997791d67979df5ceec276bc9)

Finish: 2023-05-20 19:48:37.000 (https://arbiscan.io/tx/0x478b9b43794f7d09b795a2c3a66b5bfe0b898b60ba7980004bba456634f7f763)

All the Aptos transactions occurred within: 1 hours, 16 minutes


Our custom similarity software pointed out that all wallets in this cluster (34/34) on Bsc called such functions as:

- 0x095ea7b3, on date: 2023-05-23, called Binance-Peg BSC-USD (BSC-USD)
- 0x9fbf10fc, on date: 2023-05-23, called 0x4a364f8c717caad9a442737eb7b8a55cc6cf18d8
- 0x695ef6bf, on date: 2023-05-23, called 0xf7de7e8a6bd59ed41a4b5fe50278b3b7f31384df
- 0x819bc4b9, on date: 2023-06-27, called 0x7b2e3fc7510d1a51b3bef735f985446589219354

And on Optimism:

- 0x095ea7b3, on date: 2023-05-23, called 0x7f5c764cbc14f9669b88837ca1490cca17c31607
- 0x9fbf10fc, on date: 2023-05-23, called 0xb0d502e938ed5f4df2e681fe6e419ff29631d62b
(These transaction data is in cluster_25_onchain_data.csv file)

Fantom transactions on 04/13/23 and 05/27/24 occur on all wallets, and look similar with around 26 USDC and 0.2 STG values:
<img width="794" alt="Screenshot 2024-05-29 at 12 52 08 AM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/27720b6c-df5b-4f55-b143-cf916172918a">
<img width="844" alt="Screenshot 2024-05-29 at 12 52 14 AM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/14128016-0d20-4ec4-a7bf-f7fb01f34674">
<img width="777" alt="Screenshot 2024-05-29 at 12 52 20 AM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/b017c7ac-6f64-4701-b776-927f51e3c084">

This is enough to prove these wallets are in a cluster
