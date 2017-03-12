import jsonp from './jsonp';
import timeConverter from './convertDate';

export default function location(pos) {
  //TODO test if apiURL actually exists

  let coord = pos.coords,
      answer = {},
      date = Date.now(),
      apiURL = `https://api.darksky.net/forecast/f4cdaf9c94d44202f8638115338f52a4/${coord.latitude},${coord.longitude}`;

  jsonp(`${apiURL}`, function(json) {
    let date = json.currently.time;

    console.log(timeConverter(date));
    answer = json;

    //console.log(json.longitude); // Action
    //console.log(json.latitude); // Action
    //console.log('locationp-jsonp: '); // Action
    //console.log(answer); // Action
  } )

  //console.log('return: '); // Action
  //console.log(answer); // Action
  //console.log(json.longitude); // Action
  //console.log(json.timezone); // Action
};
