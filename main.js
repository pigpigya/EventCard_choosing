var cards = ["中立格子1", "任意移動1", "守護星3", "後退2", "佔領點交換1", "前進1", "受困山洞",
  "地圖傳送1", "前進3", "天翻地覆", "解除狀態2", "大風吹1", "佔領點交換2", "中立格子2", "任意移動2",
  "失去格子1", "守護星1", "山崩", "後退1", "守護星2", "拖油瓶", "獲得格子2", "前進2", "獲得格子3",
  "中立格子3", "後退3", "失去格子3", "地圖傳送2", "大風吹2", "掉入湖中", "核電廠爆炸", "獲得格子1",
  "解除狀態1", "失去格子2", "湖水暴漲"];
var choose = 0;
var ranNum = cards.length;
var card = 0;

cards = getRandom(cards);

function PickCard() {
  var press = document.getElementById("press");
  var card_div = document.getElementById("pickCard");
  var cardName = document.getElementById("cardName");
  var buttonFont = document.getElementById("randomButton");
  var remain_num = document.getElementById("remain");
  var remainCard = 0;

  if (choose == cards.length) {
    choose = 0;
    cards = getRandom(cards);

    cardName.innerHTML = "事件卡";
    card_div.innerHTML = `<input type="button" style="background-image:url(事件卡/back.png);width:278px;height:420px;background-size:cover;border-radius: 15px;">`;
    remain_num.innerHTML = " ";
  }
  else {
    card = cards[choose];

    choose++;
    console.log(choose);
    remainCard = "剩餘張數："+(35 - choose);

    if (choose == 1) {
      press.innerHTML = "按一下圖片";
    }
    else {
      press.innerHTML = "";
    }

    card_div.innerHTML = `<input type="button" style="background-image:url(事件卡/${card}.jpg);width:278px;height:420px;background-size:cover;border-radius: 15px;" onclick="detail();">`;
    cardName.innerHTML = card;
    remain_num.innerHTML = remainCard;

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

function detail() {
  var card_div = document.getElementById("pickCard");
  var card_detail = card + "敘述文字";

  card_div.innerHTML = `<input type="button" style="background-image:url(卡片敘述/${card_detail}.jpg);width:278px;height:420px;background-size:contain;border-radius: 15px;" onclick="toCard()">`;
}

function toCard() {
  var card_div = document.getElementById("pickCard");

  card_div.innerHTML = `<input type="button" style="background-image:url(事件卡/${card}.jpg);width:278px;height:420px;background-size:contain;border-radius: 15px;" onclick="detail();">`;
}
