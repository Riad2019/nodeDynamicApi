var express = require('express')


const app = express()

const users=["asad","moin","sabed","rashed","sabana"];

app.get('/',(req,res) => {
    
    const fruit = {
        product :'mango',
        price : 220
    }


    res.send(fruit);
});
app.get('/fruit/banana',(req,res) => {
    res.send({product: 'kola' ,quantity: 100 ,price :1000 })
})

app.get('/users/:id',(req,res) => {
    console.log(req.params)
    const id = req.params.id;
     console.log(req.query.sort);
    const name =users[id];
     res.send({id,name});


})

app.listen(3000, ()=> console.log('listening to log 3000'))