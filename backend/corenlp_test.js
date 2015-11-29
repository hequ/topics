var NLP = require('stanford-corenlp');

var coreNLP = new NLP.StanfordNLP({
    "nlpPath": "./node_modules/stanford-corenlp/corenlp",
    "version": "3.5.2"
});

coreNLP.loadPipelineSync();

console.time('corenlp');

coreNLP.process('This is so good.', function(err, result) {
    // console.log(err,JSON.stringify(result));
    console.timeEnd('corenlp');
});