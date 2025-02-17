import React from 'react';
import {ImageSourcePropType, FlatList, View} from 'react-native';
import ProfileStory from './userStory';

const Stories: React.FC = () => {
  interface userStoryProps {
    userName: string;
    id: number;
    profile: ImageSourcePropType;
  }

  const userStories: userStoryProps[] = [
    {
      userName: 'Joseph',
      id: 1,
      profile: require('./../assets/images/default_profile.png'),
    },
    {
      userName: 'Alan',
      id: 2,
      profile: require('./../assets/images/default_profile.png'),
    },
    {
      userName: 'White',
      id: 3,
      profile: require('./../assets/images/default_profile.png'),
    },
    {
      userName: 'John',
      id: 4,
      profile: require('./../assets/images/default_profile.png'),
    },
    {
      userName: 'Snow',
      id: 5,
      profile: require('./../assets/images/default_profile.png'),
    },
    {
      userName: 'Jack',
      id: 6,
      profile: require('./../assets/images/default_profile.png'),
    },
    {
      userName: 'Xaviar',
      id: 7,
      profile: require('./../assets/images/default_profile.png'),
    },
    {
      userName: 'Emily',
      id: 8,
      profile: require('./../assets/images/default_profile.png'),
    },
    {
      userName: 'Angela',
      id: 9,
      profile: require('./../assets/images/default_profile.png'),
    },
  ];

  return (
    <View className="ml-5">
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={userStories}
        renderItem={({item}) => (
          <ProfileStory
            name={item.userName}
            profile={item.profile}></ProfileStory>
        )}></FlatList>
    </View>
  );
};
export default Stories;
