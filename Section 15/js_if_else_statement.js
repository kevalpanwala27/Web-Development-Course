var yourName = prompt("What is your name?");
var theirName = prompt("What is their name?");
var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
if (loveScore > 70) {
  alert(
    "Your love score is " +
      loveScore +
      "%." +
      " You love each other like Kanye loves Kanye."
  );
}
if (loveScore > 30 && loveScore <= 70) {
  alert("Your love score is " + loveScore + "%.");
}
if (loveScore <= 30) {
  alert(
    "Your love score is " +
      loveScore +
      "%." +
      " You go together like oil and water."
  );
}

// && is the AND operator
// || is the OR operator
// ! is the NOT operator
// === is the EQUAL operator
// !== is the NOT EQUAL operator
// > is the GREATER THAN operator
// < is the LESS THAN operator
// >= is the GREATER THAN OR EQUAL TO operator
// <= is the LESS THAN OR EQUAL TO operator
// == is the EQUAL operator
// != is the NOT EQUAL operator
// = is the ASSIGNMENT operator
