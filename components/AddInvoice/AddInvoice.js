import React, { useState, useRef } from 'react';
import { MdAdd } from 'react-icons/md';
import Itemlist from './itemlist/Itemlist';
import styles from './styles/addinvoice.module.css';
import useInvoice from '../../context/InvoiceContext';
import { getInvoiceNo } from '../../lib/randomids';

function AddInvoice({ show, toggle }) {
  const { invoices, addInvoice } = useInvoice();
  const [iteminputField, setItemInputField] = useState([
    { itemname: '', qty: '', price: '' },
  ]);

  const projectname = useRef('');
  const invoicedate = useRef('');
  const paymentdue = useRef('');
  const fromstreetaddr = useRef('');
  const fromcity = useRef('');
  const frompocode = useRef('');
  const fromcountry = useRef('');
  const toname = useRef('');
  const streetadrr = useRef('');
  const tocity = useRef('');
  const topocode = useRef('');
  const tocountry = useRef('');
  const toemail = useRef('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const invoicedata = {
      invoiceno: getInvoiceNo(),
      projectname: projectname.current.value,
      invoicedate: invoicedate.current.value,
      paymentdue: paymentdue.current.value,
      fromstreetaddr: fromstreetaddr.current.value,
      fromcity: fromcity.current.value,
      frompocode: frompocode.current.value,
      fromcountry: fromcountry.current.value,
      toname: toname.current.value,
      streetadrr: streetadrr.current.value,
      tocity: tocity.current.value,
      topocode: topocode.current.value,
      tocountry: tocountry.current.value,
      toemail: toemail.current.value,
      status: 'Pending',
      items: iteminputField,
    };
    addInvoice(invoicedata);
    setItemInputField([{ itemname: '', qty: '', price: '' }]);
    toggle();
  };

  const handleItemFormChange = (index, event) => {
    let data = [...iteminputField];
    data[index][event.target.name] = event.target.value;
    setItemInputField(data);
  };

  const addItemFields = (e) => {
    e.preventDefault();
    let newfield = { itemname: '', qty: '', price: '' };
    setItemInputField([...iteminputField, newfield]);
  };

  const removeItemFields = (index) => {
    let data = [...iteminputField];
    data.splice(index, 1);
    setItemInputField(data);
  };

  if (!show) {
    return null;
  }
  return (
    <div className={styles.addinvoice}>
      <div className={styles.title}>New Invoice</div>
      <div className={styles.formpadding}>
        <form>
          <div className={styles.titleinlabel}>Bill from</div>
          <div className={styles.prod}>
            <label className={styles.label} htmlFor="streetaddres">
              Street Adress
            </label>
            <input
              ref={fromstreetaddr}
              name="fromstreetaddr"
              className={styles.fullwidth}
              id="streetadress"
              type={'text'}
              required
            />
            <div className={styles.rowinputs}>
              <div>
                {' '}
                <label className={styles.label} htmlFor="city">
                  City
                </label>
                <input
                  ref={fromcity}
                  name="fromcity"
                  id="city"
                  type={'text'}
                  required
                />
              </div>
              <div>
                <label className={styles.label} htmlFor="postcode">
                  Post Code
                </label>
                <input
                  ref={frompocode}
                  name="frompocode"
                  id="postcode"
                  type={'text'}
                  required
                />
              </div>
              <div>
                <label className={styles.label} htmlFor="country">
                  Country
                </label>
                <input
                  ref={fromcountry}
                  name="fromcountry"
                  id="country"
                  type={'text'}
                  required
                />
              </div>
            </div>
          </div>
          <div className={styles.titleinlabel}>Bill To</div>
          <div className={styles.prod}>
            <div>
              <label className={styles.label} htmlFor="clientsname">
                Client&apos;s Name
              </label>
              <input
                ref={toname}
                name="toname"
                className={styles.fullwidth}
                id="clientsname"
                type={'text'}
                required
              />
              <label className={styles.label} htmlFor="clientsemail">
                Client&apos;s Email
              </label>
              <input
                ref={toemail}
                name="toemail"
                className={styles.fullwidth}
                id="clientsemail"
                type={'text'}
                placeholder="email@example.com"
                required
              />
              <label className={styles.label} htmlFor="cstreetaddres">
                Street Adress
              </label>
              <input
                ref={streetadrr}
                className={styles.fullwidth}
                name="streetadrr"
                id="clientscity"
                type={'text'}
                required
              />
            </div>
            <div className={styles.rowinputs}>
              <div>
                <label className={styles.label} htmlFor="clientscity">
                  City
                </label>
                <input
                  ref={tocity}
                  name="tocity"
                  id="clientscity"
                  type={'text'}
                  required
                />
              </div>
              <div>
                <label className={styles.label} htmlFor="clientspostcode">
                  Post Code
                </label>
                <input
                  ref={topocode}
                  name="topocode"
                  id="clientspostcode"
                  type={'text'}
                  required
                />
              </div>
              <div>
                <label className={styles.label} htmlFor="clientscountry">
                  Country
                </label>
                <input
                  ref={tocountry}
                  name="tocountry"
                  id="clientscountry"
                  type={'text'}
                  required
                />
              </div>
            </div>
          </div>
          <div>
            <div>
              <label className={styles.label} htmlFor="invoicedate">
                Invoice Date
              </label>
              <input
                ref={invoicedate}
                className={styles.fullwidth}
                type="date"
                name="invoicedate"
                id="invoicedate"
              />
            </div>
            <div>
              <label className={styles.label} htmlFor="payterms">
                Payment Terms
              </label>
              <select
                ref={paymentdue}
                className={styles.fullwidth}
                name="paymentdue"
                id="payterms"
              >
                <option className={styles.opts} value="1day">
                  Net 1 day
                </option>
                <option className={styles.opts} value="7day">
                  Net 7 day
                </option>
                <option className={styles.opts} value="14day">
                  Net 14 day
                </option>
                <option className={styles.opts} value="30day">
                  Net 30 day
                </option>
              </select>
            </div>
            <div>
              <label className={styles.label} htmlFor="description">
                Project Description
              </label>
              <input
                ref={projectname}
                className={styles.fullwidth}
                type="text"
                name="projectname"
                id="description"
                placeholder="e.g. Software development Service"
              />
            </div>
          </div>
          <div>
            <div>
              <div className={styles.itemlistTitle}>Item List</div>
              <div className={styles.itemlegends}>
                <div className={styles.itmname}>Item Name</div>
                <div className={styles.itemlabels}>Qty</div>
                <div className={styles.itemlabels}>Price</div>
                <div className={styles.itemlabels}>Total</div>
              </div>
              {iteminputField.map((input, index) => {
                return (
                  <div key={index}>
                    <Itemlist
                      input={input}
                      handleFormChange={handleItemFormChange}
                      removeFields={removeItemFields}
                      index={index}
                    />
                  </div>
                );
              })}
            </div>
            <button className={styles.addnewbtn} onClick={addItemFields}>
              <MdAdd /> Add New Item
            </button>
          </div>
          <div className={styles.btns}>
            <button onClick={toggle} className={styles.discard}>
              Discard
            </button>
            <div>
              <button className={styles.draft}>Save as Draft</button>
              <button onClick={handleSubmit} className={styles.save}>
                Save & Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddInvoice;
