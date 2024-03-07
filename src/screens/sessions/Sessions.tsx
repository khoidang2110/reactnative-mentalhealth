import {Image, Text, View} from 'react-native';
import React from 'react';
import {COLORS, ICONS, IMAGES} from '../../constant/constant';
import { style } from './Style';
import { ScrollView } from 'react-native';
export default function Sessions() {
  return (
    <View style={{padding: 20, backgroundColor: COLORS.background2,height:'90%'}}>
   
      <View
        style={{
          padding: 20,
          backgroundColor: COLORS.lightPrimary,
          borderRadius: 10,
        }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: '700',
            color: COLORS.brown,
            paddingBottom: 10,
          }}>
          Upcoming Session
        </Text>
        <Text style={{color: COLORS.brown, paddingBottom: 10}}>
          Sahara V.Msc in Clinical Psychology
        </Text>
        <Text
          style={{color: COLORS.brown, fontWeight: '500', paddingBottom: 10}}>
          7:30 PM - 8:30 PM
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              color: COLORS.primary,
              fontSize: 20,
              fontWeight: '700',
              paddingRight: 10,
            }}>
            Join Now
          </Text>
          <Image source={ICONS.play} style={{tintColor: COLORS.primary}} />
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: 30,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{fontSize: 20, fontWeight: '700', color: COLORS.brown}}>
            All Sessions
          </Text>
          <Image source={ICONS.expand} />
        </View>
        <Image source={ICONS.unfold} style={{tintColor: COLORS.gray}} />
      </View>

<ScrollView showsVerticalScrollIndicator={false} >
<View style={{padding:20,backgroundColor:COLORS.lightPrimary,borderRadius:10,marginBottom:15}}>
    <View style={{flexDirection:'row'}}>
        <Image source={IMAGES.avatar} style={style.avatar} />
        <View>
            <Text style={{paddingLeft:10,fontSize:16,fontWeight:'500',color:COLORS.brown}}>Sahara V</Text>
            <Text style={{paddingLeft:10,color:COLORS.brown}}>Msc in Clinical Psychology</Text>
        </View>
    </View>
    <View style={{paddingVertical:10}}>
    <View
            style={{
              backgroundColor: COLORS.gray,
              height: 1,
              width: '100%',
            }}></View>
    </View>

    <View style={{flexDirection:'row',paddingVertical:10}}>
        <View style={{flexDirection:'row',paddingRight:15,alignItems:'center'}}>
            <Image source={ICONS.date} style={{tintColor:COLORS.gray}}/>
            <Text style={{paddingLeft:10,color:COLORS.brown}} >31st March '22</Text>
        </View>
        <View style={{flexDirection:'row',alignItems:'center'}}>
            <Image source={ICONS.timer} style={{tintColor:COLORS.gray}}/>
            <Text style={{paddingLeft:10,color:COLORS.brown}}>7:30 PM - 8:30 PM</Text>
        </View>
    </View>
    <View  style={{flexDirection:'row'}}>
        <View style={{paddingHorizontal:20,paddingVertical:10,borderRadius:10, backgroundColor:COLORS.primary,marginRight:10}}>
            <Text style={{color:'white',fontSize:16,fontWeight:'500'}}>Reschedule</Text>
        </View>
        <View style={{paddingHorizontal:20,paddingVertical:10}}>
            <Text style={{color:COLORS.primary,fontSize:16,fontWeight:'500'}}>Join Now</Text>
        </View>
    </View>
</View>
<View style={{padding:20,backgroundColor:COLORS.ExtraLightPrimary,borderRadius:10,marginBottom:15}}>
    <View style={{flexDirection:'row'}}>
        <Image source={IMAGES.avatar} style={style.avatar} />
        <View>
            <Text style={{paddingLeft:10,fontSize:16,fontWeight:'500',color:COLORS.brown}}>Sahara V</Text>
            <Text style={{paddingLeft:10,color:COLORS.brown}}>Msc in Clinical Psychology</Text>
        </View>
    </View>
    <View style={{paddingVertical:10}}>
    <View
            style={{
              backgroundColor: COLORS.gray,
              height: 1,
              width: '100%',
            }}></View>
    </View>

    <View style={{flexDirection:'row',paddingVertical:10}}>
        <View style={{flexDirection:'row',paddingRight:15,alignItems:'center'}}>
            <Image source={ICONS.date} style={{tintColor:COLORS.gray}}/>
            <Text style={{paddingLeft:10,color:COLORS.brown}} >31st March '22</Text>
        </View>
        <View style={{flexDirection:'row',alignItems:'center'}}>
            <Image source={ICONS.timer} style={{tintColor:COLORS.gray}}/>
            <Text style={{paddingLeft:10,color:COLORS.brown}}>7:30 PM - 8:30 PM</Text>
        </View>
    </View>
    <View  style={{flexDirection:'row'}}>
        <View style={{paddingHorizontal:20,paddingVertical:10,borderRadius:10, backgroundColor:COLORS.primary,marginRight:10}}>
            <Text style={{color:'white',fontSize:16,fontWeight:'500'}}>Reschedule</Text>
        </View>
        <View style={{paddingHorizontal:20,paddingVertical:10}}>
            <Text style={{color:COLORS.primary,fontSize:16,fontWeight:'500'}}>Join Now</Text>
        </View>
    </View>
</View>
<View style={{padding:20,backgroundColor:COLORS.ExtraLightPrimary,borderRadius:10,marginBottom:15}}>
    <View style={{flexDirection:'row'}}>
        <Image source={IMAGES.avatar} style={style.avatar} />
        <View>
            <Text style={{paddingLeft:10,fontSize:16,fontWeight:'500',color:COLORS.brown}}>Sahara V</Text>
            <Text style={{paddingLeft:10,color:COLORS.brown}}>Msc in Clinical Psychology</Text>
        </View>
    </View>
    <View style={{paddingVertical:10}}>
    <View
            style={{
              backgroundColor: COLORS.gray,
              height: 1,
              width: '100%',
            }}></View>
    </View>

    <View style={{flexDirection:'row',paddingVertical:10}}>
        <View style={{flexDirection:'row',paddingRight:15,alignItems:'center'}}>
            <Image source={ICONS.date} style={{tintColor:COLORS.gray}}/>
            <Text style={{paddingLeft:10,color:COLORS.brown}} >31st March '22</Text>
        </View>
        <View style={{flexDirection:'row',alignItems:'center'}}>
            <Image source={ICONS.timer} style={{tintColor:COLORS.gray}}/>
            <Text style={{paddingLeft:10,color:COLORS.brown}}>7:30 PM - 8:30 PM</Text>
        </View>
    </View>
    <View  style={{flexDirection:'row'}}>
        <View style={{paddingHorizontal:20,paddingVertical:10,borderRadius:10, backgroundColor:COLORS.primary,marginRight:10}}>
            <Text style={{color:'white',fontSize:16,fontWeight:'500'}}>Reschedule</Text>
        </View>
        <View style={{paddingHorizontal:20,paddingVertical:10}}>
            <Text style={{color:COLORS.primary,fontSize:16,fontWeight:'500'}}>Join Now</Text>
        </View>
    </View>
</View>
</ScrollView>

    </View>
  );
}
