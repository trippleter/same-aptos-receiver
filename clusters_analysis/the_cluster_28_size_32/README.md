As you can see from the cluster_28_size_32_aptos_bridge_data.csv file, all of the Aptos transactions occurred on Optimism network:

Start: 2022-12-26 03:39:31.000 (https://optimistic.etherscan.io/tx/0x5531ebf144fa19aea85e359197a5dee62cbd9b630850f4e78f3285f72f5925aa)

Finish: 2023-01-06 13:02:18.000 (https://optimistic.etherscan.io/tx/0x7a88447895c5f4d859067bb8fff525003a841ee7bb8930f7f492f64f8097034d)

All the Aptos transactions occurred within: 11 days, 9 hours, 22 minutes

Our custom similarity software pointed out that all wallets in this cluster (32/32) on Optimism called such functions as:

- 0x40c10f19, on date: 2023-05-14, called 0x6a886c76693ed6f4319a289e3fe2e670b803a2da
- 0xfa2b068f, on date: 2023-06-13, called 0x04ba6cf3c5aa6d4946f5b7f7adf111012a9fac65
- 0xb3b34f99, on date: 2023-06-14, called 0x1a36729fc276c3649da2cf1eb986d7dabd5d5d99
- 0xefef39a1, on date: 2023-06-15, called 0x8c531f965c05fab8135d951e2ad0ad75cf3405a2
- 0x095ea7b3, on date: 2023-07-08, called Stargate: StargateToken (STG)
- 0x65fc3873, on date: 2023-07-08, called 0x43d2761ed16c89a2c4342e2b16a3c61ccf88f05b
- 0xefef39a1, on date: 2023-08-10, called 0x3b2d8bb062d121619acff4e01ece2690789e919f
- 0x88720467, on date: 2024-02-08, called 0xaf667811a7edcd5b0066cd4ca0da51637db76d09
(All transaction data is in cluster_28_onchain_data.csv)


Arbitrum shows identical transactions, OSAK, TROVE and <1 USDC occur on every wallet:
<img width="742" alt="Screenshot 2024-05-29 at 1 05 27 AM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/32572685-7946-4270-9638-a01b5a51ce97">
<img width="782" alt="Screenshot 2024-05-29 at 1 05 32 AM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/568016fe-ffa9-4207-89d9-73d6a0cad5c0">
<img width="730" alt="Screenshot 2024-05-29 at 1 05 41 AM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/306c12cb-e0df-4460-87f7-31f39e21e977">
<img width="793" alt="Screenshot 2024-05-29 at 1 06 04 AM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/ffc67784-ea01-41c4-bc46-e840223c0d02">

Based on these proofs, this is obviously a cluster of sybil wallets
