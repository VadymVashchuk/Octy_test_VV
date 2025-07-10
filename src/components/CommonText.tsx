import React from 'react';
import { Text, StyleSheet, TextStyle, StyleProp, TextProps } from 'react-native';

import COLORS from '@style/colors';

type CommonTextProps = {
  children: React.ReactNode;
  size?: number;
  alignCenter?: boolean;
  bold?: boolean;
  marginBottom?: number;
  marginTop?: number;
  color?: string;
  style?: StyleProp<TextStyle>;
} & TextProps;

const CommonText: React.FC<CommonTextProps> = ({
  children,
  size,
  alignCenter,
  bold,
  marginBottom,
  marginTop,
  color,
  style,
}) => {
  return (
    <Text
      suppressHighlighting
      style={[
        styles.text,
        alignCenter && styles.alignCenter,
        bold && styles.bold,
        size !== undefined && { fontSize: size },
        marginBottom !== undefined && { marginBottom },
        marginTop !== undefined && { marginTop },
        color && { color: color },
        style,
      ]}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: COLORS.darkText,
    fontSize: 14,
    fontFamily: 'RobotoSlab-Regular',
  },
  bold: {
    fontFamily: 'RobotoSlab-Bold',
  },
  alignCenter: {
    textAlign: 'center',
  },
});

export default CommonText;
