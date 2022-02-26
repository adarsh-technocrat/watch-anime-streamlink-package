const axios = require("axios");
const cheerio = require("cheerio");

const getStreamLinkFromEmbededUrl = async (embededVideoUrl) => {
  try {
    if (embededVideoUrl.match("https://gogoanime") == null) {
      return "Invalid embeded url !!";
    } else {
      var response = await axios({
        url: embededVideoUrl,
        method: "GET",
      });

      const $ = cheerio.load(response.data);

      const iframe = $("iframe");

      const url = iframe.attr("src");
      if (response.status === 200) {
        return url;
      } else {
        return "Enable to get streamlink !";
      }
    }
  } catch (error) {
    return "Embeded Url is not valid !";
  }
};

module.exports = getStreamLinkFromEmbededUrl;
