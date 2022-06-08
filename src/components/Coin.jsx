const Coin = ({
  market_cap_rank,
  image,
  name,
  symbol,
  current_price,
  price_1h,
  price_24h,
  market_cap,
}) => {
  return (
    <div className="coins">
      <p className="coin-rank">{market_cap_rank}</p>
      <div className="coin-credentials">
        <img src={image} alt="cryptocurrency_logo" className="coin-img" />
        <p>{name}</p>
        <p className="coin-symbol">{symbol.toUpperCase()}</p>
      </div>
      <p className="coin-price">$ {current_price.toLocaleString()}</p>
      <p
        className="coin-price_1h"
        style={{
          color: price_1h > 0 ? "#0bba1a" : "red",
        }}
      >
        {price_1h.toLocaleString().slice(0, -2)}%
      </p>
      <p
        className="coin-price_24h"
        style={{
          color: price_24h > 0 ? "#0bba1a" : "red",
        }}
      >
        {price_24h.toLocaleString().slice(0, -2)}%
      </p>
      <p className="coin-marketcap">$ {market_cap.toLocaleString()}</p>
    </div>
  );
};

export default Coin;
