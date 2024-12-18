import React, { useState } from 'react'
import { nanoid } from 'nanoid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import './AddItem.css'

const AddItem = (props) => {
    const[itemName, setItemName] = useState('');
    const[rarity, setRarity] = useState('');
    const[itemType, setItemType] = useState('');
    const[selectedFile, setSelectedFile] = useState('');

    const doWork = () => {
        const newItem = {
            'id': nanoid(),
            'itemName': itemName,
            'rarity': rarity,
            'itemType': itemType,
            'image': URL.createObjectURL(selectedFile)
        }
        props.addItem(newItem)
    }

    const imageUpdate = (event) => {
        setSelectedFile(event.target.files[0]);
    }

  return (
    <div className='row mt-4' id='addItem'>
        <h3>Add Item</h3>
        <div className='col-md-2'>
            <label htmlFor='txtItemName' className='form-label'>Item Name</label>
            <input type='text' id='txtItemName' placeholder='Name' className='form-control' onChange={(event) => setItemName(event.currentTarget.value)} value={itemName} />
        </div>
        <div className='col-md-2'>
            <label htmlFor='txtRarity' className='form-label'>Item Rarity</label>
            <input type='text' id='txtRarity' placeholder='Rarity' className='form-control' onChange={(event) => setRarity(event.currentTarget.value)} value={rarity} />
        </div>
        <div className='col-md-2'>
            <label htmlFor='txtItemType' className='form-label'>Item Type</label>
            <input type='text' id='txtItemType' placeholder='Type' className='form-control' onChange={(event) => setItemType(event.currentTarget.value)} value={itemType} />
        </div>
        <div className='col-md-3'>
            <label htmlFor='fileUpload' className='form-label'>Item Image</label>
            <input type='file' id='fileUpload' className='form-control' onChange={imageUpdate} />
        </div>
        <div className='col-md-2 mt-4'>
            <button type='button' className='btn btn-lg btn-success' id='btnAdd' onClick={doWork}>Add Item <FontAwesomeIcon icon={faPlusCircle}/></button>
        </div>
        
    </div>
  )
}

export default AddItem