import React from 'react';
import PropTypes from 'prop-types';

import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { ToggleIcon } from './';
import { checkSource } from './utils';

const backgroundColor = 'transparent';

const styles = StyleSheet.create({
  container: {
    height: 35,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    backgroundColor,
    paddingLeft: 10,
    paddingRight: 35,
    fontSize: 16,
  },
  logo: {
    marginLeft: 5,
    height: 25,
    width: 25,
  },
});

const TopBar = (props) => {
  const {
    logo, more, title, theme, onMorePress, onLogoPress,
  } = props;
  return (
    <View style={styles.row}>
      {logo && (
        <TouchableOpacity onPress={() => onLogoPress()}>
          <Image style={styles.logo} resizeMode="contain" {...checkSource(logo)} />
        </TouchableOpacity>
      )}
      <Text style={[styles.title, { color: theme.title }]} numberOfLines={1} ellipsizeMode="tail">
        {title}
      </Text>
      {more && (
        <ToggleIcon
          style={styles.more}
          onPress={() => onMorePress()}
          paddingRight
          iconOff="more-horiz"
          iconOn="more-horiz"
          theme={theme.more}
          size={25}
        />
      )}
    </View>
  );
};

TopBar.propTypes = {
  title: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  more: PropTypes.bool.isRequired,
  onMorePress: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  onLogoPress: PropTypes.func.isRequired,
};

export { TopBar };
