import { View, Text, Dimensions, TouchableWithoutFeedback, Image } from 'react-native';
import React from 'react';
import { CheckBadgeIcon } from "react-native-heroicons/solid";
import { useNavigation } from '@react-navigation/native';
import { userData } from '../constants';

const { width, height } = Dimensions.get("window");

export default function DatesCard({item}) {
  const navigation = useNavigation();
  const handleClick = () => {
    const matchingUserData = userData.find((userDataItem) => userDataItem.id === item.id);

    navigation.navigate('ProfileDetailsScreen', { userData: matchingUserData });
  };

  return (
    <View className="relative">
      <TouchableWithoutFeedback onPress={handleClick}>
        <Image className="rounded-2xl"
          source={item.imgUrl}
          style={{
            width: width * 0.8,
            height: height * 0.75,
          }}
          resizeMode="cover"
        />
      </TouchableWithoutFeedback>

      <View className="absolute bottom-10 justify-start w-full items-start p-4 bg-gray-900/70">
        {/* Name, Age */}
        <View className="flex-row justify-center items-center">
          <Text className="text-2xl text-white"
            style={{
              fontFamily: "OswaldSemiBold",
            }}
          >
            {item.name} {item.lastName}
            {", "}
          </Text>
          <Text className="text-2xl text-white mr-2"
            style={{
              fontFamily: "OswaldSemiBold",
            }}
          >
            {item.age}</Text>
          <CheckBadgeIcon size={25} color={"#f56565"} />
        </View>

        {/* Location */}
        <View className="flex-row justify-center items-center">
          <Text className="text-lg text-white font-regular"
            style={{
              fontFamily: "OswaldRegular",
            }}
          >
            {item.city}
            {", "}
          </Text>
          <Text className="text-lg text-white font-regular mr-2"
            style={{
              fontFamily: "OswaldRegular",
            }}
          >
            {item.country}
          </Text>
        </View>
      </View>
    </View>
  );
}