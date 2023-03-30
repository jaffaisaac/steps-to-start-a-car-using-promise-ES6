// simple car start steps using Promises Es6 
let getKey =false //this check if you have the key or not
let operation =(time,action)=>{
   return new Promise( (resolve,reject)=>{
    if(getKey)
    { setTimeout(()=>{resolve(action())},time)}
    else{ reject(console.log(`get key first`)) }
   })
}

operation(1000,()=>console.log(`Open car door`))
.then(  ()=>{  return operation(2000,()=>console.log(`Seat belt on`)) }
).then( ()=>{ return operation(3000,()=>console.log(`check fuel level`)) }
).then( ()=>{  return operation(1000,()=>console.log(`Key start engine and set to drive mode`))  }
).then( ()=>{  return operation(1000,()=>console.log(`Press the accerate pedal to move`)) }
).catch( ()=>console.log(`Get the Key for your travel`) )//run if you have no key
 .finally( ()=>console.log(`Go to move on`) ) //this runs weather you have the key or not

//the .then() ->  are executed in the flow steps on the time set asynchronously