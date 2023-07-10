
/**
 * GEt All Data 
 */
const getData = (key) => {
    //local Storage
    let lsdata = [];
    if (localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key));
    } else {
      console.log(lsdata);
        return lsdata;
       
    }
};

/**
 * Set Data to Local Storage
 */

const insertData = (key, data) => {
    //local Storage
      let lsdata = [];
      if (localStorage.getItem(key)) {
        lsdata = JSON.parse(localStorage.getItem(key));
      }

    // data Push
    lsdata.push(data);

    // insert new data
    localStorage.setItem(key, JSON.stringify(lsdata));
};

/**
 * Set Data to Local Storage
 */

const updateData = (key, data) => {
    // insert new data
    localStorage.setItem(key, JSON.stringify(data));
};

