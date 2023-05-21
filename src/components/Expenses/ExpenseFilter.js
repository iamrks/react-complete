import './ExpenseFilter.css';

const ExpenseFilter = (props) => {
    const years = [2022, 2021, 2020, 2019];
    const onDateChanged = (event) => props?.onChangeFilter(event.target.value);

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by year</label>
                <select value={props.selected} onChange={onDateChanged}>
                    {
                        years.map(year => (
                            <option key={year} value={year}>{year}</option>
                        ))
                    }
                </select>
            </div>
        </div>
    );
};

export default ExpenseFilter;