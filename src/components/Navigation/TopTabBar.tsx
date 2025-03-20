import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ProfilePosts from '../Screens/ProfilePosts';
import ProfileReels from '../Screens/ProfileReels';
import ProfileHighlights from '../Screens/ProfileHighlights';

const TopTab = createMaterialTopTabNavigator();

export default function TopTabBar() {
  return (
    <TopTab.Navigator
      initialRouteName="Posts"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#f9fafb',
          paddingVertical: 6,
          zIndex: 0,
        },
        tabBarIndicatorStyle: {
          display: 'none',
        },
        tabBarLabelStyle: {
          fontWeight: 'bold',
        },
      }}>
      <TopTab.Screen name="Posts" component={ProfilePosts} />
      <TopTab.Screen name="Reels" component={ProfileReels} />
      <TopTab.Screen name="Highlights" component={ProfileHighlights} />
    </TopTab.Navigator>
  );
}
