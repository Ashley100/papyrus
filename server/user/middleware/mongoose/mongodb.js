import mongoose from 'mongoose';

const mongoDB = async (req, res) => {

    // Use current db connection
    if (mongoose.connections[0].readyState) return false;

    // Use new db connection
    await mongoose.connect(process.env.mongodbURL, {
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useNewUrlParser: true
    });

};

export default mongoDB;