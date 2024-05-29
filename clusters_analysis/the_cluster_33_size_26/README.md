Our custom similarity software pointed out that all wallets in this cluster (26/26) on Polygon called such functions as:

- 0x32accbb9, on date: 2024-03-03, called 0x222228060e7efbb1d78bb5d454581910e3922222
(All transaction data is in cluster_33_onchain_data.csv)

This cluster is probably the most unintuitive at first glance because the owner randomized transactions and chains. However, as stated at the beginning, they called a gas refuel at the same date on Polygon chain.
But there is an even more obvious move that clusterizes all these wallets:

Look at the Kava network on all these wallets, especially on timestamps:
<img width="750" alt="Screenshot 2024-05-29 at 3 44 05 AM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/bf3dbc36-0c00-4fcd-b575-addb60e10d73">
<img width="804" alt="Screenshot 2024-05-29 at 3 44 13 AM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/e7653e00-0cab-4e9a-8582-a94a24c89cb4">
<img width="724" alt="Screenshot 2024-05-29 at 3 44 27 AM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/cf3c4867-9a98-4f2a-a992-6e9ecffc51fa">
<img width="759" alt="Screenshot 2024-05-29 at 3 44 39 AM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/a1ed1ff8-5e93-4249-abbb-69cbd80b893f">
<img width="807" alt="Screenshot 2024-05-29 at 3 44 49 AM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/f90b5e6a-7ac0-4745-b3af-cdf2ed4934db">

Even if we neglect the weirdly small amount in USDT, look at the dates: 02/01, 01/21, 10/25-10/31. These are the recurring dates on most of the wallets, and these receives look just like if you wanted to farm the message count. 

Considering this and that these all wallets sent funds to the same aptos wallet - 0x440ee30dd8b70e3eb8d665b6e6c1b1ae92f0fceccf9e0d6dc58dfb936bc24015. We beleive that this cluster is controlled by a smart sybil operator, that probably does everything by hands in order to randomize the behaviour and do everything on different days
