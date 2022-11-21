export type AdapterJupiter = {
  "version": "0.1.0",
  "name": "adapter_jupiter",
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
      "name": "SwapInputWrapper",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "inAmount",
            "type": "u64"
          },
          {
            "name": "outAmount",
            "type": "u64"
          },
          {
            "name": "slippageBps",
            "type": "u16"
          },
          {
            "name": "swapConfig",
            "type": {
              "array": [
                "u8",
                14
              ]
            }
          }
        ]
      }
    },
    {
      "name": "SwapOutputWrapper",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "swapOutAmount",
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
  ]
};

export const IDL: AdapterJupiter = {
  "version": "0.1.0",
  "name": "adapter_jupiter",
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
      "name": "SwapInputWrapper",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "inAmount",
            "type": "u64"
          },
          {
            "name": "outAmount",
            "type": "u64"
          },
          {
            "name": "slippageBps",
            "type": "u16"
          },
          {
            "name": "swapConfig",
            "type": {
              "array": [
                "u8",
                14
              ]
            }
          }
        ]
      }
    },
    {
      "name": "SwapOutputWrapper",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "swapOutAmount",
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
  ]
};
