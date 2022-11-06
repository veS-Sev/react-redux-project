import './App.css';
import React from 'react';
import { CustomButton } from './components/custom-button/custom-button';
import { CustomField } from './components/custom-field/custom-field';
import { CustomInput } from './components/custom-input/custom-input';
import { useInput } from './components/custom-input/hooks/use-input.hook';
import { useButton } from './components/custom-button/hooks/use-button.hook';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
function App() {

  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)

  console.log('cash', cash)
  const inputSum = useInput('')
  const [result, changeResult] = useState(0)
  const { disabledAdd, disabledGet } = useButton(result, inputSum.value)
  const handleAddMoney = () => {
    changeResult(result + Number(inputSum.value))
    inputSum.setValue('')
  }
  const handleGetMoney = () => {
    changeResult(result - inputSum.value)
    inputSum.setValue('')
  }
  const addCash = (cash) => {
    dispatch({ type: 'ADD_CASH', payload: cash })
  }
  const getCash = (cash) => {
    dispatch({ type: 'GET_CASH', payload: cash })
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <section className='counter'>
        <div style={{ fontSize: "35px" }}>{cash}</div>
        <button className='counter-button' onClick={() => addCash(Number(prompt()))}>Добавить</button>
        <button className='counter-button' onClick={() => getCash(Number(prompt()))}>Получить</button>
      </section>
      <section className="App-input-section">
        <CustomInput id="input-sum" placeholder={"ВВЕДИТЕ СУММУ"} value={inputSum.value} onChange={(event) => inputSum.handleChange(event)} />
      </section>
      <section className="App-output-section">
        <CustomField result={result} id="field" /></section>
      <section className="App-button-section">
        <CustomButton name="ВНЕСТИ ДЕНЬГИ" id="add-money-button" onClick={handleAddMoney} disabled={disabledAdd} />
        <CustomButton name="ПОЛУЧИТЬ ДЕНЬГИ" id="get-money-mutton" onClick={handleGetMoney} disabled={disabledGet} /></section>
    </div>
  );
}

export default App;
