import axios from 'axios';

// Client ID
// 1NMVC6MjvV3LLysraQYgpA

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer H9BhfDtF_nJfc5LUa4NMH-PL0z8ckw0SvTbgtc5YT-mX_13eDj6v3ndZGkg5-jiRg575s2jlD25qXjKxyTktLPyjQ6FEX23sIP0d6fXg6KQah0yyb9AnP4V-_yyaXXYx"
  }
});