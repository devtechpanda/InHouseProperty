import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import Globles, {COLOR, FONT, FONT_SIZE} from '../../config/Globles';
import PlacesBGI from '../../assets/images/PlacesBGI.jpg';
import Search from '../../assets/svg/Search.svg';
import Mumbai from '../../assets/svg/Mumbai.svg';
import Bangalore from '../../assets/svg/Bangalore.svg';
import NewDelhi from '../../assets/svg/NewDelhi.svg';
import Noida from '../../assets/svg/Noida.svg';
import Kolkata from '../../assets/svg/Kolkata.svg';
import Chennai from '../../assets/svg/Chennai.svg';
import ButtonBGI from '../../assets/svg/ButtonBGI.svg';

const Demo = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground source={PlacesBGI} style={styles.backgroundImageSplash}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#FFFFFF',
            marginTop: hp('10%'),
            borderTopLeftRadius: hp('4%'),
            borderTopRightRadius: hp('4%'),
          }}>
          <View style={{margin: hp('3%')}}>
            {/* Title Text */}
            <View>
              <View style={styles.titleOuterTextContainer}>
                <Text style={styles.titleTextOne}>
                  You are looking to buy in
                </Text>
                <Text style={styles.titleTextTwo}>
                  Protect up to 10 devices with all features
                </Text>
              </View>
            </View>
            {/* Search */}
            <View style={styles.searchContainer}>
              <View style={styles.searchInputFieldContainer}>
                <Search height={hp('6%')} width={hp('2.5%')} />
                <TextInput
                  placeholder="Search place, home, cozy ..."
                  style={styles.searchInput}
                />
              </View>
            </View>
            {/* Cards */}
            <View
              style={{
                // backgroundColor: 'red',
                height: hp('54%'),
              }}>
              <ScrollView
                style={styles.cardContainerMain}
                showsVerticalScrollIndicator={false}>
                <View style={styles.cardSpaceContainer}>
                  <View style={styles.cardContainer}>
                    <View style={styles.card}>
                      <TouchableOpacity style={styles.cardImageContainer}>
                        <View style={styles.cardImage}>
                          <Mumbai height={hp('5%')} width={hp('5%')} />
                        </View>
                      </TouchableOpacity>
                      <Text style={styles.cardText}>Mumbai</Text>
                    </View>
                    <View style={styles.card}>
                      <TouchableOpacity style={styles.cardImageContainer}>
                        <View style={styles.cardImage}>
                          <Bangalore height={hp('5%')} width={hp('5%')} />
                        </View>
                      </TouchableOpacity>
                      <Text style={styles.cardText}>Bangalore</Text>
                    </View>
                    <View style={styles.card}>
                      <TouchableOpacity style={styles.cardImageContainer}>
                        <View style={styles.cardImage}>
                          <NewDelhi height={hp('5%')} width={hp('5%')} />
                        </View>
                      </TouchableOpacity>
                      <Text style={styles.cardText}>New Delhi</Text>
                    </View>
                  </View>
                  <View style={styles.cardContainer}>
                    <View style={styles.card}>
                      <TouchableOpacity style={styles.cardImageContainer}>
                        <View style={styles.cardImage}>
                          <Noida height={hp('5%')} width={hp('5%')} />
                        </View>
                      </TouchableOpacity>
                      <Text style={styles.cardText}>Noida</Text>
                    </View>
                    <View style={styles.card}>
                      <TouchableOpacity style={styles.cardImageContainer}>
                        <View style={styles.cardImage}>
                          <Bangalore height={hp('5%')} width={hp('5%')} />
                        </View>
                      </TouchableOpacity>
                      <Text style={styles.cardText}>Ahmedabad</Text>
                    </View>
                    <View style={styles.card}>
                      <TouchableOpacity style={styles.cardImageContainer}>
                        <View style={styles.cardImage}>
                          <Mumbai height={hp('5%')} width={hp('5%')} />
                        </View>
                      </TouchableOpacity>
                      <Text style={styles.cardText}>Pune</Text>
                    </View>
                  </View>

                  <View style={styles.cardContainer}>
                    <View style={styles.card}>
                      <TouchableOpacity style={styles.cardImageContainer}>
                        <View style={styles.cardImage}>
                          <Mumbai height={hp('5%')} width={hp('5%')} />
                        </View>
                      </TouchableOpacity>
                      <Text style={styles.cardText}>Ghaziabad</Text>
                    </View>
                    <View style={styles.card}>
                      <TouchableOpacity style={styles.cardImageContainer}>
                        <View style={styles.cardImage}>
                          <Kolkata height={hp('4%')} width={hp('4%')} />
                        </View>
                      </TouchableOpacity>
                      <Text style={styles.cardText}>Kolkata</Text>
                    </View>
                    <View style={styles.card}>
                      <TouchableOpacity style={styles.cardImageContainer}>
                        <View style={styles.cardImage}>
                          <Chennai height={hp('5%')} width={hp('5%')} />
                        </View>
                      </TouchableOpacity>
                      <Text style={styles.cardText}>Chennai</Text>
                    </View>
                  </View>

                  <View style={styles.cardContainer}>
                    <View style={styles.card}>
                      <TouchableOpacity style={styles.cardImageContainer}>
                        <View style={styles.cardImage}>
                          <Mumbai height={hp('5%')} width={hp('5%')} />
                        </View>
                      </TouchableOpacity>
                      <Text style={styles.cardText}>Hyderabad</Text>
                    </View>
                    <View style={styles.card}>
                      <TouchableOpacity style={styles.cardImageContainer}>
                        <View style={styles.cardImage}>
                          <Kolkata height={hp('4%')} width={hp('4%')} />
                        </View>
                      </TouchableOpacity>
                      <Text style={styles.cardText}>Other</Text>
                    </View>
                    <View style={styles.card} />
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
      </ImageBackground>

      {/* Bottom Navigation Button */}
      <View style={styles.bottomNavButtonContainer}>
        <TouchableOpacity
          style={styles.bottomButtonTouchOpacity}
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Text style={styles.bottomButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Demo;

const styles = StyleSheet.create({
  backgroundImageSplash: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  containerSplash: {
    height: hp('100%'),
  },
  // backgroundImageSplash: {
  //   flex: 1,
  // },
  mainContainer: {
    backgroundColor: '#FFFFFF',
    marginTop: hp('8%'),
    borderTopLeftRadius: hp('4%'),
    borderTopRightRadius: hp('4%'),
    height: hp('95%'),
  },
  internalMainContainer: {
    margin: hp('2.5%'),
  },
  titleOuterTextContainer: {
    marginTop: hp('4.5%'),
  },

  titleTextOne: {
    color: '#001D4C',
    fontSize: FONT_SIZE.F_18,
    fontFamily: FONT.BOLD,
  },
  titleTextTwo: {
    fontFamily: FONT.MEDIUM,
    color: '#001D4C',
    marginTop: hp('1%'),
    fontSize: FONT_SIZE.F_14,
  },
  searchContainer: {
    backgroundColor: '#F6F6F6',
    borderRadius: hp('2%'),
    marginTop: hp('2.5%'),
  },
  searchInputFieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: wp('3%'),
  },
  searchInput: {
    flex: 1,
    marginLeft: wp('2%'),
    fontFamily: FONT.MEDIUM,
    fontSize: FONT_SIZE.F_13,
    paddingVertical: hp('1%'),
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp('1.2%'),
    marginBottom: hp('1%'),
  },
  card: {
    flex: 1,
    alignItems: 'center',
  },
  cardImageContainer: {
    borderRadius: hp('2%'),
    borderColor: 'red ',
    borderWidth: hp('0.1%'),
  },
  cardImage: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: hp('0.5%'),
    height: hp('5.5%'),
    width: hp('5.5%'),
  },
  cardText: {
    marginTop: hp('0.5%'),
    marginBottom: hp('0.5%'),
    fontFamily: FONT.MEDIUM,
    color: '#001D4C',
  },

  cardContainerMain: {
    marginTop: hp('0.5%'),
    marginBottom: hp('0.5%'),
  },
  cardSpaceContainer: {
    marginTop: hp('1.5%'),
    marginBottom: hp('1.5%'),
    alignItems: 'center',
  },

  //bottom button styling
  bottomNavigation: {
    bottom: 10,
  },
  bottomNavigationButton: {
    backgroundColor: '#FF0000',
    borderRadius: hp('2%'),
    paddingVertical: hp('2%'),
    marginBottom: hp('1%'),
  },
  bottomNavigationButtonText: {
    color: '#FFFFFF',
    fontSize: hp('2.5%'),
    fontFamily: FONT.SEMI_BOLD,
    color: '#FFFFFF',
    fontSize: hp('3%'),
    fontFamily: FONT.SEMI_BOLD,
  },

  //--------------------------button nav bottom
  bottomNavButtonContainer: {
    position: 'absolute',
    bottom: hp('4%'),
    flex: 0,
    width: wp('100%'),
    alignItems: 'center',
  },
  bottomButtonTouchOpacity: {
    backgroundColor: '#F49825',
    width: wp('86%'),
    height: hp('7.5%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: hp('1.5%'),
  },
  bottomButtonText: {
    fontFamily: FONT.SEMI_BOLD,
    color: '#FFFFFF',
    fontSize: FONT_SIZE.F_17,
  },
});
