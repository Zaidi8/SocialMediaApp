import React from 'react';
import {Image, ImageSourcePropType, View} from 'react-native';

interface profile {
  profile: ImageSourcePropType;
  dimension: number;
}

const UserProfileImage: React.FC<profile> = ({profile, dimension}) => {
  return (
    <View className="">
      <Image
        style={{borderRadius: dimension, height: dimension, width: dimension}}
        className="border-border p-0.5 border"
        source={profile}></Image>
    </View>
  );
};

export default UserProfileImage;
