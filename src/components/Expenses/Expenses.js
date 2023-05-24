import { useState } from "react";
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from "./ExpensesList";
import './Expenses.css';
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
    const expenseList = props.data;
    const [filteredYear, setFilteredYear] = useState("2021");

    const onFilterChangeHandler = (year) => {
        setFilteredYear(year)
    };

    const filteredExpenses = expenseList.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });
    return (
        <div>
            <Card className='expenses'>
                <ExpenseFilter selected={filteredYear} onChangeFilter={onFilterChangeHandler} />
                <ExpenseChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    )
}

export default Expenses;