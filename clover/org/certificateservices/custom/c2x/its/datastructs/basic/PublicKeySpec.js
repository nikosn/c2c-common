var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":130,"id":13001,"methods":[{"el":63,"sc":2,"sl":38},{"el":83,"sc":2,"sl":66},{"el":105,"sc":2,"sl":85},{"el":121,"sc":2,"sl":107},{"el":127,"sc":2,"sl":123}],"name":"PublicKeySpec","sl":34}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_103":{"methods":[{"sl":107}],"name":"Verify hashCode and equals","pass":true,"statements":[{"sl":109},{"sl":110},{"sl":111},{"sl":112},{"sl":114},{"sl":115},{"sl":116},{"sl":117},{"sl":118},{"sl":119}]},"test_118":{"methods":[{"sl":38}],"name":"Verify constructors and getters and setters","pass":true,"statements":[{"sl":40},{"sl":42},{"sl":43},{"sl":44},{"sl":46},{"sl":48},{"sl":49},{"sl":50},{"sl":52},{"sl":54},{"sl":55},{"sl":56},{"sl":58},{"sl":60},{"sl":61},{"sl":62}]},"test_280":{"methods":[{"sl":85}],"name":"Verify deserialization of PublicKey","pass":true,"statements":[{"sl":88},{"sl":90},{"sl":91},{"sl":92},{"sl":93}]},"test_571":{"methods":[{"sl":123}],"name":"Verify toString","pass":true,"statements":[{"sl":125}]},"test_891":{"methods":[{"sl":66}],"name":"Verify serialization of PublicKey","pass":true,"statements":[{"sl":68},{"sl":70},{"sl":71},{"sl":72},{"sl":73},{"sl":75},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":81}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [118], [], [118], [], [118], [118], [118], [], [118], [], [118], [118], [118], [], [118], [], [118], [118], [118], [], [118], [], [118], [118], [118], [], [], [], [891], [], [891], [], [891], [891], [891], [891], [], [891], [], [891], [891], [891], [891], [891], [], [], [], [280], [], [], [280], [], [280], [280], [280], [280], [], [], [], [], [], [], [], [], [], [], [], [], [], [103], [], [103], [103], [103], [103], [], [103], [103], [103], [103], [103], [103], [], [], [], [571], [], [571], [], [], [], [], []]