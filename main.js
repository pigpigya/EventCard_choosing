function selectCard(){
    var cards1 = ["1", "2", "3"];
    var card_n1 = cards1 [getRandom(0,3)];
    var card = card_n1;
    console.log( card  );
    var card_div = document.getElementById("card");
    card_div.innerHTML =  `<img src='images/${card}.jpg' alt='Playing Card'>`;
  }
  function getRandom(min, max) { //  min <= x < max, x是整數亂數
    return Math.floor(Math.random() * (max - min) ) + min;
  }