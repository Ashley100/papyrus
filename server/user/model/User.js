import mongoose from 'mongoose';

const User = new mongoose.Schema({
    name: { type: String },
});

mongoose.models = {};

export default mongoose.model("User", User);