module.exports = {
    getProfile:  
    /**
    * @param ${string or number} user
    */
  async function(user) {
     const axios = require('axios')
      let uri = '';
       if(typeof user === "string" || "number") {
           uri = `https://gdbrowser.com/api/profile/${user}`
           let result = await axios.get(uri).catch(error => {
           })
           return result.data;
       }
  }
}

