import Header from '@/src/components/common/header';
import React from 'react';
import {ActivityIndicator, FlatList, SafeAreaView} from 'react-native';
import GetUserStories from '@/src/components/stories';
import {PostProps} from '@/src/components/Types/PostProps';
import ProfilePost from '@/src/components/userPost';
import usePagination from '@/src/components/Hooks/Pagination';

const userPosts: PostProps[] = [
  {
    id: 1,
    firstName: 'Joseph',
    lastName: 'Smith',
    location: 'New York',
    image: require('./../src/assets/images/default_post.png'),
    likes: 120,
    comments: 10,
  },
  {
    id: 2,
    firstName: 'Alan',
    lastName: 'Smith',
    location: 'New York',
    image: require('./../src/assets/images/default_post.png'),
    likes: 300,
    comments: 105,
  },
  {
    id: 3,
    firstName: 'White',
    lastName: 'Smith',
    location: 'New York',
    image: require('./../src/assets/images/default_post.png'),
    likes: 120,
    comments: 12,
  },
  {
    id: 4,
    firstName: 'John',
    lastName: 'Smith',
    location: 'New York',
    image: require('./../src/assets/images/default_post.png'),
    likes: 10,
    comments: 1,
  },
  {
    id: 5,
    firstName: 'Snow',
    lastName: 'Smith',
    location: 'New York',
    image: require('./../src/assets/images/default_post.png'),
    likes: 109,
    comments: 19,
  },
  {
    id: 6,
    firstName: 'Jack',
    lastName: 'Smith',
    location: 'New York',
    image: require('./../src/assets/images/default_post.png'),
    likes: 67,
    comments: 5,
  },
  {
    id: 7,
    firstName: 'Xaviar',
    lastName: 'Smith',
    location: 'New York',
    image: require('./../src/assets/images/default_post.png'),
    likes: 100,
    comments: 20,
  },
  {
    id: 8,
    firstName: 'Emily',
    lastName: 'Smith',
    location: 'New York',
    image: require('./../src/assets/images/default_post.png'),
    likes: 200,
    comments: 100,
  },
  {
    id: 9,
    firstName: 'Angela',
    lastName: 'Smith',
    location: 'New York',
    image: require('./../src/assets/images/default_post.png'),
    likes: 1000,
    comments: 120,
  },
];

const App: React.FC = () => {
  const {renderedData, isLoading, loadMore} = usePagination(userPosts, 4);
  const paginate = (data: PostProps[], page: number, pageSize: number) => {
    const startIndex = (page - 1) * pageSize;
    return data.slice(startIndex, startIndex + pageSize);
  };

  return (
    <SafeAreaView className="flex-1">
      <FlatList
        ListHeaderComponent={
          <>
            <Header />
            <GetUserStories />
          </>
        }
        data={renderedData}
        renderItem={({item}) => (
          <ProfilePost
            id={item.id}
            firstName={item.firstName}
            lastName={item.lastName}
            name={`${item.firstName} ${item.lastName}`}
            image={item.image}
            location={item.location}
            likes={item.likes}
            comments={item.comments}
          />
        )}
        keyExtractor={item => item.id.toString()}
        onEndReachedThreshold={0.5}
        onEndReached={loadMore}
        ListFooterComponent={
          isLoading ? <ActivityIndicator size="small" color="gray" /> : null
        }
      />
    </SafeAreaView>
  );
};

export default App;
