import { fetchAPI } from "./api";

export const initialzeTimes = () => {
  const times = fetchAPI(new Date());
  return times;
};

export function updateTimes(times, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      const { date } = action;

      const updatedTimes = fetchAPI(new Date(date));
      return updatedTimes;
    default:
      return initialzeTimes();
  }
}
