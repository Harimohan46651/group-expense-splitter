const express = require('express')
const app = express()
const cors= require('cors')
const calculateBalances = require('./settlement')
app.use(cors())
app.use(express.json())
let expenses = []

app.get('/api/expenses',(req,res)=>{
    res.status(200).json({expenses})
})

app.post('/api/expenses',(req,res)=>{
    const {paidBy, amount,description } = req.body
    if(!paidBy || !amount || amount<=0 || !description){
        return res.status(400).json({error:"invalid input please enter correct input"})
    }
    expenses.push({paidBy,amount,description})
    console.log(expenses)
    res.status(200).json({success:true})
})

app.get('/api/summary',(req,res)=>{
    const result = calculateBalances(expenses)
    res.status(200).json(result)

})

app.post('/api/settle',(req,res)=>{
    expenses = []
    res.json({success: true})
})




app.listen(3000,()=>{
    console.log("server is running on port 3000")
})