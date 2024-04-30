import { useListParticipants } from "./useListParticipants";
import { useSetRecoilState } from "recoil";
import { resultSecretFriend } from "state/atom";
import { doDraw } from "helpers/doDraw";

export const useDraw = () => {
  const participants = useListParticipants();
  const setResult = useSetRecoilState(resultSecretFriend);
  return () => {
    const result = doDraw(participants);
    setResult(result);
  };
};
