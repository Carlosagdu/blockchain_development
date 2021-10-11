export const INITIAL_DIFFICULTY = 3;

export const GENESIS_DATA = {
  timestamp: 1,
  lastHash: "-----",
  hash: "hash-one",
  difficulty: INITIAL_DIFFICULTY,
  nonce: 0,
  data: {
    sender: "first sender",
    receiver: "first receiver",
    amount: "0.5 BTC",
  },
};
