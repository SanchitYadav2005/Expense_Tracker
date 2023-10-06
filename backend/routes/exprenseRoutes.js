const express = require("express")
const router = express.Router();
const {getAll, getSingle, createNew, update, deleteExpense} = require('../controllers/ExpenseController');

//show all the routes.
router.get('/', getAll)

//create.

router.post('/', createNew)

//get single expense.

router.get("/:id", getSingle)

//update
router.patch("/:id", update)

//delete

router.delete("/:id", deleteExpense)


module.exports = router;