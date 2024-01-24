import React, { useCallback } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Matches from "../component/Matches";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { chatData } from "../constants";
import { useNavigation } from "@react-navigation/native";

const android = Platform.OS === "android";

export default function ChatScreen() {
  const navigation = useNavigation();
  const onLayoutRootView = useCallback(async () => {
  }, []);

  return (
    <SafeAreaView
      style={{
        paddingTop: android ? hp(3) : 0,
      }}
      onLayout={onLayoutRootView}
    >
      <View className="px-4">
        <Text className="uppercase font-semibold text-neutral-500 tracking-wider">
          Matches
        </Text>
      </View>
      <Matches />

      {/* Search Bar */}
      <View className="mx-4 mt-6 flex-row items-center rounded-xl bg-neutral-200 px-3 py-2">
        <TextInput
          placeholder="Search"
          placeholderTextColor={"gray"}
          style={{
            fontSize: hp(2),
          }}
          className="flex-1 text-base mb-1 pl-1 tracking-widest"
        />

        <View>
          <MagnifyingGlassIcon size={hp(2.5)} color={"gray"} strokeWidth={3} />
        </View>
      </View>

      {/* Chat List */}
      <View className="px-4">
        <View className="border-b border-neutral-300 py-4">
          <Text className="uppercase font-semibold text-neutral-500 tracking-wider ">
            CHAT
          </Text>
        </View>

        <FlatList
          data={chatData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              className="w-full py-3 items-center flex-row border-b  border-neutral-300"
              onPress={() =>
                navigation.navigate("ChatDetailsScreen", {
                  chat: item.chat,
                  imgUrl: item.imgUrl,
                  name: item.name,
                  age: item.age,
                })
              }
            >
              {/* Avatar */}
              <View
                className="w-[17%] justify-center"
                style={{
                  width: wp(14),
                  height: hp(7),
                }}
              >
                <Image
                  source={item.imgUrl}
                  style={{
                    width: "90%",
                    height: "90%",
                  }}
                  className="rounded-full"
                />
              </View>

              {/* Information */}
              <View
                className="w-[82%]  pl-1 pt-1"
                style={{
                  height: hp(6),
                }}
              >
                <View className="flex-row justify-between items-center">
                  <View className="flex-row justify-center">
                    <View className="flex-row">
                      <Text className="text-base"
                        style={{
                          fontFamily: "OswaldSemiBold",
                        }}>
                        {item.name} {", "}
                      </Text>
                      <Text className="text-base mr-1"
                        style={{
                          fontFamily: "OswaldSemiBold",
                        }}>
                        {item.age}
                      </Text>
                    </View>
                    {item.isOnline && (
                      <View className=" justify-center items-center">
                        <View className="w-2 h-2 bg-[#F26322] rounded-full ml-1 justify-center items-center"></View>
                      </View>
                    )}
                  </View>
                  <Text className="text-sm tracking-tight">
                    {item.timeSent}
                  </Text>
                </View>
                <View>
                  <Text className="font-semibold text-xs text-neutral-500">
                    {item.lastMessage.length > 45
                      ? item.lastMessage.slice(0, 45) + "..."
                      : item.lastMessage}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
}