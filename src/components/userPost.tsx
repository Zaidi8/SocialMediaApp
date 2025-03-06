import React from 'react';
import {View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import UserProfileImage from './userProfileImage';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faComments, faEllipsis} from '@fortawesome/free-solid-svg-icons';
import {faHeart} from '@fortawesome/free-regular-svg-icons';
import {PostProps} from './Types/PostProps';

const ProfilePost: React.FC<PostProps> = ({
  name,
  location,
  image,
  likes,
  comments,
}) => {
  return (
    <SafeAreaView className="mx-4 border-b border-gray-200">
      <View className="bg-white p-4 rounded-lg mb-4">
        {/* User Info Section */}
        <View className="flex-row justify-between mr-2 items-center">
          <View className="flex-row items-center mb-2">
            <UserProfileImage
              profile={require('./../assets/images/default_profile.png')}
              dimension={40}
            />
            <View className="ml-3">
              <Text className="text-base font-semibold">{name}</Text>
              <Text className="text-gray-500 text-xs">{location}</Text>
            </View>
          </View>
          <TouchableOpacity className="items-center">
            <FontAwesomeIcon
              icon={faEllipsis}
              size={20}
              style={{color: 'grey'}}
            />
          </TouchableOpacity>
        </View>

        {/* Post Image */}
        <View className=" w-full h-60 rounded-lg mb-2">
          <Image
            source={image}
            className="w-full h-60 rounded-lg mb-2"
            resizeMode="cover"
          />
        </View>

        {/* Like & Comment Section */}
        <View className="flex-row justify-between items-center mt-2">
          <View className="flex-row items-center">
            <FontAwesomeIcon icon={faHeart} style={{color: 'red'}} />
            <Text className="ml-1 text-sm">{likes} Likes</Text>
          </View>
          <View className="flex-row items-center">
            <FontAwesomeIcon icon={faComments} style={{color: 'grey'}} />
            <Text className="ml-1 text-sm">{comments} Comments</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfilePost;
