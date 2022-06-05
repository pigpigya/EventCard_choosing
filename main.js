var cards = ["1", "2", "3"];
var choose = cards.length;
var ranNum = cards.length;

function PickCard() {
  console.log(choose)
  if (choose == cards.length) {
    cards = getRandom(cards);
    choose = 0;
    console.log("wash");
  }
  else {
    console.log(cards);
    var card = cards[choose];
    var card_div = document.getElementById("card");
    card_div.innerHTML = `<img src='images/${card}.jpg' alt='Playing Card'>`;
    choose++;
  }
  

}
function getRandom(cards) {
  var ranNum = cards.length;
  var ranCards = [];
  for (var i = 0; i < ranNum; i++) {
    var ran = Math.floor(Math.random() * (cards.length - i));
    ranCards.push(cards[ran]);
    cards[ran] = cards[cards.length - i - 1];
  }
  return ranCards;
}
