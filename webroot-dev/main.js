  var basic = require('./js/app/basic.js');
  var modes = require('./js/app/modes.js');
  basic.initialize();
  modes.init();
  modes.init({
      cont_node: $('#activityMode'),
      url_modes: "js/getActiveData.json",
      url_htm: "js/getHtmData.json"
  })
