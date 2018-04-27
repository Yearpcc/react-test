import React from 'react';
import { StyleSheet, Image, TouchableOpacity, View, Text } from 'react-native';
import PropTypes from 'prop-types';

const getIcon = (label, active) => {
    let icn;
    let iconSize = "x3";
    switch (label) {
        case 'Service':
            icn = active
            ? require("../assets/Navigator_menu/"+iconSize+"/Service_selected.png")
            : require("../assets/Navigator_menu/"+iconSize+"/Service.png")
            break
        case 'Search':
            icn = active
            ? require("../assets/Navigator_menu/"+iconSize+"/Service_selected.png")
            : require("../assets/Navigator_menu/"+iconSize+"/Service.png")
            break
        case 'Location':
            icn = active
            ? require("../assets/Navigator_menu/"+iconSize+"/Service_selected.png")
            : require("../assets/Navigator_menu/"+iconSize+"/Service.png")
            break
        case 'Etc':
            icn = active
            ? require("../assets/Navigator_menu/"+iconSize+"/Service_selected.png")
            : require("../assets/Navigator_menu/"+iconSize+"/Service.png")
            break
    }
    return icn;
}

const Button = props => {
    return (
        <View>
            <TouchableOpacity
                onPress={props.onPress}
                style={styles.buttonStyle}
            >
                <Image source={getIcon(props.label, props.active)} />
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
        alignItems: 'center'
    },
    buttonStyle: {
        flex: 1,
        width: 120,
        height: 54,
        justifyContent: 'center',
        alignItems: 'center'
    }
    
});

export default Button;
