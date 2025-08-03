const  {useState} =require('react')

function ExpenseFrom({onAdd}){
    const [paidBy,setpaidBy] = useState('')
    const [amount,setAmount] = useState('')
    const [description,setDescription] = useState('')
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!paidBy || !amount || amount<0 ||! description){
            return alert("Invalid Input")
        }
        onAdd({paidBy,amount:Number(amount), description})
        setpaidBy('')
        setDescription('')
        setAmount('')
    }
    return(
        <form onSubmit={handleSubmit}>
            <input value={paidBy} onChange={e=>setpaidBy(e.target.value)} placeholder='paid by'>
            </input>
            <input value={amount} onChange={e=>setAmount(e.target.value)} placeholder='Amount'>
            </input>
            <input value={description} onChange={e=>setDescription(e.target.value)} placeholder='description'>
            </input>
            <button type='submit'>Add Expense</button>
        </form>
    )
}

export default ExpenseFrom
