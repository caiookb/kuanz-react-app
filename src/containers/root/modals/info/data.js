import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {ChangePassword} from '../../../entry/login/changePassword/ChangePassword';

export const ChangePasswordModal = data => ({
  body: () => <ChangePassword />,
  cancelAction: () => {
    data && data.toggleModal;
  },
});
