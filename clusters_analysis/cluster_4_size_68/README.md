As you can see from the cluster_4_size_68_aptos_bridge_data.csv file, all the Aptos transactions occured on Optimism network:

We can see that all transactions occurred within 1 hour:

Start: 2023-07-03 09:57:09.000
(https://optimistic.etherscan.io/tx/0x65dd95e5079d7b0740bbc98901c0aa72efef2c6ae59ba7bb475a6b7ddd845108)

Finish: 2023-07-03 10:44:49.000
(https://optimistic.etherscan.io/tx/0xbc2def536ab0e86ea1c333bd3468e6fdd310c700a16047324eb07592dd4153c9)

Let’s also look at the Avalanche transactions of this cluster:

<img width="767" alt="Screenshot 2024-05-27 at 4 41 13 PM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/9b9225fa-a5fb-4a5d-8389-c67b8fed8685">
<img width="791" alt="Screenshot 2024-05-27 at 4 41 24 PM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/39a4ea4a-cc16-422a-bc86-4bfaa157f45f">
<img width="777" alt="Screenshot 2024-05-27 at 4 41 33 PM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/746d7f19-5386-4791-9bc7-4536026f3263">
<img width="748" alt="Screenshot 2024-05-27 at 4 41 40 PM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/f3b4a92d-9931-44a0-bb4a-e9fefa86bfb7">


 Our custom similarity software pointed out that all wallets in this cluster (68/68) on Optimism called such functions as:

- 0xca23bb4c, on date: 2023-07-03, called LayerZero: Token Bridge

And on Polygon chain:

- 0x5154c0b4, on date: 2023-07-16, called 0xa184998ec58dc1da77a1f9f1e361541257a50cf4

(These transaction data is in cluster_4_onchain_data.csv file)


Manual Analysis:

Avalanche again looks identical to clusters 2 and 3, and just like someone is farming volume by bridging 5k$ value of MIM. We also see debank showing the creation date of 371 days ago (as of May 27) on all wallets, which is also similar to clusters 2 and 3. Transaction timestamps are alike as well.


Given all of the above, similarity to clusters 2, 3 and the clustering by same Aptos wallet receiver method, we are 100% sure this indeed is a sybil cluster of 68 wallets.
