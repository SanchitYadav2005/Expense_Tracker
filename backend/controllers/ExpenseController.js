const Expense = require('../models/ExprenseSchema');



// create new expense.

const createNew = async (request, response) =>{
    const {title, spend, borrow} = request.body;
    try{
        const expense = await Expense.create({title, spend, borrow})
        response.status(200).json(expense);
    }catch(error){
        response.status(400).json({error: error.message})
    }
}
//get all expenses.

const getAll = async(request,response)=>{
    const expense = await Expense.find({})
    response.status(200).json(expense);
}

//get one by id.

const getSingle = async (request,response)=>{
    const {id} = request.params;
    try {
        const expense = await Expense.findById(id);
        if (expense) {
            response.status(200).json(expense);
        } else {
            response.status(404).json({ error: "Expense not found" });
        }
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
    
}

// update expense

const update = async (request,response)=>{
    const {id} = request.body;

    try{
        const expense = await Expense.findOneAndUpdate({_id: id}, {
            ...request.body
        })
        response.status(200).json(expense)
    }catch(error){
        response.status(400).json({error: error.message})
    }
}

// delete

const deleteExpense = async (request, response) => {
    const {id} = request.bdoy;

    try{
        const expense = await Expense.findOneAndDelete({_id: id})
        if(!expense){
            response.status(404).json({msg: "no expense found"})
        }
        response.status(200).json(expense)
    }catch(error){
        response.status(400).json({error: error})
    }
}

module.exports = {
    createNew,
    getAll,
    getSingle,
    update,
    deleteExpense
}