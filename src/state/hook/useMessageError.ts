import { useRecoilValue } from "recoil";
import { errorState } from "state/atom";

export const useMessageError = () => {
  //useRecoilValue pega o valor do atom errorState
  const message = useRecoilValue(errorState);
  return message;
};
