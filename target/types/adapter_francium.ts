export type AdapterFrancium = {
  "version": "0.1.0",
  "name": "adapter_francium",
  "instructions": [
    {
      "name": "supply",
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
      "name": "unsupply",
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
    }
  ],
  "types": [
    {
      "name": "SupplyInputWrapper",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tokenInAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "SupplyOutputWrapper",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "reserveOutAmount",
            "type": "u64"
          },
          {
            "name": "supplyInAmount",
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
      "name": "UnsupplyInputWrapper",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "reserveAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "UnsupplyOutputWrapper",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tokenOutAmount",
            "type": "u64"
          },
          {
            "name": "reserveInAmount",
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
      "name": "StakeInputWrapper",
      "type": {
        "kind": "struct",
        "fields": []
      }
    },
    {
      "name": "StakeOutputWrapper",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "reserveInAmount",
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
        "fields": [
          {
            "name": "reserveOutAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "UnstakeOutputWrapper",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "reserveOutAmount",
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
      "name": "UnsupportedAction",
      "msg": "Unsupported Action"
    }
  ]
};

export const IDL: AdapterFrancium = {
  "version": "0.1.0",
  "name": "adapter_francium",
  "instructions": [
    {
      "name": "supply",
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
      "name": "unsupply",
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
    }
  ],
  "types": [
    {
      "name": "SupplyInputWrapper",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tokenInAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "SupplyOutputWrapper",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "reserveOutAmount",
            "type": "u64"
          },
          {
            "name": "supplyInAmount",
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
      "name": "UnsupplyInputWrapper",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "reserveAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "UnsupplyOutputWrapper",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tokenOutAmount",
            "type": "u64"
          },
          {
            "name": "reserveInAmount",
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
      "name": "StakeInputWrapper",
      "type": {
        "kind": "struct",
        "fields": []
      }
    },
    {
      "name": "StakeOutputWrapper",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "reserveInAmount",
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
        "fields": [
          {
            "name": "reserveOutAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "UnstakeOutputWrapper",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "reserveOutAmount",
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
      "name": "UnsupportedAction",
      "msg": "Unsupported Action"
    }
  ]
};
