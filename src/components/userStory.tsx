import React from 'react';
import {View, Text, ImageSourcePropType} from 'react-native';
import UserProfileImage from './userProfileImage';
import {UserStoryProps} from './Types/StoryProps';

const ProfileStory: React.FC<UserStoryProps> = ({userName, profile}) => {
  return (
    <View className="mt-5 mx-2.5 items-center">
      <UserProfileImage profile={profile} dimension={78} />
      <Text className="color-txt mt-4 text-center text-sm font-medium tracking-wide">
        {userName}
      </Text>
    </View>
  );
};

export default ProfileStory;
