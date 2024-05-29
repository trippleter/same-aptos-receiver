As you can see from the cluster_44_size_20_aptos_bridge_data.csv file, all of the Aptos transactions occurred on Arbitrum network:

Start: 2023-04-27 13:31:44.000 (https://arbiscan.io/tx/0xf27f3100d5c102923620669dcbac55c9aa3c558e33b37b6387d05a612a03ad96)

Finish: 2023-04-27 13:59:15.000 (https://arbiscan.io/tx/0x03ec018e522166b03efa60302f1fa4b48ad44652da87a624c92677d5b2ad3dbf)

All the Aptos transactions occurred within: 0 hours, 27 minutes

Our custom similarity software pointed out that EVERY wallet in this cluster (20/20) with the SAME DATE on optimism called such functions as:

- 0x1114cd2a, on date: 2024-03-10, called 0xb49c4e680174e331cb0a7ff3ab58afc9738d5f8b

And on Arbitrum:

- 0x3593564c, on date: 2023-03-26, called 0x4c60051384bd2d3c01bfc845cf5f4b44bcbe9de5
- 0xf6303ef5, on date: 2023-04-17, called 0x7c20acfd25467de0b92d03e4c4d304f18b8408e1
- 0x095ea7b3, on date: 2023-04-17, called 0x09e18590e8f76b6cf471b3cd75fe1a1a9d2b2c2b
- 0xf6303ef5, on date: 2023-04-23, called 0x21a2f6a0d2156bb069b3062e249072cec2da9320
- 0xca23bb4c, on date: 2023-04-27, called LayerZero: Aptos Token Bridge
- 0xae30f6ee, on date: 2023-04-27, called 0x0a9f824c05a74f577a536a8a0c673183a872dff4
- 0x00000184, on date: 2024-01-20, called Socket: Socket Gateway
(These transaction data is in cluster_44_onchain_data.csv file)
