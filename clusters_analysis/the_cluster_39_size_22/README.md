As you can see from the cluster_39_size_22_aptos_bridge_data.csv file, most of the Aptos transactions occurred on Ethereum network with a difference of only 12 minutes:

Start: 2022-11-01 07:14:23.000 (https://etherscan.io/tx/0x558ffbf4188483068de0acf712095cc3438bbd984d03381134082c850238627f)

Finish: 2022-11-01 07:26:59.000 (https://etherscan.io/tx/0x4210b9ff17a665833ada109917a789ce4e76bd961db3e0a9bbd6a597ecd34cd7)

However, there are these 2 wallets that made a tx on Arbitrum (0xad62b6d9967b94ca6810b9256928fb249f8d4007) and Avax (0x5e3ae137d9efc0bea056a32ebe8ec4b7fb060a00) 
They look like main wallets of this cluster, since they both have an NFT avatar on Debank, and the later one has a WEB3 id that costs 100$. 
However, this is obvious that these wallets are connected to the cluster due to a disperse transaction:
https://etherscan.io/tx/0x212b9efcdb5cd53584f38859f92606dc9a6a2af973dfba0cf0488bac528594eb - 0x5e3 sent funds to 20/22 wallets of the cluster in 1 tx. And also by looking at MEXC deposit on Avax on 11/29/23 with a difference of 3 minutes we can understand 0x5e3 and 0xad6 are connected

Also, if we take a look only at the other than the 2 main wallets, we see absolutely identical trnasacitons on all of the networks, Avalanche:

<img width="701" alt="Screenshot 2024-05-29 at 4 45 48 AM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/6e5086b3-195a-4d54-856c-cf092acbe3b8">
<img width="734" alt="Screenshot 2024-05-29 at 4 45 57 AM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/a1c92f3d-19f5-4d98-a729-48a03e1e18b2">
<img width="743" alt="Screenshot 2024-05-29 at 4 46 15 AM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/78430b83-f320-4f4c-ba5b-2acc754d512c">

Ethereum:
<img width="788" alt="Screenshot 2024-05-29 at 4 51 07 AM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/bc09d158-3a1d-43d1-b5fd-96379ddcbdd0">
<img width="730" alt="Screenshot 2024-05-29 at 4 51 30 AM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/1c0a4dbd-dbe6-4650-be63-623737c41083">
<img width="750" alt="Screenshot 2024-05-29 at 4 51 48 AM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/ab2b06b3-d191-4f69-8375-2764cea7a722">

Our custom similarity software pointed out that EVERY wallet in this cluster (22/22) with the SAME DATE on polygon called such functions as:

- 0x5f575529, on date: 2022-11-17, called Metamask: Swap Router
(All transaction data is in cluster_39_onchain_data.csv)
This function above includes the 2 main wallets with the whole cluster

So, relying on the disperse transaction, similarity in all the activity and same Aptos receiver, we can conclude these wallets are 100% sybil and are controlled by the same person.
