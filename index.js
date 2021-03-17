const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());


const {getAllUsers,getUser,storeUser} = require('./folder1/file1');


async function connectDB() {
    await mongoose.connect('mongodb://127.0.0.1:27017/node-crud-newlist', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
});
}

connectDB();
app.get('/users',getAllUsers);
app.get('/user',getUser);
app.post('/store',storeUser);
app.listen(7070,()=>{
    console.log('App running');

})