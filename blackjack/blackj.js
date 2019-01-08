
var deck = [];
var suits = ['H', 'D', 'S', 'C'];
var name1 = ['A', '2', '3', '4', '5', '6', '7', '8', '9','10', 'J', 'Q', 'K'];
var value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
function buildDeck(){ 
    for (var s = 0; s < suits.length; s++) {
    for(var n = 0; n < name1.length; n++){
        var card = { };
        card.name = name1[n];
        card.points = value[n];
        card.suit = suits[s];
        card.img = 'JPEG/' + name1[n] + suits[s] + '.jpg';
        deck.push(card)
    }
}
}
var deal1 = document.getElementById('box1');
var deal2 = document.getElementById('box2');
var player = [];
var dealer = [];
var playerPoints = 0;
var dealerPoints = 0;

// var resultD = dealerPoints;
// var resultP = result(player);


document.getElementById("deal-button").addEventListener("click", function(){
    // reset the deck
    reset(deal1,deal2 )
    player = [];
    dealer = [];
    playerPoints = 0;
    dealerPoints = 0;
    buildDeck()
    shuffleArray(deck)
    
    // 2cards for the player
    var card1 = deck.pop(); 
    player.push(card1);
    var card2 = deck.pop(); 
    player.push(card2);

    // 2cards for the dealer
    var card3 = deck.pop();
    dealer.push(card3);
    var card4 = deck.pop();
    dealer.push(card4);
   
    playerPoints += card1.points;
    playerPoints += card2.points;
    dealerPoints += card3.points;
    dealerPoints += card4.points;
    
    console.log(dealerPoints)
    console.log('dlayer')
    console.log(playerPoints)
    console.log('pealer')
    var DcardImage = dealer[0].img
    var DcardImage2 = dealer[1].img

    var image = document.createElement('img');
    image.setAttribute('src', DcardImage);
    deal1.append(image);

    var image = document.createElement('img');
    image.setAttribute('src', DcardImage2);
    deal1.append(image);

    var PcardImage = player[0].img
    var PcardImage2 = player[1].img

    var image = document.createElement('img');
    image.setAttribute('src',PcardImage );
    deal2.append(image);
    

    var image = document.createElement('img');
    image.setAttribute('src', PcardImage2);
    deal2.append(image);
    
    // dealer points
    var displayP = document.getElementById('dealer-points');
    displayP.innerHTML = dealerPoints

    // player points
    var displayP = document.getElementById('player-points');
    displayP.innerHTML = playerPoints
    // if it busted
    bust()
});


document.getElementById("hit-button").addEventListener("click", function(){
    

    var card3 = deck.pop(); 
    player.push(card3);

    playerPoints += card3.points;
    console.log('after hit')
    console.log(playerPoints)
    
    var image = document.createElement('img');
    image.setAttribute('src', getCardImageUrl(card3));
    deal2.append(image);


    // player points after the hit
    var displayP = document.getElementById('player-points');
    displayP.innerHTML = playerPoints
    bust()
});

document.getElementById("stand-button").addEventListener("click", function(){
    while(dealerPoints < 17){
        var DealerHit = deck.pop();
        dealer.push(DealerHit);
        dealerPoints += DealerHit.points
        
        var image = document.createElement('img');
        image.setAttribute('src', getCardImageUrl(DealerHit));
        deal1.append(image);
        var displayP = document.getElementById('dealer-points');
        displayP.innerHTML = dealerPoints

    }
    determine()
});

// function : make it randum
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

// function : calculate points
// function result(array2) {
//     var point = 0;
//     for(i = 0; i < array2.length; i++) {
//         point += array2[i].points
//     }
//     return point;
// }

// function : if it bust
function bust() {

    if(playerPoints > 21) {
        var messages = document.getElementById('messages');
        messages.textContent = 'Player busted';
    } else if (dealerPoints > 21) {
        messages.textContent = 'Dealer busted';
    }
}

// functioin : display cards iamge
function getCardImageUrl(card) {
    return card.img;
}

// function : determine the winner
function determine() {
    if( playerPoints < 22 && playerPoints > dealerPoints) {
        messages.innerHTML = 'Player won!'; //P is smaller than 22 and bigger than D
    }else if(playerPoints < 22 && dealerPoints > 21 ) {
        messages.innerHTML = 'Player won!'; //P is smaller than 22 and D is bigger than 21
     }else if(playerPoints > 21 && dealerPoints > 21) {
       messages.innerHTML = 'draw!';  //either are bigger than 21
    }else if(playerPoints < 22 && playerPoints === dealerPoints) {
        messages.innerHTML = 'draw!';  //smaller than 22 and same
    }else {
        messages.innerHTML = 'Player lost!';
    };
};


function reset(box1, box2) {
    while(box1.firstChild && box2.firstChild) {
        box1.removeChild(box1.firstChild);
        box2.removeChild(box2.firstChild);
    }
}