import React from 'react';
import { StyleSheet, Image, View, Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import ButtonContent from './ButtonContent';
import SizeManager from '../model/SizeManager';

const ButtonCircle = props => {
    return (
        <View style={{"marginRight":props.marginRight}}>
            <TouchableHighlight
                underlayColor="#FFECE2"
                onPress={props.onPress}
                style={styles.buttonStyle}
                >
                <View style={props.active == true ? styles.drawStyleSelected : styles.drawStyle}>
                    <ButtonContent 
                        marginTop={SizeManager.getWidth(-10)}
                        icon={props.icon} 
                        label={props.label}
                        selectedIcon={props.selectedIcon}
                        active={props.active}
                        circle={true}
                        >
                    </ButtonContent>
                </View>
            </TouchableHighlight>
        </View>
    );
};

ButtonCircle.propTypes = {
    icon : PropTypes.string,
    selectedIcon : PropTypes.string,
    active: PropTypes.bool,
    label :  PropTypes.string,
    onPress: PropTypes.func,
    marginRight : PropTypes.number,
};

ButtonCircle.defaultProps = {
    active: false,
    marginRight : 0,
};

const styles = StyleSheet.create({
    buttonStyle: {
        width: SizeManager.getWidth(167),
        height: SizeManager.getHeight(167),
        borderRadius: SizeManager.getHeight(167)/2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        marginTop: SizeManager.getHeight(-7),
        borderWidth: SizeManager.getHeight(7),
        borderStyle: 'solid',
        borderColor: '#E85B0B',
    },
    drawStyle: {

    },
    drawStyleSelected: {
        position: 'absolute',
        width: SizeManager.getWidth(146),
        height: SizeManager.getHeight(146),
        borderRadius: SizeManager.getHeight(146)/2,
        backgroundColor: '#FFA200',
    },
});

export default ButtonCircle;
