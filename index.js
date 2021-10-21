const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello from my second node server')
});

const users = [
    {id:0, name: 'Susmita', email: 'susmita@gmail.com', phone: '01744444444'},
    {id:1, name: 'Shabana', email: 'shabana@gmail.com', phone: '01788888888'},
    {id:2, name: 'Shabnoor', email: 'shabnoor@gmail.com', phone: '01799999999'},
    {id:3, name: 'Shrabonti', email: 'shrabonti@gmail.com', phone: '01777777777'},
    {id:4, name: 'Suchorita', email: 'suchorita@gmail.com', phone: '01766666666'},
    {id:5, name: 'Soniya', email: 'soniya@gmail.com', phone: '01755555555'},
    
]

app.get('/users',(req, res) => {
    const search = (req.query.search);
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else 
    {
       res.send(users) 
    }
    
});
app.get ('/fruites/mangoes/fazli', (req,res) => {
    res.send('Yummy yummy tok marka fazli');
})

app.get('/fruites', (req, res) =>{
    res.send(['mango', 'orange', 'banana', 'apple'])
})

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id= users.length;
    users.push(newUser);
    console.log('hitting the post', req.body)
    // res.send('inside post')
    res.json(newUser)
})

app.get('/users/:id', (req,res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})

app.listen(port, ()=>{
    console.log('Listening to Port', port);
})