export function addItems(items) {
  let total = 0;
  items.forEach((item) => {
    total += item.qty * item.price;
  });
  return total;
}
