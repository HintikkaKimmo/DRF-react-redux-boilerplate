/**
 * Created by Kimmo on 10/07/2017.
 */

var testContext = require.context('.', true, /.spec$/);
testContext.keys().forEach(testContext);
