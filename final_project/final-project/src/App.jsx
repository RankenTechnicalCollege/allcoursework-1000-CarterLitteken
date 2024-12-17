import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { nanoid } from 'nanoid';
import AddItem from './component/AddItem';
import _ from 'lodash';
import Item from './component/Item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [allItems, setAllItems] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  const [keywords, setKeywords] = useState('');
  const [itemType, setItemType] = useState('');

  useEffect(() => {
    if(localStorage){
      const itemsLocalStorage = JSON.parse(localStorage.getItem('items'));

      if(itemsLocalStorage){
        saveItems(itemsLocalStorage);
      }else{
        saveItems(items);
      }
    }
    
  }, []);

  const items = [{
    id: nanoid(),
    itemName: "Armor of Resistance - Breastplate",
    rarity: "Rare",
    image: "resistance_armor.jpeg",
    itemType: "Armor"
  }, {
    id: nanoid(),
    itemName: "Potion of Water Breathing",
    rarity: "Uncommon",
    image: "water_breathing_potion.png",
    itemType: "Potion"
  }, {
    id: nanoid(),
    itemName: "Ring of Spell Storing",
    rarity: "Rare",
    image: "spell_storing_ring.jpeg",
    itemType: "Ring"
  }, {
    id: nanoid(),
    itemName: "Rod of Absorption",
    rarity: "Very Rare",
    image: "absorption_rod.jpeg",
    itemType: "Rod"
  }, {
    id: nanoid(),
    itemName: "Scroll of Protection - Dragons",
    rarity: "Rare",
    image: "protection_scroll.png",
    itemType: "Scroll"
  }, {
    id: nanoid(),
    itemName: "Staff of the Magi",
    rarity: "Legendary",
    image: "magi_staff.jpeg",
    itemType: "Staff"
  }, {
    id: nanoid(),
    itemName: "Wand of Magic Missiles",
    rarity: "Uncommon",
    image: "magic_missiles_wand.jpeg",
    itemType: "Wand"
  }, {
    id: nanoid(),
    itemName: "Vorpal Sword - Longsword",
    rarity: "Legendary",
    image: "vorpal_sword.jpeg",
    itemType: "Weapon"
  }, {
    id: nanoid(),
    itemName: "Orb of Dragonkind",
    rarity: "Artifact",
    image: "dragonkind_orb.png",
    itemType: "Wondrous Item"
  }];

  const saveItems = (items) => {
    setAllItems(items);
    setSearchResults(items);
    if(localStorage){
      localStorage.setItem('items', JSON.stringify(items));
      console.log('saved to local storage');
    }
  };

  const addItem = (newItem) => {
    const updatedItems = [...allItems, newItem];
    saveItems(updatedItems);
  };

  const removeItem = (itemToDelete) => {
    //console.table(studentToDelete);
    const updatedItemArray = allItems.filter(item => item.id !== itemToDelete.id);
    saveItems(updatedItemArray);
  };

  const updateItem = (updatedItem) => {
    //console.table(updatedStudent);
    const updatedItemArray = allItems.map(item => item.id === updatedItem.id ? {...item, ...updatedItem} : item);
    saveItems(updatedItemArray);
  };

  const searchItems = () => {
    let keywordsArray = [];

    if(keywords){
      keywordsArray = keywords.toLowerCase().split(' ');
    }

    if(itemType){
      keywordsArray.push(itemType.toString());
    }

    if(keywordsArray.length > 0){
      const searchResults = allItems.filter(item => {
        for(const word of keywordsArray){
          if(item.itemName.toLowerCase().includes(word) ||
             item.itemType == word){
              return true;
            }
        }
        return false;
      });
      setSearchResults(searchResults);
    }else{
      setSearchResults(allItems);
    }
  };
  
  return (
    <div className='container-fluid'>
      {/* Make search bar? Make it look rugged, medieval, or rural? */}
      <div className='row mt-4' id='searchItems'>
        <h3>Search Items</h3>
        <div className='col-md-4'>
          <label htmlFor='txtKeywords'>Search by Item Name</label>
          <input type='text' className='form-control' placeholder='Search Item Name' onChange={e => setKeywords(e.currentTarget.value)} value={keywords} />
        </div>
        <div className='col-md-4'>
          <label htmlFor='txtKeywords'>Search by Item Type</label>
          <select className='form-select' value={itemType} onChange={e => setItemType(e.currentTarget.value)}>
            <option value=''>All Item Type</option>
            {_(allItems).map(item => item.itemType).sort().uniq().map(type => <option key={type} value={type}>{type}</option>).value()}
          </select>
        </div>
        <div className='col-md-4 mt-3'>
          <button type='button' className='btn btn-lg btn-primary' onClick={searchItems}>Search Items <FontAwesomeIcon icon={faSearch}/></button>
        </div>

      </div>
      
      <div className='row mt-5' id='allItem'>
        <h3>Current Items</h3>
        {searchResults && searchResults.map((item) => (
        <div className='col-lg-2' key={item.id}>
          <Item item={item} removeItem={removeItem} updateItem={updateItem} />
          
        </div>)
  )}
      </div>

      {/*!allStudents && <button type='button' className='btn btn-lg btn-success' onClick={() => setAllStudents(students)}>Save Student</button>*/}
      {<AddItem addItem={addItem} />}
      
    </div>
    
  )
}

export default App
