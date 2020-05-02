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
import {other, arrow} from '../../assets/images';
import {TextInput} from '../';
import {CustomButton} from '../buttons/buttons';
import {Colors} from '../../assets/colors';
import {TagsController} from '../../libs/controllers';
import {handleTagImage} from './strings';

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
          <Image
            style={styles.tagImage}
            source={handleTagImage(tagValue) || other}
          />
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
                  handleState(tagName);
                  setModal(false);
                }}>
                <Image
                  style={styles.modalTag}
                  source={handleTagImage(tagName) || other}
                />
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
  const [tagName, setTagName] = useState('');
  const [displayInput, triggerInput] = useState(false);
  return !displayInput ? (
    <TouchableOpacity
      style={styles.addNewView}
      onPress={() => triggerInput(true)}>
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
      />
      <CustomButton
        color={Colors.fourth}
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
