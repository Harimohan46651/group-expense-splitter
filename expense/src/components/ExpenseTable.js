function ExpenseTable({expenses}){
    return(
        <table>
            <thead>
                <tr><th> Paid By</th>
                <th>Amount</th>
                <th>Description</th>

                </tr>
            </thead>
            <tbody>
                {expenses.map((e,i)=>(
                    <tr key = {i}>
                        <td>{e.paidBy}</td>
                        <td>{e.amount}</td>
                        <td>{e.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
export default ExpenseTable