...
add(arr) {
  return arr.map(function (item) {
    return that.prefix + ' ' + item;
  }, this);
}
...