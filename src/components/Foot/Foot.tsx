import { useNavigate } from "react-router-dom";
import { useListParticipants } from "state/hook/useListParticipants";
import sacolas from "assets/sacolas.png";
import playCircleOutline from "assets/play_circle_outline.png";

export const Foot = () => {
  const participants = useListParticipants();
  const buttonIsDisabled = participants.length < 3;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/sorteio");
  };
  return (
    <div className="flex items-center justify-around bg-white-cream pb-36">
      <button
        className="w-80 h-20 flex items-center px-10 gap-5 border-2 border-b-8 border-gray-950 rounded bg-orange text-white-cream text-xl"
        disabled={buttonIsDisabled}
        onClick={handleClick}
      >
        <img
          src={playCircleOutline}
          alt="button for play"
          className="text-white"
        />
        Iniciar brincadeira!
      </button>

      <img src={sacolas} alt="fotos de duas bolsas" />
    </div>
  );
};
