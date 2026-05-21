export const formatINR = (amount) =>
  new Intl.NumberFormat('en-IN', { minimumFractionDigits: 2 }).format(amount)

export const formatCurrency = (amount, currency = 'INR') =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency }).format(amount)
