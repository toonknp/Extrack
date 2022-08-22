import './MyActivity.scss'
import { useState } from 'react'
import testData from '../../components/CartList/testData'
import CartList from '../../components/CartList/CardList'
import ButtonAddActivity from '../../components/ButtonAddActivity/ButtonAddActivity'

const MyActivity = () => {
  const [ cards, setCards ] = useState(testData)
  const updateCard = (selectedCard) => {
    
  }

  const removeCard = (selectedCard) => {
    const newCards = cards.filter(card => {
      return card.id != selectedCard.id
    })
    setCards(newCards)
  }

  return (
    <div className="my-activity">
      <div className='container'>
      <ButtonAddActivity />
        <h1>My Activity</h1> 
        <CartList
          cards={cards}
          onRemove={removeCard}
          onCHange={updateCard}
        />
      </div>
    </div>
  )
}

export default MyActivity