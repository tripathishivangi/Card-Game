import {useState,useEffect} from 'react';
import Card from './CardsList';
import Button from './UI/Button';
import Controls from './Controls';
import './Deck.css';

const Deck = () => {
    
    const [deck , newDeck] = useState(Card)
    let dummy = JSON.parse(localStorage.getItem("deck"))
    

    useEffect(() => {
        if(dummy != null){
            newDeck(dummy)
        }
        // eslint-disable-next-line
    },[])
    
    const removed = (index) => {
        deck.splice(index-1,1)
        newDeck([...deck])
    } 

    const reseting = () => {
        newDeck([...Card])
        console.log(deck)
    }

    return (
        <div className="container">
        <div className="position__left">
        <h2>Deck</h2>
        <Button type="button" onClick={() =>{newDeck([...deck].sort(() => Math.random() - 0.5));}}>Shuffle</Button>
        {deck.map((card) => (
            <p key={Math.random()}>{card.value} of {card.type}</p>
        ))}
        </div>
        <Controls className="position__right" fullDeck={deck}  remove={removed} reset={reseting}></Controls>
        </div>
    );
}

export default Deck;