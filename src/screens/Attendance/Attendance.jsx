import { View, Text, Alert, Dimensions } from "react-native";
import React from "react";
import Chart from "../../components/Attendance/Chart/Chart";
import { Calendar } from "react-native-calendars";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import moment from "moment";

const Attendance = () => {
  const markedDates = {
    "2024-10-01": { selected: true, selectedColor: "#C82159" },
    "2024-10-02": { selected: true, selectedColor: "#C82159" },
    "2024-10-03": { selected: true, selectedColor: "#C82159" },
    "2024-10-04": { selected: true, selectedColor: "#C82159" },
    "2024-10-05": { selected: true, selectedColor: "#C82159" },
    "2024-10-06": { selected: true, selectedColor: "#C82159" },
    "2024-10-07": { selected: true, selectedColor: "#C82159" },
    "2024-10-08": { selected: true, selectedColor: "#C82159" },
    "2024-10-09": { selected: true, selectedColor: "#C82159" },
    "2024-10-10": { selected: true, selectedColor: "#C82159" },
    "2024-10-11": { selected: true, selectedColor: "#C82159" },
    "2024-10-12": { selected: true, selectedColor: "#C82159" },
    "2024-10-13": { selected: true, selectedColor: "#C82159" },
    "2024-10-14": { selected: true, selectedColor: "#C82159" },
    "2024-10-15": { selected: true, selectedColor: "#C82159" },
    "2024-10-16": { selected: true, selectedColor: "#C82159" },
    "2024-10-17": { selected: true, selectedColor: "#C82159" },
    "2024-10-18": { selected: true, selectedColor: "#C82159" },
    "2024-10-19": { selected: true, selectedColor: "#C82159" },
    "2024-10-20": { selected: true, selectedColor: "#C82159" },
    "2024-10-21": { selected: true, selectedColor: "#C82159" },
    "2024-10-22": { selected: true, selectedColor: "#C82159" },
    "2024-10-23": { selected: true, selectedColor: "#C82159" },
    "2024-10-24": { selected: true, selectedColor: "#C82159" },
    "2024-10-25": { selected: true, selectedColor: "#C82159" },
    "2024-10-26": { selected: true, selectedColor: "#C82159" },
    "2024-10-27": { selected: true, selectedColor: "#C82159" },
    "2024-10-28": { selected: true, selectedColor: "#C82159" },
    "2024-10-29": { selected: true, selectedColor: "#C82159" },
    "2024-10-30": { selected: true, selectedColor: "#C82159" },
    "2024-10-31": { selected: true, selectedColor: "#C82159" },
  };
  return (
    <View className={`bg-white h-full`}>
      <View className="flex justify-center items-center">
        <Calendar
          style={{ width: wp(100), paddingBottom: hp(3) }}
          markingType="day"
          markedDates={markedDates}
          onDayPress={(day) => {
            Alert.alert(moment(day.dateString).format("LL"));
          }}
        />
      </View>
      <Chart />
    </View>
  );
};

export default Attendance;
