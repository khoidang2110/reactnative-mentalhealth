import {Image, Text, View} from 'react-native';
import React from 'react';
import {ICONS, IMAGES} from '../../constant/constant';
import {style} from './Style';

export default function Header() {
  return (
    <View
      style={{
        paddingTop: 30,
        paddingHorizontal: 20,
        paddingBottom: 10,
        backgroundColor: '#fbfbfb',
        // shadowColor: '#000',
        // shadowOffset: {
        //   width: 0,
        //   height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,

        // elevation: 5,
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Image source={IMAGES.avatar} style={style.avatar} />

        <View style={style.container}>
          <Image source={ICONS.bell} style={style.icon} />
          <View style={style.badgeContainer}>
            <Text style={style.badge}>3</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
