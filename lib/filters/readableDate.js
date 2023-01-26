const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
dayjs.extend(utc);

module.exports = (date) => {
  return dayjs(date).utc().format('D MMMM YYYY hh:mm A');
};
