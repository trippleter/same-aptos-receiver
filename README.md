# Cluster analysis by same Aptos receiver address

This repository is an add-on to our report about clustering wallets based on the Aptos receiver 


Primary proof - all the EVM wallets in this report sent funds to the same Aptos receiver

Secondary proof - we checked the timestamps of Aptos bridging transactions, if they were close, it is a mostly solid evidence that the cluster is indeed sybil

Third proof - using software and hands we looked at the similarity of the wallets in the cluster, which could easily strengthen the first 2 statements


**Clusters_analysis** directory contains an indepth analysis of all of the clusters of this report

**Automated_analysis** directory contains some more clusters that we weren't able to review manually on time, but we still wanted to include them, so we wrote a software to show some similairties and their united Aptos receiver

**Code** directory contains most of the code used during the analysis and clustering

Reward Address: 0x4D045AC57CE2B85438740CDFfCa65b60fdae7128
