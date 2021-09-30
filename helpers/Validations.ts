import currency from "currency.js";

export const isPositive = (value: string | number | currency) =>
  Math.sign(parseFloat(value.toString())) === 1;
