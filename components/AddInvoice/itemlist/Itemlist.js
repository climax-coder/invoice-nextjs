import React from 'react';
import { MdDelete } from 'react-icons/md';
import styles from '../styles/addinvoice.module.css';

function Itemlist({ input, handleFormChange, removeFields, index }) {
  return (
    <div className={styles.itemlistcontainer}>
      <input
        className={styles.itemname}
        name="itemname"
        placeholder="New Item"
        value={input.itemname}
        onChange={(e) => handleFormChange(index, e)}
      />
      <input
        className={styles.itemqts}
        name="qty"
        placeholder="0.0"
        value={input.qty}
        onChange={(e) => handleFormChange(index, e)}
      />
      <input
        className={styles.itemqts}
        name="price"
        placeholder="0.0"
        value={input.price}
        onChange={(e) => handleFormChange(index, e)}
      />
      <div
        className={styles.itemname}
        value={input.qty * input.price}
        onChange={(e) => handleFormChange(index, e)}
      >
        {input.qty * input.price}
      </div>
      <button className={styles.dltbtn} onClick={() => removeFields(index)}>
        <MdDelete />
      </button>
    </div>
  );
}

export default Itemlist;
