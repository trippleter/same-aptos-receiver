
As you can see from the cluster_9_size_50_aptos_bridge_data.csv file, 100% of the Aptos transactions occured on Arbitrum network within 1 day:

Start - 2023-09-18 13:29:19.000 (https://arbiscan.io/tx/0x02e037e57caf8c07957b6522a9d3de2839c65fc681623d4943165577441b1e6a)

End - 2023-09-19 12:01:02.000 (https://arbiscan.io/tx/0xcb0acd322115ac040163ee6d84b2ff11cacb67567833502cd6bb00b49d2d6223)

Our custom similarity software pointed out that all wallets in this cluster (50/50) on Ethereum called such functions as:

- 0x1249c58b, on date: 2023-06-03, called 0x932261f9fc8da46c4a22e31b45c4de60623848bf
- 0xd85d3d27, on date: 2023-08-26, called 0x8d0802559775c70fb505f22988a4fd4a4f6d3b62

And on Polygon:

- 0xb760faf9, on date: 2023-07-30, called 0xcd97405fb58e94954e825e46db192b916a45d412
- 0x12aa3caf, on date: 2023-08-25, called 0x1111111254eeb25477b68fb85ed929f73a960582
- 0x095ea7b3, on date: 2023-08-25, called agEUR (agEUR)
- 0xeed33cef, on date: 2023-08-25, called 0x0c1ebbb61374da1a8c57cb6681bf27178360d36f
- 0xeed33cef, on date: 2023-09-04, called 0x0c1ebbb61374da1a8c57cb6681bf27178360d36f
- 0x5f575529, on date: 2024-02-07, called Metamask: Swap Router
(These transaction data is in cluster_9_onchain_data.csv file)


Given same-day tx execution in most of the transactions on Polygon, less than 24 hours between all the aptos messages and the clustering by same Aptos wallet receiver method, we are 100% sure this indeed is a sybil cluster of 50 wallets.
