import _ from "lodash";
import { payment_terms } from "../constants/payment";
import { clone } from "./StringUtils";

const getPercentage = (events, e, mode) => {
// console.log(events,e,mode)
  if (mode == "silver") {
    switch (e) {
      case "booking":
        return 10;
      case "single_engagement":
        return _.includes(events, "single_wedding") ? 40 : 80;
      case "duel_engagement":
        return _.includes(events, "duel_wedding") ? 40 : 80;
      case "single_wedding":
        return _.includes(events, "single_engagement") ? 40 : 80;
      case "duel_wedding":
        return _.includes(events, "duel_engagement") ? 40 : 80;
      default:
        return 0;
    }
  } else if (mode == "golden") {
    switch (e) {
      case "booking":
        return 10;
      case "single_engagement":
        return _.includes(events, "single_wedding") ? 40 : 80;
      case "duel_engagement":
        return _.includes(events, "duel_wedding") ? 40 : 80;
      case "single_wedding":
        return _.includes(events, "single_engagement") ? 40 : 80;
      case "duel_wedding":
        return _.includes(events, "duel_engagement") ? 40 : 80;
      default:
        return 0;
    }
  } else if (mode == "platinum") {
    switch (e) {
      case "booking":
        return 20;
      case "single_engagement":
        return _.includes(events, "single_wedding") ? 35 : 75;
      case "duel_engagement":
        return _.includes(events, "duel_wedding") ? 35 : 75;
      case "single_wedding":
        return _.includes(events, "single_engagement") ? 40 : 75;
      case "duel_wedding":
        return _.includes(events, "duel_engagement") ? 40 : 75;
      default:
        return 0;
    }
  }
   else {
    switch (e) {
      case "booking":
        return 20;
      case "single_engagement":
        return _.includes(events, "single_wedding") ? 35 : 75;
      case "duel_engagement":
        return _.includes(events, "duel_wedding") ? 35 : 75;
      case "single_wedding":
        return _.includes(events, "single_engagement") ? 40 : 75;
      case "duel_wedding":
        return _.includes(events, "duel_engagement") ? 40 : 75;
      default:
        return 0;
    }
  }
};

const getTerms = (t, ev, mode) => {
  const out = _.map(t, (pt) => {
    if (pt.key != "balance")
      pt.description = pt.description.replace(
        "INPUT_PERCENTAGE",
        getPercentage(ev, pt.key, mode)
      );
    return pt;
  });
  return _.sortBy(out, ["order"]);
};

const composePaymentTerms = (v, evs = []) => {
  var ev = evs;
  ev.push("booking", "balance");
  let trm = [];
  _.uniq(ev).forEach((v, i) => {
    const el = clone(payment_terms).find(({ key }) => key === v);
    if (el) {
      trm.push(el);
    }
  });
  return getTerms(trm, ev, v);
};

export default composePaymentTerms;
