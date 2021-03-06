import { StyleSheet } from 'react-native';

import { Fonts } from '../../themes/fonts';
import { Colors } from '../../themes/colors';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontFamily: Fonts.LatoRegular,
    fontSize: 18,
  },
  loading: {
    marginTop: 16,
  },
  separator: {
    height: 1,
    backgroundColor: Colors.GRAY_32,
    marginHorizontal: 16,
  }
});

export { Styles };
