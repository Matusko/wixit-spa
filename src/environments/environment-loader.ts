import { environment as defaultEnvironment } from './environment';

export const environmentLoader = new Promise<any>((resolve, reject) => {
  if (defaultEnvironment.production) {
    console.log("asas");
    var xmlhttp = new XMLHttpRequest(),
      method = 'GET',
      url = './config/environment.json';
    xmlhttp.open(method, url, true);
    xmlhttp.onload = function() {
      if (xmlhttp.status === 200) {
        resolve(JSON.parse(xmlhttp.responseText));
      } else {
        reject(xmlhttp)
      }
    };
    xmlhttp.send();
  } else {
    resolve(defaultEnvironment);
  }

});
