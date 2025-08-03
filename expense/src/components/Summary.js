function Summary({balances}){
    return(
        <div>
            <h2> Summary</h2>
            <ul>
                {balances.map((b,i)=>(
                    <li key = {i}> {b.name}:{b.balance> 0 ? '+': ''} {b.balance} </li>
                ))}
            </ul>
        </div>
    )
}

export default Summary