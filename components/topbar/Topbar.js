import React, { useState } from 'react';
import { MdOutlineAddCircleOutline } from 'react-icons/md';
import useInvoice from '../../context/InvoiceContext';
import AddInvoice from '../AddInvoice/AddInvoice';
import styles from './styles/topbar.module.css';

function Topbar() {
  const { invoices } = useInvoice();
  const [isShow, setIsshow] = useState(false);

  const display = () => setIsshow(true);
  const hide = () => setIsshow(false);
  return (
    <div className={styles.topbar}>
      <div>
        <div className={styles.flex}>
          <div>
            <div className={styles.title}>Invoices</div>
            <div className={styles.subtitle}>
              There are {invoices.length} total invoices
            </div>
          </div>
          <div className={styles.topbtns}>
            <div className={styles.filter}>
              <div className={styles.select}>
                <select>
                  <option>Filter by status</option>
                  <option value={'drafts'}>Drafts</option>
                  <option value={'pending'}>Pending</option>
                  <option value={'paid'}>Paid</option>
                </select>
              </div>
            </div>
            <button className={styles.addbtn} onClick={display}>
              <MdOutlineAddCircleOutline /> <span>New invoice</span>
            </button>
          </div>
        </div>
      </div>
      <AddInvoice show={isShow} toggle={hide} />
    </div>
  );
}

export default Topbar;
