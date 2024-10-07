import { View, Text, Dimensions } from "react-native";
import React from "react";

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const Chart = () => {
  return (
    <View>
      <Text className="font-bold px-4 mt-3" style={{ fontSize: hp(2.2) }}>
        Attendance Graph
      </Text>
      <View className="flex justify-center items-center">
        <LineChart
          data={{
            labels: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],

            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get("window").width - wp(6)} // from react-native
          height={hp(30)}
          yAxisSuffix="%"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#C82159",
            backgroundGradientFrom: "#C82159",
            backgroundGradientTo: "#C82159",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, 0.3)`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, 1)`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726",
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
    </View>
  );
};

export default Chart;
