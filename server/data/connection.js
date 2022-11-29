const mongoose = require('mongoose');

const connectDB = async () => {
    const uri = "mongodb+srv://root:%40Bc123456789@cluster0.rmn5q0o.mongodb.net/NASA"

    try {
        const con = await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

        console.log("connected");
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    connectDB
}