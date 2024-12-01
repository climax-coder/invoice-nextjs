export const initialState = {
  invoices: [],
};

const invoiceReducer = (state, action) => {
  switch (action.type) {
    case 'Add_Invoice':
      return {
        invoices: [...state.invoices, action.payload.invoices],
      };
    case 'Remove_Invoice':
      console.log('Remove Invoice', action.payload);
      return {
        invoices: action.payload.invoices,
      };
    case 'Update_Invoice':
      console.log('Update Invoice', action.payload);
    default:
      throw new Error(`No case for ${type} found in Invoice reducer`);
  }
};

export default invoiceReducer;
