import moment from "moment";
import { create } from "zustand";

const date = moment(new Date()).format("YYYY-MM-DD");

export const formStore = create((set) => ({
  reason: "",
  typeOfLeave: "",
  startDate: "",
  endDate: "",
  leaveHours: "",

  setReason: (reason) => set(() => ({ reason: reason })),
  setTypeOfLeave: (type) => set(() => ({ typeOfLeave: type })),
  setStartDate: (startDate) => set(() => ({ startDate: startDate })),
  setEndDate: (endDate) => set(() => ({ endDate: endDate })),
  setLeaveHours: (hours) => set(() => ({ leaveHours: hours })),
  cancel: () =>
    set(() => ({
      reason: "",
      typeOfLeave: "",
      startDate: "",
      endDate: "",
      leaveHours: "",
    })),
}));
