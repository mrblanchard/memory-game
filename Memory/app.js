document.addEventListener('DOMContentLoaded', () => {
    
    //card options
    const cardArray = [
        {
            name:'swordBlue',
            img: 'images/swordBlue.png'
        },
        {
            name:'swordWoodenRed',
            img: 'images/swordWoodenRed.png'
        },
        {
            name:'swordWoodenBlue',
            img: 'images/swordWoodenBlue.png'
        },
        {
            name:'swordWoodenGreen',
            img: 'images/swordWoodenGreen.png'
        },
        {
            name:'potionBlue',
            img: 'images/potionBlue.png'
        },
        {
            name:'link',
            img: 'images/link.png'
        },
        {
            name:'swordBlue',
            img: 'images/swordBlue.png'
        },
        {
            name:'swordWoodenRed',
            img: 'images/swordWoodenRed.png'
        },
        {
            name:'swordWoodenBlue',
            img: 'images/swordWoodenBlue.png'
        },
        {
            name:'swordWoodenGreen',
            img: 'images/swordWoodenGreen.png'
        },
        {
            name:'potionBlue',
            img: 'images/potionBlue.png'
        },
        {
            name:'link',
            img: 'images/link.png'
        },


        {
            name:'bomb',
            img: 'images/bomb.png'
        },
        {
            name:'bomb',
            img: 'images/bomb.png'
        },
        {
            name:'candleBlue',
            img: 'images/candleBlue.png'
        },
        {
            name:'candleBlue',
            img: 'images/candleBlue.png'
        },

        {
            name:'heart',
            img: 'images/heart.png'
        },
        {
            name:'heart',
            img: 'images/heart.png'
        },

        {
            name:'arrow1',
            img: 'images/arrow1.png'
        },
        {
            name:'arrow1',
            img: 'images/arrow1.png'
        },


        {
            name:'arrow2',
            img: 'images/arrow2.png'
        },
        {
            name:'arrow2',
            img: 'images/arrow2.png'
        },

        {
            name:'lifeFairy',
            img: 'images/lifeFairy.png'
        },
        {
            name:'lifeFairy',
            img: 'images/lifeFairy.png'
        }, 
        {
            name:'arrow3',
            img: 'images/arrow3.png'
        },
        {
            name:'arrow3',
            img: 'images/arrow3.png'
        },



        {
            name:'candleRed',
            img: 'images/candleRed.png'
        },
        {
            name:'candleRed',
            img: 'images/candleRed.png'
        },
        {
            name:'triforce',
            img: 'images/triforce.png'
        },
        {
            name:'triforce',
            img: 'images/triforce.png'
        }

    ]
    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    var cardsChosen =  [];
    var cardsChosenId =  [];
    var cardsWon =  [];
    

    function createBoard(){
        for (let i = 0; i < cardArray.length; i++){
            var card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }
       
        
        

    // check for matches
    function checkForMatch(){
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if(cardsChosen[0] === cardsChosen[1]){
            alert('You found a match!');
            cards[optionOneId].setAttribute('src', 'images/triforce.png');
            cards[optionTwoId].setAttribute('src', 'images/triforce.png');
            cardsWon.push(cardsChosen);
        }
        else if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match');
            cards[optionOneId].setAttribute('src', 'images/triforce.png')
            cards[optionTwoId].setAttribute('src', 'images/triforce.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
          } else {
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            alert('Sorry, try again')
          }
      
        
        cardsChosen = [];
        cardsChosenId = [];

        resultDisplay.textContent = cardsWon.length;
        if(cardsWon.length === cardArray.length/2){
            resultDisplay.textContent = ' Congratulations! You found them all!';
        } 

       
    }

    // flip your card
    function flipCard() {
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if(cardsChosen.length === 2){
            setTimeout(checkForMatch, 500);
        }
    }
    
    createBoard();
}) 