import { doDraw } from "./doDraw";

describe("did draw of secret friends", () => {
  test("Each participants does not draw their own name", () => {
    const participants = ["Alice", "Bob", "Charlie", "David", "Eve"];

    const raffle = doDraw(participants);
    participants.forEach((participants) => {
      const secretFriend = raffle.get(participants);
      expect(secretFriend).not.toEqual(participants);
    });
  });
});
