import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ICONS, SCREENS } from "../constant/constant";
import TabIcon from "../components/TabIcon";
import Home from "../screens/home/Home";
import Community from "../screens/community/Community";
import Message from "../screens/message/Message";
import Sessions from "../screens/sessions/Sessions";


const Tab = createBottomTabNavigator();

export const StackNavigation = () => (
    <Tab.Navigator screenOptions={{
      headerShown: false, 
      tabBarShowLabel: false,tabBarStyle:{
        position:'absolute',
        bottom:0,
        left:0,
        right: 0,
        elevation:1,
        height:70
  
      }}}>
      <Tab.Screen name={SCREENS.HOME} component={Home} options={{
        tabBarIcon: ({focused})=> <TabIcon focused={focused} icon={focused ? ICONS.homeFill : ICONS.home}/>
      }}/>
       <Tab.Screen name={SCREENS.SESSIONS} component={Sessions}  options={{
        tabBarIcon: ({focused})=> <TabIcon focused={focused} icon={focused ? ICONS.sessionFill : ICONS.session}/>
      }}/>
      <Tab.Screen name={SCREENS.MESSAGE} component={Message}  options={{
        tabBarIcon: ({focused})=> <TabIcon focused={focused} icon={focused ? ICONS.messageFill : ICONS.message}/>
      }}/>
     
      <Tab.Screen name={SCREENS.COMMUNITY} component={Community}  options={{
        tabBarIcon: ({focused})=> <TabIcon focused={focused} icon={focused ? ICONS.communityFill : ICONS.community}/>
      }}/>
    </Tab.Navigator>
  );
  