import JSONAPISerializer from '@ember-data/serializer/json-api';
const getFormattedDate = (date) => {
  const day = new Date(date);
  const yyyy = day.getFullYear();
  let mm = day.getMonth() + 1; // Months start at 0!
  let dd = day.getDate();

  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;

  return dd + '/' + mm + '/' + yyyy;
};

export default class ForecastSerializer extends JSONAPISerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    // console.log(payload, 'payload');
    payload = {
      data: payload.DailyForecasts.map((item) => ({
        id: item.EpochDate,
        type: 'forecast',
        attributes: {
          date: getFormattedDate(item.Date),
          tempMinValue: item.Temperature.Minimum.Value,
          tempMaxValue: item.Temperature.Maximum.Value,
          dayIcon: item.Day.Icon,
          dayIconPhrase: item.Day.IconPhrase,
          nightIcon: item.Night.Icon,
          nightIconPhrase: item.Night.IconPhrase,
        },
      })),
    };
    // console.log(payload, 'payload');
    return payload;
  }
}
