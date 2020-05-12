export default (expenses) => {
    if(expenses.length === 0) return 0;

    return expenses.reduce((total, expense) => total + expense.amount, 0); 
}
