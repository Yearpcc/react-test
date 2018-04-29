import React from 'react';
import { StyleSheet, View, Dimensions, Image } from 'react-native';
import PropTypes from 'prop-types';
import IconManager from '../model/IconManager';
import SizeManager from '../model/SizeManager';

const ToolbarContent = props => {
    return (
        <View style={styles.toolbarContentStyle}>
            <Image
                source={IconManager.getIcon(IconManager.LOGO_HEADER, false)} 
                style={styles.toolbarLogoStyle}
            />
        </View>
    );
};

ToolbarContent.propTypes = {
};

ToolbarContent.defaultProps = {
};

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    toolbarContentStyle: {
        flex: 1,
        width: width,
        justifyContent: 'center',
        // borderWidth: 1,
        // borderStyle: 'solid',
    },
    toolbarLogoStyle: {
        width: SizeManager.getWidth(227),
        height: SizeManager.getHeight(50),
        marginLeft: SizeManager.getHeight(30),
    },
});

export default ToolbarContent;
