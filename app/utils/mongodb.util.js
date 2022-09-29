const { MongeClient } = require("mongodb");

class MongeDB {
   static connect = async (uri) => {
      if (this.client) return this.client;
      this.client = await MongeClient.connect(uri);
      return this.client;
   };
}

module.exports = MongeDB