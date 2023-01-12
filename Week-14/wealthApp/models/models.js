const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const assetSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: "User"
  },
  assettype: { type: String, required: true },
  amount: { type: Number, required: true },
},
  { timestamps: true }
);

const incomeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: "User"
  },
  incometype: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: String, required: true },
},
  { timestamps: true }
);

const expenseSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: "User"
  },
  expensetype: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: String, required: true },
},
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
const Asset = mongoose.model("Asset", assetSchema);
const Income = mongoose.model("Income", incomeSchema);
const Expense = mongoose.model("Expense", expenseSchema);

module.exports = {
  User,
  Asset,
  Income,
  Expense,
};