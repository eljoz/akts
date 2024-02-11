import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    comment: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const agentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    email: { type: String, required: false, unique: true },
    phone: { type: String, required: false, unique: true },
    gender: { type: String, required: false, unique: true },
    age: { type: String, required: false, unique: true },
    location: { type: String, required: false, unique: true },
    image_location: { type: String, required: false },
    description: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

const Agent = mongoose.model('Agent', agentSchema);
export default Agent;
