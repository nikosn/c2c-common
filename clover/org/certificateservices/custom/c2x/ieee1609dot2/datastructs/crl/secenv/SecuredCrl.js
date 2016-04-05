var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":158,"id":4265,"methods":[{"el":46,"sc":2,"sl":44},{"el":53,"sc":2,"sl":51},{"el":64,"sc":2,"sl":58},{"el":75,"sc":2,"sl":69},{"el":87,"sc":2,"sl":82},{"el":124,"sc":2,"sl":94},{"el":137,"sc":2,"sl":131},{"el":148,"sc":2,"sl":142},{"el":156,"sc":2,"sl":150}],"name":"SecuredCrl","sl":37}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_164":{"methods":[{"sl":58},{"sl":69},{"sl":94},{"sl":150}],"name":"Verify toString","pass":true,"statements":[{"sl":59},{"sl":61},{"sl":70},{"sl":72},{"sl":95},{"sl":96},{"sl":100},{"sl":101},{"sl":102},{"sl":105},{"sl":106},{"sl":110},{"sl":111},{"sl":119},{"sl":123},{"sl":152}]},"test_182":{"methods":[{"sl":94}],"name":"Verify that fullfillsRequirements verifies all required fields","pass":true,"statements":[{"sl":95},{"sl":96},{"sl":97},{"sl":100},{"sl":101},{"sl":102},{"sl":103},{"sl":105},{"sl":106},{"sl":110},{"sl":111},{"sl":119},{"sl":120},{"sl":123}]},"test_58":{"methods":[{"sl":58},{"sl":69},{"sl":94}],"name":"Verify that signed SecuredCrl with signed data is generated correctly","pass":true,"statements":[{"sl":59},{"sl":61},{"sl":70},{"sl":72},{"sl":95},{"sl":96},{"sl":100},{"sl":101},{"sl":102},{"sl":105},{"sl":106},{"sl":110},{"sl":111},{"sl":119},{"sl":123}]},"test_744":{"methods":[{"sl":51},{"sl":58},{"sl":69},{"sl":82},{"sl":94},{"sl":142}],"name":"Verify that constructor contains Ieee1609Dot2Data  if content  fullfill requirements","pass":true,"statements":[{"sl":52},{"sl":59},{"sl":61},{"sl":70},{"sl":72},{"sl":83},{"sl":84},{"sl":95},{"sl":96},{"sl":100},{"sl":101},{"sl":102},{"sl":105},{"sl":106},{"sl":110},{"sl":111},{"sl":119},{"sl":123},{"sl":144},{"sl":145}]},"test_757":{"methods":[{"sl":69},{"sl":94},{"sl":142}],"name":"Verify that constructor throws Exception if content doesn't fullfill requirements","pass":true,"statements":[{"sl":70},{"sl":72},{"sl":73},{"sl":95},{"sl":96},{"sl":97},{"sl":144},{"sl":145},{"sl":146}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [744], [744], [], [], [], [], [], [58, 164, 744], [58, 164, 744], [], [58, 164, 744], [], [], [], [], [], [], [], [58, 164, 744, 757], [58, 164, 744, 757], [], [58, 164, 744, 757], [757], [], [], [], [], [], [], [], [], [744], [744], [744], [], [], [], [], [], [], [], [], [], [58, 182, 164, 744, 757], [58, 182, 164, 744, 757], [58, 182, 164, 744, 757], [182, 757], [], [], [58, 182, 164, 744], [58, 182, 164, 744], [58, 182, 164, 744], [182], [], [58, 182, 164, 744], [58, 182, 164, 744], [], [], [], [58, 182, 164, 744], [58, 182, 164, 744], [], [], [], [], [], [], [], [58, 182, 164, 744], [182], [], [], [58, 182, 164, 744], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [744, 757], [], [744, 757], [744, 757], [757], [], [], [], [164], [], [164], [], [], [], [], [], []]