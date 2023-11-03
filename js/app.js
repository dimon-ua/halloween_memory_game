const gridArea = document.getElementById('grid-container')
const cards = document.getElementsByTagName('img')

let clickedItem = []
let cardsId= []
const winnersCards = []

let scoreCount = document.getElementById('score')
let gridImages = document.querySelectorAll('img')




//Creating an array with each image as an object with two name:value pairs
const cardArray = [
    {
        name: 'castle',
        img: 'images/castle.jpg'
    },

    {
        name: 'cat',
        img: 'images/cat.jpg'
    },

    {
        name: 'cute-cat',
        img: 'images/cute-cat.jpg'
    },

    {
        name: 'cute-ghost',
        img: 'images/cute-ghost.jpg'
    },

    {
        name: 'ghost',
        img: 'images/ghost.jpg'
    },

    {
        name: 'girl',
        img: 'images/girl.jpg'
    },

    {
        name: 'castle',
        img: 'images/castle.jpg'
    },

    {
        name: 'cat',
        img: 'images/cat.jpg'
    },

    {
        name: 'cute-cat',
        img: 'images/cute-cat.jpg'
    },

    {
        name: 'cute-ghost',
        img: 'images/cute-ghost.jpg'
    },

    {
        name: 'ghost',
        img: 'images/ghost.jpg'
    },

    {
        name: 'girl',
        img: 'images/girl.jpg'
   }    
]


//shuffling an array randomly
cardArray.sort(() => (Math.random() > .5) ? 1 : -1);

console.log(cardArray)

function addAtributes(){
    
}

function createGameTable(){
    for (let i=0; i < cardArray.length; i++){
        const card = document.createElement('img')
        console.log(card, i)
        card.setAttribute('src', 'images/halloween-spider.jpg')
        card.setAttribute("alt","Card is here")
        card.setAttribute('card-id', i)        
        card.addEventListener('click', cardClicked)
        gridArea.append(card)
    }
}

createGameTable()

function liestenerOff(){
    cards[cardsId[0]].removeEventListener('click', cardClicked)
    cards[cardsId[1]].removeEventListener('click', cardClicked)
}



function checkOnMatch(){
    const cards = document.querySelectorAll('img')
    console.log(cards)
    
    if(cardsId[0] === cardsId[1]){
        cards[cardsId[1]].setAttribute('src', 'images/fly-mouse.jpg')
        alert('Please choose another card')
        
    }

    if(clickedItem[0] === clickedItem[1]){
        scoreCount.innerHTML = parseInt(score.innerHTML) + 1              
        cards[cardsId[0]].setAttribute('src', 'images/fly-mouse.jpg')
        cards[cardsId[1]].setAttribute('src', 'images/fly-mouse.jpg')
        liestenerOff()
        winnersCards.push(clickedItem)
    } else {
        cards[cardsId[0]].setAttribute('src', 'images/halloween-spider.jpg')
        cards[cardsId[1]].setAttribute('src', 'images/halloween-spider.jpg')
        alert('Try again')
    }

    clickedItem = []
    cardsId = []

    if(winnersCards.length === 6){
        scoreCount.innerHTML = `You won with a score ${scoreCount.innerHTML}`
    }
}




function cardClicked(){
    const cardId = this.getAttribute('card-id')
    //adding a name of clicked card in clickedItemArray
    clickedItem.push(cardArray[cardId].name)

    cardsId.push(cardId)

    console.log(clickedItem)
    console.log(cardId)
    
    this.setAttribute('src', cardArray[cardId].img)
    if (clickedItem.length === 2){
        setTimeout(checkOnMatch, 300)
    }
}
