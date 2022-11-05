import { useState } from "react";
import './App.css';

function CalcButton({value, onClick}) {

  return (
    <button className = "calcButton" onClick ={onClick}>
       {value}
    </button>
  );
}


function CalcDisplay({display}) {
  return (
    <div className = "calcDisplay">
      {display}
    </div>
  );
}

function App() {

 
  const[num, setNum] = useState(0);

  const initialText = 'ENTER CODE'
  const[disp, setDisp] = useState(initialText);



  const numberClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    var numLength = num.toString().length


    if (numLength < 10){

        if (value === "0" && num === 0){
          setNum(value);
          setDisp(value);
        }else if (num === 0) {
          setNum(value)
          setDisp(value);
        } else{
          setNum(num + value)
          setDisp(num + value);
        }
    if (disp === "LOCKED"){
      setNum(value);
    }
    }

  };

  const enterClickHandler = (e) => {
    if (num === "2017000368"){
      setDisp("OPEN");
    }else{
      setDisp("LOCKED");
      setNum(0);
    }
  };

  const resetClickHandler = (e) => {
    setNum(0);
    setDisp(initialText);
  };

  return(

    <div className = "calcContainer">
    <CalcDisplay display = {disp}/>

    <div className = "calcButtonsContainer">
     <CalcButton value = "7" onClick={numberClickHandler}/>
     <CalcButton value = "8" onClick={numberClickHandler}/>
     <CalcButton value = "9" onClick={numberClickHandler}/> 
     <CalcButton value = "6" onClick={numberClickHandler}/>
     <CalcButton value = "5" onClick={numberClickHandler}/>
     <CalcButton value = "4" onClick={numberClickHandler}/>
     
     <CalcButton value = "3" onClick={numberClickHandler}/>
     <CalcButton value = "2" onClick={numberClickHandler}/>
     <CalcButton value = "1" onClick={numberClickHandler}/>
     <CalcButton value = "RESET"onClick={resetClickHandler}/>  
     <CalcButton value = "0" onClick={numberClickHandler}/>
     <CalcButton value = "ENTER"onClick={enterClickHandler}/>

    </div>

    </div>
  )
}
export default App;
