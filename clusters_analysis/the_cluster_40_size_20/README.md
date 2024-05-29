As you can see from the cluster_40_size_20_aptos_bridge_data.csv file, all of the Aptos transactions (except first wallet) occurred on Polygon network:

Start: 2023-03-30 21:39:05.000 (https://polygonscan.com/tx/0x466841ab2371e0afee401e20b74d44eccb4b34654cb00988b87f3b139c12dea6)

Finish: 2023-04-02 01:02:10.000 (https://polygonscan.com/tx/0x92387dd591b079f89dc849d513a592dfce4a9805a76b1bdff0c234259fd32cba)

All the Aptos transactions occurred within: 2 days, 3 hours, 23 minutes

0x7649da75071d982bcd10c6f1183df07f84f67750 made a tx 4 days earlier - 2023-03-26 on optimism (but the recepient is still the same as in all other wallets of the cluster)
0x7649 is the main wallet of the cluster. This is obvious when we look at the scroll network:
<img width="1018" alt="Screenshot 2024-05-29 at 5 11 14 AM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/6adfe899-3b03-4d34-bf21-4852db301571">

This is the screenshot from its Debank page, the thing is that he didn't initiate these transactions, he was a 'referer' encoded in function arguments in order to save some money while minting those NFTs from other wallets in the cluster (as we see a part of ETH was refunded to him, but also binded the cluster to his main wallet)
<img width="748" alt="Screenshot 2024-05-29 at 5 14 26 AM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/3e1b5b8e-526a-44ab-a7ac-20cb393adedc">
an example of such a transaction, where we see a wallet in our cluster and a referer being 0x7649

In fact there are more than 20 wallets in his cluster, however, in order to keep this report based on only 1 method let's not include them.
