import React from 'react';
import {Image, ImageSourcePropType, View} from 'react-native';
import useResponsiveScale from './Scalling';
interface profile {
  profile: ImageSourcePropType;
  dimension: number;
}

const UserProfileImage: React.FC<profile> = ({profile, dimension}) => {
  const {scaleFontSize} = useResponsiveScale();
  return (
    <View>
      <Image
        style={{
          borderRadius: scaleFontSize(dimension),
          height: scaleFontSize(dimension),
          width: scaleFontSize(dimension),
        }}
        className="border-border p-0.5 border"
        source={profile}></Image>
    </View>
  );
};

export default UserProfileImage;
