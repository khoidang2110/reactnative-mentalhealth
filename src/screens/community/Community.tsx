import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native';
import {style} from './Style';
import {COLORS, ICONS, IMAGES} from '../../constant/constant';
import ActionButton from 'react-native-action-button';

export default function Community() {
  return (
    <View style={{height: '90%'}}>
      <View
        style={{paddingHorizontal: 20, backgroundColor: COLORS.background2}}>
        <Text style={{color: COLORS.brown, fontSize: 22, fontWeight: '700'}}>
          Wellness Hub
        </Text>
        <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <View style={[style.button, style.btnSelected]}>
              <Text style={style.textSelected}> Trending</Text>
            </View>
            <View style={[style.button, style.btnUnSelected]}>
              <Text style={style.textUnSelected}>Relationship</Text>
            </View>
            <View style={[style.button, style.btnUnSelected]}>
              <Text style={style.textUnSelected}>Self Care</Text>
            </View>
            <View style={[style.button, style.btnUnSelected]}>
              <Text style={style.textUnSelected}>History</Text>
            </View>
          </View>
        </ScrollView>
        </View>
     
<ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:200}}>
<View style={{paddingTop: 10}}>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Image source={IMAGES.avatar} style={style.avatar} />
            </View>

            <View style={{paddingHorizontal: 20}}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontSize: 16,
                    color: COLORS.brown,
                    fontWeight: '500',
                  }}>
                  Coal Dingo{' '}
                </Text>
                <Text>. just now</Text>
              </View>
              <Text style={{width: 250, color: COLORS.brown, fontSize: 15}}>
                Is there are df ad f ad fas dfasadffffffffffffff
              </Text>
              <View style={{flexDirection: 'row', paddingVertical: 20}}>
                <View style={{flexDirection: 'row', paddingRight: 30}}>
                  <Image
                    source={ICONS.thumbUp}
                    style={[
                      style.icon,
                      {marginRight: 10, tintColor: COLORS.primary},
                    ]}
                  />
                  <Text>2</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={ICONS.message}
                    style={[
                      style.icon,
                      {marginRight: 10, tintColor: COLORS.gray},
                    ]}
                  />
                  <Text>2</Text>
                </View>
              </View>
            </View>
            <View style={{alignSelf: 'flex-end', paddingBottom: 10}}>
              <Image
                source={ICONS.forward}
                style={[style.icon, {tintColor: COLORS.gray}]}
              />
            </View>
          </View>
          <View
            style={{
              backgroundColor: COLORS.gray,
              height: 1,
              width: '100%',
            }}></View>
        </View>
        <View style={{paddingTop: 10}}>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Image source={IMAGES.avatar} style={style.avatar} />
            </View>

            <View style={{paddingHorizontal: 20}}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontSize: 16,
                    color: COLORS.brown,
                    fontWeight: '500',
                  }}>
                  Coal Dingo{' '}
                </Text>
                <Text>. just now</Text>
              </View>
              <Text style={{width: 250, color: COLORS.brown, fontSize: 15}}>
                Is there are df ad f ad fas dfasadffffffffffffff
              </Text>
              <View style={{flexDirection: 'row', paddingVertical: 20}}>
                <View style={{flexDirection: 'row', paddingRight: 30}}>
                  <Image
                    source={ICONS.thumbUp}
                    style={[
                      style.icon,
                      {marginRight: 10, tintColor: COLORS.primary},
                    ]}
                  />
                  <Text>2</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={ICONS.message}
                    style={[
                      style.icon,
                      {marginRight: 10, tintColor: COLORS.gray},
                    ]}
                  />
                  <Text>2</Text>
                </View>
              </View>
            </View>
            <View style={{alignSelf: 'flex-end', paddingBottom: 10}}>
              <Image
                source={ICONS.forward}
                style={[style.icon, {tintColor: COLORS.gray}]}
              />
            </View>
          </View>
          <View
            style={{
              backgroundColor: COLORS.gray,
              height: 1,
              width: '100%',
            }}></View>
        </View>
        <View style={{paddingTop: 10}}>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Image source={IMAGES.avatar} style={style.avatar} />
            </View>

            <View style={{paddingHorizontal: 20}}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontSize: 16,
                    color: COLORS.brown,
                    fontWeight: '500',
                  }}>
                  Coal Dingo{' '}
                </Text>
                <Text>. just now</Text>
              </View>
              <Text style={{width: 250, color: COLORS.brown, fontSize: 15}}>
                Is there are df ad f ad fas dfasadffffffffffffff
              </Text>
              <View style={{flexDirection: 'row', paddingVertical: 20}}>
                <View style={{flexDirection: 'row', paddingRight: 30}}>
                  <Image
                    source={ICONS.thumbUp}
                    style={[
                      style.icon,
                      {marginRight: 10, tintColor: COLORS.primary},
                    ]}
                  />
                  <Text>2</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={ICONS.message}
                    style={[
                      style.icon,
                      {marginRight: 10, tintColor: COLORS.gray},
                    ]}
                  />
                  <Text>2</Text>
                </View>
              </View>
            </View>
            <View style={{alignSelf: 'flex-end', paddingBottom: 10}}>
              <Image
                source={ICONS.forward}
                style={[style.icon, {tintColor: COLORS.gray}]}
              />
            </View>
          </View>
          <View
            style={{
              backgroundColor: COLORS.gray,
              height: 1,
              width: '100%',
            }}></View>
        </View>
        <View style={{paddingTop: 10}}>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Image source={IMAGES.avatar} style={style.avatar} />
            </View>

            <View style={{paddingHorizontal: 20}}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontSize: 16,
                    color: COLORS.brown,
                    fontWeight: '500',
                  }}>
                  Coal Dingo{' '}
                </Text>
                <Text>. just now</Text>
              </View>
              <Text style={{width: 250, color: COLORS.brown, fontSize: 15}}>
                Is there are df ad f ad fas dfasadffffffffffffff
              </Text>
              <View style={{flexDirection: 'row', paddingVertical: 20}}>
                <View style={{flexDirection: 'row', paddingRight: 30}}>
                  <Image
                    source={ICONS.thumbUp}
                    style={[
                      style.icon,
                      {marginRight: 10, tintColor: COLORS.primary},
                    ]}
                  />
                  <Text>2</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={ICONS.message}
                    style={[
                      style.icon,
                      {marginRight: 10, tintColor: COLORS.gray},
                    ]}
                  />
                  <Text>2</Text>
                </View>
              </View>
            </View>
            <View style={{alignSelf: 'flex-end', paddingBottom: 10}}>
              <Image
                source={ICONS.forward}
                style={[style.icon, {tintColor: COLORS.gray}]}
              />
            </View>
          </View>
          <View
            style={{
              backgroundColor: COLORS.gray,
              height: 1,
              width: '100%',
            }}></View>
        </View>
        <View style={{paddingTop: 10}}>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Image source={IMAGES.avatar} style={style.avatar} />
            </View>

            <View style={{paddingHorizontal: 20}}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontSize: 16,
                    color: COLORS.brown,
                    fontWeight: '500',
                  }}>
                  Coal Dingo{' '}
                </Text>
                <Text>. just now</Text>
              </View>
              <Text style={{width: 250, color: COLORS.brown, fontSize: 15}}>
                Is there are df ad f ad fas dfasadffffffffffffff
              </Text>
              <View style={{flexDirection: 'row', paddingVertical: 20}}>
                <View style={{flexDirection: 'row', paddingRight: 30}}>
                  <Image
                    source={ICONS.thumbUp}
                    style={[
                      style.icon,
                      {marginRight: 10, tintColor: COLORS.primary},
                    ]}
                  />
                  <Text>2</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={ICONS.message}
                    style={[
                      style.icon,
                      {marginRight: 10, tintColor: COLORS.gray},
                    ]}
                  />
                  <Text>2</Text>
                </View>
              </View>
            </View>
            <View style={{alignSelf: 'flex-end', paddingBottom: 10}}>
              <Image
                source={ICONS.forward}
                style={[style.icon, {tintColor: COLORS.gray}]}
              />
            </View>
          </View>
          <View
            style={{
              backgroundColor: COLORS.gray,
              height: 1,
              width: '100%',
            }}></View>
        </View>
</ScrollView>
 
      </View>
      <ActionButton buttonColor={COLORS.primary} position="right"  >
        <ActionButton.Item
          buttonColor="#9b59b6"
          title="New Task"
          onPress={() => console.log('notes tapped!')}>
          <Text>Hello</Text>
        </ActionButton.Item>
      </ActionButton>
    </View>
  );
}
