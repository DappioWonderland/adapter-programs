export type AdapterGenopetsStaking = {
  "version": "0.1.0",
  "name": "adapter_genopets_staking",
  "instructions": [
    {
      "name": "stake",
      "accounts": [
        {
          "name": "gatewayAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "baseProgramId",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "input",
          "type": "bytes"
        }
      ]
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
          "name": "baseProgramId",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "input",
          "type": "bytes"
        }
      ]
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
          "name": "baseProgramId",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "input",
          "type": "bytes"
        }
      ]
    }
  ],
  "types": [
    {
      "name": "StakeInputWrapper",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "lockForMonths",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "StakeOutputWrapper",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tokenInAmount",
            "type": "u64"
          },
          {
            "name": "dummy2",
            "type": "u64"
          },
          {
            "name": "dummy3",
            "type": "u64"
          },
          {
            "name": "dummy4",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "UnstakeInputWrapper",
      "type": {
        "kind": "struct",
        "fields": []
      }
    },
    {
      "name": "UnstakeOutputWrapper",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tokenOutAmount",
            "type": "u64"
          },
          {
            "name": "dummy2",
            "type": "u64"
          },
          {
            "name": "dummy3",
            "type": "u64"
          },
          {
            "name": "dummy4",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "HarvestInputWrapper",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "harvestType",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "HarvestOutputWrapper",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "rewardAmount",
            "type": "u64"
          },
          {
            "name": "dummy2",
            "type": "u64"
          },
          {
            "name": "dummy3",
            "type": "u64"
          },
          {
            "name": "dummy4",
            "type": "u64"
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
      "name": "UnsupportedAction",
      "msg": "Unsupported Action"
    }
  ]
};

export const IDL: AdapterGenopetsStaking = {
  "version": "0.1.0",
  "name": "adapter_genopets_staking",
  "instructions": [
    {
      "name": "stake",
      "accounts": [
        {
          "name": "gatewayAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "baseProgramId",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "input",
          "type": "bytes"
        }
      ]
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
          "name": "baseProgramId",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "input",
          "type": "bytes"
        }
      ]
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
          "name": "baseProgramId",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "input",
          "type": "bytes"
        }
      ]
    }
  ],
  "types": [
    {
      "name": "StakeInputWrapper",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "lockForMonths",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "StakeOutputWrapper",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tokenInAmount",
            "type": "u64"
          },
          {
            "name": "dummy2",
            "type": "u64"
          },
          {
            "name": "dummy3",
            "type": "u64"
          },
          {
            "name": "dummy4",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "UnstakeInputWrapper",
      "type": {
        "kind": "struct",
        "fields": []
      }
    },
    {
      "name": "UnstakeOutputWrapper",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tokenOutAmount",
            "type": "u64"
          },
          {
            "name": "dummy2",
            "type": "u64"
          },
          {
            "name": "dummy3",
            "type": "u64"
          },
          {
            "name": "dummy4",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "HarvestInputWrapper",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "harvestType",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "HarvestOutputWrapper",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "rewardAmount",
            "type": "u64"
          },
          {
            "name": "dummy2",
            "type": "u64"
          },
          {
            "name": "dummy3",
            "type": "u64"
          },
          {
            "name": "dummy4",
            "type": "u64"
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
      "name": "UnsupportedAction",
      "msg": "Unsupported Action"
    }
  ]
};
