This repo is our main work, we analyzed every cluster first using similarity software, and then checked all the wallets manually in order to be certain that these clusters actually belong to 1 entity

Even though our main argument to all of these clusters is that they sent an Aptos bridge transactions to the same Aptos receiver, it was crucial to strengthen this argument by looking at the onchain behaviour of the wallets, and noticing alike patterns.

There are 3 files inside each cluster's:

cluster_X_size_Y_aptos_bridge_data.csv - shows the justification of why each cluster is formed that way. The format is SENDER_WALLET,APTOS_WALLET,TX_HASH,NETWORK,SOURCE_TIMESTAMP_UTC,CLUSTER_NUMBER,CLUSTER_SIZE. From this, we see that all of the SENDER_WALLETs (sybils) send a message to Aptos, with receiver being the same APTOS_WALLET in the whole cluster. 
The way to verify this is to paste TX_HASH into the explorer of the NETWORK and decode input data to see who the receiver is 
