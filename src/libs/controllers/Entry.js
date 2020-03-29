import {Alert, Dimensions} from 'react-native';

export const getEntryStatus = session => {
  if (session.plan && session.goals && session.payment) {
    return '/entry/pipeline/form';
  } else if (session.user) {
    return '/entry/pipeline/';
  } else {
    return '/entry';
  }
};
