import "./index.css";
import React, { useEffect, useState, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { BsSun, BsMoonFill } from "react-icons/bs";

import Coin from "./components/Coin";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { lightTheme, darkTheme, GlobalStyles } from "./contexts/ThemeContext";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;
const API_KEY = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d`;
function App() {
  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [theme, setTheme] = useState("light");
  const refContainer = useRef(null);

  const toggleTheme = () => {
    setTheme((currTheme) => (currTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    fetch(API_KEY)
      .then((res) => res.json())
      .then(
        (result) => {
          // setIsLoaded(true);
          setItems(result);
          console.log(result);
        }
        // (error) => {
        // setIsLoaded(true);
        // setError(error);
        // }
      );
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const searchCoins = items.filter((item) =>
    item.name.toLowerCase().startsWith(search.toLowerCase())
  );

  return (
    <ThemeProvider theme={theme === "light" ? darkTheme : lightTheme}>
      <GlobalStyles />
      <StyledApp>
        <div className="App">
          <button className="website-theme" onClick={() => toggleTheme()}>
            {theme === "light" ? (
              <BsSun className="sun" />
            ) : (
              <BsMoonFill className="moon" />
            )}
          </button>

          <Header />
          <form action="">
            <input
              ref={refContainer.current}
              type="text"
              placeholder="Search"
              onChange={handleSearch}
            />
          </form>
          <div className="coin-list">
            <div
              className={`coin-info ${
                theme === "light" ? "coin-info-dark-theme" : ""
              }`}
            >
              <p>#</p>
              <p>Coin</p>
              <p>Price</p>
              <p>1h</p>
              <p>24h</p>
              <p>Market Cap</p>
            </div>

            {searchCoins.map((item) => (
              <Coin
                key={item.id}
                market_cap_rank={item.market_cap_rank}
                image={item.image}
                name={item.name}
                symbol={item.symbol}
                current_price={item.current_price}
                market_cap={item.market_cap}
                price_1h={item.price_change_percentage_1h_in_currency}
                price_24h={item.price_change_percentage_24h_in_currency}
              />
            ))}
          </div>
        </div>
        <Footer />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
