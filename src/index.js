module.exports = function check(str, bracketsConfig) {

  let bracketsConf = bracketsConfig.reduce((accum, bracket) => {
    accum[bracket[0]] = bracket[1];
    return accum;
  }, {});

  let strArr = str.split('');
  
  let bracketsRemove = (strArr, bracketsConf) => {
    let openBr = '';
    let len = strArr.length;

    for (let i = 0; i < len; i++) {
      if (openBr) {
        if (bracketsConf[openBr] && bracketsConf[openBr] === strArr[i]) {
          strArr.splice(i-1,2);
          len = len - 2;
        } 
      }

      openBr = strArr[i];
    }
    
    return strArr;
  };

  let oldArrLength = null;

  do {
    oldArrLength = strArr.length;
    strArr = bracketsRemove(strArr, bracketsConf);

    if (strArr.length === oldArrLength && !strArr.length) {
      return true;
    }

    if (strArr.length === oldArrLength && strArr.length) {
      return false;
    }

  } while (true);
}
