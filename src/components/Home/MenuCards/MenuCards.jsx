import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { menuData } from "../../../static/menuData";
import { useNavigation } from "@react-navigation/native";

export default function MenuCards() {
  const navigation = useNavigation();
  return (
    <View
      className="flex-row justify-between gap-2.5 flex-wrap"
      style={{ paddingVertical: hp(2) }}
    >
      {menuData.map((item, i) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.route)}
          style={{
            width: wp(44.5),
            height: hp(14),
            borderRadius: 6,
            shadowColor: "rgba(0, 0, 0, .7)",
            backgroundColor: "#fff",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.2,
            shadowRadius: 1.41,

            elevation: 2,
          }}
          key={i}
        >
          <View className="justify-center items-center flex-1 rounded-md">
            <View
              className="self-center p-4 rounded-full"
              style={{ backgroundColor: item.bgColor }}
            >
              {item.icon}
            </View>
            <Text
              className="font-bold mt-1 text-[#231F20]"
              style={{ fontSize: hp(2) }}
            >
              {item.title}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}
