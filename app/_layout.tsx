import {createNativeStackNavigator} from '@react-navigation/native-stack';
import '../global.css';
import Profile from '../src/components/Navigation/(tabs)/Profile';
import Settings from '../src/components/Screens/Settings';
import DrawerLayout from '../src/components/Navigation/(drawer)/_layout';

const Stack = createNativeStackNavigator();

export default function RootLayout() {
  return (
    <Stack.Navigator
      initialRouteName="Drawer"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Drawer" component={DrawerLayout} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}
