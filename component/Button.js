import React from 'react';
import { StyleSheet, Image, TouchableOpacity, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import ButtonContent from './ButtonContent';
import SizeManager from '../model/SizeManager';

const Button = props => {
    return (
        <View style={{"marginRight":props.marginRight}}>
            <TouchableOpacity
                onPress={props.onPress}
                style={styles.buttonStyle}
                >
                <ButtonContent 
                    icon={props.icon} 
                    label={props.label}
                    selectedIcon={props.selectedIcon}
                    active={props.active}
                    circle={false}
                    >
                </ButtonContent>
            </TouchableOpacity>
        </View>
    );
};

Button.propTypes = {
    icon : PropTypes.string,
    selectedIcon : PropTypes.string,
    active: PropTypes.bool,
    label :  PropTypes.string,
    onPress: PropTypes.func,
    marginRight : PropTypes.number,
};

Button.defaultProps = {
    active: false, 
    marginRight: 0,
};

const styles = StyleSheet.create({
    buttonStyle: {
        width: SizeManager.getWidth(120),
        height: SizeManager.getHeight(116),
        marginTop: SizeManager.getHeight(46),
        justifyContent: 'center',
        alignItems: 'center',
    },    
});

export default Button;
