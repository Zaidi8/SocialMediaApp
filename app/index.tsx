import Header from '@/src/components/common/header';
import Stories from '@/src/components/stories';
import React from 'react';
import {FlatList, ImageSourcePropType, SafeAreaView, View} from 'react-native';

const App: React.FC = () => {
  return (
    <SafeAreaView className="flex-1">
      <Header />
      <Stories />
    </SafeAreaView>
  );
};

export default App;
