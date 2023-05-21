import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const initialFormValue = {
        title: '',
        amount: '',
        date: ''
    }
    const [formValue, setFormValue]= useState({ ...initialFormValue });

    const titleChangeHandler = event => {
        setFormValue((prevState) => {
            return { ...prevState, title: event.target.value }
        });
    };

    const amountChangeHandler = event => {
        setFormValue((prevState) => {
            return { ...prevState, amount: event.target.value }
        });
    };

    const dateChangeHandler = event => {
        setFormValue((prevState) => {
            return { ...prevState, date: event.target.value }
        });
    };

    const submitHandler = event => {
        event.preventDefault();
        const formData = {
            ...formValue,
            date: new Date(formValue.date)
        }

        props?.onSave(formData)

        clearFormValue();
    };

    const clearFormValue = () => {
        setFormValue(initialFormValue);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text'
                        value={formValue.title}
                        onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01"
                        value={formValue.amount}
                        onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2022-12-31"
                        value={formValue.date}
                        onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit' className="">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;