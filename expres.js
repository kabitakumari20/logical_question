const express = require("express")
var accountRoutes=express()
const router = express.Router();
const fs = require('fs');
var ac = require('./account.js')

router.use(accountRoutes) 
module.exports = router;
const dataPath = 'useraccount.json' 
const saveAccountData = (data) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync(dataPath, stringifyData)
}
const getAccountData = () => {
    const jsonData = fs.readFileSync(dataPath)
    return JSON.parse(jsonData)   
}

accountRoutes.post('/account/addaccount', (req, res) => {
    var existAccounts = getAccountData()
    const newAccountId = Math.floor(100000 + Math.random() * 900000)
    existAccounts[newAccountId] = req.body
    console.log(existAccounts);
    saveAccountData(existAccounts);
    res.send({success: true, msg: 'account added successfully'})
})

accountRoutes.get('/account/list', (req, res) => {
    const accounts = getAccountData()
    res.send(accounts)
  })

accountRoutes.put('/account/:id', (req, res) => {
    var existAccounts = getAccountData()
    fs.readFile(dataPath, 'utf8', (err, data) => {
      const accountId = req.params['id'];
      existAccounts[accountId] = req.body;
      saveAccountData(existAccounts);
      res.send(`accounts with id ${accountId} has been updated`)
    }, true);
});

accountRoutes.delete('/account/delete/:id', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
      var existAccounts = getAccountData()
      const userId = req.params['id'];
      delete existAccounts[userId]; 
      saveAccountData(existAccounts);
      res.send(`accounts with id ${userId} has been deleted`)
    }, true);
  })

accountRoutes.listen(3000, (err)=>{
    console.log("listeniing at port:3000")
}) 