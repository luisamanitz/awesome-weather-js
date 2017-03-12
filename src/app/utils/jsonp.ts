export default function jsonp(url: string, callback: Function) {
    let callbackName: string = `jsonp_callback_${ + Math.round(100000 * Math.random())}`,
    	script = document.createElement('script');

    window[callbackName] = (data): void => {
	    delete window[callbackName];
	    document.body.removeChild(script);
      
	    callback(data);
	};

    script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName;

    document.body.appendChild(script);
};
