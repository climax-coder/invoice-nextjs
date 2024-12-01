import React from 'react';
import InvoiceList from '../InvoiceList/InvoiceList';
import Sidenav from '../sidenav/Sidenav';
import Topbar from '../topbar/Topbar';
import styles from '../../styles/Home.module.css';

function Layout() {
  return (
    <div className={styles.bars}>
      <Sidenav />
      <div>
        <Topbar />
        <InvoiceList />
      </div>
    </div>
  );
}

export default Layout;
