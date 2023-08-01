const url =
  'https://cms-chesheast.cloud.contensis.com/api/delivery/projects/website/contentTypes/rangerEvents/entries?accessToken=QCpZfwnsgnQsyHHB3ID5isS43cZnthj6YoSPtemxFGtcH15I&pageSize=500';

export default async (ctx) => {
  let { items } = await fetch(url).then((response) => {
    return response.json();
  });
  let arr = createDates(items.slice());
  if (arr.length) {
    arr.sort(sortDate);
  }
  ctx.store.dispatch('setItems', arr);
};

const sortDate = (a, b) => {
  return a.dateStartEnd.from - b.dateStartEnd.from;
};

const createDates = (arr) => {
  return arr.map((e) => {
    return {
      ...e,
      dateStartEnd: {
        to: new Date(e.dateStartEnd.to),
        from: new Date(e.dateStartEnd.from),
      },
    };
  });
};
