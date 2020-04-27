import React, {Component} from 'react';
import {Main, Modals} from './src/containers/root';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class AppContainer extends Component {
  state = {};

  componentWillMount = () => {
    const {initScreen} = this.props;
    console.log('init screen', initScreen);
    this.redirectToRoute(initScreen);
  };

  redirectToRoute = route => {
    const {
      history,
      history: {
        location: {pathname: path},
      },
    } = this.props;
    console.log('path', path);
    console.log('route', route);
    return path !== route ? history.push(route) : () => {};
  };

  render = () => {
    const {initScreen} = this.props;
    return <Main key="main" screen={initScreen} />;
  };
}

const mapStateToProps = state => {
  const {connection} = state;
  return {connection};
};

const mapDispatchToProps = dispatch => ({});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(AppContainer),
);
