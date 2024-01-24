import { View, Text, ScrollView, Image, TouchableOpacity, PermissionsAndroid } from 'react-native';
import React, { useCallback } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { CameraIcon } from "react-native-heroicons/outline";
import { profileData } from "../constants";

export default function ProfileScreen({ route }) {
  const data = route.params?.profileData || profileData[0];
  const onLayoutRootView = useCallback(() => {
  }, []);

  {/* camera permission */ }
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'matchU App Camera Permission',
          message:
            'matchU App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

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
        <View className="p-2 rounded-full bg-black/40 mr-5 justify-center items-center">
          <TouchableOpacity onPress={requestCameraPermission} >
            <CameraIcon
              size={hp(3.5)}
              color="white"
              strokeWidth={1.5}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* bio */}
      <View className="w-full justify-start items-start px-6 space-y-4 mt-6">
        <View className="flex-row space-x-2 justify-between w-full items-center">
          <View className="flex-row">
            <Text className="text-black text-center text-xl"
              style={{
                fontFamily: "OswaldBold",
              }}
            >
              {data.name}
              {", "}
            </Text>
            <Text className="text-black text-center text-xl"
              style={{
                fontFamily: "OswaldBold",
              }}
            >
              {data.age}
            </Text>
          </View>
          <Text>Edit</Text>
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
                  }}
                >
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
              fontFamily: "OswaldMedium",
            }}
          >
            Bio
          </Text>
          <Text className="text-black/80 text-left text-sm"
            style={{
              fontFamily: "OswaldRegular",
            }}
          >
            {data.bio}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}