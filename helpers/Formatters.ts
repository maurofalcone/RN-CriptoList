export const currencyToNumber = (currency: string) =>
  Number(currency.replace(/[^0-9\.-]+/g, ""));

export const isPositive = (value: number) => Math.sign(value) === 1;

export const toFixedNoRounding = (num: any, fixed: number) => {
  var re = new RegExp("^-?\\d+(?:.\\d{0," + (fixed || -1) + "})?");
  const value = num.toString() || "0";
  return value.match(re)[0];
};
