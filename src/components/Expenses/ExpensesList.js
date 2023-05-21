import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {
    const items = props.items || [];

    if (items && items.length === 0) {
        return <h2 className="expenses-list__fallback">No Expenses Found</h2>
    }

    return (
        <ul className="expenses-list">
            { items.map((expense) => <ExpenseItem key={expense.id} data={expense} />) }
        </ul>
    );
};

export default ExpensesList;