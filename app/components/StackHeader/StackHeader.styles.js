import { StyleSheet } from 'react-native';

import { Colors } from '../../themes/colors';
import { Fonts } from '../../themes/fonts';

const Styles = StyleSheet.create({
  container: {
    height: 45,
    backgroundColor: Colors.JENIUS_BLUE,
    flexDirection: 'row',
  },
  left: (isFunction) => ({
    height: '100%',
    width: isFunction ? '15%' : '5%',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  center: {
    height: '100%',
    width: '70%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  titleText: {
    fontFamily: Fonts.LatoRegular,
    fontSize: 20,
    color: Colors.WHITE,
  },
  backIcon: {
    height: 16.4,
    width: 17,
  },
  right: (isLeftButtonFunction) => ({
    height: '100%',
    width: '20%',
    justifyContent: 'center',
    alignItems: isLeftButtonFunction ? 'center' : 'flex-end',
  }),
  rightIcon: {
    height: 25,
    width: 25,
  },
});

export { Styles };
