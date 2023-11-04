import { View, Text } from "react-native";
import React from "react";
import { Calendar } from "react-native-calendars";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ScrollView } from "react-native";

export default function LeaveSummaryCalender() {
  const datesToMark = [
    { startDate: "2023-11-01", endDate: "2023-11-02", type: "sick" },
    { startDate: "2023-11-05", endDate: "2023-11-06", type: "casual" },
    { startDate: "2023-11-08", endDate: "2023-11-08", type: "casual" },
    { startDate: "2023-11-10", endDate: "2023-11-11", type: "annual" },
  ];

  const markedDates = {};

  // Dynamically build the markedDates object
  datesToMark.forEach((leave) => {
    markedDates[leave.startDate] = {
      disableTouchEvent: true,
      color:
        leave.type === "sick"
          ? "#C82159"
          : leave.type === "casual"
          ? "#009CC1"
          : leave.type === "annual"
          ? "#D2C729"
          : "",
      textColor: "#fff",
      startingDay: true,
      endingDay: leave.startDate === leave.endDate ? true : false,
    };
    markedDates[leave.endDate] = {
      disableTouchEvent: true,
      color:
        leave.type === "sick"
          ? "#C82159"
          : leave.type === "casual"
          ? "#009CC1"
          : leave.type === "annual"
          ? "#D2C729"
          : "",
      textColor: "#fff",
      startingDay: leave.startDate === leave.endDate ? true : false,
      endingDay: true,
    };
  });
  return (
    <View className="bg-white pb-4">
      <Calendar
        style={{ width: wp(100) }}
        markingType="period"
        markedDates={markedDates}
      />

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ paddingVertical: hp(1) }}
      >
        <View className="flex-row justify-start items-center py-1 px-4 gap-3">
          <View className="flex-row gap-1 justify-start items-center">
            <View
              className="bg-[#C82159] rounded-full"
              style={{ width: hp(2.5), height: hp(2.5) }}
            ></View>
            <Text
              style={{ fontSize: hp(2) }}
              className="font-semibold text-slate-800"
            >
              Sick
            </Text>
          </View>
          <View className="flex-row gap-1 justify-start items-center">
            <View
              className=" bg-[#009CC1] rounded-full"
              style={{ width: hp(2.5), height: hp(2.5) }}
            ></View>
            <Text
              style={{ fontSize: hp(2) }}
              className="font-semibold text-slate-800"
            >
              Casual
            </Text>
          </View>
          <View className="flex-row gap-1 justify-start items-center">
            <View
              className=" bg-[#D2C729] rounded-full"
              style={{ width: hp(2.5), height: hp(2.5) }}
            ></View>
            <Text
              style={{ fontSize: hp(2) }}
              className="font-semibold text-slate-800"
            >
              Annual
            </Text>
          </View>
          <View className="flex-row gap-1 justify-start items-center">
            <View
              className="bg-gray-500 rounded-full"
              style={{ width: hp(2.5), height: hp(2.5) }}
            ></View>
            <Text
              style={{ fontSize: hp(2) }}
              className="font-semibold text-slate-800"
            >
              Marriage
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
