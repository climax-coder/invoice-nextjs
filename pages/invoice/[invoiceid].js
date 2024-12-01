import React from 'react';
import useInvoice from '../../context/InvoiceContext';

function Invoice() {
  const { invoices } = useInvoice();
  return <div></div>;
}

export async function getStaticPaths() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { invoices } = useInvoice();
  const paths = invoices.map((invoice) => ({
    params: { invoiceid: invoice.invoiceno },
  }));
  return {
    paths,
  };
}

export async function getStaticProps({ params }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { invoices } = useInvoice();
  const invoiceid = invoices.filter(
    (invoice) => invoice.invoiceno == params.invoiceid
  );

  return {
    props: { invoiceid },
  };
}

export default Invoice;
