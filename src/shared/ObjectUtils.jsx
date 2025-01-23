import _ from 'lodash';

export const sort = (src = [], order = []) => {
  return src.sort((a, b) => order.indexOf(a.name) - order.indexOf(b.name));
};

export const objArraySort = (src = [], order = []) => {
  var r = [];
  order.forEach((v) => {
    const d = _.find(src, (s) => s.name == v);
    if (d) r.push(d);
  });
  return r;
};
