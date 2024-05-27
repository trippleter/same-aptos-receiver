As you can see from the cluster_6_size_57_aptos_bridge_data.csv file, all the Aptos transactions occured on Arbitrum network:

We can see that all transactions occurred within 2 days (2023-04-16 15:53:14.000 - 2023-04-18 17:51:34.000):

At first glance we see a lot of similar deposit-to-aevo transactions with really low value. 

<img width="691" alt="Screenshot 2024-05-27 at 6 20 08 PM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/b98e64d5-49fc-4484-b373-bd6c2a0ba3c0">
<img width="702" alt="Screenshot 2024-05-27 at 6 20 14 PM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/182b8d18-6b6a-4bae-9b64-eba2e5b2e14d">
<img width="698" alt="Screenshot 2024-05-27 at 6 20 26 PM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/70ff0b91-11a4-48f5-bf82-14238ca5e712">

 
However, there is an even more obvious point that tells us that the accounts are controlled by 1 person: Last wallet - 0xe5bfcb21e1e63de3c01622fac16b68630aa22955 directly sent 0.02 JOE to every wallet in the cluster:

<img width="785" alt="Screenshot 2024-05-27 at 6 23 15 PM" src="https://github.com/trippleter/same-aptos-receiver/assets/169191457/dcd1e937-da12-4e85-b648-0f1b0cb369dc">

Given the direct link of this cluster and the clustering by same Aptos wallet receiver method, we are 100% sure this indeed is a sybil cluster of 68 wallets.
