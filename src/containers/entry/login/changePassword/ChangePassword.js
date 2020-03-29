import React, {Component, useState} from 'react';
import {
  Text,
  View,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {Colors} from '../../../../assets/colors';

import CustomButton from '../../../../common-components/buttons/buttons';

import styles from './styles';

export const ChangePassword = props => {
  const [text, setText] = useState('');
  const WrapperView = Platform.OS === 'ios' ? KeyboardAvoidingView : View;

  return (
    <WrapperView enabled behavior="padding" style={styles.wrapper}>
      <ScrollView
        contentContainerStyle={styles.modalMain}
        keyboardShouldPersistTaps="handled">
        <View style={styles.info}>
          <Text style={styles.title}>Informe seu email abaixo</Text>
          <Text style={styles.desc}>
            Iremos enviar um link de recuperação para o seu email
          </Text>
          <View style={styles.card}>
            <View style={styles.cardContent}>
              <View style={styles.inputView}>
                <Text style={styles.inputTitle}>Email</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={text => setText(text)}
                  value={text}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <CustomButton title={'ENVIAR'} color={Colors.third} />
    </WrapperView>
  );
};
