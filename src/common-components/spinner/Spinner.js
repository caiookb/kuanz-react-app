import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import {withRouter} from 'react-router-dom';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  text: {
    color: 'white',
    fontSize: 20,
    marginTop: 20,
  },
});

const ActivitySpinenr = props => {
  const {text} = props;

  return (
    <View>
      <ActivityIndicator size="large" color="white" />
      <Text style={styles.text}> {text} </Text>
    </View>
  );
};

ActivitySpinenr.defaultProps = {
  text: 'Carregando...',
};

export default ActivitySpinenr;
