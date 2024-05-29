As you can see from the cluster_45_size_20_aptos_bridge_data.csv file, all of the Aptos transactions occurred on Avalanche network (and last one on arbitrum):

Start: 2023-07-22 12:54:36.000 (https://snowtrace.io/tx/0x99e8f17ec60b72bf8e4c3b8724a71c755b868fbab1124d906751f8b62e95f815)

Finish: 2023-07-22 14:34:21.000 (https://arbiscan.io/tx/0x90990007f0afba76f33fff3accf9b0a865ca8da8bdf65c4a7e1f943f59b78cf4)

All the Aptos transactions occurred within: 1 hours, 39 minutes

Our custom similarity software pointed out that EVERY wallet in this cluster (20/20) with the SAME DATE on bsc called such functions as:

- 0x095ea7b3, on date: 2023-07-22, called 0x03ff0ff224f904be3118461335064bb48df47938
- 0x51905636, on date: 2023-07-22, called 0x2332137ae0386783ffbcf40d9f17e50890917e15
- 0x3f6dc453, on date: 2023-08-02, called 0xca8adc41e14509157e1038d9c6e2d3c2480e706b

And on Arbitrum:

- 0x2e15238c, on date: 2023-07-22, called Stargate: Bridge
- 0x095ea7b3, on date: 2023-07-22, called Stargate: Bridge
- 0x65fc3873, on date: 2023-07-22, called Stargate: VotingEscrow
- 0x3593564c, on date: 2023-07-24, called 0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad
- 0x1249c58b, on date: 2023-07-24, called Merkly: Merkly ONFT (MERK)
- 0x51905636, on date: 2023-07-24, called Merkly: Merkly ONFT (MERK)
- 0x2e15238c, on date: 2023-07-26, called Stargate: Bridge
(These transaction data is in cluster_45_onchain_data.csv file)


These similarities, and identical Aptos receiver address are the main reasons why we beleive this cluster is controlled by 1 person
