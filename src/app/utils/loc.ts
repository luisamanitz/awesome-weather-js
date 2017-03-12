import jsonp from './jsonp';
import timeConverter from './convertDate';
import tempConverter from './convertTemp';

export default function location(pos, callback) {
  //TODO test if apiURL actually exists

  let coord = pos.coords,
      date = Date.now(),
      apiURL = `https://api.darksky.net/forecast/f4cdaf9c94d44202f8638115338f52a4/${coord.latitude},${coord.longitude}`;

  jsonp(apiURL, function(json) {
    let date = json.currently.time,
        temp = Math.round((tempConverter(json.currently.temperature)) * 100) / 100;
    //console.log(timeConverter(date));
    callback(json)
  } )
};
