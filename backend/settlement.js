function calculateBalances(expenses){
    const participantSet = new Set(expenses.map(e=>e.paidBy))
    const participants = [...participantSet]
    const total = expenses.reduce((acc,e)=>acc+e.amount,0)
    const share = participants.length? total/participants.length : 0
    const paid= Object.fromEntries(participants.map(p=>[p,0]))
    expenses.forEach(e=>{
        paid[e.paidBy]+=e.amount
    })
    const balancesArr = participants.map(p=>({name:p, balance: paid[p]-share}))

    const settlements = []
    let creditors= balancesArr.filter(b=>b.balance>0)
    let debitors = balancesArr.filter(b=>b.balance<0).map(d=>({...d,balance:-d.balance}))

    for(let d of debitors){
        for(let c of creditors){
            if(d.balance ===0){
                break;
            }
            const transfer = Math.min(c.balance,d.balance)
            if(transfer>0){
                settlements.push({from:d.name,to:c.name,amount:transfer})
                c.balance-=transfer
                d.balance-=transfer
            }
        }
    }
    console.log('balancearr',balancesArr)
    console.log('settlements', settlements)
    return {balances:balancesArr,settlements}

}
module.exports = calculateBalances