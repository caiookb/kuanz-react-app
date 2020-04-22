import React, {Component} from 'react';
import {
  View,
  TextInput,
  Text,
  BackHandler,
  Image,
  Animated,
  Easing,
} from 'react-native';
import {CustomButton} from '../../../../common-components';
import styles from './styles';
import {Colors} from '../../../../assets/colors';
import {money, lock, graph} from '../../../../assets/images';

class SignUpInfo extends Component {
  state = {
    cards: [
      {visible: false, opacity: new Animated.Value(0)},
      {visible: false, opacity: new Animated.Value(0)},
      {visible: false, opacity: new Animated.Value(0)},
    ],
  };

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({firstCardVisible: true});
    }, 500);
    setTimeout(() => {
      this.setState({secondCardVisible: true});
    }, 3000);
    setTimeout(() => {
      this.setState({thirdCardVisible: true});
    }, 6000);
  };

  fadeIn = () => {
    const {cards} = this.state;
    cards.forEach(card => {
      Animated.timing(card.opacity, {
        toValue: 1,
        duration: 300,
      }).start();
    });
  };

  render() {
    const {cards} = this.state;
    const {history} = this.props;
    console.log('card', history);

    const animatedStyle = [];

    return (
      <View style={styles.container}>
        <View style={styles.nav} />
        <View style={styles.content}>
          <Animated.View
            onLoad={this.fadeIn()}
            style={[styles.card, animatedStyle[0]]}>
            <View style={styles.cardImage}>
              <Image style={styles.cardImageInfo} source={money} />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardText}>
                Seu assistente enviará alertas para te deixar ciente da situação
              </Text>
            </View>
          </Animated.View>
          <Animated.View
            onLoad={this.fadeIn()}
            style={[styles.card, animatedStyle[1]]}>
            <View style={styles.cardImage}>
              <Image style={styles.cardImageInfo} source={graph} />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardText}>
                Você terá acesso a suas estatísticas para melhor visualização da
                sua renda
              </Text>
            </View>
          </Animated.View>
          <Animated.View
            onLoad={this.fadeIn()}
            style={[styles.card, animatedStyle[2]]}>
            <View style={styles.cardImage}>
              <Image style={styles.cardImageInfo} source={lock} />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardText}>
                Tudo vai estar criptografado para sua segurança e conforto
              </Text>
            </View>
          </Animated.View>
        </View>

        <View style={styles.fixedBottom}>
          <CustomButton
            title={'VAMOS LÁ'}
            color={Colors.third}
            onPress={() => history.push('/signUp')}
          />
        </View>
      </View>
    );
  }
}

export default SignUpInfo;
