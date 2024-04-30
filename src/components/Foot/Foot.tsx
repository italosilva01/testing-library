import { useNavigate } from "react-router-dom";
import { useListParticipants } from "hook/useListParticipants";
import sacolas from "assets/sacolas.png";
import playCircleOutline from "assets/play_circle_outline.png";
import { useDraw } from "hook/useDraw";

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
      <button
        className=" w-36  h-20 flex items-center md:w-80 md:px-10 gap-5 border-2 border-b-8 border-gray-950 rounded bg-orange text-white-cream text-xl"
        disabled={buttonIsDisabled}
        onClick={handleClick}
      >
        <img
          src={playCircleOutline}
          alt="button for play"
          className="hidden md:block"
        />
        Iniciar brincadeira!
      </button>

      <img src={sacolas} alt="fotos de duas bolsas" />
    </div>
  );
};
