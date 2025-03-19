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
          backgroundColor: 'white',
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
          textTransform: 'capitalize', // Ensure labels look better
        },
      }}>
      <TopTab.Screen name="Posts" component={ProfilePosts} />
      <TopTab.Screen name="Reels" component={ProfileReels} />
      <TopTab.Screen name="Highlights" component={ProfileHighlights} />
    </TopTab.Navigator>
  );
}
