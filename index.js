var Parse5 = require('parse5');

module.exports = function(str, opts) {
  opts = opts || {};
  opts.klass = opts.klass || '';

  var serializer = new Parse5.TreeSerializer();
  var parser     = new Parse5.Parser();

  var fragment = parser.parseFragment(str);

  fragment.childNodes.map(function(node){
    return walk(node, opts)
  });

  return serializer.serialize(fragment);
}

function walk(node, opts) {
  addClass(node, opts.klass);

  if (!node.childNodes) return node;

  node.childNodes && node.childNodes.map(function(node) {
    walk(node, opts);
  });

  return node;
}

function addClass(node, klass) {
  var matched = false;

  if (!node.attrs) return node;

  node.attrs.forEach(function(attr) {
    if (attr['name'] === 'class') {
      matched = true;
      attr['value'] += " " + klass;
    }
  });

  if (!matched) {
    node.attrs.push({name: 'class', value: " " + klass})
  }

  return node;
}
