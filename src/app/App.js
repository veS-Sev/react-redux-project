import './App.css';
import React from 'react';
import { CustomButton } from './components/custom-button/custom-button';
import { CustomField } from './components/custom-field/custom-field';
import { CustomInput } from './components/custom-input/custom-input';
import { useInput } from './components/custom-button/hooks/use-input.hook';
import { useState, useEffect} from 'react';
function App() {
  const [disabledAdd, changeDisabledAdd] = useState(true)
  const [disabledGet, changeDisabledGet] = useState(true)
  const inputSum=useInput('')
  const [result, changeResult] = useState(0)

 const  handleAddMoney=()=>{
 changeResult(result+Number(inputSum.value))
  inputSum.setValue('')
 }
  const  handleGetMoney=()=>{
    changeResult(result-inputSum.value)
     inputSum.setValue('')
  }
  useEffect(()=>{
const numberValidator = str => /^\d+$/.test(str)
if(numberValidator(inputSum.value)===true&&Number(inputSum.value)>0){
  changeDisabledAdd(false)
}else{changeDisabledAdd(true)}
if(result>Number(inputSum.value)&&Boolean(inputSum.value)===true){
  changeDisabledGet(false)
}else{changeDisabledGet(true)}
console.log(numberValidator(inputSum.value))
console.log(typeof(inputSum.value))
  },[inputSum.value])
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <section className="App-input-section">
        <CustomInput id="input-sum" placeholder={"ВВЕДИТЕ СУММУ"}value={inputSum.value} onChange={(event)=>inputSum.handleChange(event)} />
      </section>
      <section className="App-output-section"><CustomField result={result} id="field" /></section>
      <section className="App-button-section">
        <CustomButton name="ВНЕСТИ ДЕНЬГИ" id="add-money-button" onClick={handleAddMoney} disabled={disabledAdd}/>
        <CustomButton name="ПОЛУЧИТЬ ДЕНЬГИ" id="get-money-mutton" onClick={handleGetMoney} disabled={disabledGet}/></section>
    </div>
  );
}

export default App;
