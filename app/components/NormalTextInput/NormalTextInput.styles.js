import { StyleSheet } from 'react-native';

import { Colors } from '../../themes/colors';
import { isAndroid } from '../../utils/helpers';

const Styles = StyleSheet.create({
  textInput: (
    fontFamily,
    fontSize,
    color,
    textAlign
  ) => ({
    fontFamily,
    fontSize,
    color,
    textAlign,
    paddingVertical: 0,
    fontWeight: isAndroid ? 'normal' : null,
  }),
  underline: {
    height: 1,
    backgroundColor: Colors.VERY_LIGHT_GREY,
    marginTop: isAndroid ? -3 : 0,
  },
});

export { Styles };
