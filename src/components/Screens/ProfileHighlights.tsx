import React from 'react';
import {View, Text, Image, SafeAreaView, ScrollView} from 'react-native';

export default function ProfileHighlights() {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="justify-between mt-5 flex-row flex-wrap px-2 mx-5">
          <Image
            source={require('../../assets/images/default_post.png')}
            className="mb-2 rounded-lg w-48 h-32"
          />
          <Image
            source={require('../../assets/images/default_post.png')}
            className="mb-2 rounded-lg w-48 h-32"
          />
          <Image
            source={require('../../assets/images/default_post.png')}
            className="mb-2 rounded-lg w-48 h-32"
          />
          <Image
            source={require('../../assets/images/default_post.png')}
            className="mb-2 rounded-lg w-48 h-32"
          />
          <Image
            source={require('../../assets/images/default_post.png')}
            className="mb-2 rounded-lg w-48 h-32"
          />
          <Image
            source={require('../../assets/images/default_post.png')}
            className="mb-2 rounded-lg w-48 h-32"
          />
          <Image
            source={require('../../assets/images/default_post.png')}
            className="mb-2 rounded-lg w-48 h-32"
          />
          <Image
            source={require('../../assets/images/default_post.png')}
            className="mb-2 rounded-lg w-48 h-32"
          />
          <Image
            source={require('../../assets/images/default_post.png')}
            className="mb-2 rounded-lg w-48 h-32"
          />
          <Image
            source={require('../../assets/images/default_post.png')}
            className="mb-2 rounded-lg w-48 h-32"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
