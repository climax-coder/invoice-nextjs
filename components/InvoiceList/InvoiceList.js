import React from 'react';
import Link from 'next/link';
import { FaCaretRight } from 'react-icons/fa';
import styles from './styles/invoicelist.module.css';
import useInvoice from '../../context/InvoiceContext';
import { addItems } from '../../lib/addItems';

function InvoiceList() {
  const { invoices } = useInvoice();
  return (
    <div className={styles.invoicelistcontainer}>
      <div className={styles.invoicelist}>
        <div>
          {invoices.map((data) => (
            <Link href={`/invoice/${data.invoiceno}`} key={data.invoiceno}>
              <div className={styles.invoicedata}>
                <div className={styles.invoicedatauser}>
                  <div className={styles.invoiceno}>
                    <span className={styles.sign}>#</span>
                    {data.invoiceno}
                  </div>
                  <div className={styles.todane}>{data.invoicedate} </div>
                  <div className={styles.todane}>{data.toname}</div>
                </div>
                <div className={styles.price}>Ksh {addItems(data.items)}</div>
                <div className={styles.status}>{data.status}</div>
                <div className={styles.caret}>
                  <FaCaretRight />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InvoiceList;
