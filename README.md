# Cluster analysis by same Aptos receiver address

This repository is an add-on to our report about clustering wallets based on the Aptos receiver 


1. Primary proof - all the EVM wallets in this report sent funds to the same Aptos receiver

2. Secondary proof - we checked the timestamps of Aptos bridging transactions, if they were close, it is a mostly solid evidence that the cluster is indeed sybil

3. Third proof - using software and hands we looked at the similarity of the wallets in the cluster, which could easily strengthen the first 2 statements


**Clusters_analysis** directory contains an indepth analysis of all of the clusters of this report

**Automated_analysis** directory contains some more clusters that we weren't able to review manually on time, but we still wanted to include them, so we wrote a software to show some similairties and their united Aptos receiver (they are not included in the full_data and full_list files)

**Code** directory contains most of the code used during the analysis and clustering

**Data:** full_list.txt includes all the wallets from in-depth (manual + software) analysis clusters, full_data.csv includes all the data used to form in-depth analysis cluster in this format: 
SENDER_WALLET,APTOS_WALLET,TX_HASH,NETWORK,SOURCE_TIMESTAMP_UTC,CLUSTER_NUMBER,CLUSTER_SIZE 
and every cluster separated by ,,,,,, line

Report link: https://commonwealth.im/layerzero/discussion/22611-smart-evm-report-using-aptos-receiving-wallets-18k-sybils

Reward Address: 0x4D045AC57CE2B85438740CDFfCa65b60fdae7128
