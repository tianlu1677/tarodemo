import Taro, {Component} from "@tarojs/taro";
import {View, Text} from "@tarojs/components";
import {connect} from "@tarojs/redux";

class Mine extends Component {
  config = {
    navigationBarTitleText: "我"
  };

  constructor() {
    super(...arguments);
  }

  componentDidMount() {
   
  }

  render() {
    return ( <View>Mine</View>
    );
  }
}


export default Mine;
