
As you can see from the cluster_3_size_68_aptos_bridge_data.csv file, all the Aptos transactions occured on Optimism network:

All wallets called their Aptos message on 07-03, within an hour:

Start: 2023-07-03 09:57:09.000

(https://optimistic.etherscan.io/tx/0x76a04b9a19f8e1498567ae42c118f4371377a9aff9ce68a5f6eb64f4a0502fff)

Finish: 2023-07-03 10:44:47.000

(https://optimistic.etherscan.io/tx/0xcccf21a36a8f6b804ce5aa6067438e1f65a23cd4e964db30ab5d2bf6b4df9613)

While analyzing more onchain behaviour of these wallets, we understood this cluster actually belongs to the cluster #2 owner (or has been made by the same bot):

<img width="731" alt="Screenshot 2024-05-27 at 3 49 44 PM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/23aab7ef-ac0a-468b-a845-e6a594280f9a">
<img width="699" alt="Screenshot 2024-05-27 at 3 49 56 PM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/5e2dde85-08da-4a8b-ad89-0d378c00900c">
<img width="709" alt="Screenshot 2024-05-27 at 3 50 06 PM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/94496474-17cb-4617-874b-ae9c4f8a966d">
<img width="691" alt="Screenshot 2024-05-27 at 3 50 42 PM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/4e8af8fa-7fe6-41d3-a2d5-203bd1903015">

Just look at the 06/16 and 06/17 transactions (this is Avalanche chain). Also, the amounts are obviously to farm some volume.
 Our custom similarity software pointed out that all wallets in this cluster (68/68) on Polygon called such functions as:

- 0x095ea7b3, on date: 2023-06-27, called USD Coin (PoS) (USDC)
- 0x9fbf10fc, on date: 2023-06-27, called 0x45a01e4e04f14f7a4a6702c74187c5f6222033cd  and on Optimism such functions as:

- 0xca23bb4c, on date: 2023-07-03, called LayerZero: Token Bridge
(All transaction data is in cluster_3_onchain_data.csv)

Manual Analysis:

Debank shows the creation date of 372 days ago (as of May 27) on all wallets. Also, Harmony network shows a ton of receives of a unique token - OSEA

<img width="991" alt="Screenshot 2024-05-27 at 3 53 55 PM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/60bec82b-08fd-4258-9e6c-09d7076c4506">
<img width="1001" alt="Screenshot 2024-05-27 at 3 54 07 PM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/c1c09208-b360-49a1-b5b4-e008275cd857">
<img width="992" alt="Screenshot 2024-05-27 at 3 54 14 PM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/8860cb32-496f-4c49-93e8-fde475a4553d">
ps://github.com/trippleter/same-aptos-receiver/assets/169191457/90a255c4-b6fb-4475-b043-29e948805799">


Given all of the above and the clustering by same Aptos wallet receiver method, we are 100% sure this indeed is a sybil cluster of 68 wallets.
