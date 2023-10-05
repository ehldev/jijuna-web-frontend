export const formatNumber = function (val, fractionDigits = 2) {
  const d = parseFloat(val);
  if (!isNaN(d)) {
    return d.toLocaleString("en", {
      minimumFractionDigits: fractionDigits,
      maximumFractionDigits: fractionDigits,
    });
  } else {
    return "";
  }
};

export default {
  formatNumber
};
