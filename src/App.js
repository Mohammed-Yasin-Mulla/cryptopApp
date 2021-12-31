import React from "react";
import axios from "axios";
import Coin from "./Coin";
import "./App.css";
import ReactPaginate from "react-paginate";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Links,
} from "react-router-dom";
import About from "./pages/About";
import View from "./pages/View";
import Card from "./Card";
import Navbar from './Navbar'

export default function App() {
  const [coins, setCoins] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [savedCoins, setSavedCoins] = React.useState([]);
  const [pageNumber, setPageNumber] = React.useState(0);

  React.useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => alert("Error"));
  }, []);

  function handelChange(Search) {
    setSearch(Search.target.value);
  }
  
  function savePress(name, symbol, price, image) {
    setSavedCoins((prevData) => {
      return [{ name: name, symbol: symbol, price: price }, ...prevData];
    });
  }

  function deleteCoins(name) {
    setSavedCoins(prevData => {
      return prevData.filter(savedCoins => savedCoins.name != name)
    })
  }

  function viewPress() {}
  const filterCoins = coins.filter((coin) => {
    return coin.name.toLowerCase().includes(search.toLowerCase());
  });

  const dataPerPage = 5;
  const pagesVisited = pageNumber * dataPerPage;
  const pageCount = Math.ceil(filterCoins.length / dataPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayData = filterCoins
    .slice(pagesVisited, pagesVisited + dataPerPage)
    .map((coin) => {
      return (
        <Coin
          key={coin.id}
          name={coin.name}
          image={coin.image}
          symbol={coin.symbol}
          marketcap={coin.market_cap}
          price={coin.current_price}
          priceChange={coin.price_change_percentage_24h}
          volume={coin.total_volume}
          savePress={savePress}
          clicked={
            savedCoins.find((data) => data.name === coin.name) ? true : false
          }
        />
      );
    });
  
    const slicedArray = coins.slice(0,4);
    
    const cardDisplay = slicedArray.map(data => {return(
      
        <Card symbol={data.symbol}  image={data.image}   price={data.current_price}/>
     
    )})
  return (
    <div>
        <Navbar/>
      <div className="coin-app">
      
        <div className="coin-card">
          {cardDisplay}
        </div>
      
        <h1 className="coin-text">Coins</h1>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div className="coin-search">
                    <form>
                      <input
                        type="text"
                        placeholder="Search"
                        className="coin-input"
                        onChange={handelChange}
                      />
                    </form>
                  </div>
                  <div className="table-heading">

                  <Coin
                    name={"Name"}
                    image={
                      "https://static.vecteezy.com/system/resources/previews/000/350/234/original/vector-dollars-coin-icon.jpg"
                    }
                    symbol={"Symbol"}
                    marketcap={"Market Cap"}
                    price={"Price"}
                    priceChange={"Percentage"}
                    volume={"Volume"}
                    />
                    </div>
                  <div className="coin-table">
                    {displayData}
                    <ReactPaginate
                      previewsLabel={"Previous"}
                      nextLabel={"Next"}
                      pageCount={pageCount}
                      onPageChange={changePage}
                      containerClassName={"paginationBttns"}
                      previousClassName={"previousBttn"}
                      nextLinkClassName={"nextBttn"}
                      disabledClassName={"paginationDisabled"}
                      activeClassName={"paginationActive"}
                    />
                  </div>
                </>
              }
            />
            <Route path="/view" element={<View deleteCoin={deleteCoins} data={savedCoins}/>} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}
