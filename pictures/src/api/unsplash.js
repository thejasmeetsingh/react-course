import axios from "axios";

import accessKey from "./config";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: accessKey,
  },
});
