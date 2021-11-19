const promi1 = new Promise((resolve,reject)=>{
    let name1=true
    if (name1){
        const a="i am from bihar"
        resolve(a)
    }
    else{
        const b="living in navgurukul"
        reject(b)
    }
})
promi1.then((c)=>{
    console.log(c)
}).catch((d)=>{
    console.log(d)
})