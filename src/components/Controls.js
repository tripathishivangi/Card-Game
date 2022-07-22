import {useState,useEffect} from 'react';
import Button from './UI/Button'
import './Deck.css';
import Sorting from './sorting';

const Controls = (props) => {

    const [count,setCount] = useState(0)
    const [display,setDisplay] = useState(false)
    const [hand,setHand] = useState([])
    const [deleted,setDelete] = useState([])

    let dummy = JSON.parse(localStorage.getItem("hand"))
    useEffect(() => {
        if(dummy != null){
            setHand(dummy)
        }
        // eslint-disable-next-line
    },[])

    const savingData = () => {
        localStorage.setItem("deck",JSON.stringify(props.fullDeck))
        localStorage.setItem("hand",JSON.stringify(hand))
        alert("Data saved Successfully")
        
    }

    const resetData = ()  => {
        localStorage.removeItem("deck")
        localStorage.removeItem("hand")
        props.reset()
        setHand([])
        setDisplay(false)
        alert("Data reset Successfully")
        
    }

    const sortedData = (data) => {
        alert("Data sorted Successfully")
        setHand(data)
    }
    
    const drawCard = () => {
        setDisplay(true)
        setCount(0)
        const handObj ={
            value : props.fullDeck[count].value,
            type : props.fullDeck[count].type
        }
        
        setHand([...hand,handObj])
        let index = props.fullDeck.findIndex( element => {
            if (element.value === props.fullDeck[count].value && element.type === props.fullDeck[count].type) {
              return true;
            }
            return false;
          });
          const removed=props.fullDeck.splice(index,1)
          setDelete(removed)
          props.remove(index)
          
    }


    return(
    <div>
    <div className="position__left">
    <h2>Controls</h2>
    <div>
    <Button type="button" onClick={savingData}>Save</Button>
    <Button type="button" onClick={resetData}>Reset</Button>
    </div>
    <div>
        <Button type="button"  style={{"margin-left" : "20px"}} onClick={drawCard}>Draw</Button>
        {display && <h4>{deleted[0].value} of {deleted[0].type}</h4>}
    </div>
    </div>
    <Sorting  fullHand={hand}  sortedData={sortedData}></Sorting>
    
    </div>
    );
}

export default Controls;