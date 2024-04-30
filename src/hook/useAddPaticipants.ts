import { useRecoilValue, useSetRecoilState } from "recoil";
import { errorState, listParticipantsState } from "state/atom";

export const useAddParticipant = () => {
  const setList = useSetRecoilState(listParticipantsState);
  const list = useRecoilValue(listParticipantsState);
  const messageError = useSetRecoilState(errorState);
  return (nameParticipant: string) => {
    if (list.includes(nameParticipant)) {
      messageError("Nome duplicados não são permitidos!");

      setTimeout(() => {
        messageError("");
      }, 3000);
      return;
    }
    setList((oldList) => {
      return [...oldList, nameParticipant];
    });
  };
};
