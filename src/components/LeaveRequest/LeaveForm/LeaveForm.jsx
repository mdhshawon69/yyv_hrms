import { View, Text, TextInput, Button, Pressable } from "react-native";
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

export default function LeaveForm() {
  const [modalType, setModalType] = useState("");
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
  } = formStore();
  const bottomSheetModalRef = useRef(null);
  const snapPoints = useMemo(() => ["25%", "55%"], []);

  const openModal = useCallback((index) => {
    bottomSheetModalRef.current?.present();
  }, []);

  const closeModal = useCallback((index) => {
    bottomSheetModalRef.current?.close();
  });

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
    <GestureHandlerRootView>
      <BottomSheetModalProvider>
        <View className="h-full">
          <View className="p-4 space-y-5">
            <View>
              <Text style={{ fontSize: hp(1.8) }}>Reason</Text>
              <View
                className="border border-gray-400 rounded-[5px]"
                style={{
                  height: hp(5.5),
                  marginTop: hp(0.7),
                  paddingHorizontal: hp(1.2),
                }}>
                <TextInput
                  className="h-full"
                  cursorColor="#C82159"
                  placeholder="Enter Your Reason"
                  onChangeText={(text) => setReason(text)}
                  style={{ fontSize: hp(1.8) }}
                />
              </View>
            </View>
            <View>
              <Text style={{ fontSize: hp(1.8) }}>Leave Type</Text>
              <Pressable
                onPress={() => {
                  setModalType("leave-type");
                  openModal();
                }}>
                <View
                  className="border border-gray-400 rounded-[5px] justify-center"
                  style={{
                    height: hp(5.5),
                    marginTop: hp(0.7),
                    paddingHorizontal: hp(1.2),
                  }}>
                  <Text style={{ fontSize: hp(1.8) }}>
                    {!typeOfLeave ? "Select Leave Type" : typeOfLeave}
                  </Text>
                </View>
              </Pressable>
            </View>
            <View>
              <Text style={{ fontSize: hp(1.8) }}>Leave Start Date</Text>
              <Pressable
                onPress={() => {
                  setModalType("start-date");
                  openModal();
                }}>
                <View
                  className="border border-gray-400 rounded-[5px] justify-center"
                  style={{
                    height: hp(5.5),
                    marginTop: hp(0.7),
                    paddingHorizontal: hp(1.2),
                  }}>
                  <Text style={{ fontSize: hp(1.8) }}>
                    {!startDate
                      ? "Select Start Date"
                      : moment(startDate).format("LL")}
                  </Text>
                </View>
              </Pressable>
            </View>
            <View>
              <Text style={{ fontSize: hp(1.8) }}>Leave End Date</Text>
              <Pressable
                onPress={() => {
                  setModalType("end-date");
                  openModal();
                }}>
                <View
                  className="border border-gray-400 rounded-[5px] justify-center"
                  style={{
                    height: hp(5.5),
                    marginTop: hp(0.7),
                    paddingHorizontal: hp(1.2),
                  }}>
                  <Text style={{ fontSize: hp(1.8) }}>
                    {!endDate
                      ? "Select Leave Type"
                      : moment(endDate).format("LL")}
                  </Text>
                </View>
              </Pressable>
            </View>
            <View>
              <Text style={{ fontSize: hp(1.8) }}>Leave End Date</Text>
              <Pressable
                onPress={() => {
                  setModalType("leave-hours");
                  openModal();
                }}>
                <View
                  className="border border-gray-400 rounded-[5px] justify-center"
                  style={{
                    height: hp(5.5),
                    marginTop: hp(0.7),
                    paddingHorizontal: hp(1.2),
                  }}>
                  <Text style={{ fontSize: hp(1.8) }}>
                    {!leaveHours
                      ? "Select Leave Hours (If any)"
                      : `${leaveHours} ${leaveHours > 1 ? "Hours" : "Hour"}`}
                  </Text>
                </View>
              </Pressable>
            </View>
            <View className="flex-row justify-between items-center gap-x-5">
              <View className="bg-blue-500 flex-1 py-2 rounded-[5px]">
                <Button color="#fff" title="Submit" />
              </View>
              <View className="bg-red-500 flex-1 py-2 rounded-[5px]">
                <Button title="Cancel" color="#fff" />
              </View>
            </View>
          </View>

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
                          typeOfLeave === item.title && "rgba(200, 33, 89, 1)",
                      }}>
                      <Text
                        className="font-semibold"
                        style={{
                          fontSize: hp(1.6),
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
                          fontSize: hp(1.6),
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
                    if (endDate < startDate) {
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
  );
}
