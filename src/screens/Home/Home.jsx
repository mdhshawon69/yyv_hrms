import { View, Text, Pressable, ScrollView, Animated } from "react-native";
import React, { useState } from "react";
import { Bars3BottomLeftIcon, BellIcon } from "react-native-heroicons/solid";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import MenuCards from "../../components/Home/MenuCards/MenuCards";
import RecentLeaveApplications from "../../components/Home/RecentLeaveApplications/RecentLeaveApplications";
import { StatusBar } from "expo-status-bar";

export default function Home() {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = (event) => {
    const scrollY = event.nativeEvent.contentOffset.y;
    if (scrollY > 30) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  return (
    <View className="flex-1">
      <StatusBar style="light" />

      <ScrollView onScroll={handleScroll} scrollEventThrottle={16}>
        {/* Header */}
        <View
          className="bg-[#C82159]"
          style={{ height: hp(33), paddingTop: hp(6) }}>
          <View className="px-4">
            <View className="flex-row justify-between items-center top-0 left-0">
              <Pressable className="bg-white p-2 rounded-full">
                <Bars3BottomLeftIcon size={hp(3.5)} color="#C82159" />
              </Pressable>
              <Pressable className="bg-white p-2 rounded-full">
                <BellIcon size={hp(3.5)} color="#C82159" />
              </Pressable>
            </View>
          </View>
          <View className="px-5" style={{ marginTop: hp(3) }}>
            <Text className="text-white" style={{ fontSize: hp(2.3) }}>
              Hi, Mahmudul
            </Text>
            <Text
              className="text-white font-bold leading-[30px]"
              style={{ fontSize: hp(3) }}>
              Good Morning!
            </Text>
          </View>
        </View>

        {/* Body Items */}
        <View
          className="flex-1 bg-white rounded-tl-[25] rounded-tr-[25] p-4"
          style={{ marginTop: hp(-5) }}>
          <View className="flex-row justify-between items-center">
            <Text
              className="font-bold text-[#231F20]"
              style={{ fontSize: hp(2.2) }}>
              Overview
            </Text>
            <View className="py-1 px-2.5 bg-gray-500 rounded-2xl">
              <Text className="text-white">23 Oct, 2023</Text>
            </View>
          </View>

          {/* Menu Cards component */}
          <MenuCards />

          {/* Recent leave applications component */}
          <RecentLeaveApplications />
        </View>
      </ScrollView>
    </View>
  );
}
