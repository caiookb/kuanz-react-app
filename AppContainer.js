import React, {Component} from 'react';
import {Main, Modals} from './src/containers/root';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class AppContainer extends Component {
  state = {};

  componentDidMount = () => {};

  render = () => {
    const {initScreen} = this.props;
    return [<Main key="main" screen={initScreen} />, <Modals key="modal" />];
  };
}

const mapStateToProps = state => {
  const {connection} = state;

  return {connection};
};

const mapDispatchToProps = dispatch => ({});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AppContainer),
);
