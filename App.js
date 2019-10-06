import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from './src/screens/SearchScreen';

const navigator = createStackNavigator({
  Search: SearchScreen
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Search'
  }
});

export default createAppContainer(navigator);

//GET https://api.yelp.com/v3/businesses/search
//GET https://api.yelp.com/v3/businesses/{id}

// Client ID
// 1NMVC6MjvV3LLysraQYgpA

// API Key
// H9BhfDtF_nJfc5LUa4NMH-PL0z8ckw0SvTbgtc5YT-mX_13eDj6v3ndZGkg5-jiRg575s2jlD25qXjKxyTktLPyjQ6FEX23sIP0d6fXg6KQah0yyb9AnP4V-_yyaXXYx
