import { useRecoilValue } from "recoil";
import { resultSecretFriend } from "state/atom";

export const useResultDraw = () => {
  return useRecoilValue(resultSecretFriend);
};
