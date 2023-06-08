import React, {useEffect} from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import SplashBackground from '../../assets/images/SplashBackground.jpg';
import SplashIcon from '../../assets/svg/SplashIcon.svg';

const Splash = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('GetStart');
    }, 1000);
    return () => clearTimeout(timer);
  }, [navigation]);
  return (
    <View style={styles.containerSplash}>
      <ImageBackground
        source={SplashBackground}
        style={styles.backgroundImageSplash}>
        <TouchableOpacity
          View
          style={styles.svgWrapperSplash}
          onPress={() => navigation.navigate('GetStart')}>
          <SplashIcon height={hp('50%')} width={wp('50%')} />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  containerSplash: {
    flex: 1,
  },
  backgroundImageSplash: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  svgWrapperSplash: {
    width: wp('50%'),
    height: hp('50%'),
  },
});

export default Splash;
