import React, { useState, useEffect } from "react";
import axios from "axios";
import CurrencySelector from "./CurrencySelector";
import CurrencyTable from "./CurrencyTable";
import DateSelector from "./DateSelector";
import AddRemoveCurrencyComponent from "./AddRemoveCurrencyComponent";

const App = () => {
  const defaultCurrencies = [
    { base: "USD", currency: "GBP", rate: 0 },
    { base: "USD", currency: "EUR", rate: 0 },
    { base: "USD", currency: "JPY", rate: 0 },
    { base: "USD", currency: "CHF", rate: 0 },
    { base: "USD", currency: "CAD", rate: 0 },
    { base: "USD", currency: "AUD", rate: 0 },
    { base: "USD", currency: "INR", rate: 0 },
  ];

  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [date, setDate] = useState(new Date());
  const [currencies, setCurrencies] = useState(defaultCurrencies);
  const [rates, setRates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.freecurrencyapi.com/v1/historical?apikey=fca_live_OjSZDcutLe9fRTuBnsxnZYpgZ3De6A7zWfO&base_currency=${baseCurrency}&date=${
            date.toISOString().split("T")[0]
          }`
        );

        const newRates = response.data.data.map((rate) => {
          const currency = currencies.find((c) => c.currency === rate.currency);
          return {
            base: baseCurrency,
            currency: rate.currency,
            rate: parseFloat(rate.value),
            ...currency,
          };
        });

        setRates(newRates);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [baseCurrency, date, currencies]);

  return (
    <div>
      <CurrencySelector value={baseCurrency} onChange={setBaseCurrency} />
      <DateSelector date={date} onDateChange={setDate} />
      <AddRemoveCurrencyComponent
        currencies={currencies}
        onAddCurrency={(currency) => {
          if (currencies.length < 7) {
            setCurrencies([...currencies, currency]);
          }
        }}
        onRemoveCurrency={(currency) => {
          if (currencies.length > 3) {
            setCurrencies(currencies.filter((c) => c !== currency));
          }
        }}
      />
      <CurrencyTable rates={rates} date={date} />
    </div>
  );
};

export default App;
