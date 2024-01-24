import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import React, { useCallback } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ArrowUpRightIcon } from 'react-native-heroicons/outline';
import { useNavigation } from "@react-navigation/native"

export default function WelcomeScreen() {

  const navigation = useNavigation();

  const onLayoutRootView = useCallback(async () => {
  }, []);

  return (
    <ImageBackground
      source={require("../../assets/images/bg.png")}
      style={{ flex: 1 }}
      resizeMode="cover" >

      <View onLayout={onLayoutRootView}
        className="flex-1 px-4"
        style={{
          width: wp(100),
        }}
      >
        <View
          className="items-center justify-center"
          style={{
            height: hp(80),
          }}>

          {/* logo */}
          <View
            className="items-center mb-6">
            <Image source={require("../../assets/images/matchuLogo.png")}
              style={{
                width: wp(50),
                height: hp(18),
                resizeMode: "contain",
              }} />
          </View>

          {/* text */}
          <View className="items-baseline">
            <Text className="tracking-normal text-white"
              style={{
                fontSize: wp(16),
                fontFamily: "OswaldBold",
                lineHeight: (80),
              }}>
              Connect with
            </Text>
            <Text className="tracking-normal mb-4 text-white"
              style={{
                fontSize: wp(16),
                fontFamily: "OswaldBold",
                lineHeight: (78),
              }}>
              someone who loves U.
            </Text>
            <Text className="leading-none tracking-wide text-yellow-500"
              style={{
                fontSize: wp(4),
                fontFamily: "OswaldMedium",
              }}>
              Your journey to a meaningful connection starts here.
            </Text>
          </View>
        </View>

        <View
          className="w-full items-center align-items: flex-end;"
          style={{
            height: hp(20),
          }}>
          <TouchableOpacity
            className="shadow-sm shadow-black bg-red-500 px-4 py-4 rounded-lg flex-row justify-center items-center w-[100%] drop-shadow-md"
            onPress={() => {
              navigation.navigate("HomeTabs");
            }}
          >
            <Text
              className="text-white font-bold mr-2"
              style={{
                fontSize: wp(4),
                fontFamily: "OswaldSemiBold",
              }}>
              Let's get started</Text>
            <ArrowUpRightIcon
              color={"white"}
              size={20}
              strokeWidth={2.5} />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}