import React from 'react';
import {View, Text, Image, SafeAreaView} from 'react-native';
import TopTabBar from '@/src/components/Navigation/TopTabBar';
const Profile: React.FC = () => {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-row justify-center mt-10">
        <View className="border p-1 rounded-full border-blue-700">
          <Image
            source={require('../../../assets/images/default_profile.png')}
            className="w-32 h-32 rounded-full"
          />
        </View>
      </View>
      <View className="items-center justify-center mt-2">
        <Text className="text-2xl font-MontserratBold ">John Doe</Text>
      </View>
      <View
        className="flex-row py-2 items-center border-b border-gray-300 pb-4 justify-between mx-10
       mt-2">
        <View className="items-center">
          <Text className="text-black px-8 text-2xl border-r border-gray-400 font-MontserratBold">
            150
          </Text>
          <Text className="text-gray-500 font-Montserrat">Following</Text>
        </View>
        <View className="items-center">
          <Text className="text-black px-8 text-2xl border-r border-gray-400 font-MontserratBold">
            30M
          </Text>
          <Text className="text-gray-500 font-Montserrat">Followers</Text>
        </View>
        <View className="items-center">
          <Text className="text-black px-8 text-2xl font-MontserratBold">
            100
          </Text>
          <Text className="text-gray-500 font-Montserrat">Posts</Text>
        </View>
      </View>
      <View className="flex-1">
        <TopTabBar />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
