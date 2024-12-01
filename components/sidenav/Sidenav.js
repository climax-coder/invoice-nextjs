import React from 'react';
import styles from './styles/sidenav.module.css';
import Image from 'next/image';

function Sidenav() {
  return (
    <div className={styles.sidenav}>
      <div>
        <Image
          src="/images/invoicelogo.png"
          alt="invoice logo"
          height={90}
          width={90}
        />
      </div>
      <div className={styles.navbtns}>
        <div className={styles.darkbtn}>
          <Image
            src="/images/icon-moon.svg"
            alt="darkmodebtn"
            width={20}
            height={20}
          />
        </div>
        <div className={styles.separator}></div>
        <div className={styles.uimage}>
          <Image
            src="/images/user.jpeg"
            alt="user image"
            width={40}
            height={40}
          />
        </div>
      </div>
    </div>
  );
}

export default Sidenav;
