import {StyleSheet} from 'react-native';
import {COLORS} from '../../constant/constant';

export const style = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 10,
    borderRadius: 10,
  },
  btnSelected: {
    backgroundColor: COLORS.primary,
  },
  btnUnSelected: {
    backgroundColor: COLORS.lightGray,
  },
  textSelected: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  textUnSelected: {
    color: COLORS.textGray,
    fontSize: 16,
    fontWeight: '500',
  },
  avatar:{
    height:40,
    width:40,
   
},
icon:{
    height:24,
    width:24
}
});
