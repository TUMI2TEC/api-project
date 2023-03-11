const express =require('express');
const app = express();
const connectDB=require('./config/db');
const dutyUser =require('./models/userModel');

connectDB();

app.use(express.json());

// display all users
app.get('/callofduty', async(req,res)=> {
    try {
        const users = await dutyUser.find({});
        res.json(users);
    }catch(error){
        console.log(error);
    }
});


//display using ID
app.get('/callofduty/:callofdutyId',(req,res)=> {
    res.json({msg: 'call of duty id is'+req.params.callofdutyId});
 });

 //editing call of duty users with the ID

 app.put('/callofduty/:callofdutyId',(req, res) => {
    res.json( {msg: 'editing call of duty users'+req.params.callofdutyId});
});
//delete users with the ID
app.delete('/callofduty/:callofdutyId',(req, res) => {
    res.json( {msg: 'deleting call of duty users'+req.params.callofdutyId});
});

//creating new call of duty users

app.post('/callofduty',async (req, res) => {
  try{
    await dutyUser.create({
        callofdutyname:req.body.callofdutyname,
        name:req.body.name,
    });
    res.json({msg:'user created'})
  }catch (error){
 console.log(error)
  }
});

app.get('/',(req, res) => {res.json({msg: 'API server is running', version: 1 });});


app.listen(3000,console.log('server has started on port 3000'));