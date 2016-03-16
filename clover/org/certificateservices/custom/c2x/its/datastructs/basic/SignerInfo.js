var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":282,"id":6419,"methods":[{"el":57,"sc":2,"sl":55},{"el":66,"sc":2,"sl":63},{"el":75,"sc":2,"sl":72},{"el":87,"sc":2,"sl":84},{"el":100,"sc":2,"sl":96},{"el":111,"sc":2,"sl":109},{"el":120,"sc":2,"sl":118},{"el":129,"sc":2,"sl":127},{"el":141,"sc":2,"sl":139},{"el":150,"sc":2,"sl":148},{"el":174,"sc":2,"sl":152},{"el":202,"sc":2,"sl":176},{"el":222,"sc":2,"sl":205},{"el":254,"sc":2,"sl":225},{"el":278,"sc":2,"sl":258}],"name":"SignerInfo","sl":41}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_105":{"methods":[{"sl":55},{"sl":152},{"sl":176}],"name":"Verify deserialization and serialization of reference ETSI Certificates works","pass":true,"statements":[{"sl":56},{"sl":154},{"sl":155},{"sl":156},{"sl":157},{"sl":158},{"sl":159},{"sl":160},{"sl":161},{"sl":162},{"sl":163},{"sl":179},{"sl":180},{"sl":181},{"sl":182},{"sl":183},{"sl":184},{"sl":185},{"sl":186},{"sl":187},{"sl":188},{"sl":189},{"sl":190}]},"test_159":{"methods":[{"sl":63},{"sl":118},{"sl":152}],"name":"Generate Signed CAM Unrecognized Certificates Message and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":64},{"sl":65},{"sl":119},{"sl":154},{"sl":155},{"sl":158},{"sl":159},{"sl":160}]},"test_207":{"methods":[{"sl":63},{"sl":205},{"sl":225}],"name":"Verify hashCode and equals","pass":true,"statements":[{"sl":64},{"sl":65},{"sl":207},{"sl":208},{"sl":209},{"sl":210},{"sl":211},{"sl":213},{"sl":214},{"sl":215},{"sl":217},{"sl":219},{"sl":221},{"sl":227},{"sl":229},{"sl":231},{"sl":233},{"sl":234},{"sl":235},{"sl":236},{"sl":239},{"sl":240},{"sl":241},{"sl":244},{"sl":247},{"sl":248},{"sl":249},{"sl":251},{"sl":253}]},"test_253":{"methods":[{"sl":84},{"sl":109},{"sl":139},{"sl":152}],"name":"Generate Authorization Credential with a certificate chain as signer info","pass":true,"statements":[{"sl":85},{"sl":86},{"sl":110},{"sl":140},{"sl":154},{"sl":155},{"sl":156},{"sl":157},{"sl":161},{"sl":162},{"sl":163},{"sl":164},{"sl":165},{"sl":166}]},"test_28":{"methods":[{"sl":55},{"sl":72},{"sl":109},{"sl":127},{"sl":152},{"sl":176}],"name":"Verify that signAndEncryptSecureMessage and verifyAndDecryptSecuredMessage both encrypts and signs properly","pass":true,"statements":[{"sl":56},{"sl":73},{"sl":74},{"sl":110},{"sl":128},{"sl":154},{"sl":155},{"sl":158},{"sl":159},{"sl":160},{"sl":161},{"sl":162},{"sl":163},{"sl":179},{"sl":180},{"sl":183},{"sl":184},{"sl":185},{"sl":186},{"sl":187},{"sl":188},{"sl":189},{"sl":190}]},"test_285":{"methods":[{"sl":55},{"sl":176}],"name":"Verify getEncryptionKey","pass":true,"statements":[{"sl":56},{"sl":179},{"sl":180},{"sl":181},{"sl":182},{"sl":187},{"sl":188},{"sl":189},{"sl":190}]},"test_292":{"methods":[{"sl":55},{"sl":72},{"sl":109},{"sl":127},{"sl":152},{"sl":176}],"name":"Verify SignSecuredMessage using signer info type: certificate generates a valid signature and that verifySecuredMessage can verify it.","pass":true,"statements":[{"sl":56},{"sl":73},{"sl":74},{"sl":110},{"sl":128},{"sl":154},{"sl":155},{"sl":158},{"sl":159},{"sl":160},{"sl":161},{"sl":162},{"sl":163},{"sl":179},{"sl":180},{"sl":183},{"sl":184},{"sl":185},{"sl":186},{"sl":187},{"sl":188},{"sl":189},{"sl":190}]},"test_3":{"methods":[{"sl":152}],"name":"Verify serialization","pass":true,"statements":[{"sl":154},{"sl":155},{"sl":156},{"sl":157}]},"test_305":{"methods":[{"sl":109},{"sl":118},{"sl":127},{"sl":139},{"sl":148}],"name":"Verify the constructors and getters","pass":true,"statements":[{"sl":110},{"sl":119},{"sl":128},{"sl":140},{"sl":149}]},"test_315":{"methods":[{"sl":63},{"sl":109},{"sl":118},{"sl":152}],"name":"Generate Authorization Ticket with a digest as signer info","pass":true,"statements":[{"sl":64},{"sl":65},{"sl":110},{"sl":119},{"sl":154},{"sl":155},{"sl":156},{"sl":157},{"sl":158},{"sl":159},{"sl":160},{"sl":161},{"sl":162},{"sl":163}]},"test_353":{"methods":[{"sl":55},{"sl":109},{"sl":127},{"sl":152},{"sl":176}],"name":"Verify signature of reference secure messages from interoperabiltity site at https://werkzeug.dcaiti.tu-berlin.de/etsi/ts103097/","pass":true,"statements":[{"sl":56},{"sl":110},{"sl":128},{"sl":154},{"sl":155},{"sl":158},{"sl":159},{"sl":160},{"sl":161},{"sl":162},{"sl":163},{"sl":179},{"sl":180},{"sl":183},{"sl":184},{"sl":185},{"sl":186},{"sl":187},{"sl":188},{"sl":189},{"sl":190}]},"test_359":{"methods":[{"sl":152}],"name":"verify that encryptSecureMessage and decryptSecureMessage encrypts and decrypts correctly","pass":true,"statements":[{"sl":154},{"sl":155},{"sl":158},{"sl":159},{"sl":160}]},"test_376":{"methods":[{"sl":258}],"name":"Verify toString","pass":true,"statements":[{"sl":260},{"sl":261},{"sl":262}]},"test_379":{"methods":[{"sl":55},{"sl":72},{"sl":109},{"sl":127},{"sl":152}],"name":"Generate Enrollment Authority and verify that it is signed by the Root CA","pass":true,"statements":[{"sl":56},{"sl":73},{"sl":74},{"sl":110},{"sl":128},{"sl":154},{"sl":155},{"sl":156},{"sl":157},{"sl":161},{"sl":162},{"sl":163}]},"test_450":{"methods":[{"sl":63},{"sl":152}],"name":"Generate Enrollment Credential v1 for interoperability testing","pass":true,"statements":[{"sl":64},{"sl":65},{"sl":154},{"sl":155},{"sl":156},{"sl":157},{"sl":158},{"sl":159},{"sl":160},{"sl":161},{"sl":162},{"sl":163}]},"test_479":{"methods":[{"sl":152}],"name":"Verify serialization","pass":true,"statements":[{"sl":154},{"sl":155},{"sl":156},{"sl":157},{"sl":158},{"sl":159},{"sl":160},{"sl":161},{"sl":162},{"sl":163},{"sl":164},{"sl":165},{"sl":166},{"sl":167},{"sl":168},{"sl":169},{"sl":170}]},"test_501":{"methods":[{"sl":55},{"sl":109},{"sl":152}],"name":"Generate RootCA with Encryption Key and Geographic region and verify that all attributes are set.","pass":true,"statements":[{"sl":56},{"sl":110},{"sl":154},{"sl":155},{"sl":156},{"sl":157}]},"test_530":{"methods":[{"sl":72},{"sl":109},{"sl":127},{"sl":152}],"name":"Generate Enrollment Credential with a certificate as signer info","pass":true,"statements":[{"sl":73},{"sl":74},{"sl":110},{"sl":128},{"sl":154},{"sl":155},{"sl":156},{"sl":157},{"sl":161},{"sl":162},{"sl":163}]},"test_570":{"methods":[{"sl":258}],"name":"Verify toString","pass":true,"statements":[{"sl":260},{"sl":263},{"sl":264}]},"test_575":{"methods":[{"sl":55},{"sl":152},{"sl":176}],"name":"Verify that findRecipientInfo find correct RecipientInfo","pass":true,"statements":[{"sl":56},{"sl":154},{"sl":155},{"sl":156},{"sl":157},{"sl":158},{"sl":159},{"sl":160},{"sl":161},{"sl":162},{"sl":163},{"sl":179},{"sl":180},{"sl":181},{"sl":182},{"sl":183},{"sl":184},{"sl":185},{"sl":186},{"sl":187},{"sl":188},{"sl":189},{"sl":190}]},"test_583":{"methods":[{"sl":109}],"name":"Verify the constructors and getters","pass":true,"statements":[{"sl":110}]},"test_597":{"methods":[{"sl":55},{"sl":176}],"name":"Verify deserialization","pass":true,"statements":[{"sl":56},{"sl":179},{"sl":180},{"sl":183},{"sl":184},{"sl":185},{"sl":186}]},"test_622":{"methods":[{"sl":55},{"sl":176}],"name":"Verify getVerificationKey","pass":true,"statements":[{"sl":56},{"sl":179},{"sl":180},{"sl":181},{"sl":182},{"sl":183},{"sl":184},{"sl":185},{"sl":186},{"sl":187},{"sl":188},{"sl":189},{"sl":190}]},"test_66":{"methods":[{"sl":72},{"sl":109},{"sl":127},{"sl":152}],"name":"Generate Authorization CA v1 for interoperability testing","pass":true,"statements":[{"sl":73},{"sl":74},{"sl":110},{"sl":128},{"sl":154},{"sl":155},{"sl":156},{"sl":157},{"sl":161},{"sl":162},{"sl":163}]},"test_669":{"methods":[{"sl":63},{"sl":152}],"name":"Generate Authorization Ticket and Signed Secured Message v1 for interoperability testing","pass":true,"statements":[{"sl":64},{"sl":65},{"sl":154},{"sl":155},{"sl":156},{"sl":157},{"sl":158},{"sl":159},{"sl":160},{"sl":161},{"sl":162},{"sl":163}]},"test_679":{"methods":[{"sl":55},{"sl":109},{"sl":152}],"name":"Generate RootCA without Encryption Key and Geographic region and verify that all other attributes are set.","pass":true,"statements":[{"sl":56},{"sl":110},{"sl":154},{"sl":155},{"sl":156},{"sl":157}]},"test_682":{"methods":[{"sl":63},{"sl":109},{"sl":118},{"sl":152}],"name":"Generate Enrollment Credential with a digest as signer info","pass":true,"statements":[{"sl":64},{"sl":65},{"sl":110},{"sl":119},{"sl":154},{"sl":155},{"sl":156},{"sl":157},{"sl":158},{"sl":159},{"sl":160},{"sl":161},{"sl":162},{"sl":163}]},"test_694":{"methods":[{"sl":55},{"sl":176}],"name":"Verify that it is possible to parse a SecureMessage generate by interoperability site at https://werkzeug.dcaiti.tu-berlin.de/etsi/ts103097/","pass":true,"statements":[{"sl":56},{"sl":179},{"sl":180},{"sl":183},{"sl":184},{"sl":185},{"sl":186},{"sl":187},{"sl":188},{"sl":189},{"sl":190}]},"test_709":{"methods":[{"sl":63},{"sl":72},{"sl":109},{"sl":118},{"sl":127},{"sl":152}],"name":"Generate Signed CAM Message with and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":64},{"sl":65},{"sl":73},{"sl":74},{"sl":110},{"sl":119},{"sl":128},{"sl":154},{"sl":155},{"sl":158},{"sl":159},{"sl":160},{"sl":161},{"sl":162},{"sl":163}]},"test_719":{"methods":[{"sl":152}],"name":"Verify getEncoded","pass":true,"statements":[{"sl":154},{"sl":155},{"sl":158},{"sl":159},{"sl":160}]},"test_728":{"methods":[{"sl":72}],"name":"Verify illegal subjec type no root ca and CA certificate null throws illegal argument exception","pass":true,"statements":[{"sl":73},{"sl":74}]},"test_808":{"methods":[{"sl":72},{"sl":109},{"sl":127},{"sl":152}],"name":"Generate Authorization Ticket with a certificate as signer info","pass":true,"statements":[{"sl":73},{"sl":74},{"sl":110},{"sl":128},{"sl":154},{"sl":155},{"sl":156},{"sl":157},{"sl":161},{"sl":162},{"sl":163}]},"test_819":{"methods":[{"sl":258}],"name":"Verify toString","pass":true,"statements":[{"sl":260},{"sl":261},{"sl":262},{"sl":266},{"sl":267}]},"test_846":{"methods":[{"sl":55},{"sl":63},{"sl":152},{"sl":176}],"name":"Verify SignSecuredMessage using signer info type: certificate_digest_with_ecdsap256 generates a valid signature and that verifySecuredMessage can verify it.","pass":true,"statements":[{"sl":56},{"sl":64},{"sl":65},{"sl":154},{"sl":155},{"sl":158},{"sl":159},{"sl":160},{"sl":179},{"sl":180},{"sl":183},{"sl":184},{"sl":185},{"sl":186}]},"test_857":{"methods":[{"sl":152}],"name":"Verify serialization","pass":true,"statements":[{"sl":154},{"sl":155},{"sl":156},{"sl":157},{"sl":161},{"sl":162},{"sl":163}]},"test_863":{"methods":[{"sl":55},{"sl":152},{"sl":176}],"name":"Verify that serializeCertWithoutSignature encodes the certificate without the signature correcly","pass":true,"statements":[{"sl":56},{"sl":154},{"sl":155},{"sl":156},{"sl":157},{"sl":158},{"sl":159},{"sl":160},{"sl":161},{"sl":162},{"sl":163},{"sl":179},{"sl":180},{"sl":181},{"sl":182},{"sl":183},{"sl":184},{"sl":185},{"sl":186},{"sl":187},{"sl":188},{"sl":189},{"sl":190}]},"test_868":{"methods":[{"sl":84},{"sl":109},{"sl":139},{"sl":152}],"name":"Generate Enrollment Credential with a certificate chain as signer info","pass":true,"statements":[{"sl":85},{"sl":86},{"sl":110},{"sl":140},{"sl":154},{"sl":155},{"sl":156},{"sl":157},{"sl":161},{"sl":162},{"sl":163},{"sl":164},{"sl":165},{"sl":166}]},"test_913":{"methods":[{"sl":55},{"sl":176}],"name":"Verify deserialization","pass":true,"statements":[{"sl":56},{"sl":179},{"sl":180},{"sl":181},{"sl":182}]},"test_915":{"methods":[{"sl":72},{"sl":127},{"sl":152}],"name":"Generate Signed DENM Message and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":73},{"sl":74},{"sl":128},{"sl":154},{"sl":155},{"sl":158},{"sl":159},{"sl":160},{"sl":161},{"sl":162},{"sl":163}]},"test_949":{"methods":[{"sl":55},{"sl":109},{"sl":118},{"sl":127},{"sl":139},{"sl":148},{"sl":176}],"name":"Verify deserialization","pass":true,"statements":[{"sl":56},{"sl":110},{"sl":119},{"sl":128},{"sl":140},{"sl":149},{"sl":179},{"sl":180},{"sl":181},{"sl":182},{"sl":183},{"sl":184},{"sl":185},{"sl":186},{"sl":187},{"sl":188},{"sl":189},{"sl":190},{"sl":191},{"sl":192},{"sl":193},{"sl":194},{"sl":195},{"sl":196},{"sl":197},{"sl":198}]},"test_95":{"methods":[{"sl":55},{"sl":109},{"sl":176}],"name":"Verify deserialization","pass":true,"statements":[{"sl":56},{"sl":110},{"sl":179},{"sl":180},{"sl":181},{"sl":182},{"sl":187},{"sl":188},{"sl":189},{"sl":190}]},"test_959":{"methods":[{"sl":55},{"sl":72},{"sl":109},{"sl":127},{"sl":152}],"name":"Generate Authorization Authority and verify that it is signed by the Root CA","pass":true,"statements":[{"sl":56},{"sl":73},{"sl":74},{"sl":110},{"sl":128},{"sl":154},{"sl":155},{"sl":156},{"sl":157},{"sl":161},{"sl":162},{"sl":163}]},"test_965":{"methods":[{"sl":55},{"sl":109},{"sl":152},{"sl":176}],"name":"Test to verifyCertificate","pass":true,"statements":[{"sl":56},{"sl":110},{"sl":154},{"sl":155},{"sl":156},{"sl":157},{"sl":158},{"sl":159},{"sl":160},{"sl":179},{"sl":180},{"sl":181},{"sl":182},{"sl":183},{"sl":184},{"sl":185},{"sl":186},{"sl":187},{"sl":188},{"sl":189},{"sl":190}]},"test_973":{"methods":[{"sl":152}],"name":"Verify getEncoded","pass":true,"statements":[{"sl":154},{"sl":155},{"sl":156},{"sl":157},{"sl":161},{"sl":162},{"sl":163}]},"test_979":{"methods":[{"sl":258}],"name":"Verify toString","pass":true,"statements":[{"sl":260},{"sl":261},{"sl":262},{"sl":263},{"sl":264},{"sl":271},{"sl":272}]},"test_99":{"methods":[{"sl":152}],"name":"Verify serialization","pass":true,"statements":[{"sl":154},{"sl":155},{"sl":158},{"sl":159},{"sl":160}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [575, 292, 913, 622, 949, 694, 501, 353, 597, 863, 285, 379, 105, 846, 95, 28, 965, 679, 959], [575, 292, 913, 622, 949, 694, 501, 353, 597, 863, 285, 379, 105, 846, 95, 28, 965, 679, 959], [], [], [], [], [], [], [450, 207, 669, 709, 846, 682, 159, 315], [450, 207, 669, 709, 846, 682, 159, 315], [450, 207, 669, 709, 846, 682, 159, 315], [], [], [], [], [], [], [808, 292, 728, 915, 66, 379, 709, 530, 28, 959], [808, 292, 728, 915, 66, 379, 709, 530, 28, 959], [808, 292, 728, 915, 66, 379, 709, 530, 28, 959], [], [], [], [], [], [], [], [], [], [868, 253], [868, 253], [868, 253], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [868, 583, 808, 292, 253, 949, 501, 353, 66, 305, 379, 709, 95, 682, 530, 28, 965, 315, 679, 959], [868, 583, 808, 292, 253, 949, 501, 353, 66, 305, 379, 709, 95, 682, 530, 28, 965, 315, 679, 959], [], [], [], [], [], [], [], [949, 305, 709, 682, 159, 315], [949, 305, 709, 682, 159, 315], [], [], [], [], [], [], [], [808, 292, 949, 353, 915, 66, 305, 379, 709, 530, 28, 959], [808, 292, 949, 353, 915, 66, 305, 379, 709, 530, 28, 959], [], [], [], [], [], [], [], [], [], [], [868, 253, 949, 305], [868, 253, 949, 305], [], [], [], [], [], [], [], [949, 305], [949, 305], [], [], [868, 575, 99, 450, 808, 857, 719, 292, 3, 253, 501, 353, 915, 66, 863, 379, 105, 973, 669, 709, 846, 682, 479, 530, 28, 159, 965, 359, 315, 679, 959], [], [868, 575, 99, 450, 808, 857, 719, 292, 3, 253, 501, 353, 915, 66, 863, 379, 105, 973, 669, 709, 846, 682, 479, 530, 28, 159, 965, 359, 315, 679, 959], [868, 575, 99, 450, 808, 857, 719, 292, 3, 253, 501, 353, 915, 66, 863, 379, 105, 973, 669, 709, 846, 682, 479, 530, 28, 159, 965, 359, 315, 679, 959], [868, 575, 450, 808, 857, 3, 253, 501, 66, 863, 379, 105, 973, 669, 682, 479, 530, 965, 315, 679, 959], [868, 575, 450, 808, 857, 3, 253, 501, 66, 863, 379, 105, 973, 669, 682, 479, 530, 965, 315, 679, 959], [575, 99, 450, 719, 292, 353, 915, 863, 105, 669, 709, 846, 682, 479, 28, 159, 965, 359, 315], [575, 99, 450, 719, 292, 353, 915, 863, 105, 669, 709, 846, 682, 479, 28, 159, 965, 359, 315], [575, 99, 450, 719, 292, 353, 915, 863, 105, 669, 709, 846, 682, 479, 28, 159, 965, 359, 315], [868, 575, 450, 808, 857, 292, 253, 353, 915, 66, 863, 379, 105, 973, 669, 709, 682, 479, 530, 28, 315, 959], [868, 575, 450, 808, 857, 292, 253, 353, 915, 66, 863, 379, 105, 973, 669, 709, 682, 479, 530, 28, 315, 959], [868, 575, 450, 808, 857, 292, 253, 353, 915, 66, 863, 379, 105, 973, 669, 709, 682, 479, 530, 28, 315, 959], [868, 253, 479], [868, 253, 479], [868, 253, 479], [479], [479], [479], [479], [], [], [], [], [], [575, 292, 913, 622, 949, 694, 353, 597, 863, 285, 105, 846, 95, 28, 965], [], [], [575, 292, 913, 622, 949, 694, 353, 597, 863, 285, 105, 846, 95, 28, 965], [575, 292, 913, 622, 949, 694, 353, 597, 863, 285, 105, 846, 95, 28, 965], [575, 913, 622, 949, 863, 285, 105, 95, 965], [575, 913, 622, 949, 863, 285, 105, 95, 965], [575, 292, 622, 949, 694, 353, 597, 863, 105, 846, 28, 965], [575, 292, 622, 949, 694, 353, 597, 863, 105, 846, 28, 965], [575, 292, 622, 949, 694, 353, 597, 863, 105, 846, 28, 965], [575, 292, 622, 949, 694, 353, 597, 863, 105, 846, 28, 965], [575, 292, 622, 949, 694, 353, 863, 285, 105, 95, 28, 965], [575, 292, 622, 949, 694, 353, 863, 285, 105, 95, 28, 965], [575, 292, 622, 949, 694, 353, 863, 285, 105, 95, 28, 965], [575, 292, 622, 949, 694, 353, 863, 285, 105, 95, 28, 965], [949], [949], [949], [949], [949], [949], [949], [949], [], [], [], [], [], [], [207], [], [207], [207], [207], [207], [207], [], [207], [207], [207], [], [207], [], [207], [], [207], [], [], [], [207], [], [207], [], [207], [], [207], [], [207], [207], [207], [207], [], [], [207], [207], [207], [], [], [207], [], [], [207], [207], [207], [], [207], [], [207], [], [], [], [], [570, 979, 376, 819], [], [570, 979, 376, 819], [979, 376, 819], [979, 376, 819], [570, 979], [570, 979], [], [819], [819], [], [], [], [979], [979], [], [], [], [], [], [], [], [], [], []]