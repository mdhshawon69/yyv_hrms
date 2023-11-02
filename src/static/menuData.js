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
    route: "LeaveSummary",
    bgColor: "#009CC1",
  },
  {
    title: "Applied Leave",
    icon: <CalendarIcon color="#fff" size={hp(4)} />,
    route: "AppliedLeave",
    bgColor: "#D2C729",
  },
  {
    title: "Attendance",
    icon: <CalendarDaysIcon color="#fff" size={hp(4)} />,
    route: "Attendance",
    bgColor: "#D1D3D4",
  },
];

export const leaveType = [
  {
    title: "Sick Leave",
    value: 2,
  },
  {
    title: "Casual Leave",
    value: 3,
  },
  {
    title: "Annual Leave",
    value: 4,
  },
  {
    title: "Maternity Leave",
    value: 5,
  },
  {
    title: "Bereavement Leave",
    value: 6,
  },
  {
    title: "Marriage Leave",
    value: 7,
  },
  {
    title: "Leave Without Pay",
    value: 8,
  },
];
