import { StyleSheet } from 'react-native';

import { Fonts } from '../../themes/fonts';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: Fonts.LatoRegular,
    fontSize: 18,
  },
});

export { Styles };
