const { DateTime } = require('luxon');

module.exports = (date) => {
  return DateTime.fromJSDate(date, { zone: 'utc' }).toFormat('d LLLL yyyy hh:mm a');
};
