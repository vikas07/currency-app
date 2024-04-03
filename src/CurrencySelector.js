import React from "react";

const currencies = [
  { label: "USD", value: "USD" },
  { label: "GBP", value: "GBP" },
  { label: "EUR", value: "EUR" },
  // ... other currencies
];

const CurrencySelector = ({ value, onChange }) => (
  <select value={value} onChange={(e) => onChange(e.target.value)}>
    {currencies.map((currency) => (
      <option key={currency.value} value={currency.value}>
        {currency.label}
      </option>
    ))}
  </select>
);

export default CurrencySelector;
