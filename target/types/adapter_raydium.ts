export type AdapterRaydium = {
  "version": "0.1.0",
  "name": "adapter_raydium",
  "instructions": [
    {
      "name": "swap",
      "accounts": [
        {
          "name": "gatewayAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "gatewayStateInfo",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "baseProgramId",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "addLiquidity",
      "accounts": [
        {
          "name": "gatewayAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "gatewayStateInfo",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "baseProgramId",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "removeLiquidity",
      "accounts": [
        {
          "name": "gatewayAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "gatewayStateInfo",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "baseProgramId",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "stake",
      "accounts": [
        {
          "name": "gatewayAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "gatewayStateInfo",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "baseProgramId",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "unstake",
      "accounts": [
        {
          "name": "gatewayAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "gatewayStateInfo",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "baseProgramId",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "harvest",
      "accounts": [
        {
          "name": "gatewayAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "gatewayStateInfo",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "baseProgramId",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "types": [
    {
      "name": "SerumMarketStateLayoutV2",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "empty1",
            "type": "u32"
          },
          {
            "name": "empty2",
            "type": "u8"
          },
          {
            "name": "accountFlags",
            "type": "u64"
          },
          {
            "name": "ownAddress",
            "type": "publicKey"
          },
          {
            "name": "vaultSignerNonce",
            "type": "u64"
          },
          {
            "name": "baseMint",
            "type": "publicKey"
          },
          {
            "name": "quoteMint",
            "type": "publicKey"
          },
          {
            "name": "baseVault",
            "type": "publicKey"
          },
          {
            "name": "baseDepositsTotal",
            "type": "u64"
          },
          {
            "name": "baseFeesAccrued",
            "type": "u64"
          },
          {
            "name": "quoteVault",
            "type": "publicKey"
          },
          {
            "name": "quoteDepositsTotal",
            "type": "u64"
          },
          {
            "name": "quoteFeesAccrued",
            "type": "u64"
          },
          {
            "name": "quoteDustThreshold",
            "type": "u64"
          },
          {
            "name": "requestQueue",
            "type": "publicKey"
          },
          {
            "name": "eventQueue",
            "type": "publicKey"
          },
          {
            "name": "bids",
            "type": "publicKey"
          },
          {
            "name": "asks",
            "type": "publicKey"
          },
          {
            "name": "baseLotSize",
            "type": "u64"
          },
          {
            "name": "quoteLotSize",
            "type": "u64"
          },
          {
            "name": "feeRateBps",
            "type": "u64"
          },
          {
            "name": "referrerRebatesAccrued",
            "type": "u64"
          },
          {
            "name": "empty3",
            "type": "u32"
          },
          {
            "name": "empty4",
            "type": "u16"
          },
          {
            "name": "empty5",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "SerumOpenOrdersLayoutV2",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "empty1",
            "type": "u32"
          },
          {
            "name": "empty2",
            "type": "u8"
          },
          {
            "name": "accountFlags",
            "type": "u64"
          },
          {
            "name": "market",
            "type": "publicKey"
          },
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "baseTokenFree",
            "type": "u64"
          },
          {
            "name": "baseTokenTotal",
            "type": "u64"
          },
          {
            "name": "quoteTokenFree",
            "type": "u64"
          },
          {
            "name": "quoteTokenTotal",
            "type": "u64"
          },
          {
            "name": "freeSlotBits",
            "type": "u128"
          },
          {
            "name": "isBidBits",
            "type": "u128"
          }
        ]
      }
    },
    {
      "name": "GetRaydiumLpPriceWrapper",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "coinBalance",
            "type": "u64"
          },
          {
            "name": "pcBalance",
            "type": "u64"
          },
          {
            "name": "coinToPcPrice",
            "type": "f64"
          },
          {
            "name": "pcToCoinPrice",
            "type": "f64"
          },
          {
            "name": "lpAmount",
            "type": "f64"
          }
        ]
      }
    },
    {
      "name": "RaydiumStakeInfoLayoutV4",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "discriminator",
            "type": "u64"
          },
          {
            "name": "state",
            "type": "u64"
          },
          {
            "name": "nonce",
            "type": "u64"
          },
          {
            "name": "poolLpTokenAccount",
            "type": "publicKey"
          },
          {
            "name": "poolRewardTokenAccount",
            "type": "publicKey"
          },
          {
            "name": "totalReward",
            "type": "u64"
          },
          {
            "name": "perShare",
            "type": "u128"
          },
          {
            "name": "perBlock",
            "type": "u64"
          },
          {
            "name": "option",
            "type": "u8"
          },
          {
            "name": "poolRewardTokenAccountB",
            "type": "publicKey"
          },
          {
            "name": "empty1",
            "type": "u32"
          },
          {
            "name": "empty2",
            "type": "u16"
          },
          {
            "name": "empty3",
            "type": "u8"
          },
          {
            "name": "totalRewardB",
            "type": "u64"
          },
          {
            "name": "perShareB",
            "type": "u128"
          },
          {
            "name": "perBlockB",
            "type": "u64"
          },
          {
            "name": "lastBlock",
            "type": "u64"
          },
          {
            "name": "owner",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "PoolLayoutV4",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "status",
            "type": "u64"
          },
          {
            "name": "nonce",
            "type": "u64"
          },
          {
            "name": "orderNum",
            "type": "u64"
          },
          {
            "name": "depth",
            "type": "u64"
          },
          {
            "name": "coinDecimals",
            "type": "u64"
          },
          {
            "name": "pcDecimals",
            "type": "u64"
          },
          {
            "name": "state",
            "type": "u64"
          },
          {
            "name": "resetFlag",
            "type": "u64"
          },
          {
            "name": "minSize",
            "type": "u64"
          },
          {
            "name": "volMaxCutRatio",
            "type": "u64"
          },
          {
            "name": "amountWaveRatio",
            "type": "u64"
          },
          {
            "name": "coinLotSize",
            "type": "u64"
          },
          {
            "name": "pcLotSize",
            "type": "u64"
          },
          {
            "name": "minPriceMultiplier",
            "type": "u64"
          },
          {
            "name": "maxPriceMultiplier",
            "type": "u64"
          },
          {
            "name": "systemDecimalsValue",
            "type": "u64"
          },
          {
            "name": "minSeparateNumerator",
            "type": "u64"
          },
          {
            "name": "minSeparateDenominator",
            "type": "u64"
          },
          {
            "name": "tradeFeeNumerator",
            "type": "u64"
          },
          {
            "name": "tradeFeeDenominator",
            "type": "u64"
          },
          {
            "name": "pnlNumerator",
            "type": "u64"
          },
          {
            "name": "pnlDenominator",
            "type": "u64"
          },
          {
            "name": "swapFeeNumerator",
            "type": "u64"
          },
          {
            "name": "swapFeeDenominator",
            "type": "u64"
          },
          {
            "name": "needTakePnlCoin",
            "type": "u64"
          },
          {
            "name": "needTakePnlPc",
            "type": "u64"
          },
          {
            "name": "totalPnlPc",
            "type": "u64"
          },
          {
            "name": "totalPnlCoin",
            "type": "u64"
          },
          {
            "name": "poolTotalDepositPc",
            "type": "u64"
          },
          {
            "name": "poolTotalDepositCoin",
            "type": "u64"
          },
          {
            "name": "swapCoinInAmount",
            "type": "u64"
          },
          {
            "name": "swapPcOutAmount",
            "type": "u64"
          },
          {
            "name": "swapCoinToPcFee",
            "type": "u64"
          },
          {
            "name": "swapPcInAmount",
            "type": "u64"
          },
          {
            "name": "swapCoinOutAmount",
            "type": "u64"
          },
          {
            "name": "swapPcToCoinFee",
            "type": "u64"
          },
          {
            "name": "poolCoinTokenAccount",
            "type": "publicKey"
          },
          {
            "name": "poolPcTokenAccount",
            "type": "publicKey"
          },
          {
            "name": "coinMintAddress",
            "type": "publicKey"
          },
          {
            "name": "pcMintAddress",
            "type": "publicKey"
          },
          {
            "name": "lpMintAddress",
            "type": "publicKey"
          },
          {
            "name": "ammOpenOrders",
            "type": "publicKey"
          },
          {
            "name": "serumMarket",
            "type": "publicKey"
          },
          {
            "name": "serumProgramId",
            "type": "publicKey"
          },
          {
            "name": "ammTargetOrders",
            "type": "publicKey"
          },
          {
            "name": "poolWithdrawQueue",
            "type": "publicKey"
          },
          {
            "name": "poolTempLpTokenAccount",
            "type": "publicKey"
          },
          {
            "name": "ammOwner",
            "type": "publicKey"
          },
          {
            "name": "pnlOwner",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "SwapResultWrapper",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "outAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "AddLiquidityResultWrapper",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "lpAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "RemoveLiquidityResultWrapper",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "swapInAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "StakeResultWrapper",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "lpAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "UnstakeResultWrapper",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "shareAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "GatewayStateWrapper",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "discriminator",
            "type": "u64"
          },
          {
            "name": "userKey",
            "type": "publicKey"
          },
          {
            "name": "randomSeed",
            "type": "u64"
          },
          {
            "name": "version",
            "type": "u8"
          },
          {
            "name": "currentIndex",
            "type": "u8"
          },
          {
            "name": "queueSize",
            "type": "u8"
          },
          {
            "name": "protocolQueue",
            "type": {
              "array": [
                "u8",
                8
              ]
            }
          },
          {
            "name": "actionQueue",
            "type": {
              "array": [
                "u8",
                8
              ]
            }
          },
          {
            "name": "versionQueue",
            "type": {
              "array": [
                "u8",
                8
              ]
            }
          },
          {
            "name": "payloadQueue",
            "type": {
              "array": [
                "u64",
                8
              ]
            }
          },
          {
            "name": "swapMinOutAmount",
            "type": "u64"
          },
          {
            "name": "poolDirection",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "ZapDirectionP",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "In"
          },
          {
            "name": "Out"
          }
        ]
      }
    },
    {
      "name": "PoolDirectionP",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Obverse"
          },
          {
            "name": "Reverse"
          }
        ]
      }
    },
    {
      "name": "PoolDirection",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Obverse"
          },
          {
            "name": "Reverse"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "UnsupportedPoolDirection",
      "msg": "Unsupported PoolDirection"
    },
    {
      "code": 6001,
      "name": "UnsupportedVersion",
      "msg": "Unsupported Action Version"
    }
  ]
};

export const IDL: AdapterRaydium = {
  "version": "0.1.0",
  "name": "adapter_raydium",
  "instructions": [
    {
      "name": "swap",
      "accounts": [
        {
          "name": "gatewayAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "gatewayStateInfo",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "baseProgramId",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "addLiquidity",
      "accounts": [
        {
          "name": "gatewayAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "gatewayStateInfo",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "baseProgramId",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "removeLiquidity",
      "accounts": [
        {
          "name": "gatewayAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "gatewayStateInfo",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "baseProgramId",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "stake",
      "accounts": [
        {
          "name": "gatewayAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "gatewayStateInfo",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "baseProgramId",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "unstake",
      "accounts": [
        {
          "name": "gatewayAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "gatewayStateInfo",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "baseProgramId",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "harvest",
      "accounts": [
        {
          "name": "gatewayAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "gatewayStateInfo",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "baseProgramId",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "types": [
    {
      "name": "SerumMarketStateLayoutV2",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "empty1",
            "type": "u32"
          },
          {
            "name": "empty2",
            "type": "u8"
          },
          {
            "name": "accountFlags",
            "type": "u64"
          },
          {
            "name": "ownAddress",
            "type": "publicKey"
          },
          {
            "name": "vaultSignerNonce",
            "type": "u64"
          },
          {
            "name": "baseMint",
            "type": "publicKey"
          },
          {
            "name": "quoteMint",
            "type": "publicKey"
          },
          {
            "name": "baseVault",
            "type": "publicKey"
          },
          {
            "name": "baseDepositsTotal",
            "type": "u64"
          },
          {
            "name": "baseFeesAccrued",
            "type": "u64"
          },
          {
            "name": "quoteVault",
            "type": "publicKey"
          },
          {
            "name": "quoteDepositsTotal",
            "type": "u64"
          },
          {
            "name": "quoteFeesAccrued",
            "type": "u64"
          },
          {
            "name": "quoteDustThreshold",
            "type": "u64"
          },
          {
            "name": "requestQueue",
            "type": "publicKey"
          },
          {
            "name": "eventQueue",
            "type": "publicKey"
          },
          {
            "name": "bids",
            "type": "publicKey"
          },
          {
            "name": "asks",
            "type": "publicKey"
          },
          {
            "name": "baseLotSize",
            "type": "u64"
          },
          {
            "name": "quoteLotSize",
            "type": "u64"
          },
          {
            "name": "feeRateBps",
            "type": "u64"
          },
          {
            "name": "referrerRebatesAccrued",
            "type": "u64"
          },
          {
            "name": "empty3",
            "type": "u32"
          },
          {
            "name": "empty4",
            "type": "u16"
          },
          {
            "name": "empty5",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "SerumOpenOrdersLayoutV2",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "empty1",
            "type": "u32"
          },
          {
            "name": "empty2",
            "type": "u8"
          },
          {
            "name": "accountFlags",
            "type": "u64"
          },
          {
            "name": "market",
            "type": "publicKey"
          },
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "baseTokenFree",
            "type": "u64"
          },
          {
            "name": "baseTokenTotal",
            "type": "u64"
          },
          {
            "name": "quoteTokenFree",
            "type": "u64"
          },
          {
            "name": "quoteTokenTotal",
            "type": "u64"
          },
          {
            "name": "freeSlotBits",
            "type": "u128"
          },
          {
            "name": "isBidBits",
            "type": "u128"
          }
        ]
      }
    },
    {
      "name": "GetRaydiumLpPriceWrapper",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "coinBalance",
            "type": "u64"
          },
          {
            "name": "pcBalance",
            "type": "u64"
          },
          {
            "name": "coinToPcPrice",
            "type": "f64"
          },
          {
            "name": "pcToCoinPrice",
            "type": "f64"
          },
          {
            "name": "lpAmount",
            "type": "f64"
          }
        ]
      }
    },
    {
      "name": "RaydiumStakeInfoLayoutV4",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "discriminator",
            "type": "u64"
          },
          {
            "name": "state",
            "type": "u64"
          },
          {
            "name": "nonce",
            "type": "u64"
          },
          {
            "name": "poolLpTokenAccount",
            "type": "publicKey"
          },
          {
            "name": "poolRewardTokenAccount",
            "type": "publicKey"
          },
          {
            "name": "totalReward",
            "type": "u64"
          },
          {
            "name": "perShare",
            "type": "u128"
          },
          {
            "name": "perBlock",
            "type": "u64"
          },
          {
            "name": "option",
            "type": "u8"
          },
          {
            "name": "poolRewardTokenAccountB",
            "type": "publicKey"
          },
          {
            "name": "empty1",
            "type": "u32"
          },
          {
            "name": "empty2",
            "type": "u16"
          },
          {
            "name": "empty3",
            "type": "u8"
          },
          {
            "name": "totalRewardB",
            "type": "u64"
          },
          {
            "name": "perShareB",
            "type": "u128"
          },
          {
            "name": "perBlockB",
            "type": "u64"
          },
          {
            "name": "lastBlock",
            "type": "u64"
          },
          {
            "name": "owner",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "PoolLayoutV4",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "status",
            "type": "u64"
          },
          {
            "name": "nonce",
            "type": "u64"
          },
          {
            "name": "orderNum",
            "type": "u64"
          },
          {
            "name": "depth",
            "type": "u64"
          },
          {
            "name": "coinDecimals",
            "type": "u64"
          },
          {
            "name": "pcDecimals",
            "type": "u64"
          },
          {
            "name": "state",
            "type": "u64"
          },
          {
            "name": "resetFlag",
            "type": "u64"
          },
          {
            "name": "minSize",
            "type": "u64"
          },
          {
            "name": "volMaxCutRatio",
            "type": "u64"
          },
          {
            "name": "amountWaveRatio",
            "type": "u64"
          },
          {
            "name": "coinLotSize",
            "type": "u64"
          },
          {
            "name": "pcLotSize",
            "type": "u64"
          },
          {
            "name": "minPriceMultiplier",
            "type": "u64"
          },
          {
            "name": "maxPriceMultiplier",
            "type": "u64"
          },
          {
            "name": "systemDecimalsValue",
            "type": "u64"
          },
          {
            "name": "minSeparateNumerator",
            "type": "u64"
          },
          {
            "name": "minSeparateDenominator",
            "type": "u64"
          },
          {
            "name": "tradeFeeNumerator",
            "type": "u64"
          },
          {
            "name": "tradeFeeDenominator",
            "type": "u64"
          },
          {
            "name": "pnlNumerator",
            "type": "u64"
          },
          {
            "name": "pnlDenominator",
            "type": "u64"
          },
          {
            "name": "swapFeeNumerator",
            "type": "u64"
          },
          {
            "name": "swapFeeDenominator",
            "type": "u64"
          },
          {
            "name": "needTakePnlCoin",
            "type": "u64"
          },
          {
            "name": "needTakePnlPc",
            "type": "u64"
          },
          {
            "name": "totalPnlPc",
            "type": "u64"
          },
          {
            "name": "totalPnlCoin",
            "type": "u64"
          },
          {
            "name": "poolTotalDepositPc",
            "type": "u64"
          },
          {
            "name": "poolTotalDepositCoin",
            "type": "u64"
          },
          {
            "name": "swapCoinInAmount",
            "type": "u64"
          },
          {
            "name": "swapPcOutAmount",
            "type": "u64"
          },
          {
            "name": "swapCoinToPcFee",
            "type": "u64"
          },
          {
            "name": "swapPcInAmount",
            "type": "u64"
          },
          {
            "name": "swapCoinOutAmount",
            "type": "u64"
          },
          {
            "name": "swapPcToCoinFee",
            "type": "u64"
          },
          {
            "name": "poolCoinTokenAccount",
            "type": "publicKey"
          },
          {
            "name": "poolPcTokenAccount",
            "type": "publicKey"
          },
          {
            "name": "coinMintAddress",
            "type": "publicKey"
          },
          {
            "name": "pcMintAddress",
            "type": "publicKey"
          },
          {
            "name": "lpMintAddress",
            "type": "publicKey"
          },
          {
            "name": "ammOpenOrders",
            "type": "publicKey"
          },
          {
            "name": "serumMarket",
            "type": "publicKey"
          },
          {
            "name": "serumProgramId",
            "type": "publicKey"
          },
          {
            "name": "ammTargetOrders",
            "type": "publicKey"
          },
          {
            "name": "poolWithdrawQueue",
            "type": "publicKey"
          },
          {
            "name": "poolTempLpTokenAccount",
            "type": "publicKey"
          },
          {
            "name": "ammOwner",
            "type": "publicKey"
          },
          {
            "name": "pnlOwner",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "SwapResultWrapper",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "outAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "AddLiquidityResultWrapper",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "lpAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "RemoveLiquidityResultWrapper",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "swapInAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "StakeResultWrapper",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "lpAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "UnstakeResultWrapper",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "shareAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "GatewayStateWrapper",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "discriminator",
            "type": "u64"
          },
          {
            "name": "userKey",
            "type": "publicKey"
          },
          {
            "name": "randomSeed",
            "type": "u64"
          },
          {
            "name": "version",
            "type": "u8"
          },
          {
            "name": "currentIndex",
            "type": "u8"
          },
          {
            "name": "queueSize",
            "type": "u8"
          },
          {
            "name": "protocolQueue",
            "type": {
              "array": [
                "u8",
                8
              ]
            }
          },
          {
            "name": "actionQueue",
            "type": {
              "array": [
                "u8",
                8
              ]
            }
          },
          {
            "name": "versionQueue",
            "type": {
              "array": [
                "u8",
                8
              ]
            }
          },
          {
            "name": "payloadQueue",
            "type": {
              "array": [
                "u64",
                8
              ]
            }
          },
          {
            "name": "swapMinOutAmount",
            "type": "u64"
          },
          {
            "name": "poolDirection",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "ZapDirectionP",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "In"
          },
          {
            "name": "Out"
          }
        ]
      }
    },
    {
      "name": "PoolDirectionP",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Obverse"
          },
          {
            "name": "Reverse"
          }
        ]
      }
    },
    {
      "name": "PoolDirection",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Obverse"
          },
          {
            "name": "Reverse"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "UnsupportedPoolDirection",
      "msg": "Unsupported PoolDirection"
    },
    {
      "code": 6001,
      "name": "UnsupportedVersion",
      "msg": "Unsupported Action Version"
    }
  ]
};