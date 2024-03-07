import {StyleSheet} from 'react-native';
import { COLORS } from '../../constant/constant';


export const style = StyleSheet.create({
avatar:{
    height:40,
    width:40,
    borderColor:COLORS.primary,
    borderWidth:2,
    borderRadius:20
},
icon:{
    height:30,
    width:30,
 
},
feelingIconContainer:{
    marginVertical:5,
    marginHorizontal:13,
    padding:25,
    borderRadius:10,
    height:55,
    width:55,
    justifyContent:'center',
    alignItems:'center'
},
feelingIcon:{
    height:40,
    width:40,
tintColor:'white'
},
container:{
    position: 'relative',
},
badgeContainer:{
    position: 'absolute',
    top: -5,
    right: -5,
    minWidth: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor:COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
},
badge:{
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  
},
sessionContainer:{
    backgroundColor:COLORS.lightPrimary,
    padding:10,
    borderRadius:10,
    marginVertical:15
}
});
