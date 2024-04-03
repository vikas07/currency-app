import React, { useState } from "react";

const currencies = [
  { label: "USD", value: "USD" },
  { label: "GBP", value: "GBP" },
  { label: "EUR", value: "EUR" },
  // ... other currencies
];

const AddRemoveCurrencyComponent = ({
  currencies: selectedCurrencies,
  onAddCurrency,
  onRemoveCurrency,
}) => {
  const [currencyToAdd, setCurrencyToAdd] = useState("");
  const availableCurrencies = currencies.filter(
    (currency) => !selectedCurrencies.some((c) => c.value === currency.value)
  );

  const handleAddCurrency = () => {
    if (
      currencyToAdd &&
      availableCurrencies.some((c) => c.value === currencyToAdd)
    ) {
      onAddCurrency(currencies.find((c) => c.value === currencyToAdd));
      setCurrencyToAdd("");
    }
  };

  const handleRemoveCurrency = (currency) => {
    onRemoveCurrency(currency);
  };

  return (
    <div>
      <div>
        <input
          value={currencyToAdd}
          onChange={(e) => setCurrencyToAdd(e.target.value)}
        />
        <button onClick={handleAddCurrency}>Add Currency</button>
      </div>
      <div>
        {selectedCurrencies.map((currency) => (
          <div key={currency.value}>
            {currency.label}
            <button onClick={() => handleRemoveCurrency(currency)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddRemoveCurrencyComponent;
