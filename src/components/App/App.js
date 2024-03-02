import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Main from '../Main/Main';
import NotFound from '../NotFound/NotFound';
import * as Api from '../../utils/Api';
import Catalog from '../Catalog/Catalog';
function App() {

  const [cards, setCards] = React.useState([]);
  const [errorText, setErrorText] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [cardsToBeDisplayed, setCardsToBeDisplayed] = React.useState([]);
  const [start, setStart] = React.useState(0);
  const [end, setEnd] = React.useState(50);
  const [filteredCards, setFilteredCards] = React.useState([]);
  const [cardsLength, setCardsLength] = React.useState(0);


  const init = () => {
    Api.getIds()
      .then(data => {
        const filteredData = new Set(data.result);
        const filteredDataArray = Array.from(filteredData);
        if (!localStorage.getItem('ids')) {
          localStorage.setItem('ids', JSON.stringify(filteredDataArray))
        }
        Api.getItems({ "ids": filteredDataArray })
          .then(cards => {
            const filteredCards = cards.result.filter((card, index) => {
              return card.id !== cards.result[index - 1]?.id
            })
            if (!localStorage.getItem('cards')) {
              localStorage.setItem('cards', JSON.stringify(filteredCards))
            }
            setCards(filteredCards)
            setFilteredCards(filteredCards)
            setCardsToBeDisplayed(filteredCards.slice(0, 50))
            setIsLoading(false);
          })
      }
      )
  }

  React.useEffect(() => {
    const cards = JSON.parse(localStorage.getItem('cards'));
    if (cards) {
      setCards(cards)
      setFilteredCards(cards)
      setCardsToBeDisplayed(cards.slice(0, 50))
      return
    }
    try {
      setIsLoading(true);
      init();
    } catch (error) {
      console.log(error.message);
      setErrorText('Произошла ошибка. Попробуйте еще раз')
      init();
    } finally {
      setTimeout(() => localStorage.clear(), 1000 * 10 * 60 * 60 * 4);
    }
  }, []);

  const moveBack = () => {
    setStart(start - 50);
    setEnd(end - 50);
    setCardsToBeDisplayed(filteredCards.slice(start - 50, end - 50))
  }
  const moveForward = () => {
    setStart(start + 50);
    setEnd(end + 50);
    setCardsToBeDisplayed(filteredCards.slice(start + 50, end + 50))
  }


  const onFilter = async (params) => {
    const { brand, product, price } = params;
    console.log(filteredCards)
    const cardsFilter = cards.filter(card => {
      if (card.brand?.toLowerCase().includes(brand.toLowerCase()) === false || card.brand === null) {
        return false
      }
      if (product && card.product.toLowerCase().includes(product.toLowerCase()) === false) {
        return false
      }
      if (price && card.price !== Number(price)) {
        return false
      }
      return true
    })
    setStart(0);
    setEnd(50);
    setFilteredCards(cardsFilter);
    setCardsToBeDisplayed(cardsFilter.slice(0, 50))
  }

  React.useEffect(() => {
    setCardsLength(filteredCards.length)
  }, [filteredCards])

  return (
    <Routes>
      <Route path="/" element={
        <Main
        />
      } />
      <Route
        path='/catalog'
        element={
          <Catalog
            cardsLength={cardsLength}
            cards={cardsToBeDisplayed}
            errorText={errorText}
            isLoading={isLoading}
            start={start}
            moveForward={moveForward}
            moveBack={moveBack}
            onFilter={onFilter}
          />
        }
      />
      <Route path="*" element={
        <NotFound />
      } />
    </Routes>
  );
}

export default App;
