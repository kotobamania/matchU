import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import React, { useCallback } from 'react';
import { datesData } from '../constants';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Matches() {

  const onLayoutRootView = useCallback(async () => {
  }, []);

  return (
    <View
      className="mt-4"
      onLayout={onLayoutRootView}
    >
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="space-x-4"
        contentContainerStyle={{
          paddingLeft: hp(2),
          paddingRight: hp(2),
        }}
      >
        {datesData?.map((matches, index) => {
          return (
            <TouchableOpacity
              key={index}
              className="flex items-center space-y-1"
            >
              <View className="rounded-full">
                <Image
                  source={matches.imgUrl}
                  style={{
                    width: wp(12.5),
                    height: hp(6),
                  }}
                  className="rounded-full"
                />
              </View>
              <Text
                className="text-neutral-800"
                style={{
                  fontSize: hp(1.6),
                  fontFamily: "OswaldSemiBold",
                }}
              >
                {matches.name}
              </Text>
              <Text
                className="text-neutral-800 leading-none"
                style={{
                  fontSize: hp(1.6),
                  fontFamily: "OswaldSemiBold",
                }}
              >
                {matches.age}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  )
}