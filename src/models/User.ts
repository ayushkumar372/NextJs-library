import mongoose, { Schema, Document, Model } from "mongoose";

export interface IUser extends Document {
  email: string;
  name?: string;
  image?: string;
  isPro: boolean;
  proActivatedAt?: Date;
  createdAt: Date;
}

const UserSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true, lowercase: true },
  name: { type: String },
  image: { type: String },
  isPro: { type: Boolean, default: false },
  proActivatedAt: { type: Date },
  createdAt: { type: Date, default: Date.now },
});

const User: Model<IUser> =
  mongoose.models.User ?? mongoose.model<IUser>("User", UserSchema);

export default User;
