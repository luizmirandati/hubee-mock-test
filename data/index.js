const orders = require('./order/orders.json');
const homeOverview = require('./home/overview.json');
const overviewGrossValueVsNetValue = require('./home/overview-gross-value-vs-net-value.json');
const overviewTotalGrossSales = require('./home/overview-total-gross-sales.json');

module.exports = () => ({
  orders: orders,
  "dashboard-type-1": homeOverview,
  "dashboard-type-2": overviewGrossValueVsNetValue,
  "dashboard-type-3": overviewTotalGrossSales
});
