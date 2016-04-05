var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":78,"id":4529,"methods":[{"el":56,"sc":2,"sl":54},{"el":64,"sc":2,"sl":62},{"el":71,"sc":2,"sl":69},{"el":76,"sc":2,"sl":73}],"name":"SymmetricCiphertext","sl":32},{"el":49,"id":4529,"methods":[{"el":43,"sc":3,"sl":40},{"el":48,"sc":3,"sl":45}],"name":"SymmetricCiphertext.SymmetricCiphertextChoices","sl":37}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_0":{"methods":[{"sl":45},{"sl":54},{"sl":62},{"sl":69}],"name":"Verify that encryption works with certificate public encryption key for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":47},{"sl":55},{"sl":63},{"sl":70}]},"test_127":{"methods":[{"sl":62},{"sl":73}],"name":"Verify toString","pass":true,"statements":[{"sl":63},{"sl":75}]},"test_182":{"methods":[{"sl":54},{"sl":62}],"name":"Verify that fullfillsRequirements verifies all required fields","pass":true,"statements":[{"sl":55},{"sl":63}]},"test_197":{"methods":[{"sl":40},{"sl":62}],"name":"Verify that constructor and getters are correct and it is correctly encoded","pass":true,"statements":[{"sl":42},{"sl":63}]},"test_213":{"methods":[{"sl":73}],"name":"Verify EncryptedDataEncryptionKey","pass":true,"statements":[{"sl":75}]},"test_237":{"methods":[{"sl":40},{"sl":62}],"name":"Verify that  Ieee1609Dot2Content is correctly encoded for type encryptedData","pass":true,"statements":[{"sl":42},{"sl":63}]},"test_25":{"methods":[{"sl":40},{"sl":62}],"name":"Verify that constructor and getters are correct and it is correctly encoded","pass":true,"statements":[{"sl":42},{"sl":63}]},"test_313":{"methods":[{"sl":62},{"sl":73}],"name":"Verify toString","pass":true,"statements":[{"sl":63},{"sl":75}]},"test_321":{"methods":[{"sl":45},{"sl":54},{"sl":62},{"sl":69}],"name":"Verify that encryption works with RekReceipient for alg: ecdsaNistP256","pass":true,"statements":[{"sl":47},{"sl":55},{"sl":63},{"sl":70}]},"test_351":{"methods":[{"sl":54},{"sl":73}],"name":"Verify SymmetricCiphertext","pass":true,"statements":[{"sl":55},{"sl":75}]},"test_352":{"methods":[{"sl":62}],"name":"Verify that IllegalArgumentException is thrown when encoding if not all fields are set","pass":true,"statements":[{"sl":63}]},"test_354":{"methods":[{"sl":45},{"sl":54},{"sl":62},{"sl":69}],"name":"Verify that symmetric key envelope encryption works correctly","pass":true,"statements":[{"sl":47},{"sl":55},{"sl":63},{"sl":70}]},"test_367":{"methods":[{"sl":40},{"sl":45},{"sl":54},{"sl":62},{"sl":69}],"name":"Verify that signAndEncryptData and decryptAndVerifySignedData generates encrypted and signed data structures for alg: ecdsaNistP256","pass":true,"statements":[{"sl":42},{"sl":47},{"sl":55},{"sl":63},{"sl":70}]},"test_378":{"methods":[{"sl":45},{"sl":54},{"sl":62},{"sl":69}],"name":"Verify that preshared key encryption works correctly","pass":true,"statements":[{"sl":47},{"sl":55},{"sl":63},{"sl":70}]},"test_402":{"methods":[{"sl":40},{"sl":54},{"sl":62},{"sl":69}],"name":"Verify that SymmetricCiphertext is correctly encoded for type aes128ccm","pass":true,"statements":[{"sl":42},{"sl":55},{"sl":63},{"sl":70}]},"test_528":{"methods":[{"sl":62}],"name":"Verify that IllegalArgumentException is thrown when encoding if not all fields are set","pass":true,"statements":[{"sl":63}]},"test_549":{"methods":[{"sl":45},{"sl":54},{"sl":62},{"sl":69}],"name":"Verify that encryption works with secured data public encryption key for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":47},{"sl":55},{"sl":63},{"sl":70}]},"test_57":{"methods":[{"sl":40},{"sl":45},{"sl":54},{"sl":62},{"sl":69}],"name":"Verify that signAndEncryptData and decryptAndVerifySignedData generates encrypted and signed data structures for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":42},{"sl":47},{"sl":55},{"sl":63},{"sl":70}]},"test_587":{"methods":[{"sl":40},{"sl":62}],"name":"Verify that RecipientInfo is correctly encoded for type symmRecipInfo","pass":true,"statements":[{"sl":42},{"sl":63}]},"test_815":{"methods":[{"sl":45},{"sl":54},{"sl":62},{"sl":69}],"name":"Verify that encryption works with secured data public encryption key for alg: ecdsaNistP256","pass":true,"statements":[{"sl":47},{"sl":55},{"sl":63},{"sl":70}]},"test_825":{"methods":[{"sl":45},{"sl":54},{"sl":62},{"sl":69}],"name":"Verify that encryption works with RekReceipient for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":47},{"sl":55},{"sl":63},{"sl":70}]},"test_876":{"methods":[{"sl":45},{"sl":54},{"sl":62},{"sl":69}],"name":"Verify that encryption works with certificate public encryption key for alg: ecdsaNistP256","pass":true,"statements":[{"sl":47},{"sl":55},{"sl":63},{"sl":70}]},"test_882":{"methods":[{"sl":54},{"sl":62}],"name":"Verify that fullfillsRequirements verifies all required fields","pass":true,"statements":[{"sl":55},{"sl":63}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [25, 57, 197, 367, 587, 402, 237], [], [25, 57, 197, 367, 587, 402, 237], [], [], [876, 815, 549, 825, 321, 354, 57, 378, 0, 367], [], [876, 815, 549, 825, 321, 354, 57, 378, 0, 367], [], [], [], [], [], [], [876, 815, 882, 549, 825, 321, 182, 354, 57, 378, 0, 367, 402, 351], [876, 815, 882, 549, 825, 321, 182, 354, 57, 378, 0, 367, 402, 351], [], [], [], [], [], [], [25, 876, 815, 882, 549, 825, 321, 182, 354, 352, 57, 378, 313, 197, 0, 367, 587, 127, 402, 237, 528], [25, 876, 815, 882, 549, 825, 321, 182, 354, 352, 57, 378, 313, 197, 0, 367, 587, 127, 402, 237, 528], [], [], [], [], [], [876, 815, 549, 825, 321, 354, 57, 378, 0, 367, 402], [876, 815, 549, 825, 321, 354, 57, 378, 0, 367, 402], [], [], [313, 127, 351, 213], [], [313, 127, 351, 213], [], [], []]