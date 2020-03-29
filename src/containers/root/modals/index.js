import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Info from './info/Info';
import {Text, View} from 'react-native';

import {InteractionActions} from '../../../libs/redux/actions';

class Modals extends PureComponent {
  render = () => {
    const {modal, close} = this.props;
    const {type, detail, title, data} = modal || {};
    console.log('type', type);
    switch (type) {
      case 'info':
        return <Info infoId={detail} infoData={data} />;
      default:
        return null;
    }
  };
}

const mapStateToProps = state => {
  const {
    interaction: {modal},
  } = state;

  return {modal};
};

const mapDispatchToProps = dispatch => ({
  close: () => dispatch(InteractionActions.closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modals);
