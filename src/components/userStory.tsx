import React from 'react';
import {View, Text, ImageSourcePropType} from 'react-native';
import UserProfileImage from './userProfileImage';

interface StoryProps {
  name: string;
  profile: ImageSourcePropType;
}

const ProfileStory: React.FC<StoryProps> = ({name, profile}) => {
  return (
    <View className="mt-5 mx-2.5 items-center">
      <UserProfileImage profile={profile} dimension={64} />
      <Text className="color-txt mt-4 text-center text-sm font-medium tracking-wide">
        {name}
      </Text>
    </View>
  );
};

export default ProfileStory;
