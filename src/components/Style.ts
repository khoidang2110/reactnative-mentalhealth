import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constant/constant';

export const style = StyleSheet.create({
  
  tabIconContainer: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabIconSelected: {
    tintColor: COLORS.primary,
    height:30,
    width:30
    
    
  },
  tabIconUnSelected: {
    tintColor: COLORS.gray,
    height:30,
    width:30
  },
  tabBottomLine: {
    position: 'absolute',
    top: -10,
    height:7,
    backgroundColor: COLORS.primary,
    width: '20%',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  }
});
