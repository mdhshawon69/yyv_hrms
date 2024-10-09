import { View, Text, TouchableOpacity, Image, Pressable } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import user from "../../../../assets/user.png";
import styles from "../../../styles/styles";
import { useNavigation } from "@react-navigation/native";

export default function RecentLeaveApplications() {
  const navigation = useNavigation();
  return (
    <View>
      <View className="flex-row justify-between items-center">
        <Text className="font-bold" style={{ fontSize: hp(2.2) }}>
          Recent Leave Applications
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate("AppliedLeave")}>
          <Text className="font-bold text-blue-500">See All</Text>
        </TouchableOpacity>
      </View>

      <View className="flex-col gap-3" style={{ paddingVertical: hp(2) }}>
        {/* Recent leave card */}
        {Array.from({ length: 3 }).map((item, i) => (
          <TouchableOpacity
            key={i}
            style={styles.boxShadow}
            className="bg-gray-400 p-3 rounded-lg">
            <View className="flex-row justify-between items-center rounded-lg">
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
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
