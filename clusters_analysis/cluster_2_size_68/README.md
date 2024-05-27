
As you can see from the cluster_2_size_68_aptos_bridge_data.csv file, all the Aptos transactions occured on Optimism network. Looking at the timestamps - we see 2 sub-clusters:

12 wallets sent a message on 06-29, and the rest on 07-02, which is still pretty similar (just a 3 day difference)

Let's analyze more onchain behaviour of these wallets:

<img width="977" alt="Screenshot 2024-05-27 at 3 29 57 PM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/d477866e-6be6-43af-a614-86d5a5389556">
<img width="1035" alt="Screenshot 2024-05-27 at 3 30 03 PM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/8578d855-0ae2-4851-b9c0-b64abe9b92ef">
<img width="1035" alt="Screenshot 2024-05-27 at 3 30 11 PM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/3b49829b-bc83-40e9-894f-71bd132cca03">
<img width="1065" alt="Screenshot 2024-05-27 at 3 30 19 PM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/c32ff1b4-964c-48f2-9899-015fdbc3b68c">

 Our custom similarity software pointed out that all wallets in this cluster (68/68) on Arbitrum called such functions as:

- 0xae30f6ee, on date: 2023-06-12, called 0x0a9f824c05a74f577a536a8a0c673183a872dff4

and on Polygon such functions as:

- 0x5154c0b4, on date: 2023-07-16, called 0xa184998ec58dc1da77a1f9f1e361541257a50cf4
(These transaction data is in cluster_2_onchain_data.csv)

Manual Analysis:

Debank shows the creation date of 369 days ago (as of May 27) on all wallets. Arbitrum network is absolutely identical: receive a total of 1$ in ETH in 2 txs, then call testate bridge on 06-12. Notice the balances are also similar - around 10$ on each account.

Avalanche network activity is also identical: 
Receive under 5$ in USDC and some AVAX for gas. Then make some LayerZero volume on Abracadbra. 

<img width="990" alt="Screenshot 2024-05-27 at 3 34 38 PM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/ab150d9e-5a6e-4aa5-a5b1-62c1d0235de4">
<img width="966" alt="Screenshot 2024-05-27 at 3 34 47 PM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/d023b571-cd95-4835-8f90-76828d313ca4">
<img width="769" alt="Screenshot 2024-05-27 at 3 34 55 PM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/4be3078f-c818-47f5-9ac2-72e708fa4e38">
<img width="777" alt="Screenshot 2024-05-27 at 3 35 01 PM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/90a255c4-b6fb-4475-b043-29e948805799">


Given all of the above and the clustering by same Aptos wallet receiver method, we are 100% sure this indeed is a sybil cluster of 68 wallets.
