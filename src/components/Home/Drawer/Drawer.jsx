import { View, Text, Pressable } from "react-native";
import {
  GestureDetector,
  Gesture,
  GestureHandlerRootView,
} from "react-native-gesture-handler";

export default function Drawer({ showDrawer, setShowDrawer }) {
  const pan = Gesture.Pan();
  console.log(pan);
  return (
    <View
      style={{ left: showDrawer ? "0" : "-100%" }}
      className="absolute h-full top-0 bg-slate-900/40 w-full"
    >
      <GestureHandlerRootView>
        <GestureDetector gesture={pan}>
          <View
            className="flex-1 w-2/3 top-7 bg-white h-full"
            style={{ left: showDrawer ? "0" : "-100%" }}
          >
            <Text className="text-slate-900">Drawer</Text>
          </View>
        </GestureDetector>
      </GestureHandlerRootView>
    </View>
  );
}
