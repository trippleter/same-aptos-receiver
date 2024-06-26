As you can see from the cluster_1_size_92_aptos_bridge_data.csv file, all the Aptos transactions occured on Arbitrum network. Looking at the timestamps - we see a 100% similarity:

First wallet sent Aptos bridge tx on: 2022-11-03 12:15:29.000 (https://arbiscan.io/tx/0xeea37e87e7e706bb0261333d5531cb0b969478476e2d4af8bb7f20470f753eb8)

Last  wallet sent Aptos bridge tx on: 2022-11-03 14:56:45.000 (https://arbiscan.io/tx/0x828932a9762b44d4a0a3bc0b78dd1e8080cb2944901bd35244e348be1808a7db)

This is only 2.5 hour difference, which makes it absolutely obvious that the cluster is sybil, however, let's go even further and analyse their onchain behaviour:

<img width="959" alt="Screenshot 2024-05-27 at 12 16 01 PM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/24587759-1be8-481b-af2f-2eb28eaa9d5c">
<img width="1005" alt="Screenshot 2024-05-27 at 12 16 31 PM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/e79bca0d-44c7-40e1-a97d-7d0dc86b9fe0">
<img width="970" alt="Screenshot 2024-05-27 at 12 16 47 PM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/6ea50f22-3790-4ab4-b2c1-303c8318fce1">
<img width="988" alt="Screenshot 2024-05-27 at 12 18 13 PM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/dc19f876-112d-4368-9166-4ec40fce9bab">

 Our custom similarity software pointed out that all wallets in this cluster (92/92) on Arbitrum called such functions as:
 
- 0x5ae401dc, on date: 2022-10-25, called Uniswap V3: Router 2
- 0x095ea7b3, on date: 2022-10-25, called USD Coin (Arb1) (USDC)
- 0x9fbf10fc, on date: 2022-10-25, called Stargate: Router
- 0x095ea7b3, on date: 2022-11-03, called USD Coin (Arb1) (USDC)
- 0x76a9099a, on date: 2022-11-03, called LayerZero: Aptos Token Bridge
(All transaction data is in cluster_1_onchain_data.csv)

Manual Analysis:

Also, by looking at the dates of each transaction on Arbitrum network (different days and months, but always same date on each wallet), similar transaction amounts (0.03 ETH received on 2023/05/17-2023/05/18), use of Huobi in every wallet, 0 organic transactions (only airdrop farming/claiming), and same creation date shown by Debank (590 days as of May 27), and putting the clustering by same Aptos wallet receiver method, we are 100% sure this indeed is a sybil cluster of 92 wallets.
