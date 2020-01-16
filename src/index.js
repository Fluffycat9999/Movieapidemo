const express = require('express');
require('./db/mongoose'); //ensures mongoose runs and connects to our database
const app = express();
const movieRouter = require('./routers/movies');
const userRouter = require('./routers/users');
app.use(express.json());
app.use(movieRouter);
app.use(userRouter);

app.listen(3000, () => {
    console.log('Server up on 3000');
});

/* const bcrypt = require('bcryptjs');
const testFunction = async () => {
    const password = 'siths1234';
    const hashedPassword = await bcrypt.hash(password, 8);
    console.log(password);
    console.log(hashedPassword);

    const isMatch = await bcrypt.compare('siths1234', hashedPassword);
    console.log(isMatch);
};

testFunction(); */

/* const jwt = require('jsonwebtoken');

const testFunction = async() => {
    const token = jwt.sign({_id:"5e1f40d608d9122ecc14ece5"}, "siths1234",{
        expiresIn: '7 days'
    });
    console.log(token);
    const data = jwt.verify(token, "siths1234");
    console.log(data);
}
testFunction(); */