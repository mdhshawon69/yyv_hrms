import { View, Text } from "react-native";
import React from "react";
import { Calendar } from "react-native-calendars";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ScrollView } from "react-native";
import SummaryCards from "../SummaryCards/SummaryCards";

export default function LeaveSummaryCalender() {
  const datesToMark = [
    { startDate: "2024-11-01", endDate: "2023-11-02", type: "sick" },
    { startDate: "2024-11-05", endDate: "2023-11-06", type: "casual" },
    { startDate: "2024-11-08", endDate: "2023-11-08", type: "casual" },
    { startDate: "2024-11-10", endDate: "2023-11-11", type: "annual" },
  ];

  const markedDates = {};

  // Dynamically build the markedDates object
  datesToMark.forEach((leave) => {
    markedDates[leave.endDate] = {
      selected: true,
      marked: true,
      selectedColor:
        leave.type === "sick"
          ? "#C82159"
          : leave.type === "casual"
          ? "#009CC1"
          : leave.type === "annual"
          ? "#D2C729"
          : "",
    };
  });

  console.log(markedDates);
  return (
    <ScrollView className="pb-4">
      <View className="flex-row justify-between items-center p-4">
        <Text className="font-bold" style={{ fontSize: hp(2.2) }}>
          Leave Calender
        </Text>
      </View>
      <Calendar
        style={{ width: wp(100) }}
        markingType="day"
        markedDates={markedDates}
      />

      <SummaryCards />
    </ScrollView>
  );
}
