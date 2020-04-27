import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {
  CustomButton,
  Spinner,
  Datepicker,
  TextInput,
} from '../../common-components';
import styles from './styles';
import {Colors} from '../../assets/colors';
import {GoalsController} from '../../libs/controllers';
import {done} from '../../assets/images';
import moment from 'moment';

const AddGoals = props => {
  const {navigation} = props;
  const [name, setName] = useState(null);
  const [value, setValue] = useState(0);
  const [description, setDescription] = useState(null);
  const [estimated_date, setDate] = useState(moment().format('YYYY-MM-DD'));
  const [calendar, toggleCalendar] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [fecthing, setFetching] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  console.log('ERROR', error);
  const form = {name, value, estimated_date, description};
  const handles = {setIsFormValid, setFetching, setSuccess, setError};
  return (
    <View style={styles.container}>
      {!success ? (
        <React.Fragment>
          <View style={styles.content}>
            <Text style={styles.textTitle}>
              {
                'Salve alguns dos seus motivos, isso vai te ajudar a seguir o objetivo'
              }
            </Text>
            <View style={styles.inputView}>
              <TextInput
                value={value}
                type={'money'}
                label={'Valor'}
                maskOptions={{
                  mask: '*******************************************',
                }}
                maskInputProps={{
                  placeholder: '',
                  onChangeText: text => setValue(text),
                }}
                typeOf={'value'}
              />
            </View>

            <View style={styles.inputView}>
              <TextInput
                value={name}
                type={'custom'}
                label={'Objetivo'}
                maskOptions={{
                  mask: '*******************************************',
                }}
                maskInputProps={{
                  placeholder: '',
                  onChangeText: text => setName(text),
                }}
              />
            </View>

            <View style={styles.inputView}>
              <TextInput
                value={description}
                type={'custom'}
                label={'Descrição'}
                maskOptions={{
                  mask: '*******************************************',
                }}
                maskInputProps={{
                  placeholder: '',
                  onChangeText: text => setDescription(text),
                }}
              />
            </View>
            <View style={styles.datepicker}>
              <Datepicker
                day={estimated_date}
                setDay={setDate}
                enabled={calendar}
                toggle={toggleCalendar}
              />
            </View>
          </View>
          <CustomButton
            title={'CONFIRMAR'}
            color={Colors.third}
            onPress={() => GoalsController.sendForm(form, handles, navigation)}
          />
        </React.Fragment>
      ) : fecthing ? (
        <Spinner />
      ) : (
        <View style={styles.success}>
          <Text style={styles.successText}>
            {'Objetivo cadastrado com sucesso!'}
          </Text>
          <Image style={styles.cardImageInfo} source={done} />
        </View>
      )}
    </View>
  );
};

export default AddGoals;
