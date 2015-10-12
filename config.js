System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "none",
  paths: {
    "github:*": "jspm_packages/github/*"
  },

  map: {
    "horcrux-core": "github:hor-crux/horcrux-core@master",
    "github:hor-crux/horcrux-core@master": {
      "html": "github:hor-crux/html@master",
      "observejs": "github:polymer/observe-js@0.5.6",
      "webcomponents": "github:webcomponents/webcomponentsjs@0.7.12"
    }
  }
});
