import { CallObject } from "../../src";

export const expectedCallObjectResult: CallObject = {
    type: "CALL",
    from: "0xaf0bbec3ef0aee655ef0b7ee62124ca02e866b5f",
    to: "0x111111125434b319222cdbf8c261674adb56f3ae",
    value: "0x187b03ee0cf2800",
    gas: "0x2fb32",
    gasUsed: "0x29016",
    input: "0x90411a32000000000000000000000000d47140f6ab73f6d6b6675fb1610bb5e9b5d96fe5000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000001c0000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee000000000000000000000000dac17f958d2ee523a2206206994597c13d831ec7000000000000000000000000d47140f6ab73f6d6b6675fb1610bb5e9b5d96fe5000000000000000000000000af0bbec3ef0aee655ef0b7ee62124ca02e866b5f0000000000000000000000000000000000000000000000000187b03ee0cf280000000000000000000000000000000000000000000000000000000000037ad5e300000000000000000000000000000000000000000000000000000000037bba2c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000001e34c4c920c1b6a397cab786ebfd83dcaee1ff64000000000000000000000000000000000000000000000000000000000000014000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000001a00000000000000000000000000000000000000000000000000000000000000260000000000000000000000000000000000000000000000000000000000000036000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000064d1660f99000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee0000000000000000000000001e34c4c920c1b6a397cab786ebfd83dcaee1ff640000000000000000000000000000000000000000000000000009cace5f38610000000000000000000000000000000000000000000000000000000000000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000017de5708196c70000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000004d0e30db000000000000000000000000000000000000000000000000000000000000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000044a9059cbb0000000000000000000000000d4a11d5eeaac28ec3f61d100daf4d40471f1852000000000000000000000000000000000000000000000000017de5708196c70000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000a4c9f12e9d0000000000000000000000000d4a11d5eeaac28ec3f61d100daf4d40471f1852000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2000000000000000000000000dac17f958d2ee523a2206206994597c13d831ec7000000000000000000000003af0bbec3ef0aee655ef0b7ee62124ca02e866b5f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    output: "0x00000000000000000000000000000000000000000000000000000000037bba2c",
    logs: undefined,
    time: "time",
    calls: [
      {
        type: "CALL",
        from: "0x111111125434b319222cdbf8c261674adb56f3ae",
        to: "0xd47140f6ab73f6d6b6675fb1610bb5e9b5d96fe5",
        value: "0x187b03ee0cf2800",
        gas: "0x2ac31",
        gasUsed: "0x22921",
        input: "0xa8920d2b00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000001a00000000000000000000000000000000000000000000000000000000000000260000000000000000000000000000000000000000000000000000000000000036000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000064d1660f99000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee0000000000000000000000001e34c4c920c1b6a397cab786ebfd83dcaee1ff640000000000000000000000000000000000000000000000000009cace5f38610000000000000000000000000000000000000000000000000000000000000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000017de5708196c70000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000004d0e30db000000000000000000000000000000000000000000000000000000000000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000044a9059cbb0000000000000000000000000d4a11d5eeaac28ec3f61d100daf4d40471f1852000000000000000000000000000000000000000000000000017de5708196c70000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000a4c9f12e9d0000000000000000000000000d4a11d5eeaac28ec3f61d100daf4d40471f1852000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2000000000000000000000000dac17f958d2ee523a2206206994597c13d831ec7000000000000000000000003af0bbec3ef0aee655ef0b7ee62124ca02e866b5f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        output: "0x",
        logs: [
          {
            logIndex: 5,
          },
        ],
        calls: [
          {
            type: "CALL",
            from: "0xd47140f6ab73f6d6b6675fb1610bb5e9b5d96fe5",
            to: "0xd47140f6ab73f6d6b6675fb1610bb5e9b5d96fe5",
            value: "0x0",
            gas: "0x29a7f",
            gasUsed: "0x1fc4",
            input: "0xd1660f99000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee0000000000000000000000001e34c4c920c1b6a397cab786ebfd83dcaee1ff640000000000000000000000000000000000000000000000000009cace5f386100",
            output: "0x",
            logs: undefined,
            calls: [
              {
                type: "CALL",
                from: "0xd47140f6ab73f6d6b6675fb1610bb5e9b5d96fe5",
                to: "0x1e34c4c920c1b6a397cab786ebfd83dcaee1ff64",
                value: "0x9cace5f386100",
                gas: undefined,
                gasUsed: undefined,
                input: "0x",
                output: "0x",
                logs: undefined,
                calls: undefined,
                error: undefined,
              },
            ],
            error: undefined,
          },
          {
            type: "CALL",
            from: "0xd47140f6ab73f6d6b6675fb1610bb5e9b5d96fe5",
            to: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            value: "0x17de5708196c700",
            gas: "0x25c09",
            gasUsed: "0x5892",
            input: "0xd0e30db0",
            output: "0x",
            logs: [
              {
                logIndex: 0,
              },
            ],
            calls: undefined,
            error: undefined,
          },
          {
            type: "CALL",
            from: "0xd47140f6ab73f6d6b6675fb1610bb5e9b5d96fe5",
            to: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            value: "0x0",
            gas: "0x1ff1d",
            gasUsed: "0x2ad2",
            input: "0xa9059cbb0000000000000000000000000d4a11d5eeaac28ec3f61d100daf4d40471f1852000000000000000000000000000000000000000000000000017de5708196c700",
            output: "0x",
            logs: [
              {
                logIndex: 1,
              },
            ],
            calls: undefined,
            error: undefined,
          },
          {
            type: "CALL",
            from: "0xd47140f6ab73f6d6b6675fb1610bb5e9b5d96fe5",
            to: "0xd47140f6ab73f6d6b6675fb1610bb5e9b5d96fe5",
            value: "0x0",
            gas: "0x1cf12",
            gasUsed: "0x152b5",
            input: "0xc9f12e9d0000000000000000000000000d4a11d5eeaac28ec3f61d100daf4d40471f1852000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2000000000000000000000000dac17f958d2ee523a2206206994597c13d831ec7000000000000000000000003af0bbec3ef0aee655ef0b7ee62124ca02e866b5f0000000000000000000000000000000000000000000000000000000000000000",
            output: "0x",
            logs: undefined,
            calls: [
              {
                type: "CALL",
                from: "0xd47140f6ab73f6d6b6675fb1610bb5e9b5d96fe5",
                to: "0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852",
                value: "0x0",
                gas: "0x1a363",
                gasUsed: "0x12d6a",
                input: "0x022c0d9f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000037bba2c000000000000000000000000af0bbec3ef0aee655ef0b7ee62124ca02e866b5f00000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000000",
                output: "0x",
                logs: undefined,
                calls: [
                  {
                    type: "CALL",
                    from: "0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852",
                    to: "0xdac17f958d2ee523a2206206994597c13d831ec7",
                    value: "0x0",
                    gas: "0x174d3",
                    gasUsed: "0x8729",
                    input: "0xa9059cbb000000000000000000000000af0bbec3ef0aee655ef0b7ee62124ca02e866b5f00000000000000000000000000000000000000000000000000000000037bba2c",
                    output: "0x",
                    logs: [
                      {
                        logIndex: 2,
                      },
                      {
                        logIndex: 3,
                      },
                      {
                        logIndex: 4,
                      },
                    ],
                    calls: undefined,
                    error: undefined,
                  },
                ],
                error: undefined,
              },
            ],
            error: undefined,
          },
        ],
        error: undefined,
      },
    ],
    error: undefined,
  }

