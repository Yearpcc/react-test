import React from 'react';
import { StyleSheet, Image, TouchableOpacity, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import IconManager from '../model/IconManager';

const Button = props => {
    return (
        <View>
            <TouchableOpacity
                onPress={props.onPress}
                style={styles.buttonStyle}
            >
                <Image source={IconManager.getIcon(props.icon, props.active)} />
            </TouchableOpacity>
            <Text>{props.label}</Text>
        </View>
    );
};

Button.propTypes = {
    icon : PropTypes.string,
    selectedIcon : PropTypes.string,
    active: PropTypes.bool,
    label :  PropTypes.string,
    circle : PropTypes.bool,
    onPress: PropTypes.func
};

Button.defaultProps = {
    active: false
};

const styles = StyleSheet.create({
    
    buttonCircleStyle: {
        flex: 1,
        width: 160,
        height: 54,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonStyle: {
        flex: 1,
        width: 120,
        height: 54,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderStyle: 'solid',
        // backgroundColor : '#00FF00',
    }
    
});

export default Button;
