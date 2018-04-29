import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
} from 'react-native';
import Button from './Button';
import ButtonCircle from './ButtonCircle';
import PropTypes from 'prop-types';
import IconManager from '../model/IconManager';
import SizeManager from '../model/SizeManager';

export default class NavButton extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            activeService : !props || props.activeService == null ? false : props.activeService == true,
            activeSearch : !props || props.activeSearch == null ? false : props.activeSearch == true,
            activeLocation : !props || props.activeLocation == null ? false : props.activeLocation == true,
            activeEtc : !props || props.activeEtc == null ? false : props.activeEtc == true,
            gap : SizeManager.getWidth(20),
        }
    }

    handlePress = (str) => {
        let arr = ["activeService", "activeSearch", "activeLocation", "activeEtc"];
        let obj = {};
        for (let s of arr) {
            obj[s] = s == str;
        }
        this.setState(obj);
        if(this.props.onStatusChanged){
            this.props.onStatusChanged();
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
                        marginRight={this.state.gap}
                        label="Services"
                        icon={IconManager.ICON_SERVICE}
                        active = {this.state.activeService}
                        onPress={() => this.handlePress("activeService")}/>
                    <ButtonCircle 
                    marginRight={this.state.gap}
                        label="Search"
                        icon={IconManager.ICON_SEARCH}
                        active = {this.state.activeSearch}
                        onPress={() => this.handlePress("activeSearch")}/>
                    <ButtonCircle 
                        marginRight={this.state.gap}
                        label="Location"
                        icon={IconManager.ICON_LOCATION}
                        active = {this.state.activeLocation}
                        onPress={() => this.handlePress("activeLocation")}/>
                    <Button 
                        marginRight={this.state.gap}
                        label="Etc"
                        icon={IconManager.ICON_ETC}
                        active = {this.state.activeEtc}
                        onPress={() => this.handlePress("activeEtc")}/>
                </View>
            </View>
        );
    }

}

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    
    container: {
        width: width,
        height: SizeManager.getHeight(160),
        /* for now */
        position: 'absolute',
        bottom: 0,
    },
    buttonBar: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    viewBackground: {
        position : 'absolute',
        bottom: 0,
        width: width,
        height: SizeManager.getHeight(116),
        backgroundColor: "#E85B0B",
    },
});

NavButton.propTypes = {
    onStatusChanged: PropTypes.func
};