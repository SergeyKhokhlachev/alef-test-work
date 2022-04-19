const path = require("path");

const alias = {
  // resource
  "@img": path.join(__dirname, "./resource/img"),
  "@font": path.join(__dirname, "./resource/font"),
  "@style": path.join(__dirname, "./resource/css"),
  "@public": path.join(__dirname, "./public"),

  // system
  "@entity": path.join(__dirname, "./src/core/entity"),
  "@enum": path.join(__dirname, "./src/core/enum"),
  "@filter": path.join(__dirname, "./src/core/filter"),
  "@layout": path.join(__dirname, "./src/core/layout"),
  "@plugin": path.join(__dirname, "./src/core/plugin"),
  "@router": path.join(__dirname, "./src/core/router"),
  "@service": path.join(__dirname, "./src/core/service"),
  "@store": path.join(__dirname, "./src/core/store"),

  // base
  "@page": path.join(__dirname, "./src/page"),
  "@component": path.join(__dirname, "./src/component"),
  "@": path.join(__dirname, "./src"),
};

module.exports = alias;
