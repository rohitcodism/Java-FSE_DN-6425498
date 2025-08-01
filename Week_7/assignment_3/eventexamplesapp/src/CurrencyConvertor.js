import React, { useState } from 'react';

const CurrencyConvertor = () => {
    const [rupees, setRupees] = useState('');
    const [euros, setEuros] = useState('');

    const handleSubmit = () => {
        const rupeesValue = parseFloat(rupees);
        if (!isNaN(rupeesValue)) {
            const convertedEuros = (rupeesValue / 90).toFixed(2);
            setEuros(convertedEuros);
            alert(`Converted ${rupees} Rupees to ${convertedEuros} Euros`);
        }
        setRupees('');
    };

    return (
        <div style={{ border: '1px solid #ccc', padding: '20px', margin: '20px 0' }}>
            <h3>Currency Convertor</h3>
            <div style={{ marginBottom: '10px' }}>
                <label>Indian Rupees: </label>
                <input
                    type="number"
                    value={rupees}
                    onChange={(e) => setRupees(e.target.value)}
                    style={{ marginLeft: '10px', padding: '5px' }}
                />
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label>Euros: </label>
                <input
                    type="text"
                    value={euros}
                    readOnly
                    style={{ marginLeft: '10px', padding: '5px', backgroundColor: '#f5f5f5' }}
                />
            </div>
            <button onClick={handleSubmit} style={{ padding: '8px 16px', backgroundColor: '#4CAF50', color: 'white', border: 'none' }}>
                Convert
            </button>
        </div>
    );
};

export default CurrencyConvertor;
