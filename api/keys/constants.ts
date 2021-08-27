export const PERSITIANCE_KEY: string = "tally-vault"

export enum HD_PATHS {
  Ethereum: "m’/44’/60’/0’/0",
  Ethereum_Classic: "m’/44’/61’/0’/0",
  Ethereum_Testnet_Ropsten: "m’/44’/1’/0’/0",
}

export const LOCKED_ERROR: string = "Can not preform key operations while locked"
export const NO_VAULT_ERROR: string =
  "Must first create a vault or import keys to do any key operations"
