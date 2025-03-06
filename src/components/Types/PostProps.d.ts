import {ImageSourcePropType} from 'react-native';

export interface PostProps {
  id: number;
  firstName: string;
  lastName: string;
  name?: string;
  location: string;
  image: ImageSourcePropType;
  likes: number;
  comments: number;
  }

export default PostProps;
