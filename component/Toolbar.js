import React from 'react';
import { StyleSheet, View, Dimensions, } from 'react-native';
import PropTypes from 'prop-types';
import IconManager from '../model/IconManager';
import SizeManager from '../model/SizeManager';
import ToolbarContent from './ToolbarContent';

const Toolbar = props => {
    return (
        <View style={styles.toolbarStyle}>
            <View style={styles.statusBarStyle}></View>
            <View style={styles.toolbarContentStyle}>
                <ToolbarContent></ToolbarContent>
            </View>
        </View>
    );
};

Toolbar.propTypes = {
};

Toolbar.defaultProps = {
};

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    toolbarStyle: {
        flex: 1,
        height: SizeManager.getHeight(120)+24,
        position: 'absolute',
        top: 0,
        flexDirection: 'column',
        backgroundColor: "#E85B0B"
    },
    statusBarStyle: {
        width: width,
        height: 24,
        backgroundColor: "#ED9239",
    },
    toolbarContentStyle: {
        width: width,
        height: SizeManager.getHeight(120),
    },
});

export default Toolbar;
