import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import user from "../../../../assets/user.png";
import styles from "../../../styles/styles";

export default function SummaryCards() {
  return (
    <View style={{ padding: wp(4) }}>
      <View className="flex-row justify-between items-center">
        <Text className="font-bold" style={{ fontSize: hp(2.2) }}>
          Leave Balance
        </Text>
      </View>
      <View
        className="flex-row flex-wrap justify-between items-center"
        style={{ paddingVertical: hp(2), rowGap: hp(2) }}>
        <View style={{ width: wp(44) }}>
          <View
            style={styles.boxShadow}
            className="bg-white rounded-lg justify-center items-center py-4">
            <View style={{ height: hp(15), overflow: "hidden" }}>
              <View className="flex-row gap-1 justify-center items-center">
                <View
                  className="bg-[#C82159] rounded-full"
                  style={{ width: hp(1.7), height: hp(1.7) }}></View>
                <Text
                  style={{ fontSize: hp(1.8) }}
                  className="font-semibold text-slate-800">
                  Sick Leave
                </Text>
              </View>
              <View className="h-2/3 flex-row justify-center items-center">
                <Text className="font-semibold" style={{ fontSize: hp(5) }}>
                  8
                </Text>
                <Text className="font-semibold" style={{ fontSize: hp(5) }}>
                  /
                </Text>
                <Text
                  className="font-semibold text-slate-500"
                  style={{ fontSize: hp(2.5), marginTop: hp(2.5) }}>
                  14
                </Text>
              </View>
              <View className="justify-center items-center">
                <Text>Currently Available</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ width: wp(44) }}>
          <View
            style={styles.boxShadow}
            className="bg-white rounded-lg justify-center items-center py-4">
            <View style={{ height: hp(15), overflow: "hidden" }}>
              <View className="flex-row gap-1 justify-center items-center">
                <View
                  className="bg-[#009CC1] rounded-full"
                  style={{ width: hp(1.7), height: hp(1.7) }}></View>
                <Text
                  style={{ fontSize: hp(1.8) }}
                  className="font-semibold text-slate-800">
                  Casual Leave
                </Text>
              </View>
              <View className="h-2/3 flex-row justify-center items-center">
                <Text className="font-semibold" style={{ fontSize: hp(5) }}>
                  8
                </Text>
                <Text className="font-semibold" style={{ fontSize: hp(5) }}>
                  /
                </Text>
                <Text
                  className="font-semibold text-slate-500"
                  style={{ fontSize: hp(2.5), marginTop: hp(2.5) }}>
                  14
                </Text>
              </View>
              <View className="justify-center items-center">
                <Text>Currently Available</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ width: wp(44) }}>
          <View
            style={styles.boxShadow}
            className="bg-white rounded-lg justify-center items-center py-4">
            <View style={{ height: hp(15), overflow: "hidden" }}>
              <View className="flex-row gap-1 justify-center items-center">
                <View
                  className="bg-[#D2C729] rounded-full"
                  style={{ width: hp(1.7), height: hp(1.7) }}></View>
                <Text
                  style={{ fontSize: hp(1.8) }}
                  className="font-semibold text-slate-800">
                  Annual Leave
                </Text>
              </View>
              <View className="h-2/3 flex-row justify-center items-center">
                <Text className="font-semibold" style={{ fontSize: hp(5) }}>
                  8
                </Text>
                <Text className="font-semibold" style={{ fontSize: hp(5) }}>
                  /
                </Text>
                <Text
                  className="font-semibold text-slate-500"
                  style={{ fontSize: hp(2.5), marginTop: hp(2.5) }}>
                  14
                </Text>
              </View>
              <View className="justify-center items-center">
                <Text>Currently Available</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ width: wp(44) }}>
          <View
            style={styles.boxShadow}
            className="bg-white rounded-lg justify-center items-center py-4">
            <View style={{ height: hp(15), overflow: "hidden" }}>
              <View className="flex-row gap-1 justify-center items-center">
                <View
                  className="bg-[#F875AA] rounded-full"
                  style={{ width: hp(1.7), height: hp(1.7) }}></View>
                <Text
                  style={{ fontSize: hp(1.8) }}
                  className="font-semibold text-slate-800">
                  Maternity Leave
                </Text>
              </View>
              <View className="h-2/3 flex-row justify-center items-center">
                <Text className="font-semibold" style={{ fontSize: hp(5) }}>
                  8
                </Text>
                <Text className="font-semibold" style={{ fontSize: hp(5) }}>
                  /
                </Text>
                <Text
                  className="font-semibold text-slate-500"
                  style={{ fontSize: hp(2.5), marginTop: hp(2.5) }}>
                  14
                </Text>
              </View>
              <View className="justify-center items-center">
                <Text>Currently Available</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ width: wp(44) }}>
          <View
            style={styles.boxShadow}
            className="bg-white rounded-lg justify-center items-center py-4">
            <View style={{ height: hp(15), overflow: "hidden" }}>
              <View className="flex-row gap-1 justify-center items-center">
                <View
                  className="bg-[#D0A2F7] rounded-full"
                  style={{ width: hp(1.7), height: hp(1.7) }}></View>
                <Text
                  style={{ fontSize: hp(1.8) }}
                  className="font-semibold text-slate-800">
                  Marriage Leave
                </Text>
              </View>
              <View className="h-2/3 flex-row justify-center items-center">
                <Text className="font-semibold" style={{ fontSize: hp(5) }}>
                  8
                </Text>
                <Text className="font-semibold" style={{ fontSize: hp(5) }}>
                  /
                </Text>
                <Text
                  className="font-semibold text-slate-500"
                  style={{ fontSize: hp(2.5), marginTop: hp(2.5) }}>
                  14
                </Text>
              </View>
              <View className="justify-center items-center">
                <Text>Currently Available</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ width: wp(44) }}>
          <View
            style={styles.boxShadow}
            className="bg-white rounded-lg justify-center items-center py-4">
            <View style={{ height: hp(15), overflow: "hidden" }}>
              <View className="flex-row gap-1 justify-center items-center">
                <View
                  className="bg-[#748E63] rounded-full"
                  style={{ width: hp(1.7), height: hp(1.7) }}></View>
                <Text
                  style={{ fontSize: hp(1.8) }}
                  className="font-semibold text-slate-800">
                  Bereavement Leave
                </Text>
              </View>
              <View className="h-2/3 flex-row justify-center items-center">
                <Text className="font-semibold" style={{ fontSize: hp(5) }}>
                  8
                </Text>
                <Text className="font-semibold" style={{ fontSize: hp(5) }}>
                  /
                </Text>
                <Text
                  className="font-semibold text-slate-500"
                  style={{ fontSize: hp(2.5), marginTop: hp(2.5) }}>
                  14
                </Text>
              </View>
              <View className="justify-center items-center">
                <Text>Currently Available</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ width: wp(44) }}>
          <View
            style={styles.boxShadow}
            className="bg-white rounded-lg justify-center items-center py-4">
            <View style={{ height: hp(15), overflow: "hidden" }}>
              <View className="flex-row gap-1 justify-center items-center">
                <View
                  className="bg-[#FF6C22] rounded-full"
                  style={{ width: hp(1.7), height: hp(1.7) }}></View>
                <Text
                  style={{ fontSize: hp(1.8) }}
                  className="font-semibold text-slate-800">
                  Leave Without Pay
                </Text>
              </View>
              <View className="h-2/3 flex-row justify-center items-center">
                <Text className="font-semibold" style={{ fontSize: hp(5) }}>
                  8
                </Text>
                <Text className="font-semibold" style={{ fontSize: hp(5) }}>
                  /
                </Text>
                <Text
                  className="font-semibold text-slate-500"
                  style={{ fontSize: hp(2.5), marginTop: hp(2.5) }}>
                  14
                </Text>
              </View>
              <View className="justify-center items-center">
                <Text>Currently Available</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
