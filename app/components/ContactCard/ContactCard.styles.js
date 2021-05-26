import { StyleSheet } from 'react-native';

import { Fonts } from '../../themes/fonts';
import { Colors } from '../../themes/colors';

const Styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  contactName: {
    fontFamily: Fonts.LatoRegular,
    fontSize: 12,
    color: Colors.BLACK,
  },
});

export { Styles };
