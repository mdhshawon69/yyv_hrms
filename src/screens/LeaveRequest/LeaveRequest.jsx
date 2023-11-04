import { View, Text } from "react-native";
import React from "react";
import LeaveForm from "../../components/LeaveRequest/LeaveForm/LeaveForm";

export default function LeaveRequest() {
  return (
    <View className="flex-1 bg-white">
      <LeaveForm />
    </View>
  );
}
