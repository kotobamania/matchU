import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { useCallback } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ChatBubbleOvalLeftEllipsisIcon } from 'react-native-heroicons/outline';
import { userData, chatData } from "../constants";
import { useNavigation } from '@react-navigation/native';

export default function ProfileDetailsScreen({ route }) {
  const navigation = useNavigation();
  const data = route.params?.userData || userData[0];


  const onChatBubblePress = () => {
    const matchingUserData = chatData.find((chatDataItem) => chatDataItem.id === data.id);
    navigation.navigate('ChatDetailsScreen', {
      chat: matchingUserData ? matchingUserData.chat : [],
      imgUrl: data.imgUrl,
      name: data.name,
      age: data.age,
    });
  };

  const onLayoutRootView = useCallback(async () => {
  }, []);

  return (
    <ScrollView className="relative bg-white flex-1"
      contentContainerStyle={{
        paddingBottom: hp(5),
      }}
      onLayout={onLayoutRootView}
    >

      {/* image */}
      <View>
        <Image
          source={data.imgUrl}
          style={{
            width: wp(100),
            height: hp(60),
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
          }}
        />
      </View>

      {/* header */}
      <View className="w-full absolute flex-row justify-end items-center pt-10">
        <TouchableOpacity onPress={onChatBubblePress}>
          <View className="p-2 rounded-full bg-black/40 mr-5 justify-center items-center">
            <ChatBubbleOvalLeftEllipsisIcon
              size={hp(3.5)}
              color="white"
              strokeWidth={1.5}
            />
          </View>
        </TouchableOpacity>
      </View>

      {/* bio */}
      <View className="w-full justify-start items-start px-6 space-y-4 mt-6">
        <View className="flex-row space-x-2 justify-between w-full items-center">
          <View className="flex-row">
            <Text className="text-black text-center text-xl"
            style={{
              fontFamily: "OswaldBold",
            }}>
              {data.name}
              {", "}
            </Text>
            <Text className="text-black text-center text-xl"
              style={{
                fontFamily: "OswaldBold",
              }}>
              {data.age}
            </Text>
          </View>
        </View>

        <View>
          <View className="flex-row">
            {data.hobbies?.map((hobby, index) => (
              <View key={index}
                style={{
                  borderRadius: 20,
                  padding: 5,
                  paddingHorizontal: 10,
                  marginRight: 5,
                }}
                className="bg-[#FFE4E1]"
              >
                <Text className="text-black/70"
                  style={{
                    fontFamily: "OswaldRegular",
                  }}>
                  {hobby}
                </Text>
              </View>
            ))
            }
          </View>
        </View>

        <View>
          <Text className="text-neutral-500 tracking-wider mb-2"
            style={{
              fontFamily: "OswaldRegular",
            }}>
            Bio
          </Text>
          <Text className="text-black/80 text-left text-sm">
            {data.bio}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};