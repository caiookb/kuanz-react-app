import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {View, Text, Platform, BackHandler, Image} from 'react-native';

class Nav extends PureComponent {
  constructor(props) {
    super(props);
    this.backAndroid = this.backAndroid.bind(this);
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backAndroid);
  }

  backAndroid() {
    const {
      navBackPress,
      history: {index, entries, goBack},
      location: {pathname},
    } = this.props;

    if (typeof navBackPress === 'function') {
      navBackPress();
      return true;
    }

    if (index > 0) {
      const lastPathname = entries[index - 1].pathname;

      if (pathname.indexOf('/entry') > -1) {
        if (lastPathname.indexOf('/dashboard') > -1) {
          return false;
        }
      }
      if (pathname.indexOf('/dashboard') > -1) {
        if (lastPathname.indexOf('/entry') > -1) {
          return false;
        }
      }

      goBack();

      return true;
    }

    return false;
  }

  render() {
    return null;
  }
}

const mapStateToProps = state => {
  return {};
};

export default withRouter(connect(mapStateToProps)(Nav));
