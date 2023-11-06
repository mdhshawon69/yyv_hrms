import {
  View,
  Text,
  TextInput,
  Button,
  Pressable,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { useMemo, useRef, useCallback, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { leaveType } from "../../../static/menuData";
import { formStore } from "../../../store/store";
import { CheckIcon } from "react-native-heroicons/solid";
import { Calendar, CalendarUtils } from "react-native-calendars";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";

export default function LeaveForm() {
  const [modalType, setModalType] = useState("");
  const textInputRef = useRef(null);
  const navigation = useNavigation();
  const {
    typeOfLeave,
    startDate,
    endDate,
    leaveHours,
    setReason,
    setTypeOfLeave,
    setStartDate,
    setEndDate,
    setLeaveHours,
    cancel,
  } = formStore();
  const bottomSheetModalRef = useRef(null);
  const snapPoints = useMemo(() => ["25%", "55%"], []);

  const openModal = useCallback((index) => {
    bottomSheetModalRef.current?.present();
  }, []);

  const closeModal = useCallback((index) => {
    bottomSheetModalRef.current?.close();
  });

  const handleDismissFocus = () => {
    if (textInputRef.current) {
      textInputRef.current.blur();
    }
  };

  const markedStart = useMemo(() => {
    return {
      [startDate]: {
        selected: true,
        disableTouchEvent: true,
        selectedColor: "#C82159",
        selectedTextColor: "#fff",
      },
    };
  }, [startDate]);

  const markedEnd = useMemo(() => {
    return {
      [endDate]: {
        selected: true,
        disableTouchEvent: true,
        selectedColor: "#C82159",
        selectedTextColor: "#fff",
      },
    };
  }, [endDate]);

  return (
    <TouchableWithoutFeedback onPress={handleDismissFocus}>
      <GestureHandlerRootView>
        <BottomSheetModalProvider>
          <View className="h-full bg-white">
            <View className=" p-4 space-y-5">
              <View>
                <Text className="font-semibold" style={{ fontSize: hp(2) }}>
                  Reason
                </Text>
                <View
                  className="rounded-[5px] bg-gray-200 shadow-2xl"
                  style={{
                    height: hp(6.5),
                    marginTop: hp(0.7),
                    paddingHorizontal: hp(1.2),
                  }}>
                  <TextInput
                    className="h-full"
                    cursorColor="#C82159"
                    placeholder="Enter Your Reason"
                    onChangeText={(text) => setReason(text)}
                    style={{ fontSize: hp(2) }}
                    ref={textInputRef}
                  />
                </View>
              </View>
              <View>
                <Text className="font-semibold" style={{ fontSize: hp(2) }}>
                  Leave Type
                </Text>
                <Pressable
                  onPress={() => {
                    setModalType("leave-type");
                    openModal();
                  }}>
                  <View
                    className="bg-gray-200 shadow-2xl rounded-[5px] justify-center"
                    style={{
                      height: hp(6.5),
                      marginTop: hp(0.7),
                      paddingHorizontal: hp(1.2),
                    }}>
                    <Text style={{ fontSize: hp(2) }}>
                      {!typeOfLeave ? "Select Leave Type" : typeOfLeave}
                    </Text>
                  </View>
                </Pressable>
              </View>
              <View>
                <Text className="font-semibold" style={{ fontSize: hp(2) }}>
                  Leave Start Date
                </Text>
                <Pressable
                  onPress={() => {
                    setModalType("start-date");
                    openModal();
                  }}>
                  <View
                    className="bg-gray-200 shadow-2xl rounded-[5px] justify-center"
                    style={{
                      height: hp(6.5),
                      marginTop: hp(0.7),
                      paddingHorizontal: hp(1.2),
                    }}>
                    <Text style={{ fontSize: hp(2) }}>
                      {!startDate
                        ? "Select Start Date"
                        : moment(startDate).format("LL")}
                    </Text>
                  </View>
                </Pressable>
              </View>
              <View>
                <Text className="font-semibold" style={{ fontSize: hp(2) }}>
                  Leave End Date
                </Text>
                <Pressable
                  onPress={() => {
                    setModalType("end-date");
                    openModal();
                  }}>
                  <View
                    className="bg-gray-200 shadow-2xl rounded-[5px] justify-center"
                    style={{
                      height: hp(6.5),
                      marginTop: hp(0.7),
                      paddingHorizontal: hp(1.2),
                    }}>
                    <Text style={{ fontSize: hp(2) }}>
                      {!endDate
                        ? "Select Leave Type"
                        : moment(endDate).format("LL")}
                    </Text>
                  </View>
                </Pressable>
              </View>
              <View>
                <Text className="font-semibold" style={{ fontSize: hp(2) }}>
                  Leave Hours
                </Text>
                <Pressable
                  onPress={() => {
                    setModalType("leave-hours");
                    openModal();
                  }}>
                  <View
                    className="bg-gray-200 shadow-2xl rounded-[5px] justify-center"
                    style={{
                      height: hp(6.5),
                      marginTop: hp(0.7),
                      paddingHorizontal: hp(1.2),
                    }}>
                    <Text style={{ fontSize: hp(2) }}>
                      {!leaveHours
                        ? "Select Leave Hours (If any)"
                        : `${leaveHours} ${leaveHours > 1 ? "Hours" : "Hour"}`}
                    </Text>
                  </View>
                </Pressable>
              </View>
              <View className="flex-row justify-between items-center gap-x-5">
                <TouchableOpacity className="bg-blue-500 flex-1 py-4 rounded-[5px] items-center justify-center">
                  <Text
                    className="text-white font-semibold"
                    style={{ fontSize: hp(2) }}>
                    Submit
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    cancel();
                    navigation.navigate("Home");
                  }}
                  className="bg-slate-800 flex-1 py-4 rounded-[5px] items-center justify-center">
                  <Text
                    className="text-white font-semibold"
                    style={{ fontSize: hp(2) }}>
                    Cancel
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Bottom Modal */}
            <BottomSheetModal
              backdropComponent={BottomSheetBackdrop}
              enablePanDownToClose={true}
              ref={bottomSheetModalRef}
              index={1}
              snapPoints={snapPoints}>
              <View
                style={{
                  flex: 1,
                  alignItems: "left",
                  paddingVertical: hp(2.5),
                }}>
                {modalType === "leave-type" &&
                  leaveType.map((item, i) => (
                    <Pressable
                      key={i}
                      className="w-full"
                      onPress={() => {
                        setTypeOfLeave(item.title);
                        closeModal();
                      }}>
                      <View
                        className="border-b border-gray-300 w-full flex-row justify-between items-center"
                        style={{
                          padding: hp(1.5),
                          backgroundColor:
                            typeOfLeave === item.title &&
                            "rgba(200, 33, 89, 1)",
                        }}>
                        <Text
                          className="font-semibold"
                          style={{
                            fontSize: hp(2),
                            color: typeOfLeave === item.title && "#fff",
                          }}>
                          {item.title}
                        </Text>
                        {typeOfLeave === item.title && (
                          <CheckIcon size={hp(2)} color="#fff" />
                        )}
                      </View>
                    </Pressable>
                  ))}
                {modalType === "leave-hours" &&
                  Array.from({ length: 8 }).map((item, i) => (
                    <Pressable
                      key={i}
                      className="w-full"
                      onPress={() => {
                        setLeaveHours(i + 1);
                        closeModal();
                      }}>
                      <View
                        className="border-b border-gray-300 w-full flex-row justify-between items-center"
                        style={{
                          padding: hp(1.5),
                          backgroundColor:
                            leaveHours === i + 1 && "rgba(200, 33, 89, 1)",
                        }}>
                        <Text
                          className="font-semibold"
                          style={{
                            fontSize: hp(2),
                            color: leaveHours === i + 1 && "#fff",
                          }}>
                          {i + 1}
                        </Text>
                        {leaveHours === i + 1 && (
                          <CheckIcon size={hp(2)} color="#fff" />
                        )}
                      </View>
                    </Pressable>
                  ))}
                {modalType === "start-date" && (
                  <Calendar
                    style={{ width: wp(100) }}
                    markedDates={markedStart}
                    onDayPress={(day) => {
                      setStartDate(day.dateString);
                      closeModal();
                    }}
                  />
                )}

                {modalType === "end-date" && (
                  <Calendar
                    style={{ width: wp(100) }}
                    markedDates={markedEnd}
                    onDayPress={(day) => {
                      if (day.dateString < startDate) {
                        alert("End Date cannot be smaller than Start Date");
                      } else {
                        setEndDate(day.dateString);
                      }
                      closeModal();
                    }}
                  />
                )}
              </View>
            </BottomSheetModal>
          </View>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </TouchableWithoutFeedback>
  );
}
