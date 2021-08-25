const mongoose = require('mongoose')

const connectURL = 'mongodb://127.0.0.1:27017/task-manager-api'

mongoose.connect(connectURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true
})
