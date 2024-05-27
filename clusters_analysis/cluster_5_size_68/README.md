r

As you can see from the cluster_5_size_68_aptos_bridge_data.csv file, all the Aptos transactions occured on Optimism network:

Again we see the pattern of 12 wallets calling on 06-29 and the rest on 07-03

Let’s also look at the onchain transactions:

<img width="757" alt="Screenshot 2024-05-27 at 4 33 01 PM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/f332b07c-b328-4f1d-942f-fde8e6531313">
<img width="680" alt="Screenshot 2024-05-27 at 4 33 15 PM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/a9e04cb1-26df-4e1f-87fe-8ecfa113fe99">
<img width="726" alt="Screenshot 2024-05-27 at 4 33 22 PM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/f7f3c187-37c3-45e6-86d0-6bf3c7b816af">
<img width="733" alt="Screenshot 2024-05-27 at 4 33 28 PM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/86b3a0a0-f8fb-4d88-bd9a-4346b68bebc3">

 Our custom similarity software pointed out that all wallets in this cluster (68/68) on Polygon called such functions as:

- 0x5154c0b4, on date: 2023-07-16, called 0xa184998ec58dc1da77a1f9f1e361541257a50cf4
(All transaction data is in cluster_5_onchain_data.csv)


Manual Analysis:

Avalanche again looks identical to clusters 2, 3 and 4, and just like someone is farming volume by bridging 5k$ value of MIM. We also see debank showing the creation date of 372 days ago (as of May 27) on all wallets, which is also similar to clusters 2, 3 and 4.


Given all of the above, similarity to clusters 2, 3, 4 and the clustering by same Aptos wallet receiver method, we are 100% sure this indeed is a sybil cluster of 68 wallets.

