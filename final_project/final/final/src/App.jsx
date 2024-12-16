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
  const [gradYear, setGradYear] = useState('');

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
    firstName: "Leeland",
    lastName: "Ebbing",
    email: "lebbing0@patch.com",
    image: "student1.jpg",
    gradYear: 2024
  }, {
    id: nanoid(),
    firstName: "Darb",
    lastName: "Scrogges",
    email: "dscrogges1@tiny.cc",
    image: "student2.jpg",
    gradYear: 2025
  }, {
    id: nanoid(),
    firstName: "Rochella",
    lastName: "Trudgion",
    email: "rtrudgion2@live.com",
    image: "student3.jpg",
    gradYear: 2026
  }, {
    id: nanoid(),
    firstName: "Tessie",
    lastName: "Hellyar",
    email: "thellyar3@europa.eu",
    image: "student4.jpg",
    gradYear: 2025
  }, {
    id: nanoid(),
    firstName: "Sibeal",
    lastName: "Harrild",
    email: "sharrild4@icio.us",
    image: "student5.jpg",
    gradYear: 2024
  }, {
    id: nanoid(),
    firstName: "Richard",
    lastName: "Frensch",
    email: "rfrensch5@nymag.com",
    image: "student6.jpg",
    gradYear: 2026
  }, {
    id: nanoid(),
    firstName: "Beaufort",
    lastName: "Escudier",
    email: "bescudier6@usnews.com",
    image: "student7.jpg",
    gradYear: 2025
  }, {
    id: nanoid(),
    firstName: "Kennedy",
    lastName: "Maxfield",
    email: "kmaxfield7@squidoo.com",
    image: "student8.jpg",
    gradYear: 2024
  }, {
    id: nanoid(),
    firstName: "Georgeanna",
    lastName: "O'Riordan",
    email: "goriordan8@hhs.gov",
    image: "student9.jpg",
    gradYear: 2026
  }, {
    id: nanoid(),
    firstName: "Marisa",
    lastName: "Carletto",
    email: "mcarletto9@opensource.org",
    image: "student10.jpg",
    gradYear: 2025
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

    if(gradYear){
      keywordsArray.push(gradYear.toString());
    }

    if(keywordsArray.length > 0){
      const searchResults = allItems.filter(item => {
        for(const word of keywordsArray){
          if(item.firstName.toLowerCase().includes(word) || 
             item.lastName.toLowerCase().includes(word) ||
             item.gradYear === parseInt(word)){
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
    <div className='container'>
      <div className='row' id='allItem'>
        <h3>Current Items</h3>
        {searchResults && searchResults.map((item) => (
        <div className='col-lg-2' key={item.id}>
          <Item item={item} removeItem={removeItem} updateItem={updateItem} />
          
        </div>)
  )}
      </div>

        {/*!allStudents && <button type='button' className='btn btn-lg btn-success' onClick={() => setAllStudents(students)}>Save Student</button>*/}
        {<AddItem addItem={addItem} />}
        <div className='row mt-4' id='searchItems'>
          <h3>Search Items</h3>
          <div className='col-md-4'>
            <label htmlFor='txtKeywords'>Search by First or Last Name</label>
            <input type='text' className='form-control' placeholder='Search First or Last Name' onChange={e => setKeywords(e.currentTarget.value)} value={keywords} />
          </div>
          <div className='col-md-4'>
            <label htmlFor='txtKeywords'>Search by Graduation Year</label>
            <select className='form-select' value={gradYear} onChange={e => setGradYear(e.currentTarget.value)}>
              <option value=''>Select Year</option>
              {_(allItems).map(item => item.gradYear).sort().uniq().map(year => <option key={year} value={year}>{year}</option>).value()}
            </select>
          </div>
          <div className='col-md-4 mt-3'>
            <button type='button' className='btn btn-lg btn-primary' onClick={searchItems}>Search Items <FontAwesomeIcon icon={faSearch}/></button>
          </div>

        </div>
    </div>
    
  )
}

export default App
