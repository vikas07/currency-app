import React from "react";

const CurrencyTable = ({ rates, date }) => {
  const getRate = (currency) => (rate) => rate.currency === currency;
  const baseCurrency = rates.find((rate) => rate.base === rates[0].base);

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Currency</th>
          <th>Rate</th>
        </tr>
      </thead>
      <tbody>
        {rates.map((rate) => (
          <tr key={`${rate.currency}-${rate.date}`}>
            <td>{date}</td>
            <td>{rate.currency}</td>
            <td>{rate.rate / baseCurrency.rate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CurrencyTable;
