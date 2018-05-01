
// Node.js modules.
const util = require('util');
const readFile = util.promisify(require('fs').readFile);
const path = require('path');

// 3rd-party modules.
const test = require('ava');

// self modules.
const parser = require('..');
const parseString = util.promisify(parser.string);


function readTestFile(filename) {
  return readFile(path.join(__dirname, 'data', filename));
}


test('test simple', async t => {
  try {
    let data = await readTestFile('simple.rtf');
    let doc = await parseString(data);
    t.is(doc.content.length, 2);
    t.is(doc.content[0].content[0].value, 'This is a text rtf file created by TextEdit.app in Mac.');
    t.is(doc.content[1].content[0].value, 'very simple, no decorations, no multibyte characters here.');
    t.pass();
  } catch(e) {
    t.fail(e);
  }
});


test('test simple 2nd', async t => {
  try {
    let data = await readTestFile('simple.rtf');
    let doc = await parseString(data);
    t.is(doc.content.length, 2);
    t.is(doc.content[0].content[0].value, 'This is a text rtf file created by TextEdit.app in Mac.');
    t.is(doc.content[1].content[0].value, 'very simple, no decorations, no multibyte characters here.');
    t.pass();
  } catch(e) {
    t.fail(e);
  }
});


