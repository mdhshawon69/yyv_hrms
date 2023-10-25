import {
  ArrowPathIcon,
  EnvelopeIcon,
  CalendarDaysIcon,
  CalendarIcon,
} from "react-native-heroicons/solid";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const menuData = [
  {
    title: "Leave Request",
    icon: <EnvelopeIcon color="#fff" size={hp(4)} />,
    route: "LeaveRequest",
    bgColor: "#C82159",
  },
  {
    title: "Leave Summary",
    icon: <ArrowPathIcon color="#fff" size={hp(4)} />,
    route: "",
    bgColor: "#009CC1",
  },
  {
    title: "Applied Leave",
    icon: <CalendarIcon color="#fff" size={hp(4)} />,
    route: "",
    bgColor: "#D2C729",
  },
  {
    title: "Attendance",
    icon: <CalendarDaysIcon color="#fff" size={hp(4)} />,
    route: "",
    bgColor: "#D1D3D4",
  },
];
