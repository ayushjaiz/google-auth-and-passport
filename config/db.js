const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false)
        const con = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        //console.log(`MongoDB Connected: ${conn.connection.host}`);
        console.log(`MongoDB Connected`);
    }
    catch (err) {
        console.log(err);
        //process.exit(1);
    }
}

module.exports = connectDB