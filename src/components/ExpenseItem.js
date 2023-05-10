import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'SUB_EXPENSE',
            payload: expense
        });
    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><button style={{backgroundColor: 'green', color: '#fff', borderRadius: '100%', border: 'none', lineHeight: '0.4', fontSize:'26px', width: '30px', height: '30px', fontWeight: '1000'}} onClick={event=> increaseAllocation(props.name)}>+</button></td>
        <td><button style={{backgroundColor: 'red', color: '#fff', borderRadius: '100%', border: 'none', lineHeight: '0.4', fontSize:'26px', width: '30px', height: '30px', fontWeight: '1000'}} onClick={event=> decreaseAllocation(props.name)}>-</button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;