import { View, Text, Pressable, Image, TouchableOpacity } from "react-native";
import React, { useRef } from "react";
import user from "../../../../assets/user.png";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import {
  GestureDetector,
  Gesture,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  withTiming,
  Easing,
  ReduceMotion,
  withDelay,
} from "react-native-reanimated";
import {
  ArrowPathIcon,
  EnvelopeIcon,
  CalendarDaysIcon,
  CalendarIcon,
  ArrowRightStartOnRectangleIcon,
} from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

export default function Drawer({ showDrawer, setShowDrawer }) {
  const navigation = useNavigation();
  const left = useSharedValue(wp(-100));

  left.value = withDelay(
    20,
    withTiming(showDrawer ? wp(0) : wp(-100), {
      duration: 300,
      easing: Easing.inOut(Easing.quad),
    })
  );

  const tap = Gesture.Tap().onEnd(() => {
    if (showDrawer) {
      setShowDrawer(true);
    } else {
      setShowDrawer(false);
    }
  });

  return (
    <Pressable
      onPress={(e) => {
        e._dispatchInstances.pendingProps.nativeID === "overlay"
          ? setShowDrawer(false)
          : "";
      }}
      className={`absolute h-full  top-0 ${
        !showDrawer ? "-left-full" : "left-0"
      } bg-slate-800/70 w-full z-50 overflow-hidden`}
      nativeID="overlay">
      <GestureHandlerRootView>
        <GestureDetector gesture={tap}>
          <Animated.View
            nativeID="drawer"
            className="flex-1 h-full w-3/4 bg-white absolute -left-full"
            style={{ left: left }}>
            <View className="p-4">
              <Image
                source={user}
                style={{ height: hp(8), width: hp(8) }}
                className="rounded-full"
              />
              <Text className="font-bold mt-2">Mahmudul Haque</Text>
              <Text className="mt-1 text-xs">Software Engineer</Text>
            </View>
            <View className="py-[0.5px] bg-gray-200"></View>
            <View className="flex flex-col justify-between p-4">
              <View className="space-y-5">
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("LeaveRequest");
                    setShowDrawer(false);
                  }}
                  className="flex flex-row justify-start items-center gap-2">
                  <EnvelopeIcon color="#C82159" size={hp(2)} />
                  <Text className="font-bold text-gray-500 text-[14px]">
                    Leave Request
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("LeaveSummary");
                    setShowDrawer(false);
                  }}
                  className="flex flex-row justify-start items-center gap-2">
                  <ArrowPathIcon color="#009CC1" size={hp(2)} />
                  <Text className="font-bold text-gray-500 text-[14px]">
                    Leave Summary
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("AppliedLeave");
                    setShowDrawer(false);
                  }}
                  className="flex flex-row justify-start items-center gap-2">
                  <CalendarIcon color="#D2C729" size={hp(2)} />
                  <Text className="font-bold text-gray-500 text-[14px]">
                    Applied Leave
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Attendance");
                    setShowDrawer(false);
                  }}
                  className="flex flex-row justify-start items-center gap-2">
                  <CalendarDaysIcon color="#D1D3D4" size={hp(2)} />
                  <Text className="font-bold text-gray-500 text-[14px]">
                    Attendance
                  </Text>
                </TouchableOpacity>
              </View>

              <View className="mt-10">
                <TouchableOpacity className="px-5 py-3 w-full bg-red-500 rounded-md flex flex-row justify-center items-center space-x-1">
                  <Text className="font-bold text-white text-md text-center flex flex-row justify-center items-center">
                    Logout
                  </Text>
                  <View className="mt-0.5">
                    <ArrowRightStartOnRectangleIcon
                      color="#fff"
                      size={hp(1.8)}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </Animated.View>
        </GestureDetector>
      </GestureHandlerRootView>
    </Pressable>
  );
}
