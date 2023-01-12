const express = require('express');
const router = express.Router();

const {
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
} = require("../controller/controller");

router.post("/register", userRegister);
router.post("/login", userLogin);

router.route("/asset/all").post(authenticate, getAssetByUser);
router.route("/asset/add").post(authenticate, addAsset);
router.route("/asset/delete/:assetId").delete(authenticate, deleteAsset);

router.route("/income/all").post(authenticate, getIncomeByUser);
router.route("/income/add").post(authenticate, addIncome);
router.route("/income/delete/:incomeId").delete(authenticate, deleteIncome);

router.route("/expense/all").post(authenticate, getExpenseByUser);
router.route("/expense/add").post(authenticate, addExpense);
router.route("/expense/delete/:expenseId").delete(authenticate, deleteExpense);

module.exports = router;