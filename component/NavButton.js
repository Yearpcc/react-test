import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Dimensions
} from 'react-native';
import Button from './Button';
import PropTypes from 'prop-types';

export default class NavButton extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex : 0,
            activeService : false,
            activeSearch : false,
            activeLocation : false,
            activeEtc : false,
        }
    }

    handlePress = (str) => {
        switch (str) {
            case 'service':
                this.state.activeService = true;
                break;
            case 'search':
                this.state.activeSearch = true;
                break;
            case 'location':
                this.state.activeLocation = true;
                break;
            case 'etc':
                this.state.activeEtc = true;
                break;
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Button 
                    label="Service"
                    active = {this.state.activeService}
                    onPress={() => this.handlePress("service")}/>
            </View>
        );
    }

}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    
    container: {
        width: width,
        height: 55,
        flexDirection: 'row',
        backgroundColor: '#E85B0B',
        alignItems: 'center',
        justifyContent: 'center',
    },

});

NavButton.propTypes = {
    onStatusChanged: PropTypes.func
};