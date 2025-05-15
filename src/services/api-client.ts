import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "74eb50cd370a413aacd87548166e82ad",
  },
});
