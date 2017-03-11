import jsonp from './jsonp';

export default function locationp(pos) {
  //TODO test if apiURL actually exists

  let coord = pos.coords,
      apiURL = `https://api.darksky.net/forecast/f4cdaf9c94d44202f8638115338f52a4/${coord.latitude},${coord.longitude}`;

    jsonp(`${apiURL}`, function(json) {
        console.log(json); // Action
    } )
};
