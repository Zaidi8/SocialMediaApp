import React from 'react';
import {FlatList, View, ActivityIndicator} from 'react-native';
import ProfileStory from './userStory';
import {UserStoryProps} from './Types/StoryProps';
import usePagination from './Hooks/Pagination';

const userStories: UserStoryProps[] = [
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

const GetUserStories: React.FC = () => {
  const {renderedData, isLoading, loadMore} = usePagination(userStories, 4);
  return (
    <View className="mx-4">
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={renderedData}
        renderItem={({item}) => (
          <ProfileStory
            id={item.id}
            userName={item.userName}
            profile={item.profile}
          />
        )}
        keyExtractor={item => item.id.toString()}
        onEndReachedThreshold={0.5}
        onEndReached={loadMore}
        ListFooterComponent={
          isLoading ? <ActivityIndicator size="small" color="gray" /> : null
        }
      />
    </View>
  );
};

export default GetUserStories;
