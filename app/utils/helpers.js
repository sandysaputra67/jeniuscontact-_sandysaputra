import { Platform } from 'react-native';

const keyExtractor = (item, index) => index.toString();

const returnNumberOnly = (string) => {
  const num = string.match(/\d+/g, '') || [];
  return num.join('');
};

const isIOS = Platform.OS === 'ios';
const isAndroid = Platform.OS === 'android';

export {
  keyExtractor,
  returnNumberOnly,
  isIOS,
  isAndroid,
};
