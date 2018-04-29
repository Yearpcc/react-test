import React from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    PixelRatio,
} from 'react-native';

class SizeManager {
    
    static DESIGN_WIDTH = 750;
    static DESIGN_HEIGH = 1334;
    
    static getWidth(w){
        let $w;
        if(width > height){ //Landscape
            let $w = PixelRatio.getPixelSizeForLayoutSize(width);
            w = PixelRatio.roundToNearestPixel($w * w / SizeManager.DESIGN_HEIGH / PixelRatio.get());
            return w;
        }
        //Portrait
        $w = PixelRatio.getPixelSizeForLayoutSize(width);
        w = PixelRatio.roundToNearestPixel($w * w / SizeManager.DESIGN_WIDTH / PixelRatio.get());
        return w;
    }
    static getHeight(h){
        let $h;
        if(width > height){ //Landscape
            $h = PixelRatio.getPixelSizeForLayoutSize(height);
            h = PixelRatio.roundToNearestPixel($h * h / SizeManager.DESIGN_WIDTH / PixelRatio.get());
            return h;
        }
        //Portrait
        $h = PixelRatio.getPixelSizeForLayoutSize(height);
        h = PixelRatio.roundToNearestPixel($h * h / SizeManager.DESIGN_HEIGH / PixelRatio.get());
        return h;
    }
}

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

export default SizeManager;
