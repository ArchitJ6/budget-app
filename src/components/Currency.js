import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../index.css';

const Currency = () => {
    const { dispatch } = useContext(AppContext);

    const changeCurrency = (val) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        })
    }


    return (
        <div style={{"backgroundColor": "#93e499", 'color': '#fff'}} className='alert alert-secondary'> Currency ( {
            <select name="Currency" id="Currency" onChange={event => changeCurrency(event.target.value)}>
                <option value="$" data-currency="$ Dollar">$ Dollar</option>
                <option value="£" data-currency="£ Pound">£ Pound</option>
                <option value="€" data-currency="€ Euro">€ Euro</option>
                <option value="₹" data-currency="₹ Ruppee">₹ Ruppee</option>
            </select>
        } )
        </div>
    );
};

export default Currency;