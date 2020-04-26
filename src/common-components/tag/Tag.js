import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, Modal} from 'react-native';
import styles from './styles';
import {tag, arrow} from '../../assets/images';

const Tag = props => {
  const {handleState, tagValue, label} = props;
  const [modal, setModal] = useState(false);

  return (
    <View style={styles.tag}>
      <Text style={styles.label}>
        <Text style={styles.labelText}>{'Marcação'}</Text>
      </Text>
      <View style={styles.touchable}>
        <View style={styles.touchableIcon}>
          <Image source={tag} />
        </View>
        <TouchableOpacity
          style={styles.touchableTextView}
          onPress={() => setModal(true)}>
          <Text style={styles.touchableText}>{tagValue || 'Alimentação'}</Text>
          <Image style={styles.downArrow} source={arrow} />
        </TouchableOpacity>
      </View>
      {modal ? <TagModal setModal={setModal} /> : null}
    </View>
  );
};

const TagModal = props => {
  const {enabled, setModal, period, handleModal} = props;
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={enabled}
      onRequestClose={() => {
        setModal(false);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity style={styles.modalList}>
            <Image style={styles.modalTag} source={tag} />
            <Text style={styles.modalText}>Alimentação</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalList}>
            <Image style={styles.modalTag} source={tag} />
            <Text style={styles.modalText}>Alimentação</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalList}>
            <Image style={styles.modalTag} source={tag} />
            <Text style={styles.modalText}>Alimentação</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalList}>
            <Image style={styles.modalTag} source={tag} />
            <Text style={styles.modalText}>Alimentação</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalList}>
            <Image style={styles.modalTag} source={tag} />
            <Text style={styles.modalText}>Alimentação</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default Tag;
