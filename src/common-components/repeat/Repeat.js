import React, {useState, version} from 'react';
import {View, Text, TouchableOpacity, Image, Modal} from 'react-native';
import styles from './styles';
import {add, subtract, repeatRound} from '../../assets/images';

const PeriodOptions = [
  {type: 'week', title: 'Semanal'},
  {type: 'month', title: 'Mensal'},
  {type: 'year', title: 'Anual'},
];

const PeriodModal = props => {
  const {modal, setModal, setPeriod, period} = props;
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modal}
      onRequestClose={() => {
        setModal(false);
      }}>
      <View style={styles.bottomView}>
        <View style={styles.modalView}>
          {PeriodOptions.map(option => {
            return (
              <TouchableOpacity
                style={styles.choice}
                onPress={() => {
                  setPeriod(option.type);
                  setModal(false);
                }}>
                <Text style={styles.choiceOption}>{option.title}</Text>
              </TouchableOpacity>
            );
          })}
          <TouchableOpacity
            style={[styles.choice, styles.cancel]}
            onPress={() => {
              setModal(false);
            }}>
            <Text style={[styles.choiceOption]}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const Repeat = props => {
  const {period, setPeriod, repeatTimes, setRepeatTimes} = props;

  const [periodModal, togglePeriodModal] = useState(false);

  return (
    <View style={styles.repeat}>
      <View style={styles.row}>
        <View style={styles.inputs}>
          <View style={styles.title}>
            <Text style={styles.titleText}>Repetições</Text>
          </View>
          <View style={styles.options}>
            <TouchableOpacity
              onPress={() => {
                setRepeatTimes(repeatTimes > 2 ? repeatTimes - 1 : repeatTimes);
              }}>
              <Image source={subtract} />
            </TouchableOpacity>
            <Text style={styles.times}> {repeatTimes || '0'}</Text>
            <TouchableOpacity
              onPress={() => {
                setRepeatTimes(repeatTimes + 1);
              }}>
              <Image source={add} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.inputs}>
          <View style={styles.title}>
            <Text style={styles.titleText}>Periodo</Text>
          </View>
          <View style={[styles.options, {justifyContent: 'flex-start'}]}>
            <Image source={repeatRound} />
            <TouchableOpacity
              onPress={() => {
                togglePeriodModal(true);
              }}
              style={styles.periodInput}>
              <Text style={styles.periodText}>
                {period === 'year'
                  ? 'Anual'
                  : period === 'month'
                  ? 'Mensal'
                  : 'Semanal'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {periodModal ? (
        <PeriodModal
          modal={periodModal}
          setModal={togglePeriodModal}
          period={period}
          setPeriod={setPeriod}
        />
      ) : null}
    </View>
  );
};

export default Repeat;
