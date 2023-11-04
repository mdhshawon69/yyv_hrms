import { View, Text } from "react-native";
import React from "react";
import LeaveSummaryCalender from "../../components/LeaveSummary/LeaveSummaryCalender/LeaveSummaryCalender";

export default function LeaveSummary() {
  return (
    <View className="bg-white flex-1">
      <LeaveSummaryCalender />
    </View>
  );
}
