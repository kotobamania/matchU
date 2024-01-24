import { View, Text, Platform, TouchableOpacity, FlatList, TextInput, Image } from 'react-native';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon, FaceSmileIcon, PaperAirplaneIcon, PhotoIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';

const android = Platform.OS === "android";

export default function ChatDetailsScreen({ route }) {
  const navigation = useNavigation();
  const { chat, imgUrl, name, age } = route.params;
  console.log(route.params.chat);
  return (
    <SafeAreaView className="justify-center items-center relative bg-white"
      style={{
        paddingTop: android ? hp(4) : 0,
      }}
    >
      <View className="justify-start items-start flex-column h-full w-full" >
        {/* header */}
        <TouchableOpacity
          className="w-2/3 flex-row items-center pb-4 px-4"
          onPress={() => {
            console.log("Pressed");
            navigation.navigate("Chat");
          }}
        >
          <ChevronLeftIcon size={hp(2.5)} color={"black"} strokeWidth={2} />

          {/* Data */}
          <View className="border-2 rounded-full border-red-400 mr-2 ml-3">
            <Image source={imgUrl}
              className="rounded-full"
              style={{
                width: wp(9.5),
                height: hp(4.5),
              }}
            />
          </View>

          <View className="justify-center items-start">
            <Text className="font-bold text-base">{name}{", "}{age}</Text>
            <Text className="text-xs text-neutral-400">U matched</Text>
          </View>
        </TouchableOpacity>


        <View className="w-full p-4 h-full bg-gray-100">
          <FlatList
            data={route.params.chat ? route.params.chat.slice().reverse() : []}
            
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{
              paddingBottom: hp(15),
            }}

            renderItem={({ item }) =>
              <View style={{
                flexDirection: item.sender === "me" ? "row-reverse" : "row",
                padding: 10,
                paddingVertical: item.sender == "me" ? 13 : 3,
              }}>
                <View style={{
                  width: "auto",
                  maxWidth: "70%",
                }}>
                  <View style={{
                    backgroundColor: item.sender == "me" ? "#FFE4E1" : "#E53E3E",
                    padding: 10,
                    borderRadius: 8,
                  }}>
                    <Text className="text-white text-base leading-5"
                     style={{ color: item.sender === "me" ? "black" : "white" }}>
                      {" "}
                      {item.message}
                    </Text>
                  </View>

                  {item.sender === "me" && (
                    <Text className="text-xs font-semibold text-neutral-400 text-right">
                      {"Read "}
                      {item.timestamp}
                    </Text>
                  )}
                </View>
              </View>
            }
          />
        </View>
      </View>

      {/* bottom text input & icon */}
      <View className="absolute flex-row justify-center items-center w-full px-4 pb-4 pt-2 bg-white bottom-0"
        style={{
          elevation: 10,
          shadowColor: 'black',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.4,
          shadowRadius: 2,
        }}
      >
        <View className="flex-row justify-between items-center rounded-lg bg-neutral-200 px-3 py-3 w-[90%]">
          <TextInput
            placeholder='Write Ur message here'
            placeholderTextColor={"gray"}
            style={{
              fontSize: hp(1.7),
            }}
          />
          <View className="flex-row justify-end items-center space-x-1">
            <PhotoIcon color={"gray"} strokeWidth={2} />
            <FaceSmileIcon size={hp(2.5)} color={"gray"} strokeWidth={2} />
            <View className="bg-red-400 rounded-xl py-1 w-[30%] justify-center items-center">
              <PaperAirplaneIcon color={"white"} size={hp(2.5)} strokeWidth={2} />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}