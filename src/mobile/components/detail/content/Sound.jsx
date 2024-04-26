import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Padding, Color, FontFamily, FontSize, Border } from "../../../GlobalStyles";

const Sound = () => {
  return (
    <View style={[styles.Sound, styles.SoundSpaceBlock]}>
      <Text style={styles.soundTypo}>Sound</Text>
      <View
        style={[styles.aboutOfTitleOfPictureParent, styles.frameWrapperFlexBox]}
      >
        <Text style={[styles.aboutOfTitle, styles.soundTypo]}>
          About of title of picture
        </Text>
        <Text style={styles.aboutOfTitle1}>About of title of picture</Text>
        {/*
        //Play video/sound
        // Load the module

        import Video, {VideoRef} from 'react-native-video';

        // Within your render function, assuming you have a file called
        // "background.mp4" in your project. You can include multiple videos
        // on a single screen if you like.

        const VideoPlayer = () => {
        const videoRef = useRef<VideoRef>(null);
        const background = require('./background.mp4');

        return (
          <Video 
            // Can be a URL or a local file.
            source={background}
            // Store reference  
            ref={videoRef}
            // Callback when remote video is buffering                                      
            onBuffer={onBuffer}
            // Callback when video cannot be loaded              
            onError={onError}               
            style={styles.backgroundVideo}
          />
        )
        }

        // Later on in your styles..
        var styles = StyleSheet.create({
          backgroundVideo: {
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
          },
        });

        <View style={[styles.frameWrapper, styles.frameWrapperFlexBox]}>
          <View style={[styles.rectangleWrapper, styles.frameChildLayout]}>
            <View style={[styles.frameChild, styles.frameChildLayout]} />
          </View>
        </View>
        <View style={styles.parent}>
          <Text style={styles.textTypo}>1.29</Text>
          <Image
            style={styles.frameItem}
            contentFit="cover"
            source={require("../../../assets/group-14.png")}
          />
          <Text style={[styles.text1, styles.textTypo]}>3.00</Text>
        </View>
        */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  SoundSpaceBlock: {
    marginTop: 15,
    justifyContent: "center",
  },
  frameWrapperFlexBox: {
    paddingVertical: Padding.p_3xs,
    alignItems: "center",
    alignSelf: "stretch",
  },
  soundTypo: {
    textAlign: "left",
    color: Color.surfaceOnSurface,
    fontFamily: FontFamily.headline5Bold,
    fontWeight: "700",
    fontSize: FontSize.titleMediumBold_size,
  },
  frameChildLayout: {
    height: 5,
    borderRadius: Border.br_981xl,
  },
  textTypo: {
    fontSize: FontSize.labelMediumRegular_size,
    fontFamily: FontFamily.labelMediumRegular,
    textAlign: "left",
    color: Color.surfaceOnSurface,
  },
  aboutOfTitle: {
    alignSelf: "stretch",
  },
  aboutOfTitle1: {
    fontSize: FontSize.labelLargeBold_size,
    fontFamily: FontFamily.labelMediumRegular,
    textAlign: "left",
    color: Color.surfaceOnSurface,
    alignSelf: "stretch",
  },
  frameChild: {
    backgroundColor: Color.primaryPrimary1,
    width: 100,
  },
  rectangleWrapper: {
    backgroundColor: Color.surfaceOnSurfaceVarient,
    alignSelf: "stretch",
  },
  frameWrapper: {
    paddingHorizontal: 0,
  },
  frameItem: {
    height: 25,
    width: 25,
  },
  text1: {
    width: 25,
  },
  parent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
  },
  aboutOfTitleOfPictureParent: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.surfaceSurfaceContainerHigh,
    paddingHorizontal: Padding.p_6xl,
    marginTop: 15,
    justifyContent: "center",
  },
  Sound: {
    alignSelf: "stretch",
  },
});

export default Sound;