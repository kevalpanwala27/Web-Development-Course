function whoispaying() {
  var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
  var randomName = Math.floor(Math.random() * names.length);
  return names[randomName] + " is going to buy lunch today!";
}
