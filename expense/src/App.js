import React, {useState,useEffect} from "react";
import ExpenseFrom from "../src/components/ExpenseForm";
import ExpenseTable from "../src/components/ExpenseTable";

import Settlement from "../src/components/Settlement";
import Summary from "../src/components/Summary";
import axios from 'axios'

function App(){
    const [expenses,setExpenses] = useState([])
    const [summary,setSummary] = useState({balances:[], settlements:[]})

    useEffect(()=>{
        fetchExpenses()
        fetchSummary()
    },[])

    const fetchExpenses = async()=>{
        const res  = await axios.get('http://localhost:3000/api/expenses')
        setExpenses(res.data.expenses)
    }

    const fetchSummary = async()=>{
        const res  = await axios.get('http://localhost:3000/api/summary')
        setSummary(res.data)
    }
    const addExpense = async(expense)=>{
        await axios.post('http://localhost:3000/api/expenses',expense)
        fetchExpenses()
        fetchSummary()
    }
    const settle = async()=>{
        await axios.post('http://localhost:3000/api/settle')
        fetchExpenses()
        fetchSummary()
    }
    return (
        <div>
            <h1>Group Expenses Splitter</h1>
            <ExpenseFrom onAdd={addExpense}/>
            <ExpenseTable expenses={expenses}/>
            <Summary balances={summary.balances}/>
            <Settlement settlements={summary.settlements}/>
            <button onClick={settle}>Settle</button>

        </div>
    )
}

export default App
