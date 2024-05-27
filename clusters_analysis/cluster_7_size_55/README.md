As you can see from the cluster_7_size_55_aptos_bridge_data.csv file, all the Aptos transactions occured on Optimism network:

We can see that all transactions occurred within 1 hour (2023-06-27 06:42:27.000 - 2023-06-27 07:37:51.000):

A more in-depth analysis of on-chain behaviour (avalanche chain):


<img width="722" alt="Screenshot 2024-05-27 at 6 37 39 PM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/01599579-9c61-4b57-b3ca-351c14ac3ce7">
<img width="1099" alt="Screenshot 2024-05-27 at 6 37 47 PM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/db5e6293-efb1-43ac-8e21-59248a788bad">
<img width="1050" alt="Screenshot 2024-05-27 at 6 37 56 PM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/c4cc1bdd-24d1-43d9-939d-1bd496d4a7b7">
<img width="1010" alt="Screenshot 2024-05-27 at 6 38 04 PM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/1198acb0-bab8-4d24-afd1-8e75b30ce1d3"> 

Our custom similarity software pointed out that all wallets in this cluster (55/55) on Optimism called such functions as:

- 0xca23bb4c, on date: 2023-06-27, called LayerZero: Token Bridge

And on Polygon:

- 0xd6bf315a, on date: 2023-07-09, called 0x51227394cdeb108af1312c9815f399a882172d02

(These transaction data is in cluster_7_onchain_data.csv file)

These wallets are also directly linked through BTC.b transfer transactions. 0x0607e14a9614ab6d5f8ead01c3ca33c08905fd3a this is the distributor. Arbitrum and other networks also look identical (arbitrum: receive <1$ in ETH, then make a testnet bridge on most of the wallets)

Given the direct link of this cluster and the clustering by same Aptos wallet receiver method, we are 100% sure this indeed is a sybil cluster of 55 wallets.
