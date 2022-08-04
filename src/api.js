const axios = require("axios").create({
  baseURL: "https://api.meijinerp.com/",
  timeout: 1000,
  headers: { "Access-Control-Allow-Origin": "http://khub.meijinerp.com" },
});

export default {
  async testConnection() {
    try {
      const res = await axios.get("/");
      return res.data;
    } catch (err) {
      alert(err);
    }
  },
};
