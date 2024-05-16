import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, View, Image, Pressable, Modal, SafeAreaView, Dimensions, StatusBar, TouchableOpacity } from "react-native";
import { Border, Color, ColorDark, Padding } from "../../GlobalStyles";
import { useNavigation, useNavigationState, useTheme } from "@react-navigation/native";
import SettingsMenu from "./SettingsMenu";
import { toggleMove, toggleTab } from "../../store";

const NavbarTop = () => {

  const navigation = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const isDarkMode = useSelector(state => state.theme.isDarkMode);
  const { colors } = useTheme();

  const onBackPress = () => {
    if (navigation.canGoBack()) navigation.goBack();
    else return;
  };

  return (
    <SafeAreaView style={styles.navbartop}>
      <Pressable onPress={onBackPress} style={[styles.iconContainer, {backgroundColor: colors.primary}]}>
        <Image
          contentFit="cover"
          source={require("../../assets/vector.png")}
        />
      </Pressable>
      <Pressable onPress={() => { setIsModalVisible(true) }} style={[styles.iconContainer, {backgroundColor: colors.primary}]}>
        <Image
          contentFit="cover"
          source={require("../../assets/frame-45.png")}
        />
      </Pressable>
      <Modal
        visible={isModalVisible}
        transparent={true}
      >
        <TouchableOpacity onPressOut={() => setIsModalVisible(false)}
          style={{ flex: 1 }}>
          <SettingsMenu />
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: "row",
    borderRadius: Border.br_81xl,
    padding: Padding.p_8xs,
    height: 35,
    width: 35,
  },
  navbartop: {
    // width: "100%",
    alignSelf: "stretch",
    justifyContent: "space-between",
    flexDirection: "row",
    margin: 10,
  },
});

export default NavbarTop;