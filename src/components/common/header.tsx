import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
const Header: React.FC = () => {
  return (
    <View className="flex-row items-center ml-7 mt-8 mr-4 justify-between">
      <Text className="text-2xl text-txt tracking-wider font-bold">
        Let's Explore
      </Text>
      <TouchableOpacity className="p-3 bg-message-bg rounded-full">
        <FontAwesomeIcon icon={faEnvelope} style={{color: '#898dae'}} />
        <View className="absolute items-center justify-center bg-red-500 h-2.5 w-2.5 rounded-full right-1.5 top-2">
          <Text className=" text-white text-6px">2</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default Header;
