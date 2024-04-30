import shuffle from "just-shuffle";

export function doDraw(participants: string[]) {
  const totalParticipants = participants.length;
  const participantsShuffle = shuffle(participants);
  const result = new Map<string, string>();

  for (let ind = 0; ind < totalParticipants; ind++) {
    const indFriend = ind === totalParticipants - 1 ? 0 : ind + 1;
    result.set(participantsShuffle[ind], participantsShuffle[indFriend]);
  }

  return result;
}
