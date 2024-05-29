As you can see from the cluster_36_size_22_aptos_bridge_data.csv file, all of the Aptos transactions occurred on Optimism network:

Start: 2022-12-13 11:27:28.000 (https://optimistic.etherscan.io/tx/0x2964abce8cbb8ecfa826d85a5a942be97f61624e9e483c06bc127e67fbf13b95)

Finish: 2022-12-19 15:22:53.000 (https://optimistic.etherscan.io/tx/0x4ab8245f3878165f2c69431440211f1c089c9f5a15fb773e464de590c95eba04)

All the Aptos transactions occurred within: 6 days, 3 hours, 55 minutes

Our custom similarity software pointed out that all wallets in this cluster (22/22) on Eth called such functions as:

- 0x, on date: 2023-06-08, called 0x05daed7f6f2100ae4412846dcfb681328644694f

And on Optimism:

- 0x98a6e993, on date: 2023-02-24, called 0xe22fd22b3fc0ecd5217d2461d15159a7dfc38790
- 0x06e75722, on date: 2023-03-04, called 0xedd118e091eee0e7fa9eeb9b4db717518f56cb15
- 0x40c10f19, on date: 2023-05-14, called 0x6a886c76693ed6f4319a289e3fe2e670b803a2da
- 0xfa2b068f, on date: 2023-06-13, called 0x04ba6cf3c5aa6d4946f5b7f7adf111012a9fac65
- 0xb3b34f99, on date: 2023-06-14, called 0x1a36729fc276c3649da2cf1eb986d7dabd5d5d99
- 0xefef39a1, on date: 2023-06-15, called 0x8c531f965c05fab8135d951e2ad0ad75cf3405a2
- 0x095ea7b3, on date: 2023-07-08, called Stargate: StargateToken (STG)
- 0x65fc3873, on date: 2023-07-08, called 0x43d2761ed16c89a2c4342e2b16a3c61ccf88f05b
- 0x1249c58b, on date: 2023-07-20, called 0x101010101716d0e465906f2d6f7e6565a9ee372b
- 0x3d13f874, on date: 2023-09-02, called 0x727a2f78669f765dd3a721a8d6a2467b68ba7e8e
- 0xe5585666, on date: 2023-09-14, called 0xd85b5e176a30edd1915d6728faebd25669b60d8b
- 0x, on date: 2023-09-22, called 0xa9211fe7eebdfbee9df433f58423697719ebd8db
- 0x88720467, on date: 2024-02-08, called 0xaf667811a7edcd5b0066cd4ca0da51637db76d09
(These transaction data is in cluster_36_onchain_data.csv file)


Along with Debank's creation date being 535-536 days on all the wallets we see similar transactions in Arbitrum:

<img width="815" alt="Screenshot 2024-05-29 at 3 58 57 AM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/c6688c5f-d72c-4c00-a9f7-7e3e63934ed8">
<img width="748" alt="Screenshot 2024-05-29 at 3 59 27 AM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/29748ff8-c7bd-43fb-a0a9-4db0ded728b1">
<img width="707" alt="Screenshot 2024-05-29 at 3 59 37 AM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/ee5d647f-2020-4a4a-9f53-f8887d210b3c">
<img width="712" alt="Screenshot 2024-05-29 at 3 59 45 AM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/5bb1105f-3948-4161-af68-57425270ff31">

05/11, 04/21 - are the recurring dates with around 1$ values in all these transactions.

Thus, it shows that these wallets are indeed sybils
