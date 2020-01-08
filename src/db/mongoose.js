const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://fluffycat9999:Cats9999@cluster0-ervzy.mongodb.net/test?retryWrites=true&w=majority', 
{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true
});
