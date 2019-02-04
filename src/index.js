import React, { Component } from 'react';
import { YellowBox } from 'react-native';
import { AppStackNav } from './Routes/router';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
YellowBox.ignoreWarnings(['Remote debugger']);
YellowBox.ignoreWarnings(['Require cycle:']);

class App extends Component {
  render() {
    return <AppStackNav />
  }
}

export default App;