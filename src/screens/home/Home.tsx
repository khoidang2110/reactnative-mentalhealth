import {Image, ScrollView, Text, View} from 'react-native';
import React from 'react';
import {COLORS, ICONS, IMAGES} from '../../constant/constant';
import {style} from './Style';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Home() {
  return (


      <ScrollView
        contentContainerStyle={{paddingHorizontal:20,paddingBottom:80, paddingTop:20,  backgroundColor: '#fbfbfb'}}
        showsVerticalScrollIndicator={false}>
        <Text style={{fontSize: 25, color: COLORS.brown}}>Good Afternoon,</Text>
        <Text style={{fontSize: 25, color: COLORS.brown, fontWeight: '700'}}>
          Sarina!{' '}
        </Text>
        <Text
          style={{
            fontWeight: '500',
            paddingVertical: 20,
            fontSize: 16,
            color: COLORS.brown,
          }}>
          How are you feeling today?
        </Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View>
            <View
              style={[
                style.feelingIconContainer,
                {backgroundColor: COLORS.pink},
              ]}>
              <Image source={ICONS.happy} style={style.feelingIcon} />
            </View>
            <Text style={{textAlign: 'center'}}>Happy</Text>
          </View>
          <View>
            <View
              style={[
                style.feelingIconContainer,
                {backgroundColor: COLORS.violet},
              ]}>
              <Image source={ICONS.calm} style={style.feelingIcon} />
            </View>
            <Text style={{textAlign: 'center'}}>Calm</Text>
          </View>
          <View>
            <View
              style={[
                style.feelingIconContainer,
                {backgroundColor: COLORS.lightBlue},
              ]}>
              <Image source={ICONS.manic} style={style.feelingIcon} />
            </View>
            <Text style={{textAlign: 'center'}}>Manic</Text>
          </View>
          <View>
            <View
              style={[
                style.feelingIconContainer,
                {backgroundColor: COLORS.primary},
              ]}>
              <Image source={ICONS.angry} style={style.feelingIcon} />
            </View>
            <Text style={{textAlign: 'center'}}>Angry</Text>
          </View>
          <View>
            <View
              style={[
                style.feelingIconContainer,
                {backgroundColor: COLORS.lightGreen},
              ]}>
              <Image source={ICONS.sick} style={style.feelingIcon} />
            </View>
            <Text style={{textAlign: 'center'}}>Sick</Text>
          </View>
        </ScrollView>

        <View
          style={[
            style.sessionContainer,
            {flexDirection: 'row', alignItems: 'center'},
          ]}>
          <View style={{flex: 1}}>
            <Text
              style={{fontSize: 25, fontWeight: '700', color: COLORS.brown}}>
              1 on 1 Sessions
            </Text>
            <Text style={{color: COLORS.brown}}>
              Let's open up to the things that matter the most
            </Text>
            <View style={{flexDirection: 'row', paddingVertical: 20}}>
              <Text
                style={{fontSize: 20, paddingRight: 10, color: COLORS.primary}}>
                Book Now
              </Text>
              <Image source={ICONS.date} style={{tintColor: COLORS.primary}} />
            </View>
          </View>
          <Image
            source={ICONS.connect}
            style={{width: 50, height: 50, tintColor: COLORS.primary}}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View
            style={{
              flexDirection: 'row',
              padding: 20,
              backgroundColor: COLORS.lightGray,
              borderRadius: 10,
              marginVertical: 10,
            }}>
            <Image
              source={ICONS.journal}
              style={{tintColor: COLORS.gray, marginRight: 30}}
            />
            <Text
              style={{
                fontSize: 16,
                fontWeight: '700',
                marginRight: 20,
                color: COLORS.brown,
              }}>
              Journal
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              padding: 20,
              backgroundColor: COLORS.lightGray,
              borderRadius: 10,
              marginVertical: 10,
            }}>
            <Image
              source={ICONS.library}
              style={{tintColor: COLORS.gray, marginRight: 30}}
            />
            <Text
              style={{
                fontSize: 16,
                fontWeight: '700',
                marginRight: 20,
                color: COLORS.brown,
              }}>
              Library
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            padding: 10,
            backgroundColor: COLORS.lightGray,
            borderRadius: 10,
            alignItems: 'center',
          }}>
          <Text style={{padding: 10, flex: 1, fontSize: 16}}>
            "It is better to conquer yourself than to win a thousand battles"
          </Text>
          <Image
            source={ICONS.mark}
            style={{width: 40, height: 40, tintColor: COLORS.gray, padding: 10}}
          />
        </View>
        <View style={{flexDirection: 'row',
              backgroundColor: COLORS.green,
              borderRadius: 10,
              padding:10,
              marginVertical: 20,
              alignItems:'center'}}>
          <View
            style={{
              
              flex:1,padding:10
            }}>
            <Text style={{color:'white',fontSize:25,fontWeight:'700'}}>Plan Expired</Text>
            <Text style={{color:'white',paddingVertical:10}}>Get back chat access and session credits</Text>
            <View style={{flexDirection:'row',alignItems:'center'}}>
              <Text style={{color:'white',fontSize:20}}>Buy More</Text>
              <Image source={ICONS.arrow} style={{width: 20, height: 20, marginLeft:10,tintColor:'white'}} />
            </View>
          </View>
          <Image source={ICONS.lotus} style={{width: 90, height: 90,tintColor:COLORS.lighterGreen,margin:20}} />
        </View>
      </ScrollView>
    
  );
}
