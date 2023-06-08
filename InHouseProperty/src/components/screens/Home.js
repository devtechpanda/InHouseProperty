import React, {useState, useEffect} from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import PlacesBGI from '../../assets/images/HomeBGI.jpg';
import HomeProfile from '../../assets/svg/HomeProfile.svg';
import Filter from '../../assets/svg/Filter.svg';
import Buy from '../../assets/svg/Buy.svg';
import Sale from '../../assets/svg/Sale.svg';
import Rent from '../../assets/svg/Rent.svg';

import HeartHome from '../../assets/svg/HeartHome.svg';

import Search from '../../assets/svg/SearchW.svg';
import {COLOR, FONT, FONT_SIZE} from '../../config/Globles';
import HomeJPGBGI from '../../assets/images/HomeJPGBGI.jpg';
import HomeFinanceTwo from '../../assets/images/HomeFinanceTwo.png';

const App = ({navigation}) => {
  const {width, height} = Dimensions.get('window');

  return (
    <View style={{flex: 1, backgroundColor: '#F8F8F8'}}>
      {/* Header */}
      <View style={{height: hp('35%')}}>
        <Image
          source={HomeJPGBGI}
          style={{
            top: hp('-7%'),
            width: wp('100%'),
            height: hp('40.5%'),
            position: 'absolute',
            resizeMode: 'cover',
            justifyContent: 'center',
          }}
        />

        {/* Items of Head */}
        <View
          style={{
            marginTop: hp('3%'),
            width: wp('83%'),
            alignSelf: 'center',
          }}>
          <View style={styles.welcomeTextContainer}>
            <View style={styles.profileNameAndPictureContainer}>
              <Text style={styles.greetingText}>Hi Anarda</Text>
              <TouchableOpacity style={styles.profileImageContainer}>
                <HomeProfile height={hp('5%')} width={wp('11.5%')} />
              </TouchableOpacity>
            </View>

            <Text style={styles.welcomeText}>Welcome</Text>
          </View>
          <View style={styles.textInputAndFilterIconContainer}>
            <View style={styles.searchViewContainer}>
              <View style={styles.searchInputContainer}>
                <Search
                  style={styles.searchIcon}
                  height={hp('3%')}
                  width={wp('5.3%')}
                />

                <TextInput
                  style={styles.input}
                  placeholder="Search place, home, cozy ..."
                  placeholderTextColor={COLOR.WHITE}
                />
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Filter');
              }}
              style={styles.filterIconContainer}>
              <Filter height={hp('6%')} width={wp('11.5%')} />
            </TouchableOpacity>
          </View>
        </View>

        {/* View for Buy sale Rent */}
        <View style={styles.buySaleRentContainerMain}>
          <TouchableOpacity style={styles.buySaleRentContainer}>
            <View style={styles.iconTextContainer}>
              <Buy height={hp('4%')} width={wp('7%')} />
              <Text style={styles.buySaleRentText}>Buy</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.buySaleRentContainer,
              {
                backgroundColor: 'rgba(0, 27, 46, 0.2)',
                borderWidth: hp('0'),
              },
            ]}>
            <View style={styles.iconTextContainer}>
              <Sale height={hp('4%')} width={wp('7%')} />
              <Text
                style={[styles.buySaleRentText, {fontFamily: FONT.REGULAR}]}>
                Sale
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.buySaleRentContainer,
              {
                backgroundColor: 'rgba(0, 27, 46, 0.2)',
                borderWidth: hp('0'),
              },
            ]}>
            <View style={styles.iconTextContainer}>
              <Rent height={hp('4%')} width={wp('7%')} />
              <Text
                style={[styles.buySaleRentText, {fontFamily: FONT.REGULAR}]}>
                Rent
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Body */}
      <ScrollView
        style={{
          flex: 2,
          width: wp('89%'),
          alignSelf: 'center',
        }}
        showsVerticalScrollIndicator={false}>
        {/* Cards for Home in Popular Location*/}
        <View>
          <View>
            <Text
              style={{
                color: COLOR.DARK_BLUE,
                fontFamily: FONT.SEMI_BOLD,
                fontSize: FONT_SIZE.F_16,
              }}>
              Homes in Popular Location
            </Text>
          </View>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.containerImageCard}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Details');
                  }}>
                  <Image
                    source={require('../../assets/images/ImageOne.jpg')}
                    style={styles.imageImageCard}
                  />
                </TouchableOpacity>
                <View style={styles.bottomContainerImageCard}>
                  <View style={{width: wp('52%')}}>
                    <Text
                      style={[
                        styles.textImageCard,
                        {overflow: 'hidden', textOverflow: 'clip'},
                      ]}
                      numberOfLines={1}
                      ellipsizeMode="tail">
                      4 BHK
                    </Text>
                    <Text
                      style={[
                        styles.textImageCard,
                        {fontFamily: FONT.SEMI_BOLD},
                        {overflow: 'hidden', textOverflow: 'clip'},
                      ]}
                      numberOfLines={1}
                      ellipsizeMode="tail">
                      ₹ 1.5 lac | 2.5 lac
                    </Text>
                    <Text
                      style={[
                        styles.textImageCard,
                        {overflow: 'hidden', textOverflow: 'clip'},
                      ]}
                      numberOfLines={1}
                      ellipsizeMode="tail">
                      2118 Thornridge Cir. Syracuse
                    </Text>
                  </View>
                  <TouchableOpacity style={{flex: 1}}>
                    <HeartHome height={hp('10%')} width={wp('11.5%')} />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.containerImageCard}>
                <TouchableOpacity>
                  <Image
                    source={require('../../assets/images/ImageOne.jpg')}
                    style={styles.imageImageCard}
                  />
                </TouchableOpacity>
                <View style={styles.bottomContainerImageCard}>
                  <View style={{width: wp('52%')}}>
                    <Text
                      style={[
                        styles.textImageCard,
                        {overflow: 'hidden', textOverflow: 'clip'},
                      ]}
                      numberOfLines={1}
                      ellipsizeMode="tail">
                      4 BHK
                    </Text>
                    <Text
                      style={[
                        styles.textImageCard,
                        {fontFamily: FONT.SEMI_BOLD},
                        {overflow: 'hidden', textOverflow: 'clip'},
                      ]}
                      numberOfLines={1}
                      ellipsizeMode="tail">
                      ₹ 1.5 lac | 2.5 lac
                    </Text>
                    <Text
                      style={[
                        styles.textImageCard,
                        {overflow: 'hidden', textOverflow: 'clip'},
                      ]}
                      numberOfLines={1}
                      ellipsizeMode="tail">
                      2118 Thornridge Cir. Syracuse
                    </Text>
                  </View>
                  <TouchableOpacity style={{flex: 1}}>
                    <HeartHome height={hp('10%')} width={wp('11.5%')} />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.containerImageCard}>
                <TouchableOpacity>
                  <Image
                    source={require('../../assets/images/ImageOne.jpg')}
                    style={styles.imageImageCard}
                  />
                </TouchableOpacity>
                <View style={styles.bottomContainerImageCard}>
                  <View style={{width: wp('52%')}}>
                    <Text
                      style={[
                        styles.textImageCard,
                        {overflow: 'hidden', textOverflow: 'clip'},
                      ]}
                      numberOfLines={1}
                      ellipsizeMode="tail">
                      4 BHK
                    </Text>
                    <Text
                      style={[
                        styles.textImageCard,
                        {fontFamily: FONT.SEMI_BOLD},
                        {overflow: 'hidden', textOverflow: 'clip'},
                      ]}
                      numberOfLines={1}
                      ellipsizeMode="tail">
                      ₹ 1.5 lac | 2.5 lac
                    </Text>
                    <Text
                      style={[
                        styles.textImageCard,
                        {overflow: 'hidden', textOverflow: 'clip'},
                      ]}
                      numberOfLines={1}
                      ellipsizeMode="tail">
                      2118 Thornridge Cir. Syracuse
                    </Text>
                  </View>
                  <TouchableOpacity style={{flex: 1}}>
                    <HeartHome height={hp('10%')} width={wp('11.5%')} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>

        {/* Cards for Home Finance*/}
        <View>
          <View>
            <Text
              style={{
                color: COLOR.DARK_BLUE,
                fontFamily: FONT.SEMI_BOLD,
                fontSize: FONT_SIZE.F_16,
                marginTop: hp('2%'),
                marginLeft: hp('0.1%'),
              }}>
              Home Finance
            </Text>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={{flexDirection: 'row'}}>
              <View style={styles.containerImageCardFinance}>
                <View style={styles.bottomContainerImageCardFinance}>
                  <Text
                    style={[
                      styles.textImageCardFinance,
                      {fontFamily: FONT.SEMI_BOLD},
                    ]}>
                    Homes Finance
                  </Text>
                  <Text
                    style={[styles.textImageCardFinance, {color: '#F49825'}]}>
                    420 Residence
                  </Text>
                </View>
                <Image
                  source={require('../../assets/images/HomeFinanceOne.png')}
                  style={styles.imageImageCardFinance}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={{flexDirection: 'row'}}>
              <View style={styles.containerImageCardFinance}>
                <View style={styles.bottomContainerImageCardFinance}>
                  <Text
                    style={[
                      styles.textImageCardFinance,
                      {fontFamily: FONT.SEMI_BOLD},
                    ]}>
                    Estimation
                  </Text>
                  <Text
                    style={[styles.textImageCardFinance, {color: '#F49825'}]}>
                    320 Residence
                  </Text>
                </View>
                <Image
                  source={HomeFinanceTwo}
                  style={styles.imageImageCardFinance}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={{flexDirection: 'row'}}>
              <View style={styles.containerImageCardFinance}>
                <View style={styles.bottomContainerImageCardFinance}>
                  <Text
                    style={[
                      styles.textImageCardFinance,
                      {fontFamily: FONT.SEMI_BOLD},
                    ]}>
                    Homes Finance
                  </Text>
                  <Text
                    style={[styles.textImageCardFinance, {color: '#F49825'}]}>
                    420 Residence
                  </Text>
                </View>
                <Image
                  source={require('../../assets/images/HomeFinanceOne.png')}
                  style={styles.imageImageCardFinance}
                />
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Cards for Home in Popular Location*/}
        <View style={{marginTop: hp('2%')}}>
          <View>
            <Text
              style={{
                color: COLOR.DARK_BLUE,
                fontFamily: FONT.SEMI_BOLD,
                fontSize: FONT_SIZE.F_16,
              }}>
              Homes in Popular Location
            </Text>
          </View>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.containerImageCard}>
                <TouchableOpacity>
                  <Image
                    source={require('../../assets/images/ImageOne.jpg')}
                    style={styles.imageImageCard}
                  />
                </TouchableOpacity>
                <View style={styles.bottomContainerImageCard}>
                  <View style={{width: wp('52%')}}>
                    <Text
                      style={[
                        styles.textImageCard,
                        {overflow: 'hidden', textOverflow: 'clip'},
                      ]}
                      numberOfLines={1}
                      ellipsizeMode="tail">
                      4 BHK
                    </Text>
                    <Text
                      style={[
                        styles.textImageCard,
                        {fontFamily: FONT.SEMI_BOLD},
                        {overflow: 'hidden', textOverflow: 'clip'},
                      ]}
                      numberOfLines={1}
                      ellipsizeMode="tail">
                      ₹ 1.5 lac | 2.5 lac
                    </Text>
                    <Text
                      style={[
                        styles.textImageCard,
                        {overflow: 'hidden', textOverflow: 'clip'},
                      ]}
                      numberOfLines={1}
                      ellipsizeMode="tail">
                      2118 Thornridge Cir. Syracuse
                    </Text>
                  </View>
                  <TouchableOpacity style={{flex: 1}}>
                    <HeartHome height={hp('10%')} width={wp('11.5%')} />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.containerImageCard}>
                <TouchableOpacity>
                  <Image
                    source={require('../../assets/images/ImageOne.jpg')}
                    style={styles.imageImageCard}
                  />
                </TouchableOpacity>
                <View style={styles.bottomContainerImageCard}>
                  <View style={{width: wp('52%')}}>
                    <Text
                      style={[
                        styles.textImageCard,
                        {overflow: 'hidden', textOverflow: 'clip'},
                      ]}
                      numberOfLines={1}
                      ellipsizeMode="tail">
                      4 BHK
                    </Text>
                    <Text
                      style={[
                        styles.textImageCard,
                        {fontFamily: FONT.SEMI_BOLD},
                        {overflow: 'hidden', textOverflow: 'clip'},
                      ]}
                      numberOfLines={1}
                      ellipsizeMode="tail">
                      ₹ 1.5 lac | 2.5 lac
                    </Text>
                    <Text
                      style={[
                        styles.textImageCard,
                        {overflow: 'hidden', textOverflow: 'clip'},
                      ]}
                      numberOfLines={1}
                      ellipsizeMode="tail">
                      2118 Thornridge Cir. Syracuse
                    </Text>
                  </View>
                  <TouchableOpacity style={{flex: 1}}>
                    <HeartHome height={hp('10%')} width={wp('11.5%')} />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.containerImageCard}>
                <TouchableOpacity>
                  <Image
                    source={require('../../assets/images/ImageOne.jpg')}
                    style={styles.imageImageCard}
                  />
                </TouchableOpacity>
                <View style={styles.bottomContainerImageCard}>
                  <View style={{width: wp('52%')}}>
                    <Text
                      style={[
                        styles.textImageCard,
                        {overflow: 'hidden', textOverflow: 'clip'},
                      ]}
                      numberOfLines={1}
                      ellipsizeMode="tail">
                      4 BHK
                    </Text>
                    <Text
                      style={[
                        styles.textImageCard,
                        {fontFamily: FONT.SEMI_BOLD},
                        {overflow: 'hidden', textOverflow: 'clip'},
                      ]}
                      numberOfLines={1}
                      ellipsizeMode="tail">
                      ₹ 1.5 lac | 2.5 lac
                    </Text>
                    <Text
                      style={[
                        styles.textImageCard,
                        {overflow: 'hidden', textOverflow: 'clip'},
                      ]}
                      numberOfLines={1}
                      ellipsizeMode="tail">
                      2118 Thornridge Cir. Syracuse
                    </Text>
                  </View>
                  <TouchableOpacity style={{flex: 1}}>
                    <HeartHome height={hp('10%')} width={wp('11.5%')} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>

        {/*Mini Cards Home Services*/}
        <View style={{marginTop: hp('2%')}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text
                style={{
                  color: COLOR.DARK_BLUE,
                  fontFamily: FONT.SEMI_BOLD,
                  fontSize: FONT_SIZE.F_16,
                }}>
                Services
              </Text>
            </View>
            <TouchableOpacity style={{marginTop: hp('1.5%')}}>
              <Text style={{color: '#021128', fontFamily: FONT.SEMI_BOLD}}>
                See all
              </Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.container}>
              <View style={styles.row}>
                <View style={styles.serviceItem}>
                  <TouchableOpacity style={styles.serviceIconContainer}>
                    <Buy />
                  </TouchableOpacity>
                  <Text style={styles.serviceText}>Home Repair</Text>
                </View>
                <View style={styles.serviceItem}>
                  <TouchableOpacity style={styles.serviceIconContainer}>
                    <Buy />
                  </TouchableOpacity>
                  <Text style={styles.serviceText}>Home Cleaning</Text>
                </View>
                <View style={styles.serviceItem}>
                  <TouchableOpacity style={styles.serviceIconContainer}>
                    <Buy />
                  </TouchableOpacity>
                  <Text style={styles.serviceText}>Packers & Mover</Text>
                </View>
                <View style={styles.serviceItem}>
                  <TouchableOpacity style={styles.serviceIconContainer}>
                    <Buy />
                  </TouchableOpacity>
                  <Text style={styles.serviceText}>AC Repair</Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.serviceItem}>
                  <TouchableOpacity style={styles.serviceIconContainer}>
                    <Buy />
                  </TouchableOpacity>
                  <Text style={styles.serviceText}>Home Repair</Text>
                </View>
                <View style={styles.serviceItem}>
                  <TouchableOpacity style={styles.serviceIconContainer}>
                    <Buy />
                  </TouchableOpacity>
                  <Text style={styles.serviceText}>Home Cleaning</Text>
                </View>
                <View style={styles.serviceItem}>
                  <TouchableOpacity style={styles.serviceIconContainer}>
                    <Buy />
                  </TouchableOpacity>
                  <Text style={styles.serviceText}>Packers & Mover</Text>
                </View>
                <View style={styles.serviceItem}>
                  <TouchableOpacity style={styles.serviceIconContainer}>
                    <Buy />
                  </TouchableOpacity>
                  <Text style={styles.serviceText}>AC Repair</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>

        {/* Cards for Home in Popular Location*/}
        <View style={{marginBottom: hp('2%')}}>
          <View>
            <Text
              style={{
                color: COLOR.DARK_BLUE,
                fontFamily: FONT.SEMI_BOLD,
                fontSize: FONT_SIZE.F_16,
              }}>
              Homes in Popular Location
            </Text>
          </View>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.containerImageCard}>
                <TouchableOpacity>
                  <Image
                    source={require('../../assets/images/ImageOne.jpg')}
                    style={styles.imageImageCard}
                  />
                </TouchableOpacity>
                <View style={styles.bottomContainerImageCard}>
                  <View style={{width: wp('52%')}}>
                    <Text
                      style={[
                        styles.textImageCard,
                        {overflow: 'hidden', textOverflow: 'clip'},
                      ]}
                      numberOfLines={1}
                      ellipsizeMode="tail">
                      4 BHK
                    </Text>
                    <Text
                      style={[
                        styles.textImageCard,
                        {fontFamily: FONT.SEMI_BOLD},
                        {overflow: 'hidden', textOverflow: 'clip'},
                      ]}
                      numberOfLines={1}
                      ellipsizeMode="tail">
                      ₹ 1.5 lac | 2.5 lac
                    </Text>
                    <Text
                      style={[
                        styles.textImageCard,
                        {overflow: 'hidden', textOverflow: 'clip'},
                      ]}
                      numberOfLines={1}
                      ellipsizeMode="tail">
                      2118 Thornridge Cir. Syracuse
                    </Text>
                  </View>
                  <TouchableOpacity style={{flex: 1}}>
                    <HeartHome height={hp('10%')} width={wp('11.5%')} />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.containerImageCard}>
                <TouchableOpacity>
                  <Image
                    source={require('../../assets/images/ImageOne.jpg')}
                    style={styles.imageImageCard}
                  />
                </TouchableOpacity>
                <View style={styles.bottomContainerImageCard}>
                  <View style={{width: wp('52%')}}>
                    <Text
                      style={[
                        styles.textImageCard,
                        {overflow: 'hidden', textOverflow: 'clip'},
                      ]}
                      numberOfLines={1}
                      ellipsizeMode="tail">
                      4 BHK
                    </Text>
                    <Text
                      style={[
                        styles.textImageCard,
                        {fontFamily: FONT.SEMI_BOLD},
                        {overflow: 'hidden', textOverflow: 'clip'},
                      ]}
                      numberOfLines={1}
                      ellipsizeMode="tail">
                      ₹ 1.5 lac | 2.5 lac
                    </Text>
                    <Text
                      style={[
                        styles.textImageCard,
                        {overflow: 'hidden', textOverflow: 'clip'},
                      ]}
                      numberOfLines={1}
                      ellipsizeMode="tail">
                      2118 Thornridge Cir. Syracuse
                    </Text>
                  </View>
                  <TouchableOpacity style={{flex: 1}}>
                    <HeartHome height={hp('10%')} width={wp('11.5%')} />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.containerImageCard}>
                <TouchableOpacity>
                  <Image
                    source={require('../../assets/images/ImageOne.jpg')}
                    style={styles.imageImageCard}
                  />
                </TouchableOpacity>
                <View style={styles.bottomContainerImageCard}>
                  <View style={{width: wp('52%')}}>
                    <Text
                      style={[
                        styles.textImageCard,
                        {overflow: 'hidden', textOverflow: 'clip'},
                      ]}
                      numberOfLines={1}
                      ellipsizeMode="tail">
                      4 BHK
                    </Text>
                    <Text
                      style={[
                        styles.textImageCard,
                        {fontFamily: FONT.SEMI_BOLD},
                        {overflow: 'hidden', textOverflow: 'clip'},
                      ]}
                      numberOfLines={1}
                      ellipsizeMode="tail">
                      ₹ 1.5 lac | 2.5 lac
                    </Text>
                    <Text
                      style={[
                        styles.textImageCard,
                        {overflow: 'hidden', textOverflow: 'clip'},
                      ]}
                      numberOfLines={1}
                      ellipsizeMode="tail">
                      2118 Thornridge Cir. Syracuse
                    </Text>
                  </View>
                  <TouchableOpacity style={{flex: 1}}>
                    <HeartHome height={hp('10%')} width={wp('11.5%')} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </ScrollView>

      {/* Footer */}
      <View
        style={{
          height: hp('8%'),
          backgroundColor: 'green',
          marginTop: hp('2%'),
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: hp('2%'),
            textAlign: 'center',
            marginTop: hp('2%'),
          }}>
          Responsive Footer
        </Text>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  containerHeader: {
    flex: 1,
  },
  backgroundContainerHeader: {
    flex: 1,
  },
  waveContainer: {
    flex: 1,
    overflow: 'hidden',
  },
  backgroundImage: {
    flex: 1,
  },
  headerContainer: {
    position: 'absolute',
    top: hp('2.5%'),
    alignSelf: 'center',
    height: hp('100%'),
    width: wp('100%'),
    paddingLeft: hp('2.5%'),
    paddingRight: hp('2.5%'),
    // backgroundColor: 'red', //body container
    // alignItems: 'center', //if required remove
  },
  profileNameAndPictureContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp('1%'),
  },
  greetingText: {
    fontFamily: FONT.BOLD,
    color: COLOR.WHITE,
    fontSize: FONT_SIZE.F_21,
  },
  profileImageContainer: {
    marginRight: hp('0.2%'),
  },
  welcomeTextContainer: {
    marginBottom: hp('0.3%'),
  },
  welcomeText: {
    fontSize: FONT_SIZE.F_15,
    marginBottom: hp('1%'),
    fontFamily: FONT.MEDIUM,
    color: '#F49825',
  },
  textInputAndFilterIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp('0.5%'),
  },
  searchViewContainer: {
    flexDirection: 'row',
    borderRadius: hp('1.5%'),
    alignItems: 'center',
    width: wp('64%'),
    height: hp('5.8%'),
    backgroundColor: '#1F5EC3',
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: hp('0.3%'),
    borderRadius: hp('1%'),
    paddingHorizontal: hp('1%'),
  },
  searchIcon: {
    marginRight: hp('0.8%'),
  },
  filterIconContainer: {
    marginLeft: hp('2%'),
  },

  input: {
    marginLeft: hp('0.2%'),
    color: COLOR.WHITE,
    fontFamily: FONT.MEDIUM,
    fontSize: FONT_SIZE.F_13,
    width: wp('52%'),
    height: hp('5.8%'),
  },

  //View for Buy Sale Rent
  buySaleRentContainerMain: {
    // backgroundColor: 'green',
    width: wp('88%'),
    alignSelf: 'center',
    top: hp('7.3%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buySaleRentContainer: {
    backgroundColor: '#FFFFFF',
    borderWidth: hp('0.2%'),
    borderColor: '#F49825',
    borderRadius: hp('2%'),
    padding: hp('1%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buySaleRentText: {
    color: '#031F5F',
    fontFamily: FONT.SEMI_BOLD,
    fontSize: hp('2%'),
    marginLeft: hp('1%'),
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: hp('0.1%'),
    paddingBottom: hp('0.1%'),
    padding: hp('1%'),
  },

  //Image Gallery Card
  containerImageCard: {
    width: wp('70%'),
    height: hp('23%'),
    backgroundColor: '#FFFFFF',
    borderRadius: hp('2%'),
    overflow: 'hidden',
    marginTop: hp('1.3%'),
    marginRight: hp('2.5%'),
  },
  imageImageCard: {
    width: wp('70%'),
    height: hp('13%'),
    resizeMode: 'cover',
  },
  bottomContainerImageCard: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
    marginLeft: hp('2%'),
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textImageCard: {
    fontSize: FONT_SIZE.F_15,
    color: '#021128',
    fontFamily: FONT.REGULAR,
    margin: hp('0.1%'),
  },

  //Finance
  containerImageCardFinance: {
    width: wp('50%'),
    height: hp('26.5%'),
    backgroundColor: '#FFFFFF',
    borderRadius: hp('2%'),
    overflow: 'hidden',
    marginTop: hp('2%'),
    marginRight: hp('2.5%'),
  },
  imageImageCardFinance: {
    width: wp('55%'),
    height: hp('19%'),
    resizeMode: 'cover',
  },
  bottomContainerImageCardFinance: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
    margin: hp('2%'),
  },
  textImageCardFinance: {
    fontSize: FONT_SIZE.F_15,
    color: '#021128',
    fontFamily: FONT.REGULAR,
    margin: hp('0.1%'),
  },

  //SERVICES
  container: {
    marginTop: hp('0.5%'),
    paddingVertical: hp('1%'),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('89%'),
    alignItems: 'center',
  },
  serviceItem: {
    alignItems: 'center',
    margin: hp('1.5%'),
    marginLeft: hp('0%'),
    marginRight: hp('0%'),
  },
  serviceIconContainer: {
    width: wp('15%'),
    height: wp('15%'),
    borderRadius: hp('3%'),
    backgroundColor: '#FFFFFF',
    borderWidth: hp('0.1%'),
    borderColor: '#001D4C',
    alignItems: 'center',
    justifyContent: 'center',
    padding: hp('2%'),
  },
  serviceText: {
    fontFamily: FONT.MEDIUM,
    color: '#001D4C',
    fontSize: FONT_SIZE.F_12,
    marginTop: hp('1%'),
    textAlign: 'center',
  },
});
