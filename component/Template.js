import React from 'react';
import { StyleSheet, Image, TouchableOpacity, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import IconManager from '../model/IconManager';
import SizeManager from '../model/SizeManager';
import NavButton from './NavButton';
import Toolbar from './Toolbar';

const Template = props => {
    return (
        <View style={styles.templateStyle}>
            <Toolbar></Toolbar>
            <NavButton></NavButton>
        </View>
    );
};

Template.propTypes = {
    active: PropTypes.bool,
};

Template.defaultProps = {
    active: false,
};

const styles = StyleSheet.create({
    templateStyle: {
        flex: 1,
    },
});

export default Template;
