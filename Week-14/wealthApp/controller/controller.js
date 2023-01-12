const jwt = require("jsonwebtoken");
const { User, Asset, Income, Expense } = require("../models/models");
const bcrypt = require("bcrypt");
const generateToken = require("../utils/generateToken");

const authenticate = async (req, res, next) => {
  //    console.log(req.headers);
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decode = jwt.verify(token, process.env.SECRET_KEY);

      req.user = await User.findById(decode.id).select("-password");

      next();
    } catch (error) {
      console.error(error);
      res
        .status(401)
        .json({ status: false, message: "Not authorized, invaild token" });
    }
  }

  if (!token) {
    res
      .status(401)
      .json({ status: false, message: "Not authorized, no token" });
  }
};

const userRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // generate salt to hash password
    const salt = await bcrypt.genSalt(10);
    // now we set user password to hashed password
    let encryptedPassword = await bcrypt.hash(password, salt);

    const user = await new User({
      name,
      email,
      password: encryptedPassword
    });

    user.save();

    res.json({
      status: true,
      message: "User registered successfully!",
      data: {
        id: user._id,
        email: user.email,
        name: user.name
      }
    });
  } catch (error) {
    res.json({ status: false, message: "User already exist!" });
  }
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    // check user password with hashed password stored in the database
    const validPassword = await bcrypt.compare(password, user.password);

    if (validPassword) {
      res.json({
        status: true,
        message: "Loggedin successfully!",
        data: {
          id: user._id,
          email: user.email,
          name: user.name,
          token: generateToken(user._id)
        }
      });
    } else {
      res.json({ status: false, message: "Invalid Password" });
    }
  } else {
    res.json({ status: false, message: "User not found!" });
  }
};

const getAssetByUser = async (req, res) => {
  const user = req.user;
  const asset = await Asset.find({ "user": user._id });

  if (asset) {
    res.json({
      status: true,
      data: asset
    });
  } else {
    res.json({ status: false, message: "Data not found!" });
  }
};

const addAsset = async (req, res) => {
  const { user, assettype, amount, date } = req.body;
  try {
    const asset = new Asset({
      user,
      assettype,
      amount,
      date,
    });
    let savedAsset = await asset.save();
    res.json({ status: true, data: asset });
  } catch (error) {
    res.json({ status: false, message: "Something went wrong!" });
  }
};

const deleteAsset = async (req, res) => {
  try {
    const { assetId } = req.params;
    const asset = await Asset.findById({ _id: assetId });

    if (asset) {
      await asset.delete();
      res.json({ status: true, message: "asset removed" });
    } else {
      res.status(404);
      res.json({ status: false, message: "asset not found" });
    }
  } catch (error) {
    res.json({ status: false, message: "Something went wrong!" });
  }
};

const getIncomeByUser = async (req, res) => {
  const user = req.user;
  const income = await Income.find({ "user": user._id });

  if (income) {
    res.json({
      status: true,
      data: income
    });
  } else {
    res.json({ status: false, message: "Data not found!" });
  }
};

const addIncome = async (req, res) => {
  const { user, date, incometype, amount } = req.body;
  try {
    const income = new Income({
      user,
      incometype,
      amount,
      date
    });
    let savedIncome = await income.save();
    res.json({ status: true, data: income });
  } catch (error) {
    res.json({ status: false, message: "Something went wrong!" });
  }
};

const deleteIncome = async (req, res) => {
  try {
    const { incomeId } = req.params;
    const income = await Income.findById({ _id: incomeId });

    if (income) {
      await income.delete();
      res.json({ status: true, message: "Income removed" });
    } else {
      res.status(404);
      res.json({ status: false, message: "Income not found" });
    }
  } catch (error) {
    res.json({ status: false, message: "Something went wrong!" });
  }
};

const getExpenseByUser = async (req, res) => {
  const user = req.user;
  const expense = await Expense.find({ "user": user._id });

  if (expense) {
    res.json({
      status: true,
      data: expense
    });
  } else {
    res.json({ status: false, message: "Data not found!" });
  }
};

const addExpense = async (req, res) => {
  const { user, date, expensetype, amount } = req.body;
  try {
    const expense = new Expense({
      user,
      expensetype,
      amount,
      date
    });
    let savedExpense = await expense.save();
    res.json({ status: true, data: expense });
  } catch (error) {
    res.json({ status: false, message: "Something went wrong!" });
  }
};

const deleteExpense = async (req, res) => {
  try {
    const { expenseId } = req.params;
    const expense = await Expense.findById({ _id: expenseId });

    if (expense) {
      await expense.delete();
      res.json({ status: true, message: "expense removed" });
    } else {
      res.status(404);
      res.json({ status: false, message: "expense not found" });
    }
  } catch (error) {
    res.json({ status: false, message: "Something went wrong!" });
  }
};

module.exports = {
  userRegister,
  userLogin,
  getAssetByUser,
  addAsset,
  deleteAsset,
  getIncomeByUser,
  addIncome,
  deleteIncome,
  getExpenseByUser,
  addExpense,
  deleteExpense,
  authenticate
};