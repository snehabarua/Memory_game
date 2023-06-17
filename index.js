let cardsArray=[

{
'name' : 'CSS',
'img' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdoUEQOuE1zcmU_k3o5j8HPvdRFfWAzX-X1w&usqp=CAU',

},
{
    'name' : 'HTML',
    'img' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdzN1me5xSdczcSh_T6r8dfRFGfNiVHoTSpP0MUdw-SHmg0kBBD2d3cx_hGyT1xZ0GwuI&usqp=CAU',

},
{
    'name': 'jQuery',
    'img' : 'https://avatars.githubusercontent.com/u/70142?s=280&v=4',

},
{
    'name': 'JS',
    'img' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnRi_znVsc4QSvTQiFci8fdxiaZTsvidzh7A&usqp=CAU',
},
{
    'name': 'Node',
    'img': 'https://cdn-icons-png.flaticon.com/512/919/919825.png',
},
{
    'name': 'Python',
    'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaysaBsbhYRXK0RRC7du2SA-rOc0D8EYjuzA&usqp=CAU',
}

];

const parentDiv = document.querySelector('#card-section');
//step2 duplicate the cards
const gamecard = cardsArray.concat(cardsArray)
console.log(gamecard)

//step 3 this method creates a new shuffled array instead of modifying the
//original one 
 
let shuffledchild= Array.from(gamecard).sort( compareFn=() => 0.5 - Math.random());
 


//step4
let clickCount=0; 
let firstCard ="";
let secondCard = "";
//styling the match card
const card_matches = () => {
    let card_selected =document.querySelectorAll('.card_selected');
    card_selected.forEach((curElem) => {
        curElem.classList.add('card_match')
    });
} 
//step 7
 const resetgame = () => {
    clickCount=0;
     firstCard ="";
     secondCard = "";

     let card_selected= document.querySelectorAll('.card_selected');
     card_selected.forEach((curElem) => {
         curElem.classList.remove('card_selected')
     });
 }

parentDiv.addEventListener('click', (Event) =>{
    let curcard = Event.target;

    //step5
    if(curcard.id === "card-section"){
        return false
    }
    clickCount ++;
    if (clickCount<3) {
        if(clickCount === 1){
            firstCard= curcard.parentNode.dataset.name; 
            curcard.parentNode.classList.add('card_selected');

        }else{
            secondCard=curcard.parentNode.dataset.name;
            curcard.parentNode.classList.add('card_selected');
        }
        if (firstCard !== "" && secondCard !== "") {
            if (firstCard === secondCard) {
                // curcard.classList.add('card_match');
                setTimeout(() => {
                    card_matches()
                    resetgame()
                },1000)
                
            }
            else{
                setTimeout(() => {
                    
                    resetgame()
                },1000)
                
            }
        } 
        
    }
    
    if(curcard.id === "card-section"){
        return false
    }
    
})

//step1

for (let i = 0; i < shuffledchild.length; i++) {
    const childDiv = document.createElement('div')
    childDiv.classList.add('card')
    childDiv.dataset.name=shuffledchild[i].name;
    // childDiv.style.backgroundImage =`url(${shuffledchild[i].img})`;
    
    const front_div = document.createElement('div');
    front_div.classList.add('front-card')
    
    const back_div= document.createElement('div');
    back_div.classList.add('back-card')
    back_div.style.backgroundImage =`url(${shuffledchild[i].img})`;
    parentDiv.appendChild(childDiv)

    childDiv.appendChild(front_div)
    childDiv.appendChild(back_div)
}
