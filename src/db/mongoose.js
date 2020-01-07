const mongoose = require('mongoose');
mongoose.connect('paste something here', 
{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true
});

/* mongodb+srv://fluffycat9999:<password>@cluster0-ervzy.mongodb.net/test */