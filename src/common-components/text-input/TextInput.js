import React, {PureComponent} from 'react';
import {View, Text, TextInput as Input} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';
import styles from './styles';

class TextInput extends PureComponent {
  render() {
    const {value, type, label, maskInputProps, maskOptions} = this.props;

    return (
      <View>
        <Text style={styles.label}>
          <Text style={styles.labelText}>{label}</Text>
        </Text>
        <TextInputMask
          type={type}
          value={value}
          style={[styles.input]}
          options={maskOptions}
          {...maskInputProps}
        />
      </View>
    );
  }
}

export default TextInput;
