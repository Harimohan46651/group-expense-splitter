function Settlement({settlements}){
    return (
        <div>
            <h2>Settlement Instruction</h2>
            <ul>
                {settlements.map((s,i)=>(<li key = {i}>{s.from} pays {s.to} {s.amount}</li>))}
                {settlements.length === 0 && <li>All Settled</li>}
            </ul>
        </div>
    )
}
export default Settlement