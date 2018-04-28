import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Dimensions
} from 'react-native';
import Button from './Button';
import PropTypes from 'prop-types';
import IconManager from '../model/IconManager';

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
                {/* Background */}
                <View style={styles.viewBackground}>
                </View>
                <View style={styles.buttonBar}>
                    <Button 
                        label="Service"
                        icon={IconManager.ICON_SERVICE}
                        active = {this.state.activeService}
                        onPress={() => this.handlePress("service")}/>
                    <Button 
                        label="Search"
                        circle = {true}
                        icon={IconManager.ICON_SEARCH}
                        active = {this.state.activeService}
                        onPress={() => this.handlePress("search")}/>
                    <Button 
                        label="Location"
                        circle = {true}
                        icon={IconManager.ICON_LOCATION}
                        active = {this.state.activeService}
                        onPress={() => this.handlePress("location")}/>
                    <Button 
                        label="Etc"
                        icon={IconManager.ICON_ETC}
                        active = {this.state.activeService}
                        onPress={() => this.handlePress("etc")}/>
                </View>
            </View>
        );
    }

}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    
    container: {
        width: width,
        height: 100,
    },
    buttonBar: {
        position : 'absolute',
        bottom: 0,
        width: width,
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
    },
    viewBackground: {
        position : 'absolute',
        bottom: 0,
        width: width,
        height: 80,
        backgroundColor: "#E85B0B",
    },
    
});

NavButton.propTypes = {
    onStatusChanged: PropTypes.func
};