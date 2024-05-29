As you can see from the cluster_43_size_20_aptos_bridge_data.csv file, all of the Aptos transactions occurred on Arbitrum network:

Start: 2023-04-17 07:48:25.000 (https://arbiscan.io/tx/0x55ca76518ac19c48b1632c2933d5107114540fa1955d808abd013eacb653601a)

Finish: 2023-04-21 05:45:34.000 (https://arbiscan.io/tx/0x4c530ee9ac65ebd4c588d7f950c823de95da1d7c73e6a930f731bcda22de3812)

All the Aptos transactions occurred within: 3 days, 21 hours, 57 minutes

Our custom similarity software pointed out that EVERY wallet in this cluster (20/20) with the SAME DATE on arbitrum called such functions as:

- 0x1114cd2a, on date: 2023-05-28, called Stargate: Router ETH
- 0x1114cd2a, on date: 2023-09-28, called Stargate: Router ETH

And on Polygon:

- 0x095ea7b3, on date: 2023-04-21, called USD Coin (PoS) (USDC)
- 0x9fbf10fc, on date: 2023-04-21, called 0x45a01e4e04f14f7a4a6702c74187c5f6222033cd
- 0x87b21efc, on date: 2023-04-21, called 0x45a01e4e04f14f7a4a6702c74187c5f6222033cd
- 0xc4de93a5, on date: 2023-04-21, called 0x45a01e4e04f14f7a4a6702c74187c5f6222033cd
- 0xa9059cbb, on date: 2023-04-21, called USD Coin (PoS) (USDC)
(These transaction data is in cluster_43_onchain_data.csv file)

Also, we see identical creation date on Debank - 408 days (as of May 29). Arbitrum activity also looks similar:
<img width="768" alt="Screenshot 2024-05-29 at 5 39 58 AM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/b5024dcf-1fe2-49d3-acfc-42bbac7e8cf0">
<img width="724" alt="Screenshot 2024-05-29 at 5 40 05 AM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/254eda03-b10e-40a5-a060-92467cf806a5">
<img width="770" alt="Screenshot 2024-05-29 at 5 40 11 AM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/25c7887c-bc96-4729-bc0c-d7a0893be690">
<img width="745" alt="Screenshot 2024-05-29 at 5 40 24 AM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/056bc28c-6d2f-4f6b-aa5f-a60fae8f1355">
