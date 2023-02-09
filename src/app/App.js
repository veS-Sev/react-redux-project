import './App.css';
import React from 'react';
import { CustomButton } from './components/custom-button/custom-button';
import { CustomField } from './components/custom-field/custom-field';
import { CustomInput } from './components/custom-input/custom-input';
import { useInput } from './components/custom-input/hooks/use-input.hook';
import { useButton } from './components/custom-button/hooks/use-button.hook';
import { useDispatch, useSelector } from 'react-redux';
import {asyncAddMoneyAction, asyncGetMoneyAction} from './store/result-reduser';
import {fetchGetPostsAction} from '../app/store/posts-reduser'

function App() {

  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customers.customers)
  const result = useSelector(state => state.result.result)
  const posts=useSelector(state => state.posts.posts)

  const inputSum = useInput('')
  const { disableAdd, disableGet } = useButton(result, inputSum.value)

  const handleAddMoney = () => {
    dispatch(asyncAddMoneyAction(Number(inputSum.value)));
// console.log(asyncAddMoneyAction(Number(inputSum.value)))
    inputSum.setValue('')
  }
  const handleGetMoney = () => {
    dispatch(asyncGetMoneyAction(Number(inputSum.value)))
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
  const removePost = (post) => {
    dispatch({ type: "REMOVE_POST", payload: post.id })
  }
  return (
    <div className="App">
      <section className='customers' style={{border:"1px solid gray" }}>
        <div style={{ fontSize: "45px", color: "green" }}>
          {customers.length > 0 ?
            <div>{
              customers.map(customer =>
                <div key={customer.id} style={{ border: "1px solid blue", color: "pink", fontSize: "25px", margin: "10px" }} onClick={() => removeCustomer(customer)}>{customer.name}</div>)
            }</div> :
            <div>Список пуст</div>
          }
        </div>
        <button className='customers-button' onClick={() => addCustomer(prompt())}>Добавить клиента</button>
        {/* <button className='customers-button' onClick={() => dispatch(fetchCustomers())}>Получить клиента из базы</button> */}
      </section>
      <section className='counter' style={{border:"1px solid blue" }}>
        <div style={{ fontSize: "35px" }}>{cash}</div>
        <button className='counter-button' onClick={() => addCash(Number(prompt()))}>Добавить</button>
        <button className='counter-button' onClick={() => getCash(Number(prompt()))}>Получить</button>
      </section>

      <section className="money-section" style={{border:"1px solid orange" }}>
        <CustomInput id="input-sum" placeholder={"ВВЕДИТЕ СУММУ"} value={inputSum.value} onChange={(event) => inputSum.handleChange(event)} />
         <CustomField result={result} id="field" />

        <CustomButton name="ВНЕСТИ ДЕНЬГИ" id="add-money-button" onClick={handleAddMoney} disabled={disableAdd} />
        <CustomButton name="ПОЛУЧИТЬ ДЕНЬГИ" id="get-money-mutton" onClick={handleGetMoney} disabled={disableGet} /></section>

      
        <section className='posts'style={{ fontSize: "25px", color: "purple", border:"1px solid yellow" }}>
        <div style={{ fontSize: "25px", color: "purple" }}>
          {posts.length > 0 ?
            <div>{
              posts.map(post =>
                <div key={post.id}style={{ border: "1px solid blue", color: "pink", fontSize: "20px", margin: "10px" }} onClick={() => removePost(post)}>{post.title}</div>)
            }</div> :
            <div>Список постов пуст</div>
          }
        </div>
        <button className='customers-button' onClick={() => addCustomer(prompt())}>ВЫБРАТЬ НОМЕР ПОСТА  </button>
        <button className='customers-button' onClick={() =>{dispatch(fetchGetPostsAction())}}>ЗАГРУЗИТЬ ВСЕ ПОСТЫ</button>
      </section>
    </div>
  );
}

export default App;
