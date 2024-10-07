import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import user from "../../../../assets/user.png";
import styles from "../../../styles/styles";
import Animated, {
  useSharedValue,
  withTiming,
  Easing,
} from "react-native-reanimated";

export default function AppliedLeaveContainer() {
  const [showI, setShowI] = useState(null);
  // const height = useSharedValue(0);

  // const toggleHeight = (i) => {
  //   "worklet";
  //   // Animate the height
  //   height.value = withTiming(showI === i && hp(27.5), {
  //     duration: 300,
  //     easing: Easing.inOut(Easing.ease),
  //     damping: 2,
  //     stiffness: 80,
  //   });
  // };

  return (
    <ScrollView>
      <View className="flex-1 gap-y-3 p-4">
        {/* Recent leave card */}
        {Array.from({ length: 3 }).map((item, i) => (
          <TouchableOpacity
            onPress={() => {
              setShowI(showI === i ? null : i);
            }}
            key={i}
            style={styles.boxShadow}
            className="bg-white p-3 rounded-lg">
            <View className="flex-row justify-between items-center">
              <View className="flex-row justify-start items-center gap-3">
                <View className="bg-gray-400 self-start rounded-full overflow-hidden">
                  <Image
                    style={{ height: hp(8), width: hp(8) }}
                    source={user}
                  />
                </View>
                <View>
                  <Text
                    className="font-bold text-gray-800"
                    style={{ fontSize: hp(2) }}>
                    Mahmudul Haque
                  </Text>
                  <Text
                    className="font-bold text-green-500"
                    style={{ fontSize: hp(1.7) }}>
                    12 Jan - 22 Jan, 2023
                  </Text>
                  <Text
                    className="font-bold text-gray-500"
                    style={{ fontSize: hp(1.6) }}>
                    Casual Leave
                  </Text>
                </View>
              </View>
              <View className="bg-green-500/30 py-1 px-3 rounded-2xl">
                <Text className="text-green-500 font-bold mb-0.5">
                  Approved
                </Text>
              </View>
            </View>
            <Animated.View
              style={[
                { overflow: "hidden", height: showI === i ? hp(27.5) : 0 },
              ]}>
              <View style={{ paddingVertical: hp(1.5) }}>
                <Text className="font-semibold" style={{ fontSize: hp(1.7) }}>
                  Leave Application Review Status:
                </Text>
              </View>
              <View>
                <View className="flex-row justify-start items-stretch">
                  <View className="gap-3 mr-4">
                    <Text
                      className="font-semibold text-gray-500"
                      style={{ fontSize: hp(1.5) }}>
                      Review Step:
                    </Text>
                    <Text
                      className="font-semibold text-gray-500"
                      style={{ fontSize: hp(1.5) }}>
                      Supervisor Name:
                    </Text>
                    <Text
                      className="font-semibold text-gray-500"
                      style={{ fontSize: hp(1.5) }}>
                      Supervisor Code:
                    </Text>
                    <Text
                      className="font-semibold text-gray-500"
                      style={{ fontSize: hp(1.5) }}>
                      Review Status:
                    </Text>
                  </View>
                  <View className="gap-3">
                    <Text className="" style={{ fontSize: hp(1.5) }}>
                      01
                    </Text>
                    <Text className="" style={{ fontSize: hp(1.5) }}>
                      Shanto Kumar Sarker
                    </Text>
                    <Text className="" style={{ fontSize: hp(1.5) }}>
                      YYV001
                    </Text>
                    <Text className="" style={{ fontSize: hp(1.5) }}>
                      <Text className="text-green-500 font-bold mb-0.5">
                        Approved
                      </Text>
                    </Text>
                  </View>
                </View>
                <View
                  className="flex-row justify-between items-center"
                  style={{ marginTop: hp(3) }}>
                  <TouchableOpacity
                    className="bg-slate-800 flex-1 rounded-[5px] items-center justify-center"
                    style={{ padding: hp(2) }}>
                    <Text
                      className="text-white font-semibold"
                      style={{ fontSize: hp(2) }}>
                      Cancel Request
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Animated.View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}
