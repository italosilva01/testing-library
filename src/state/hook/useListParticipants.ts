import { useRecoilValue } from "recoil";
import { listParticipantsState } from "state/atom";

export const useListParticipants = () => {
  return useRecoilValue(listParticipantsState);
};
