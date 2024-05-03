import { useNavigate } from "react-router-dom";
import { useListParticipants } from "hook/useListParticipants";
import sacolas from "assets/sacolas.png";
import playCircleOutline from "assets/play_circle_outline.png";
import { useDraw } from "hook/useDraw";
import { Button } from "components/Button/Button";

export const Foot = () => {
  const participants = useListParticipants();
  const buttonIsDisabled = participants.length < 3;
  const navigate = useNavigate();
  const sort = useDraw();
  const handleClick = () => {
    sort();
    navigate("/sorteio");
  };
  return (
    <div className="flex flex-col items-center justify-around bg-white-cream pb-5 gap-6 md:flex-row md:pb-36 ">
      <Button disabled={buttonIsDisabled} onClick={handleClick}>
        <img
          src={playCircleOutline}
          alt="button for play"
          className="hidden md:block"
        />
        Iniciar brincadeira!
      </Button>

      <img src={sacolas} alt="fotos de duas bolsas" />
    </div>
  );
};
