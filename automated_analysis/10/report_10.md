As you can see from the cluster_10_size_25_aptos_bridge_data.csv file, all of the Aptos transactions occurred on Arbitrum network:

Start: 2023-04-30 21:46:58.000 (https://arbiscan.io/tx/0x7a5ab346cc590bc294c74168b5452554b8419778f6f8b2db2c158785e41eb771)

Finish: 2023-05-01 00:53:44.000 (https://arbiscan.io/tx/0xc7def1c976a43751546045ef7a2f2b362f3cac520801c02586d51f33b98af029)

All the Aptos transactions occurred within: 3 hours, 6 minutes

Our custom similarity software pointed out that EVERY wallet in this cluster (25/25) with the SAME DATE on optimism called such functions as:

- 0x9fbf10fc, on date: 2023-05-21, called 0xb0d502e938ed5f4df2e681fe6e419ff29631d62b
- 0xa9059cbb, on date: 2023-05-21, called 0x7f5c764cbc14f9669b88837ca1490cca17c31607
- 0x1114cd2a, on date: 2023-06-09, called 0xb49c4e680174e331cb0a7ff3ab58afc9738d5f8b

And on Arbitrum:

- 0x, on date: 2022-09-17, called 0x9b8956ab562269305c5df3a1d52df36f100964c9
(These transaction data is in cluster_10_onchain_data.csv file)
