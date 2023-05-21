import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const saveHandler = (newExpenseData) => {
        const data = {
            ...newExpenseData,
            id: Math.floor(Math.random() * (9999 - 99 + 1)) + 99
        }

        props?.onAddExpenseData(data);
    };

    return (
        <div className='new-expense'>
            <ExpenseForm onSave={saveHandler}/>
        </div>
    );
}

export default NewExpense;