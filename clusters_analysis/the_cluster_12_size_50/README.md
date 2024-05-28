As you can see from the cluster_12_size_50_aptos_bridge_data.csv file, all of the Aptos transactions occurred on Arbitrum network:

Start: 2023-09-19 12:03:47.000 (https://arbiscan.io/tx/0xf9191bb00eb47db046ecb9708cf0e727fe7b8631308350ee5dafb90ba3ad669e)

Finish: 2023-09-19 15:32:07.000 (https://arbiscan.io/tx/0x20bd699135d2159481d9ce0454edc7c81820f6efbe123c6f484ea859da8ede60)

All the Aptos transactions occurred within: 3 hours, 28 minutes


Let's look at Base Chain behaviour:

![image](https://s3.us-east-1.amazonaws.com/assets.commonwealth.im/acd025f9-1aac-49cb-914f-de2c86941522.1716934450829)

![image](https://s3.us-east-1.amazonaws.com/assets.commonwealth.im/7ed7c546-3445-4bb2-b291-1e83fa9c3606.1716934464052)

![image](https://s3.us-east-1.amazonaws.com/assets.commonwealth.im/f2f4b0b0-3443-45d9-923f-0eab05e8aef8.1716934473396)


We see some spam transactions on every wallet, also dates are identical (at the end of November 2023, they wrap ETH multiple times to farm nonce, and on december 2023 (17 and 23) perform identical transfers and mints).

Also BNB Chain behaviour looks identical:

![image](https://s3.us-east-1.amazonaws.com/assets.commonwealth.im/f12478fd-f682-4d9c-a558-07bbd265cd76.1716934363863)

![image](https://s3.us-east-1.amazonaws.com/assets.commonwealth.im/5d8e9a44-1710-4837-bc1b-08361a5ee62f.1716934371459)

![image](https://s3.us-east-1.amazonaws.com/assets.commonwealth.im/77b69bce-b7f8-455b-bdbe-65038bb5c3fa.1716934381646)



Receive a tiny amount for gas and claim something.


Moreover, our custom similarity software pointed out that all wallets in this cluster (50/50) on Ethereum called such functions as:

- 0x1249c58b, on date: 2023-06-03, called 0x932261f9fc8da46c4a22e31b45c4de60623848bf
- 0xd85d3d27, on date: 2023-08-26, called 0x8d0802559775c70fb505f22988a4fd4a4f6d3b62

And on Bsc:

- 0xdf6e943b, on date: 2023-06-16, called 0x807f16eba4a2c51b86cb8ec8be8eab34305c2bfd
(These transaction data is in cluster_12_onchain_data.csv file)
