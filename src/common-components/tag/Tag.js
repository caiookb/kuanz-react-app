import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  ScrollView,
} from 'react-native';
import styles from './styles';
import {tag, arrow, add} from '../../assets/images';
import {TextInput} from '../';
import {CustomButton} from '../buttons/buttons';
import {Colors} from '../../assets/colors';
import {TagsController} from '../../libs/controllers';

const Tag = props => {
  const {handleState, tagValue, tags} = props;
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
      {modal ? (
        <TagModal setModal={setModal} tags={tags} handleState={handleState} />
      ) : null}
    </View>
  );
};

const TagModal = props => {
  const {enabled, setModal, tags, handleState} = props;
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={enabled}
      onRequestClose={() => {
        setModal(false);
      }}>
      <View style={styles.centeredView}>
        <ScrollView style={styles.modalView}>
          {tags.map(tagName => {
            return (
              <TouchableOpacity
                style={styles.modalList}
                onPress={() => {
                  handleState('type', tagName);
                  setModal(false);
                }}>
                <Image style={styles.modalTag} source={tag} />
                <Text style={styles.modalText}>{tagName}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        <AddNewTag setModal={setModal} />
      </View>
    </Modal>
  );
};

const AddNewTag = props => {
  const {setModal} = props;
  const [tagName, setTagName] = useState('');
  const [displayInput, triggerInput] = useState(false);
  return !displayInput ? (
    <TouchableOpacity
      style={styles.addNewView}
      onPress={() => triggerInput(true)}>
      <Image style={{marginRight: 20}} source={add} />
      <Text style={styles.touchableText}>Nova marcação</Text>
    </TouchableOpacity>
  ) : (
    <View style={styles.inputView}>
      <TextInput
        value={tagName}
        type={'custom'}
        label={'Insira o nome da sua nova marcação'}
        maskInputProps={{
          placeholder: '',
          onChangeText: text => setTagName(text),
        }}
        typeOf={'value'}
      />
      <CustomButton
        color={Colors.third}
        onPress={() => {
          TagsController.createTag(tagName);
          triggerInput(false);
        }}
        title={'Adicionar'}
      />
    </View>
  );
};

export default Tag;
