import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import IconManager from '../model/IconManager';
import SizeManager from '../model/SizeManager';

const ButtonContent = props => {
    return (
        <View style={[styles.container, {"marginTop":props.marginTop}]}>
            <Image 
                source={IconManager.getIcon(props.icon, props.active)} 
                style={styles.imageStyle}
            />
            <Text style={props.circle == true ? styles.textStyleCircle : styles.textStyle}>{props.label}</Text>
        </View>
    );
};

ButtonContent.propTypes = {
    icon : PropTypes.string,
    selectedIcon : PropTypes.string,
    active: PropTypes.bool,
    label :  PropTypes.string,
    width : PropTypes.number,
    circle : PropTypes.bool,
    marginTop: PropTypes.number,
};

ButtonContent.defaultProps = {
    active: false,
    marginTop: 0,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 1,
        // borderStyle: 'solid',
    },
    imageStyle: {
        width: 32,
        height: 32,
        marginBottom: -SizeManager.getHeight(7),
    },
    textStyle: {
        textAlign: 'center',
        color: '#FFFFFF',
    },
    textStyleCircle: {
        textAlign: 'center',
        color: '#000000',
    }
    
});

export default ButtonContent;
