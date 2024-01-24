import React, { useCallback } from 'react';
import { View, Text, TouchableOpacity, Dimensions, Image, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Carousel from "react-native-snap-carousel";
import { datesData } from "../constants";
import DatesCard from "../component/DatesCard";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { user1 } from "../../assets/images";
import { BellIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';

const android = Platform.OS === "android";
const { width, height } = Dimensions.get("window");

export default function HomeScreen() {

  const navigation = useNavigation();

  const onLayoutRootView = useCallback(async () => {
  }, []);

  return (
    <SafeAreaView className="bg-white flex-1 justify-between"
      style={{
        paddingTop: android ? hp(2) : 0,
      }}
      onLayout={onLayoutRootView}
    >
      {/* header */}
      <View className="w-full flex-row justify-between items-center p-2">
        {/* image */}
        <View className="rounded-full items-center justify-center">
          <Image
            source={user1}
            className="rounded-full"
            style={{
              width: wp(11.5),
              height: hp(5.5),
              resizeMode: "cover",
            }}
          />
        </View>

        {/* Brand name */}
        <View>
          <Text className="text-xl font-semibold text-center text-red-500"
            style={{
              fontFamily: "OswaldBold",
            }}
          >
            matchU
          </Text>
        </View>

        {/* Bell Icon */}
        <View className="bg-black/40 p-2 rounded-full items-center justify-center">
          <TouchableOpacity>
            <BellIcon
              size={hp(3.5)}
              color="white"
              strokeWidth={1.5}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Carousal */}
      <View className="pb-4">

        <Carousel
          data={datesData}
          renderItem={({ item }) => (
            <DatesCard
              item={item}
              navigation={navigation}
            />
          )}
          firstItem={1}
          inactiveSlideScale={0.86}
          inactiveSlideOpacity={0.6}
          sliderWidth={width}
          itemWidth={width * 0.8}
          slideStyle={{ display: "flex", alignItems: "center" }}
        />
        <View className="mx-4 mt-3">
          <Text className="capitalize text-center tracking-wide text-yellow-500"
            style={{
              fontFamily: "OswaldMedium",
            }}
          >
            Ur Loved One ?
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
