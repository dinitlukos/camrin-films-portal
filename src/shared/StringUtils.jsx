export const clone = (o) => JSON.parse(JSON.stringify(o));
export const generateUId = (g, b, d) => {
  let p1 = g
    ? g.replace(/ +/g, "").substring(0, 3)
    : Math.random().toString(36).substring(3, 7);
  let p2 = b
    ? b.replace(/ +/g, "").substring(0, 3)
    : Math.random().toString(36).substring(3, 7);
  let p3 = d ? d : Math.floor(Math.random() * 100000001);
  return [p1, p2, Math.random().toString(36).substring(3, 8), p3].join("-").toLowerCase();
};
