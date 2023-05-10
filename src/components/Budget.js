import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = (props) => {
    const { dispatch, budget, expenses, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleBudgetChange = (event) => {
        console.log(totalExpenses);
        const value = parseInt(event.target.value);
        if (value > 20000) {
            alert(`Budget cannot exceed ${currency}20,000`);
            return;
        } else if (value < totalExpenses) {
            alert('You can not reduce the budget value lower than the spending');
            return;
        } else {
            dispatch({
                type: 'CHG_BUDGET',
                payload: value,
            });
        }
    };

    return (
        <div className='alert alert-secondary'>
            {/* <span>Budget: £{budget}</span> */}
            <span>
                Budget: {currency}
                <input
                    required='required'
                    type='number'
                    id='budget'
                    value={budget}
                    step={10}
                    max={20000}
                    onChange={handleBudgetChange}
                ></input>
            </span>
        </div>
    );
};
export default Budget;