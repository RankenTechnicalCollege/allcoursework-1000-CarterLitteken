import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFloppyDisk, faMagicWandSparkles, faWarning } from '@fortawesome/free-solid-svg-icons';

const Item = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [itemName, setItemName] = useState('');
  const [rarity, setRarity] = useState('');
  const [itemType, setItemType] = useState('');
  

  useEffect(() => {
    setItemName(props.item.itemName);
    setRarity(props.item.rarity);
    setItemType(props.item.itemType);
  },[]);

  const saveItem = () => {
    setEditMode(false); 
    const updatedItem = {itemName:itemName, rarity:rarity, itemType:itemType, id:props.item.id, image:props.item.image};
    props.updateItem(updatedItem);
  };



  return (
    <div className='card mb-3'>
      <img src={props.item.image} alt='Our Item' className='card-image-top' />
      {!editMode && <ul className='list-group list-group-flush'>
        <li className='list-group-item text-center'>{props.item.itemName}</li>
        <li className='list-group-item text-center'>{props.item.rarity}</li>
        <li className='list-group-item text-center'>{props.item.itemType}</li>
        <button type='button' className='btn btn-danger' onClick={() => props.removeItem(props.item)}>Delete Item <FontAwesomeIcon icon={faWarning}/></button>
        <button type='button' className='btn btn-warning' onClick={() => setEditMode(true)}>Edit Item <FontAwesomeIcon icon={faMagicWandSparkles}/></button>
      </ul>
      }
      {editMode && <ul className='list-group list-group-flush'>
        <li className='list-group-item text-center'><input type='text' className='form-control' value={itemName} onChange={(e) => setItemName(e.currentTarget.value)} /></li>
        <li className='list-group-item text-center'><input type='text' className='form-control' value={rarity} onChange={(e) => setRarity(e.currentTarget.value)} /></li>
        <li className='list-group-item text-center'><input type='text' className='form-control' value={itemType} onChange={(e) => setItemType(e.currentTarget.value)} /></li>
        <li className='list-group-item text-center'><button type='button' className='btn btn-secondary' onClick={saveItem}>Save <FontAwesomeIcon icon={faFloppyDisk} /></button></li>
      </ul>}
			
      
    </div>
  )
}

export default Item
