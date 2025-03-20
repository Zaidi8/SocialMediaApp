import React from 'react';
import {View, Image, ScrollView, SafeAreaView} from 'react-native';

export default function ProfileReels() {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="justify-between mt-5 flex-row flex-wrap px-2 mx-5">
          <Image
            source={require('../../assets/images/default_post.png')}
            className="mb-2 rounded-sm w-32 h-48"
          />
          <Image
            source={require('../../assets/images/default_post.png')}
            className="mb-2 rounded-sm w-32 h-48"
          />
          <Image
            source={require('../../assets/images/default_post.png')}
            className="mb-2 rounded-sm w-32 h-48"
          />
          <Image
            source={require('../../assets/images/default_post.png')}
            className="mb-2 rounded-sm w-32 h-48"
          />
          <Image
            source={require('../../assets/images/default_post.png')}
            className="mb-2 rounded-sm w-32 h-48"
          />
          <Image
            source={require('../../assets/images/default_post.png')}
            className="mb-2 rounded-sm w-32 h-48"
          />
          <Image
            source={require('../../assets/images/default_post.png')}
            className="mb-2 rounded-sm w-32 h-48"
          />
          <Image
            source={require('../../assets/images/default_post.png')}
            className="mb-2 rounded-sm w-32 h-48"
          />
          <Image
            source={require('../../assets/images/default_post.png')}
            className="mb-2 rounded-sm w-32 h-48"
          />
          <Image
            source={require('../../assets/images/default_post.png')}
            className="mb-2 rounded-sm w-32 h-48"
          />
          <Image
            source={require('../../assets/images/default_post.png')}
            className="mb-2 rounded-sm w-32 h-48"
          />
          <Image
            source={require('../../assets/images/default_post.png')}
            className="mb-2 rounded-sm w-32 h-48"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
