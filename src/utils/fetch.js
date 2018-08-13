export default (url = '', data = {}, type = 'GET') => {
  type = type.toUpperCase();
  // get 请求参数拼接
  if (type === 'GET') {
    let paramsUrl = '';
    Object.keys(data).forEach((key) => { 
      paramsUrl += `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}&`;
    })
    if (paramsUrl) {
      url = `${url}?${paramsUrl.substring(0, paramsUrl.lastIndexOf('&'))}`;
    }
  }
  // 请求类型
  let reqObj = '';
  if (window.fetch) {
    reqObj = fetch;
  } else if (window.XMLHttpRequest) {
    reqObj = new XMLHttpRequest();
  } else {
    try {
      reqObj = new window.ActiveXObject("Microsoft.XMLHTTP");
    } catch (ex) {
    }
  }

  if (reqObj === fetch) {
    let reqConfig = {
      method: type,
      mode: 'cors',
      credentials: 'include',
      cache: 'default',
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
				'Accept': 'application/json, text/javascript',
        'Content-Type': 'application/json'
			}
    }
    if (type === 'POST') {
      reqConfig.defineProperty(reqConfig, 'body', {
        value: data
      })
    }
    try {
      return fetch(url, reqConfig).then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          console.log('%c请求结果失败：o(╥﹏╥)o', 'color: #3da8db;');
          return '';
        }
      })
    } catch (error) {
      throw new Error(error);
    }
  } else {  
    // 不支持fetch的浏览器
    return new Promise((resolve, reject) => {
      let sentData = null;
      if (type === 'POST') {
        sentData = data;
      }

      reqObj.open(type, url, true);
      reqObj.timeout = 30000;

      reqObj.onload = () => {
        let res = reqObj.response;
        if (Object.prototype.toString.call(res) === '[Object String]') {
          res = resolve(JSON.parse(res));
        }
        resolve(res);
      }
      reqObj.onerror = () => { reject(''); }

      reqObj.send(sentData);
    })
  }
}