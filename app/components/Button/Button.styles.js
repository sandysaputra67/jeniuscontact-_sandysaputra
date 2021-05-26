import { StyleSheet } from 'react-native';

import { Colors } from '../../themes/colors';
import { Fonts } from '../../themes/fonts';

const Styles = StyleSheet.create({
  container: (height, width, disabled, loading) => ({
    height,
    width,
    borderRadius: 4,
    backgroundColor: disabled || loading ? Colors.VERY_LIGHT_GREY : Colors.COBALT,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  text: {
    fontFamily: Fonts.LatoRegular,
    fontSize: 14,
    color: Colors.WHITE,
  },
});

export { Styles };
