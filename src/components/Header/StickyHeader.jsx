// import React from "react";
// import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
// import { PanGestureHandler, State } from "react-native-gesture-handler";
// import Animated, {
//   Easing,
//   block,
//   cond,
//   eq,
//   set,
//   spring,
//   startClock,
//   stopClock,
//   Clock,
//   Value,
//   debug,
//   clockRunning,
// } from "react-native-reanimated";

// import "react-native-gesture-handler";
// import { ReanimatedProvider } from "react-native-reanimated";

// const StickyHeader = () => {
//   return (
//     <Animated.View style={styles.header}>
//       <Text style={styles.headerText}>Sticky Header</Text>
//     </Animated.View>
//   );
// };

// const StickyHeaderContainer = () => {
//   const translateY = new Value(0);
//   const velocityY = new Value(0);
//   const state = new Value(State.UNDETERMINED);
//   const offset = new Value(0);

//   const clock = new Clock();

//   const config = {
//     damping: 2,
//     stiffness: 50,
//     mass: 1,
//     overshootClamping: false,
//     restSpeedThreshold: 0.01,
//     restDisplacementThreshold: 0.01,
//     toValue: new Value(0),
//   };

//   const snapPoint = cond(
//     eq(state, State.END),
//     [
//       set(config.toValue, offset),
//       spring(clock, { ...config, toValue: offset }),
//     ],
//     offset
//   );

//   return (
//     <ReanimatedProvider>
//       <SafeAreaView style={styles.container}>
//         <StickyHeader />
//         <PanGestureHandler
//           onGestureEvent={Animated.event(
//             [{ nativeEvent: { translationY: translateY, velocityY } }],
//             { useNativeDriver: false }
//           )}
//           onHandlerStateChange={Animated.event([{ nativeEvent: { state } }], {
//             useNativeDriver: false,
//           })}
//         >
//           <Animated.View style={styles.content}>
//             <ScrollView>
//               {/* Your scrollable content */}
//               <Text style={{ height: 1000 }}>
//                 Scroll down to see the sticky header.
//               </Text>
//             </ScrollView>
//           </Animated.View>
//         </PanGestureHandler>
//       </SafeAreaView>
//     </ReanimatedProvider>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   header: {
//     height: 100,
//     backgroundColor: "#333",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   headerText: {
//     color: "white",
//     fontSize: 20,
//   },
//   content: {
//     flex: 1,
//   },
// });

// export default StickyHeaderContainer;
