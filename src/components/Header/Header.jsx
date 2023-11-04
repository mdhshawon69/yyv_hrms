import { View, Text, Pressable } from "react-native";
import React from "react";
import { Bars3BottomLeftIcon, BellIcon } from "react-native-heroicons/solid";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Header() {
  return (
    <View className="px-4 bg-[#C82159]">
      <View className="flex-row justify-between items-center top-0 left-0">
        <Pressable className="bg-white p-2 rounded-full">
          <Bars3BottomLeftIcon size={hp(3.5)} color="#C82159" />
        </Pressable>
        <Pressable className="bg-white p-2 rounded-full">
          <BellIcon size={hp(3.5)} color="#C82159" />
        </Pressable>
      </View>
    </View>
  );
}
