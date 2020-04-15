import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {InteractionActions} from '../../../../libs/redux/actions';
import * as data from './data';

import {View, Text, TouchableHighlight, Modal} from 'react-native';

class Info extends Component {
  state = {
    visible: false,
    body: () => null,
    image: null,
    label: null,
    cancelLabel: null,
    action: () => {},
    cancelAction: null,
    dismiss: () => {},
    theme: '',
    hasConfirmButton: true,
  };

  componentDidMount = () => {
    const {infoId, session, infoData} = this.props;
    const {
      body,
      image,
      label,
      cancelLabel,
      action,
      cancelAction,
      dismiss,
      theme,
      hasConfirmButton,
    } = data[infoId] && data[infoId](infoData);

    if (data[infoId]) {
      this.setState({
        visible: true,
        body: body ? () => body(session) : () => null,
        image: image && image(session),
        label: label && label(session),
        cancelLabel: cancelLabel && cancelLabel(session),
        action: this.callToAction(action),
        cancelAction: cancelAction && this.callToAction(cancelAction),
        dismiss: this.callToAction(dismiss),
        theme,
        hasConfirmButton,
      });
    }
  };

  callToAction = action => {
    const {history, dispatch, close} = this.props;

    return () => {
      close();
      if (action) action(dispatch, history);
    };
  };

  render = () => {
    const {
      visible,
      body,
      label,
      action,
      cancelAction,
      dismiss,
      hasConfirmButton,
    } = this.state;

    console.log('cancel action', cancelAction);

    return body ? (
      <Modal
        animationType="fade"
        visible={true}
        onRequestClose={cancelAction}
        transparent={true}>
        {body()}
      </Modal>
    ) : null;
  };
}

const mapStateToProps = state => {
  const {session} = state;

  return {session};
};

const mapDispatchToProps = dispatch => ({
  dispatch,
  close: () => dispatch(InteractionActions.closeModal()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Info));
