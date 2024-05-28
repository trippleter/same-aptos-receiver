As you can see from the cluster_14_size_45_aptos_bridge_data.csv file, all of the Aptos transactions occurred on Polygon network:

Start: 2023-12-16 09:35:18.000 (https://polygonscan.com/tx/0x2961c6854d35695cdea2738190daa7e5372e3653f51949a5448533b58f35f108)

Finish: 2023-12-19 12:18:17.000 (https://polygonscan.com/tx/0x4c3c5058beee5616084cfaed53e40826378cd5c2578aba1707876a97e2541722)

All the Aptos transactions occurred within: 3 days, 2 hours, 42 minutes

<img width="991" alt="Screenshot 2024-05-28 at 10 52 25" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/019eba7f-0065-4424-947f-116bf9ad1cbc">
<img width="981" alt="Screenshot 2024-05-28 at 10 52 39" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/50cbc4c3-8267-4c65-9ca1-b6ee42355611">
<img width="984" alt="Screenshot 2024-05-28 at 10 52 56" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/c14b9edc-5f2c-4ac8-bd86-c8f9ced2fbd2">


Our custom similarity software pointed out that all wallets in this cluster (50/50) on Eth called such functions as:

- 0x095ea7b3, on date: 2023-12-31, called swETH (swETH)
- 0xe7a050aa, on date: 2023-12-31, called 0x858646372cc42e1a627fce94aa7a7033e7cf075a
- 0x9a15bf92, on date: 2024-05-11, called 0x035bdaeab85e47710c27eda7fd754ba80ad4ad02
- 0x095ea7b3, on date: 2024-05-11, called 0xec53bf9167f50cdeb3ae105f56099aaab9061f83
- 0x33404396, on date: 2024-05-25, called 0x39053d51b77dc0d36036fc1fcc8cb819df8ef37a

And on Arbitrum:

- 0x656f3d64, on date: 2023-09-17, called 0x53b08dbd70327b7ba3b7886fc9987bc985d27262
- 0xca23bb4c, on date: 2023-09-17, called LayerZero: Aptos Token Bridge
- 0xa22cb465, on date: 2023-10-07, called 0xaccfe9be818697597d816802ce53a404d7d8800b
- 0x095ea7b3, on date: 2023-11-11, called 0xaf88d065e77c8cc2239327c5edb3a432268e5831
- 0xf305d719, on date: 2023-11-11, called 0x530476d5583724a89c8841eb6da76e7af4c0f17e
- 0x2e4dbe8f, on date: 2023-11-12, called 0x9e6ef7f75ad88d4edb4c9925c94b769c5b0d6281
- 0x95f38e77, on date: 2023-11-18, called 0x072b65f891b1a389539e921bdb9427af41a7b1f7
- 0x2e4dbe8f, on date: 2023-11-19, called 0x9e6ef7f75ad88d4edb4c9925c94b769c5b0d6281
- 0x2e4dbe8f, on date: 2023-11-26, called 0x9e6ef7f75ad88d4edb4c9925c94b769c5b0d6281
- 0x2e4dbe8f, on date: 2023-12-03, called 0x9e6ef7f75ad88d4edb4c9925c94b769c5b0d6281
- 0xd0e30db0, on date: 2024-02-24, called Wrapped Ether (WETH)
- 0x415565b0, on date: 2024-05-18, called 0x: Exchange Proxy
(These transaction data is in cluster_11_onchain_data.csv file)
