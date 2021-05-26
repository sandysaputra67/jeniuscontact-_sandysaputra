import React from 'react';
import {
  TextInput,
  View,
} from 'react-native';

import { Styles } from './NormalTextInput.styles';

const NormalTextInput = ({
  fontFamily,
  fontSize,
  color,
  textAlign,
  placeholder,
  placeHolderColor,
  onChangeText,
  value,
  keyboardType,
  renderUnderline,
  maxLength,
  autoCapitalize,
  onEndEditing
}) => {
  return (
    <View>
      <TextInput
        style={Styles.textInput(
          fontFamily,
          fontSize,
          color,
          textAlign
        )}
        placeholder={placeholder}
        placeholderTextColor={placeHolderColor}
        keyboardType={keyboardType}
        returnKeyType="done"
        maxLength={maxLength}
        onChangeText={onChangeText}
        value={value}
        autoCapitalize={autoCapitalize}
        onEndEditing={onEndEditing}
        multiline
        blurOnSubmit
      />
      {renderUnderline && <View style={Styles.underline} />}
    </View>
  );
};

export default NormalTextInput;
