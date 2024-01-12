import axios from "axios";
import { BACK_URL } from "../config/keys";

const fetchData = async (url, data) => {
  const res = await axios({
    method: "post",
    url: `${BACK_URL}${url}`,
    data: { data },
  });
  return res;
};
export default fetchData;
