import { useSelector } from "react-redux";

export const useDogProfile = () => useSelector(state => state.dogProfile);

