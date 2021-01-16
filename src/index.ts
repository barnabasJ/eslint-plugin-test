import get from "lodash/get";
import { map, filter, reducer } from "lodash";

const data = {
  hello: "world",
};

export default () => get(data, "hello");
