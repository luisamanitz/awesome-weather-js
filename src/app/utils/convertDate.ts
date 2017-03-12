export default function timeConverter(timestamp){
  let timestring = new Date(timestamp * 1000),
      months = ['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'],
      year = timestring.getFullYear(),
      month = months[timestring.getMonth()],
      date = timestring.getDate(),
      hour = timestring.getHours(),
      min = timestring.getMinutes(),
      time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min ;

  return time;
}
