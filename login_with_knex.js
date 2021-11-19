const express=require("express");
const knex=require("../databases/db") 
const router = express.Router()
router.post('/signup',(req,res)=>{
    knex.select("*")
    .from ('user').where ({'email': req.body.email}).then((data)=>{
        if (data.length<1){
        knex('user').insert (req.body).then((data)=>{
            res.send ({data: 'inserted'})
            console.log(data)
        }).catch((err)=>{
            res.send(err)
            console.log(err)
        })
        }
        else{
            res.send("your account is already created:")
        }
    })
})
router.put('/update',(req,res)=>{
    let demo={name:req.body.name, email:req.body.email, password: req.body.password}
    knex('user').update (demo)
        .where({id:req.body.id}).then((data)=>{
        res.send ({data: 'data update successfully'})
        console.log("update successfully")
    }).catch((err)=>{
        res.send(err)
        console.log(err)
    })
})

router.delete('/delete',(req,res)=>{
    let demo={id:req.body.id}
    knex('user').delete (demo)
        .where({id:req.body.id}).then((data)=>{
        res.send ({data: 'data delete successfully'})
        console.log("delete successfully")
    }).catch((err)=>{
        res.send(err)
        console.log(err)
    })
})

router.get('/gettAl', (req, res) => {
    knex.select('*').from('user').then((result) => {
        res.send(result)
    }).catch((err) => {
        res.send(err)
    })
})
module.exports=router

