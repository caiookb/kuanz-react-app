import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, Modal} from 'react-native';
import styles from './styles';
import {pads, operators} from './utils';
import * as math from 'mathjs';

const Calculator = props => {
  const {value, setValue, historic, setHistoric, editing} = props;
  3;
  const [enabled, toggle] = useState(!editing ? false : true);
  const [actualValue, setActualValue] = useState('');

  const checkLastValue = (value, lastValue) =>
    !operators.some(operator => operator.includes(lastValue || '')) ||
    !operators.some(operator => operator.includes(value));

  const checkValue = value => {
    let lastValue = actualValue.split('').pop();

    if (value === 'X') {
      let removed = actualValue
        .split('')
        .splice(0, actualValue.length - 1)
        .join('');
      setHistoric(removed);
      setActualValue(removed);
    } else if (checkLastValue(value, lastValue)) {
      setActualValue(actualValue.concat(value).trim());
      setHistoric(actualValue.concat(value).trim());

      if (checkLastValue(value)) {
        fabric(actualValue.concat(value).trim());
      } else {
        if (value === 'C') {
          setValue('');
          setHistoric('');
          setActualValue('');
        }

        if (value === 'X') {
          setActualValue(actualValue);
        }
      }
    }
  };

  // setHistoric(actualValue);

  const fabric = (actualValue, pad) => {
    const lastValue = actualValue.split('').pop();
    if (checkLastValue(lastValue)) {
      setValue(math.evaluate(actualValue).toFixed(2));
      if (pad === '=') {
        setHistoric(math.evaluate(actualValue).toFixed(2));
        setActualValue(math.evaluate(actualValue).toFixed(2));
      }
    }
  };

  const Pad = () => (
    <View style={styles.padView}>
      {pads.map(pad => {
        return (
          <TouchableOpacity
            style={styles.pad}
            onPress={() =>
              pad.char === '='
                ? fabric(actualValue, pad.char)
                : checkValue(pad.value)
            }>
            <Text style={styles.padText}>{pad.char}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );

  return (
    <TouchableOpacity
      style={styles.calculatorInput}
      onPress={() => {
        toggle(true);
        console.log('uai', enabled);
      }}>
      <Text style={styles.label}>Valor</Text>
      <Text style={styles.value}>R${value}</Text>
      <Modal
        animationType="slide"
        transparent={true}
        visible={enabled}
        onRequestClose={() => {
          toggle(false);
        }}>
        <View style={styles.container}>
          <View style={styles.input}>
            <Text style={styles.historic}>{historic}</Text>
            <Text style={styles.inputText}>R${value}</Text>
          </View>
          <View style={styles.calculator}>
            <Pad />
          </View>
        </View>
      </Modal>
    </TouchableOpacity>
  );
};

export default Calculator;
