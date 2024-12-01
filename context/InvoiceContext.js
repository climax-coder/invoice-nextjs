import React, { useReducer, createContext, useContext } from 'react';
import invoiceReducer, { initialState } from './InvoiceReducer';

export const InvoiceContext = createContext(initialState);

export function InvoiceProvider({ children }) {
  const [state, dispatch] = useReducer(invoiceReducer, initialState);

  const addInvoice = (invoice) => {
    dispatch({
      type: 'Add_Invoice',
      payload: {
        invoices: invoice,
      },
    });
  };

  const removeInvoice = (invoice) => {
    dispatch({
      type: 'Remove_Invoice',
      payload: {
        invoices: 'Invoice removed',
      },
    });
  };

  const updateInvoice = (invoice) => {
    dispatch({
      type: 'Update_Invoice',
      payload: {
        invoice: 'Invoice added',
      },
    });
  };

  const value = {
    addInvoice,
    removeInvoice,
    invoices: state.invoices,
  };

  return (
    <InvoiceContext.Provider value={value}>{children}</InvoiceContext.Provider>
  );
}

export default function useInvoice() {
  const context = useContext(InvoiceContext);

  if (context === undefined) {
    throw new Error('useInvoice must be used within InvoiceContext');
  }

  return context;
}
