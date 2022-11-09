import './App.css';
import React from 'react';
import { CustomButton } from './components/custom-button/custom-button';
import { CustomField } from './components/custom-field/custom-field';
import { CustomInput } from './components/custom-input/custom-input';
import { useInput } from './components/custom-input/hooks/use-input.hook';
import { useButton } from './components/custom-button/hooks/use-button.hook';
import { useDispatch, useSelector } from 'react-redux';
function App() {

  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customers.customers)
  const result = useSelector(state => state.result.result)
 
  const inputSum = useInput('')
  const { disableAdd, disableGet } = useButton(result, inputSum.value)
  const handleAddMoney = () => {
    dispatch({ type: "ADD_MONEY", payload: Number(inputSum.value) })
    inputSum.setValue('')
  }
  const handleGetMoney = () => {
    dispatch({ type: "GET_MONEY", payload: Number(inputSum.value) })
    inputSum.setValue('')
  }
  const addCash = (cash) => {
    dispatch({ type: 'ADD_CASH', payload: cash })
  }
  const getCash = (cash) => {
    dispatch({ type: 'GET_CASH', payload: cash })
  }
  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now()
    }
    dispatch({ type: "ADD_CUSTOMER", payload: customer })
  }
  const removeCustomer = (customer) => {
    dispatch({ type: "REMOVE_CUSTOMERS", payload: customer.id })
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <section className='customers'>
        <div style={{ fontSize: "45px", color: "green" }}>
          {customers.length > 0 ?
            <div>{
              customers.map(customer =>
                <div style={{ border: "1px solid blue", color: "pink", fontSize: "25px", margin: "10px" }} onClick={() => removeCustomer(customer)}>{customer.name}</div>)
            }</div> :
            <div>Список пуст</div>

          }
        </div>
        <button className='customers-button' onClick={() => addCustomer(prompt())}>Добавить клиента</button>
        <button className='customers-button' onClick={() => removeCustomer(prompt())}>Удалить клиента</button>
      </section>
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
        <CustomButton name="ВНЕСТИ ДЕНЬГИ" id="add-money-button" onClick={handleAddMoney} disabled={disableAdd} />
        <CustomButton name="ПОЛУЧИТЬ ДЕНЬГИ" id="get-money-mutton" onClick={handleGetMoney} disabled={disableGet} /></section>
    </div>
  );
}

export default App;
