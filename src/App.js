import { useState } from "react";
import './App.css';

function CalcButton({value, onClick}) {

  return (
    <button className = "calcButton" onClick ={onClick}>
       {value}
    </button>
  );
}
function CalcOnOFF({value, onClick}) {

  return (
    <button className = "calcOnOFF" onClick ={onClick}>
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

 
  const[num1, setNum1] = useState(0);
  const[oper, setOper] = useState(0);
  const[num2, setNum2] = useState(0);
  const[res, setRes] = useState(0);
  const[disp, setDisp] = useState(0);

  const initialText = 'OFF'
  const[text, setText] = useState(initialText);

  const numberClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    var numLength = num1.toString().length
 

    if (numLength < 16){
      if(oper === 0){
        setRes(0);

        if (value === "0" && num1 === 0){
          setNum1(0);
          setDisp(0);
        }else if (num1 === 0) {
          setNum1(value)
          setDisp(value);
        } else{
          setNum1(num1 + value)
          setDisp(num1 + value);
        }

      } else if (num2 === 0) {
          setNum2(value)
          setDisp(value);
          if (res !== 0){
            setNum1(res);
          }
      } else{
        setNum2(num2 + value)
        setDisp(num2 + value);
      }
    
    }
    
    if (text == "ON"){
      setDisp();
      setNum1();
      setNum2();
      setOper();
      setRes();
    }
    console.log(num1 + '|' + num2 + '|' + oper + '|' + res + '|' + 'value:' + value + 'length'+numLength )
  };


  const operClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setOper(value);
    setDisp(value);


    if (text == "ON"){
      setDisp();
      setNum1();
      setNum2();
      setOper();
      setRes();
    }
    console.log(num1 + '|' + num2 + '|' + oper + '|' + res + '|' + disp);
  };

  const delClickHandler = () => {
    if (num1 != 0) {
      setDisp(num1.substr(0, num1.length - 1));
      setNum1(num1.substr(0, num1.length - 1));
    }
    if (num2 != 0) {
      setDisp(num2.substr(0, num2.length - 1));
      setNum2(num2.substr(0, num2.length - 1));
    }
   

    console.log(num1 + '|' + num2 + '|' + oper + '|' + res + '|' + disp);
  };

  const equalClickHandler = () => {
    console.log(num1 + '|' + num2 + '|' + oper + '|' + res + '|' + disp);
    if(oper === "+") {
      setRes(parseFloat(num1) + parseFloat(num2))
      setDisp(parseFloat(num1) + parseFloat(num2));
      if (oper === "+"){
            setNum1(0);
            setNum2(0);
            setOper(0);
      }else if (oper === 0){
            setRes(0);
          }
     
    }else if (oper === "-"){
      setRes(parseFloat(num1) - parseFloat(num2));
      setDisp(parseFloat(num1) - parseFloat(num2));
      if (oper === "-"){
            setNum1(0);
            setNum2(0);
            setOper(0);
      }else if (oper === 0){ 
            setRes(0);
          }
     
    }else if (oper === "*"){
      setRes(parseFloat(num1) * parseFloat(num2));
      setDisp(parseFloat(num1) * parseFloat(num2));
      if (oper === "*"){
            setNum1(0);
            setNum2(0);
            setOper(0);
      }else if (oper === 0){
            setRes(0);
          }
     
    }else if (oper === "/"){
      setRes(parseFloat(num1) / parseFloat(num2));
      setDisp(parseFloat(num1) / parseFloat(num2));
      if (oper === "/"){
            setNum1(0);
            setNum2(0);
            setOper(0);
      }else if (oper === 0){
            setRes(0);
          }
     
    }else if (oper === "%"){
      setRes(parseFloat(num1) % parseFloat(num2));
      setDisp(parseFloat(num1) % parseFloat(num2));
      if (oper === "%"){
            setNum1(0);
            setNum2(0);
            setOper(0);
      }else if (oper === 0){
            setRes(0);
          }
    }else if (oper === "^"){
      setRes(parseFloat(num1) ** parseFloat(num2));
      setDisp(parseFloat(num1) ** parseFloat(num2));
      if (oper === "^"){
            setNum1(0);
            setNum2(0);
            setOper(0);
      }else if (oper === 0){
            setRes(0);
          }

      }else {
      setDisp("ERROR")
      setNum1(0);
      setNum2(0);
      setOper(0);
      setDisp(0);
    }

    if (text == "ON"){
      setDisp();
      setNum1();
      setNum2();
      setOper();
      setRes();
    }
  };

 const clearClickHandler = () => {
    setNum1(0);
    setNum2(0);
    setOper(0);
    setRes(0);
    setDisp(0);

    if (text == "ON"){
      setDisp();
      setNum1();
      setNum2();
      setOper();
      setRes();
    }
    console.log(num1 +'|'+ num2 +'|'+ oper +'|'+ res +'|'+ disp);
  };
  
  const percentClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    if (oper === 0){
      setNum1(parseFloat(num1) /100);
      setDisp(num1 + value);
      setRes(parseFloat(num1) /100);
    }else{
      setNum2(parseFloat(num2) /100);
      setDisp(num2 + value);
      setRes(parseFloat(num2) /100);
    }
    
    if (text == "ON"){
      setDisp();
      setNum1();
      setNum2();
      setOper();
      setRes();
    }

    console.log(oper + value + res)
  }

  const signClickHandler = () => {
    if (oper === 0){
      setNum1(-num1);
      setDisp(-num1);
    }else{
      setNum2(-num2);
      setDisp(-num2);
    }
    
    if (text == "ON"){
      setDisp();
      setNum1();
      setNum2();
      setOper();
      setRes();
    }
  };

  const decimalClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    if (oper === 0){
    setNum1(num1 + value);
    setDisp(num1 + value);
    }else{
      setNum2(num2 + value);
      setDisp(num2 + value);
    }

    if (text == "ON"){
      setDisp();
      setNum1();
      setNum2();
      setOper();
      setRes();
    }
  };

  const OnOffClickHandler = (e) => {
    e.preventDefault();
    const data = e.target.innerHTML;
    if (data == "OFF"){
      setText("ON")
    }else{
      setText("OFF")
    }
    if (data == "OFF"){
      setDisp()
      setNum1();
      setNum2();
      setOper();
      setRes();

    }else{
      setNum1(0);
      setNum2(0);
      setOper(0);
      setRes(0);
      setDisp(0);
    }

  };
  return(

    <div className = "calcContainer">
    <CalcDisplay display = {disp}/>

    <div className = "calcButtonsContainer">
       <CalcOnOFF value = {text} onClick={OnOffClickHandler}/>
       <CalcButton value = "del" onClick={delClickHandler}/>
       <CalcButton value = "Per"onClick={percentClickHandler}/>
       <CalcButton value = "7" onClick={numberClickHandler}/>
       <CalcButton value = "8" onClick={numberClickHandler}/>
       <CalcButton value = "9" onClick={numberClickHandler}/>
       <CalcButton value = "+" onClick={operClickHandler}/>
       <CalcButton value = "6" onClick={numberClickHandler}/>
       <CalcButton value = "5" onClick={numberClickHandler}/>
       <CalcButton value = "4" onClick={numberClickHandler}/>
       <CalcButton value = "-" onClick={operClickHandler}/>
       <CalcButton value = "3" onClick={numberClickHandler}/>
       <CalcButton value = "2" onClick={numberClickHandler}/>
       <CalcButton value = "1" onClick={numberClickHandler}/>
       <CalcButton value = "*" onClick={operClickHandler}/>
       <CalcButton value = "."onClick={decimalClickHandler}/>
       <CalcButton value = "0" onClick={numberClickHandler}/>
       <CalcButton value = "/"onClick={operClickHandler}/>
       <CalcButton value = "C" onClick={clearClickHandler}/>
       <CalcButton value = "+-"onClick={signClickHandler}/>
       <CalcButton value = "%"onClick={operClickHandler}/>
       <CalcButton value = "^"onClick={operClickHandler}/>
       <CalcButton value = "=" onClick={equalClickHandler}/>

    </div>

    </div>
  )
}
export default App;
