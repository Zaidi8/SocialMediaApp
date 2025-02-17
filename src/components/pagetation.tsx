import React, {useState} from 'react';
import {ImageSourcePropType} from 'react-native';

const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
const [userStoriesRenderedData, setUserStoriesRenderedData] = useState([]);
const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

interface userStoryProps {
  userName: string;
  id: number;
  profile: ImageSourcePropType;
}

const userStories: userStoryProps[] = [
  {
    userName: 'Joseph',
    id: 1,
    profile: require('./../assets/images/default_profile.png'),
  },
  {
    userName: 'Alan',
    id: 2,
    profile: require('./../assets/images/default_profile.png'),
  },
  {
    userName: 'White',
    id: 3,
    profile: require('./../assets/images/default_profile.png'),
  },
  {
    userName: 'John',
    id: 4,
    profile: require('./../assets/images/default_profile.png'),
  },
  {
    userName: 'Snow',
    id: 5,
    profile: require('./../assets/images/default_profile.png'),
  },
  {
    userName: 'Jack',
    id: 6,
    profile: require('./../assets/images/default_profile.png'),
  },
  {
    userName: 'Xaviar',
    id: 7,
    profile: require('./../assets/images/default_profile.png'),
  },
  {
    userName: 'Emily',
    id: 8,
    profile: require('./../assets/images/default_profile.png'),
  },
  {
    userName: 'Angela',
    id: 9,
    profile: require('./../assets/images/default_profile.png'),
  },
];
