import React, {Component} from 'react';
import Goals from '../../../goals/Goals';

const GoalsFlow = props => {
  const {navigation} = props;
  return <Goals navigation={navigation} cameFromFlow={true} />;
};

export default GoalsFlow;
