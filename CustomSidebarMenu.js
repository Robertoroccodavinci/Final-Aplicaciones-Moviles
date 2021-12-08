// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

/* _GOOGLE_URL = "https://www.googleapis.com/oauth2/v3/userinfo?access_token=" */

const CustomSidebarMenu = (props) => {
  const BASE_PATH =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/';
  const proileImage = 'react_logo.png';

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/*Top Large Image */}
      <Image
        source={{ uri: BASE_PATH + proileImage }}
        style={styles.sideMenuProfileIcon}
      />
    <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
{/*             <DrawerItem
            label="Visit Us"
            onPress={() => Linking.openURL('https://aboutreact.com/')}
            />
        <View style={styles.customItem}>
            <Image
            source={{ uri: BASE_PATH + 'star_filled.png' }}
            style={styles.iconStyle}
            />        
            <Text
                onPress={() => {
                Linking.openURL('https://aboutreact.com/');
                }}>
                Rate Us
            </Text>
            </View> */}
        <DrawerItem
        label="Logout"
        onPress={() => Linking.openURL('https://aboutreact.com/')}
        />
    </DrawerContentScrollView>
        <Text style={{ fontSize: 16, textAlign: 'center', color: 'grey' }}>
            Proyecto Final App Mobiles
        </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CustomSidebarMenu;
