As you can see from the cluster_30_size_32_aptos_bridge_data.csv file, all of the Aptos transactions occurred on Arbitrum network:

Most of these wallets had a difference of 3 hours, 22 minutes between their txs:
Start: 2023-04-15 08:32:37.000 (https://arbiscan.io/tx/0x7d0f648cdbf1c3f29324b5af155b59ef2f3958db4f6f947bcbd7211a8fe3d2ec)

Finish: 2023-04-15 11:55:09.000 (https://arbiscan.io/tx/0xf5341006b3f476d1ea15e79496f3a9203bffe4029b9249642474def04129d0de)

However, there were 2 wallets that made a tx on 2023-05-27.

Our custom similarity software pointed out that all wallets in this cluster (32/32) on Eth called such functions as:

- 0x9f3ce55a, on date: 2023-08-26, called 0xd19d4b5d358258f05d7b411e21a1460d11b0876f
(All transaction data is in cluster_30_onchain_data.csv)

Arbitrum chain has identical transactions on 07/21 and 08/15:

<img width="732" alt="Screenshot 2024-05-29 at 1 14 31 AM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/bce520e8-206a-4985-ba21-e78d3d9db65f">
<img width="714" alt="Screenshot 2024-05-29 at 1 14 40 AM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/e3a35220-5e2b-46f4-b78e-efc9768e57be">
<img width="720" alt="Screenshot 2024-05-29 at 1 14 51 AM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/3e733a85-daf5-476e-bcc1-469b2dded5f1">
<img width="650" alt="Screenshot 2024-05-29 at 1 15 00 AM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/396114e2-6c16-4718-8941-6c8da96bb27b">


Looking at Avalanche we also see clear sybils:
<img width="813" alt="Screenshot 2024-05-29 at 1 16 22 AM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/d486350c-cd33-44d2-8663-bc62721c4183">
<img width="767" alt="Screenshot 2024-05-29 at 1 16 44 AM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/e1eb8b1a-527a-45a2-8c51-b1fbe7cff5d1">
<img width="761" alt="Screenshot 2024-05-29 at 1 16 52 AM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/e23291d2-c2b7-49a8-884c-6d1c8da70a96">


Based on these similarities and same Aptos receiver address it is obvious that this cluster of wallets is indeed controlled by 1 person
