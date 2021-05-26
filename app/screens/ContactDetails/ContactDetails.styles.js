import { StyleSheet } from 'react-native';

import { Fonts } from '../../themes/fonts';
import { Colors } from '../../themes/colors';

const Styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 16,
  },
  title: {
    fontFamily: Fonts.LatoRegular,
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.COBALT,
    marginBottom: 6,
  },
  inputContainer: {
    paddingVertical: 10,
  },
  spacer: {
    flexGrow: 1,
  },
  buttonContainer: {
    marginBottom: 10,
  },
  loading: {
    marginTop: 10,
  }
});

export { Styles };
