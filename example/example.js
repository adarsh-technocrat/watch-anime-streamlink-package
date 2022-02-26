const getStreamLinkFromEmbededUrl = require("watch-anime-streamlink-package");

getStreamLinkFromEmbededUrl("https://gogoanime-tv.pro/embed/JuAP9").then(
  (val) => console.log(val)
);
