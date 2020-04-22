import React, {PureComponent} from 'react';
import {View, Text, TextInput as Input} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';
import styles from './styles';

const TextInput = props => {
  const {value, type, label, maskInputProps, maskOptions, typeOf} = props;

  return (
    <View>
      <Text style={styles.label}>
        <Text style={styles.labelText}>{label}</Text>
      </Text>
      <TextInputMask
        type={type}
        value={value}
        style={[styles.input, typeOf === 'value' ? {fontSize: 30} : null]}
        options={maskOptions}
        {...maskInputProps}
      />
    </View>
  );
};

TextInput.defaultProps = {
  value: null,
  type: 'custom',
  label: '',
  maskOptions: {
    mask: '************',
  },
  maskInputProps: {
    placeholder: '',
    onChangeText: () => {},
  },
};

export default TextInput;
