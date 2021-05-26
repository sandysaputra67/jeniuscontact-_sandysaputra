import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import { Styles } from './StackHeader.styles';
import { Images } from '../../themes/images';
import { isFunction } from 'lodash';

const StackHeader = ({
  title,
  rightIcon,
  onPressLeft,
  onPressRight,
}) => (
  <View style={Styles.container}>
    <View style={Styles.left(isFunction(onPressLeft))}>
      {
        isFunction(onPressLeft) && (
          <TouchableOpacity onPress={onPressLeft}>
            <Image
              source={Images.WHITE_ARROW_BACK}
              style={Styles.backIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )
      }
    </View>
    <View style={Styles.center}>
      <Text
        style={Styles.titleText}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {title}
      </Text>
    </View>
    {
      rightIcon && (
        <View style={Styles.right(isFunction(onPressLeft))}>
          <TouchableOpacity onPress={onPressRight}>
            <Image
              source={rightIcon}
              style={Styles.rightIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      )
    }
  </View>
);

export default StackHeader;
