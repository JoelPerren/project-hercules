exports.nMonthsFromNow = (n) => {
  const d = new Date();
  const targetMonth = d.getMonth() + n;
  d.setMonth(targetMonth);
  if (d.getMonth() !== targetMonth % 12) {
    d.setDate(0); // last day of previous month
  }
  return d;
};
