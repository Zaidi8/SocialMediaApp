import React from 'react';
import {View, Text, ImageSourcePropType} from 'react-native';
import UserProfileImage from './userProfileImage';
import {UserStoryProps} from './Types/StoryProps';
import useResponsiveScale from './Scalling';
const ProfileStory: React.FC<UserStoryProps> = ({userName, profile}) => {
  const {verticalScale, horizontalScale} = useResponsiveScale();
  return (
    <View
      style={{
        marginTop: verticalScale(10),
        marginHorizontal: horizontalScale(7),
        alignItems: 'center',
      }}>
      <UserProfileImage profile={profile} dimension={72} />
      <Text className="color-txt mt-4 text-center text-sm font-medium tracking-wide">
        {userName}
      </Text>
    </View>
  );
};

export default ProfileStory;
