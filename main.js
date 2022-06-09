var cards = ["中立格子", "任意門", "佔領點交換", "前進", "受困山洞",
 "地圖傳送", "天翻地覆", "大風吹", "失去格子", "守護星", 
 "山崩", "後退", "拖油瓶", "掉入湖中", "核電廠爆炸", 
 "獲得格子", "解除狀態", "湖水暴漲"];
var choose = 0;
var ranNum = cards.length;

cards = getRandom(cards);

function PickCard() {
  var card_div = document.getElementById("card");
  var cardName = document.getElementById("cardName");
  var buttonFont = document.getElementById("randomButton");

  if (choose == cards.length) {    
    choose = 0;
    cards = getRandom(cards);

    cardName.innerHTML = " ";
    card_div.innerHTML = `<img src='事件卡/back.jpg' alt='Playing Card'>`;
  }
  else {
    var card = cards[choose];
    
    choose++;
    console.log(cards);

    card_div.innerHTML = `<img src='事件卡/${card}.jpg' alt='Playing Card'>`;
    cardName.innerHTML = card;
    
  }

  if (choose == cards.length) {
    buttonFont.innerHTML = "洗牌";
  }
  else {
    buttonFont.innerHTML = "抽牌";
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