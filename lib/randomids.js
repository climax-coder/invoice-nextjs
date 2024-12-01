import Randomstring from 'randomstring';

export function getInvoiceNo() {
  return Randomstring.generate(7).toUpperCase();
}
