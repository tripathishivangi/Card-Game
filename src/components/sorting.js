import {useState,useEffect}  from 'react';
import Button from './UI/Button';
import './Deck.css';

const Sorting = (props) => {
    const [hand,setHand] = useState(props.fullHand)

    useEffect( ()=> {
        setHand(props.fullHand)
    },[props])

    const sorted = () => {
        let Clubs=[]
        let Spades=[]
        let Hearts=[]
        let Diamonds=[]
        let suit=[Clubs,Spades,Hearts,Diamonds]
        let final=[]
        
        for(let i=0;i<hand.length;i++){
            if(hand[i].type==='Clubs'){Clubs.push(hand[i])}
            if(hand[i].type==='Spades'){Spades.push(hand[i])}
            if(hand[i].type==='Hearts'){Hearts.push(hand[i])}
            if(hand[i].type==='Diamonds'){Diamonds.push(hand[i])}
        }

        for(let suits of suit){
            let number=[]
            let char=[]
        for(var j=0;j<suits.length;j++){
            if(typeof suits[j].value === 'number'){number.push(suits[j].value)}
            else{char.push(suits[j].value)} 
        }

        number.sort(function(a, b) {return a-b})
        char.sort()
        console.log(number,char)

        for(let k=0;k<number.length;k++){
            const finalList={value:number[k] , type:suits[0].type}
            final.push(finalList)
        }
        for(let k=0;k<char.length;k++){
            const finalList={value:char[k] , type:suits[0].type}
            final.push(finalList)
        }
        }
        setHand([...final])
        props.sortedData(final)

    }



    return (
    <div>
    <div className="position__left">
        <h2>Hand</h2>
        <Button type="button" onClick={sorted}>Sort</Button>
        {hand.map((card) => (
            <p key={Math.random()}>{card.value} of {card.type}</p>
        ))}
        </div>
        </div>
    )
}

export default Sorting;