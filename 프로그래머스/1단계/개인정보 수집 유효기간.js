const solution = (today, terms, privacies) => {
  var answer = [];
  const periodList = makePeriodList(terms);
  const endDayList = makeEndDayList(privacies, periodList);
  return checkPeriod(today, endDayList);
};

const makePeriodList = (terms) => {
  const periodList = {};
  terms.forEach((item) => {
    const splitTypePeriod = item.split(" ");
    periodList[splitTypePeriod[0]] = splitTypePeriod[1];
  });
  return periodList;
};

const makeEndDayList = (privacies, periodList) => {
  const endDayList = [];
  privacies.forEach((item, index) => {
    const splitDayType = item.split(" ");
    const startDay = splitDayType[0];
    const type = splitDayType[1];

    const period = periodList[type] * 1;

    const yearMonthDay = startDay.split(".");
    let year = yearMonthDay[0] * 1;
    let month = yearMonthDay[1] * 1;
    let day = yearMonthDay[2];

    if (month + period > 12 || period % 12 == 0) {
      if (period % 12 == 0) year += period / 12;
      else if ((month + period) % 12 == 0) {
        year += parseInt((month + period) / 12 - 1);
        month = 12;
      } else {
        year += parseInt((month + period) / 12);
        month = (month + period) % 12;
      }
    } else {
      month += period;
    }
    month = String(month).padStart(2, "0");
    const endDay = year + month + day;
    console.log(month, endDay);
    endDayList.push(endDay);
  });
  return endDayList;
};

const checkPeriod = (today, endDayList) => {
  const removeList = [];
  const removeDatToday = today.replace(/\./g, "");
  console.log(removeDatToday, endDayList);
  endDayList.forEach((item, index) => {
    if (item <= removeDatToday) removeList.push(index + 1);
  });
  return removeList;
};