export const callObjectTestData = "{\"type\":\"CALL\",\"from\":\"0xaf0bbec3ef0aee655ef0b7ee62124ca02e866b5f\",\"to\":\"0x111111125434b319222cdbf8c261674adb56f3ae\",\"value\":\"0x187b03ee0cf2800\",\"gas\":\"0x2fb32\",\"gasUsed\":\"0x29016\",\"input\":\"0x90411a32000000000000000000000000d47140f6ab73f6d6b6675fb1610bb5e9b5d96fe5000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000001c0000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee000000000000000000000000dac17f958d2ee523a2206206994597c13d831ec7000000000000000000000000d47140f6ab73f6d6b6675fb1610bb5e9b5d96fe5000000000000000000000000af0bbec3ef0aee655ef0b7ee62124ca02e866b5f0000000000000000000000000000000000000000000000000187b03ee0cf280000000000000000000000000000000000000000000000000000000000037ad5e300000000000000000000000000000000000000000000000000000000037bba2c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000001e34c4c920c1b6a397cab786ebfd83dcaee1ff64000000000000000000000000000000000000000000000000000000000000014000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000001a00000000000000000000000000000000000000000000000000000000000000260000000000000000000000000000000000000000000000000000000000000036000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000064d1660f99000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee0000000000000000000000001e34c4c920c1b6a397cab786ebfd83dcaee1ff640000000000000000000000000000000000000000000000000009cace5f38610000000000000000000000000000000000000000000000000000000000000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000017de5708196c70000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000004d0e30db000000000000000000000000000000000000000000000000000000000000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000044a9059cbb0000000000000000000000000d4a11d5eeaac28ec3f61d100daf4d40471f1852000000000000000000000000000000000000000000000000017de5708196c70000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000a4c9f12e9d0000000000000000000000000d4a11d5eeaac28ec3f61d100daf4d40471f1852000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2000000000000000000000000dac17f958d2ee523a2206206994597c13d831ec7000000000000000000000003af0bbec3ef0aee655ef0b7ee62124ca02e866b5f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000\",\"output\":\"0x00000000000000000000000000000000000000000000000000000000037bba2c\",\"time\":\"287.740916ms\",\"calls\":[{\"type\":\"CALL\",\"from\":\"0x111111125434b319222cdbf8c261674adb56f3ae\",\"to\":\"0xd47140f6ab73f6d6b6675fb1610bb5e9b5d96fe5\",\"value\":\"0x187b03ee0cf2800\",\"gas\":\"0x2ac31\",\"gasUsed\":\"0x22921\",\"input\":\"0xa8920d2b00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000001a00000000000000000000000000000000000000000000000000000000000000260000000000000000000000000000000000000000000000000000000000000036000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000064d1660f99000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee0000000000000000000000001e34c4c920c1b6a397cab786ebfd83dcaee1ff640000000000000000000000000000000000000000000000000009cace5f38610000000000000000000000000000000000000000000000000000000000000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000017de5708196c70000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000004d0e30db000000000000000000000000000000000000000000000000000000000000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000044a9059cbb0000000000000000000000000d4a11d5eeaac28ec3f61d100daf4d40471f1852000000000000000000000000000000000000000000000000017de5708196c70000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000a4c9f12e9d0000000000000000000000000d4a11d5eeaac28ec3f61d100daf4d40471f1852000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2000000000000000000000000dac17f958d2ee523a2206206994597c13d831ec7000000000000000000000003af0bbec3ef0aee655ef0b7ee62124ca02e866b5f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000\",\"output\":\"0x\",\"logs\":[{\"logIndex\":5}],\"calls\":[{\"type\":\"CALL\",\"from\":\"0xd47140f6ab73f6d6b6675fb1610bb5e9b5d96fe5\",\"to\":\"0xd47140f6ab73f6d6b6675fb1610bb5e9b5d96fe5\",\"value\":\"0x0\",\"gas\":\"0x29a7f\",\"gasUsed\":\"0x1fc4\",\"input\":\"0xd1660f99000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee0000000000000000000000001e34c4c920c1b6a397cab786ebfd83dcaee1ff640000000000000000000000000000000000000000000000000009cace5f386100\",\"output\":\"0x\",\"calls\":[{\"type\":\"CALL\",\"from\":\"0xd47140f6ab73f6d6b6675fb1610bb5e9b5d96fe5\",\"to\":\"0x1e34c4c920c1b6a397cab786ebfd83dcaee1ff64\",\"value\":\"0x9cace5f386100\",\"input\":\"0x\",\"output\":\"0x\"}]},{\"type\":\"CALL\",\"from\":\"0xd47140f6ab73f6d6b6675fb1610bb5e9b5d96fe5\",\"to\":\"0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2\",\"value\":\"0x17de5708196c700\",\"gas\":\"0x25c09\",\"gasUsed\":\"0x5892\",\"input\":\"0xd0e30db0\",\"output\":\"0x\",\"logs\":[{\"logIndex\":0}]},{\"type\":\"CALL\",\"from\":\"0xd47140f6ab73f6d6b6675fb1610bb5e9b5d96fe5\",\"to\":\"0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2\",\"value\":\"0x0\",\"gas\":\"0x1ff1d\",\"gasUsed\":\"0x2ad2\",\"input\":\"0xa9059cbb0000000000000000000000000d4a11d5eeaac28ec3f61d100daf4d40471f1852000000000000000000000000000000000000000000000000017de5708196c700\",\"output\":\"0x\",\"logs\":[{\"logIndex\":1}]},{\"type\":\"CALL\",\"from\":\"0xd47140f6ab73f6d6b6675fb1610bb5e9b5d96fe5\",\"to\":\"0xd47140f6ab73f6d6b6675fb1610bb5e9b5d96fe5\",\"value\":\"0x0\",\"gas\":\"0x1cf12\",\"gasUsed\":\"0x152b5\",\"input\":\"0xc9f12e9d0000000000000000000000000d4a11d5eeaac28ec3f61d100daf4d40471f1852000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2000000000000000000000000dac17f958d2ee523a2206206994597c13d831ec7000000000000000000000003af0bbec3ef0aee655ef0b7ee62124ca02e866b5f0000000000000000000000000000000000000000000000000000000000000000\",\"output\":\"0x\",\"calls\":[{\"type\":\"CALL\",\"from\":\"0xd47140f6ab73f6d6b6675fb1610bb5e9b5d96fe5\",\"to\":\"0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852\",\"value\":\"0x0\",\"gas\":\"0x1a363\",\"gasUsed\":\"0x12d6a\",\"input\":\"0x022c0d9f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000037bba2c000000000000000000000000af0bbec3ef0aee655ef0b7ee62124ca02e866b5f00000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000000\",\"output\":\"0x\",\"calls\":[{\"type\":\"CALL\",\"from\":\"0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852\",\"to\":\"0xdac17f958d2ee523a2206206994597c13d831ec7\",\"value\":\"0x0\",\"gas\":\"0x174d3\",\"gasUsed\":\"0x8729\",\"input\":\"0xa9059cbb000000000000000000000000af0bbec3ef0aee655ef0b7ee62124ca02e866b5f00000000000000000000000000000000000000000000000000000000037bba2c\",\"output\":\"0x\",\"logs\":[{\"logIndex\":2},{\"logIndex\":3},{\"logIndex\":4}]}]}]}]}]}";
export const corruptedCallObjectTestData = "{\"type\":\"\",\"from\":\"0xaf0bbec3ef0aee655ef0b7ee62124ca02e866b5f\",\"to\":\"0x111111125434b319222cdbf8c261674adb56f3ae\",\"value\":\"0x187b03ee0cf2800\",\"gas\":\"0x2fb32\",\"gasUsed\":\"0x29016\",\"input\":\"0x90411a32000000000000000000000000d47140f6ab73f6d6b6675fb1610bb5e9b5d96fe5000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000001c0000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee000000000000000000000000dac17f958d2ee523a2206206994597c13d831ec7000000000000000000000000d47140f6ab73f6d6b6675fb1610bb5e9b5d96fe5000000000000000000000000af0bbec3ef0aee655ef0b7ee62124ca02e866b5f0000000000000000000000000000000000000000000000000187b03ee0cf280000000000000000000000000000000000000000000000000000000000037ad5e300000000000000000000000000000000000000000000000000000000037bba2c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000001e34c4c920c1b6a397cab786ebfd83dcaee1ff64000000000000000000000000000000000000000000000000000000000000014000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000001a00000000000000000000000000000000000000000000000000000000000000260000000000000000000000000000000000000000000000000000000000000036000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000064d1660f99000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee0000000000000000000000001e34c4c920c1b6a397cab786ebfd83dcaee1ff640000000000000000000000000000000000000000000000000009cace5f38610000000000000000000000000000000000000000000000000000000000000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000017de5708196c70000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000004d0e30db000000000000000000000000000000000000000000000000000000000000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000044a9059cbb0000000000000000000000000d4a11d5eeaac28ec3f61d100daf4d40471f1852000000000000000000000000000000000000000000000000017de5708196c70000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000a4c9f12e9d0000000000000000000000000d4a11d5eeaac28ec3f61d100daf4d40471f1852000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2000000000000000000000000dac17f958d2ee523a2206206994597c13d831ec7000000000000000000000003af0bbec3ef0aee655ef0b7ee62124ca02e866b5f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000\",\"output\":\"0x00000000000000000000000000000000000000000000000000000000037bba2c\",\"time\":\"287.740916ms\",\"calls\":[{\"type\":\"CALL\",\"from\":\"0x111111125434b319222cdbf8c261674adb56f3ae\",\"to\":\"0xd47140f6ab73f6d6b6675fb1610bb5e9b5d96fe5\",\"value\":\"0x187b03ee0cf2800\",\"gas\":\"0x2ac31\",\"gasUsed\":\"0x22921\",\"input\":\"0xa8920d2b00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000001a00000000000000000000000000000000000000000000000000000000000000260000000000000000000000000000000000000000000000000000000000000036000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000064d1660f99000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee0000000000000000000000001e34c4c920c1b6a397cab786ebfd83dcaee1ff640000000000000000000000000000000000000000000000000009cace5f38610000000000000000000000000000000000000000000000000000000000000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000017de5708196c70000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000004d0e30db000000000000000000000000000000000000000000000000000000000000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000044a9059cbb0000000000000000000000000d4a11d5eeaac28ec3f61d100daf4d40471f1852000000000000000000000000000000000000000000000000017de5708196c70000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000a4c9f12e9d0000000000000000000000000d4a11d5eeaac28ec3f61d100daf4d40471f1852000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2000000000000000000000000dac17f958d2ee523a2206206994597c13d831ec7000000000000000000000003af0bbec3ef0aee655ef0b7ee62124ca02e866b5f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000\",\"output\":\"0x\",\"logs\":[{\"logIndex\":5}],\"calls\":[{\"type\":\"CALL\",\"from\":\"0xd47140f6ab73f6d6b6675fb1610bb5e9b5d96fe5\",\"to\":\"0xd47140f6ab73f6d6b6675fb1610bb5e9b5d96fe5\",\"value\":\"0x0\",\"gas\":\"0x29a7f\",\"gasUsed\":\"0x1fc4\",\"input\":\"0xd1660f99000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee0000000000000000000000001e34c4c920c1b6a397cab786ebfd83dcaee1ff640000000000000000000000000000000000000000000000000009cace5f386100\",\"output\":\"0x\",\"calls\":[{\"type\":\"CALL\",\"from\":\"0xd47140f6ab73f6d6b6675fb1610bb5e9b5d96fe5\",\"to\":\"0x1e34c4c920c1b6a397cab786ebfd83dcaee1ff64\",\"value\":\"0x9cace5f386100\",\"input\":\"0x\",\"output\":\"0x\"}]},{\"type\":\"CALL\",\"from\":\"0xd47140f6ab73f6d6b6675fb1610bb5e9b5d96fe5\",\"to\":\"0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2\",\"value\":\"0x17de5708196c700\",\"gas\":\"0x25c09\",\"gasUsed\":\"0x5892\",\"input\":\"0xd0e30db0\",\"output\":\"0x\",\"logs\":[{\"logIndex\":0}]},{\"type\":\"CALL\",\"from\":\"0xd47140f6ab73f6d6b6675fb1610bb5e9b5d96fe5\",\"to\":\"0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2\",\"value\":\"0x0\",\"gas\":\"0x1ff1d\",\"gasUsed\":\"0x2ad2\",\"input\":\"0xa9059cbb0000000000000000000000000d4a11d5eeaac28ec3f61d100daf4d40471f1852000000000000000000000000000000000000000000000000017de5708196c700\",\"output\":\"0x\",\"logs\":[{\"logIndex\":1}]},{\"type\":\"CALL\",\"from\":\"0xd47140f6ab73f6d6b6675fb1610bb5e9b5d96fe5\",\"to\":\"0xd47140f6ab73f6d6b6675fb1610bb5e9b5d96fe5\",\"value\":\"0x0\",\"gas\":\"0x1cf12\",\"gasUsed\":\"0x152b5\",\"input\":\"0xc9f12e9d0000000000000000000000000d4a11d5eeaac28ec3f61d100daf4d40471f1852000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2000000000000000000000000dac17f958d2ee523a2206206994597c13d831ec7000000000000000000000003af0bbec3ef0aee655ef0b7ee62124ca02e866b5f0000000000000000000000000000000000000000000000000000000000000000\",\"output\":\"0x\",\"calls\":[{\"type\":\"CALL\",\"from\":\"0xd47140f6ab73f6d6b6675fb1610bb5e9b5d96fe5\",\"to\":\"0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852\",\"value\":\"0x0\",\"gas\":\"0x1a363\",\"gasUsed\":\"0x12d6a\",\"input\":\"0x022c0d9f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000037bba2c000000000000000000000000af0bbec3ef0aee655ef0b7ee62124ca02e866b5f00000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000000\",\"output\":\"0x\",\"calls\":[{\"type\":\"CALL\",\"from\":\"0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852\",\"to\":\"0xdac17f958d2ee523a2206206994597c13d831ec7\",\"value\":\"0x0\",\"gas\":\"0x174d3\",\"gasUsed\":\"0x8729\",\"input\":\",\"output\":\"0x\",\"logs\":[{\"\":2},{\"logIndex\":3},{\"logIndex\":4}]}]}]}]}]}";