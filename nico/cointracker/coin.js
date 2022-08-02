import {useEffect, useState} from "react";

function App() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [money, setMoney] = useState();
    const [tranMoney, setTranMoney] = useState(0);

    const handleChange = (e) => {
        setMoney(e.target.value);
    }
    const handleSelect = (e) => {
        let bitMoney = e.target.value;
        setTranMoney(money / bitMoney);
    }

    useEffect(()=>{
        fetch('https://api.coinpaprika.com/v1/tickers')
            .then((response)=>response.json())
            .then((json)=>{
                setCoins(json);
                setLoading(false);
            });
    },[]);

    return (
        <div>
            <h1>The Coins! {loading ? "Loading..." : (coins.length)}</h1>
            <p>
                <input onChange={handleChange} value={money|| ''} type={"number"} placeholder={"Dollar You've got"}/>
            </p>
            {loading ? <strong>Loading...</strong> : null}
            <select onChange={handleSelect}>
                {coins.map((coin,idx) =>
                    <option key={idx} value={coin.quotes.USD.price} name={coin.name}>
                        {coin.name} ({coin.symbol}) : {coin.quotes.USD.price}
                    </option>
                )}
            </select>

            <p>
                <span value={""}>You may have ${money} →({tranMoney})</span>
            </p>
        </div>
    );
}

export default App;
