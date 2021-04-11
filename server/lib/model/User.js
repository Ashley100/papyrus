import mongoose from 'mongoose';

const User = new mongoose.Schema({
    email: { type: String, },
    password: { type: String },
    name: { type: String },
});

mongoose.models = {};

export default mongoose.model("User", User);