import React from 'react';

class IconManager {
    
    static ICON_SERVICE = "Service";
    static ICON_SEARCH = "Search";
    static ICON_LOCATION = "Location";
    static ICON_ETC = "Etc";

    static LOGO_HEADER = "LogoHeader";
    static LOGO_SPLASH_SCREEN = "LogoSplashScreen";
    
    static getIcon(icon, active){
        let icn;
        let iconSize = "x1";
        switch (icon) {
            case IconManager.ICON_SERVICE:
                icn = active
                ? require("../assets/Navigator_menu/"+iconSize+"/Service_selected.png")
                : require("../assets/Navigator_menu/"+iconSize+"/Service.png")
                break
            case IconManager.ICON_SEARCH:
                icn = active
                ? require("../assets/Navigator_menu/"+iconSize+"/Search_selected.png")
                : require("../assets/Navigator_menu/"+iconSize+"/Search.png")
                break
            case IconManager.ICON_LOCATION:
                icn = active
                ? require("../assets/Navigator_menu/"+iconSize+"/Location_selected.png")
                : require("../assets/Navigator_menu/"+iconSize+"/Location.png")
                break
            case IconManager.ICON_ETC:
                icn = active
                ? require("../assets/Navigator_menu/"+iconSize+"/Etc_selected.png")
                : require("../assets/Navigator_menu/"+iconSize+"/Etc.png")
                break
            case IconManager.LOGO_SPLASH_SCREEN:
                icn = require("../assets/Logo/Splash_page/Logo_2x.png")
                break
            case IconManager.LOGO_HEADER:
                icn = require("../assets/Logo/Header_page/Logo2_2x.png")
                break
        }
        return icn;
    }
}

export default IconManager;
