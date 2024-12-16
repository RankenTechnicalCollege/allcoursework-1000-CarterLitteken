import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [allItems, setAllItems] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  const [keywords, setKeywords] = useState('');
  const [itemType, SetItemType] = useState('');

  const items = [{
    id: nanoid(),
    itemName: "Short Sword",
    itemRarity: "Common",
    itemType: "Weapon",
    itemAttunement: false
  }]

  return (
    <div className='container'>
      <div className='row' id='allItem'>

      </div>

    </div>
  )
}

export default App
