from brownie import accounts, KudoCoin, config


initial_supply = 1000000000000000000000  # 1000
token_name = "KudoCoin"
token_symbol = "DEV"


def main():
    account = accounts.add(config["wallets"]["from_key"])
    erc20 = KudoCoin.deploy(
        initial_supply, token_name, token_symbol, {"from": account}, publish_source=True
    )