var cards = ["中立格子", "任意門", "佔領點交換", "前進", "受困山洞",
 "地圖傳送", "天翻地覆", "大風吹", "失去格子", "守護星", 
 "山崩", "後退", "拖油瓶", "掉入湖中", "核電廠爆炸", 
 "獲得格子", "解除狀態", "湖水暴漲"];
var choose = 0;
var ranNum = cards.length;
var str = 0;

cards = getRandom(cards);

function PickCard() {
  buttonFont = document.getElementById("randomButton");
  cardName = document.getElementById("cardName");
  console.log(choose)
  if (choose == cards.length) {    
    cards = getRandom(cards);
    choose = 0;
    console.log("wash");
  }
  else {
    str = 1;
    console.log(cards);
    var card = cards[choose];
    var card_div = document.getElementById("card");
    card_div.innerHTML = `<img src='事件卡/${card}.jpg' alt='Playing Card'>`;
    choose++;
  }

  if (choose == cards.length) {
    buttonFont.innerHTML = "";
    cardName.innerHTML = card;
    card_div.innerHTML = `<img src = '事件卡/back.jpg' alt='Playing Card'>'`
  }
  else {
    buttonFont.innerHTML = "抽牌";
    cardName.innerHTML = card;
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
