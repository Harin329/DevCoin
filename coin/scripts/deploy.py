from brownie import accounts, DevCoin, config


initial_supply = 1000000000000000000000  # 1000
token_name = "DevCoin"
token_symbol = "DEV"


def main():
    account = accounts.add(config["wallets"]["from_key"])
    erc20 = DevCoin.deploy(
        initial_supply, token_name, token_symbol, {"from": account}, publish_source=True
    )