import Blockchain from "./blockchain";
import Block from "./block";

describe("Blockchain", () => {
  const blockchain = new Blockchain();

  it("contains a `chain` Array instance", () => {
    expect(blockchain.chain instanceof Array).toBe(true);
  });

  it("starts with the genesis block", () => {
    expect(blockchain.chain[0]).toEqual(Block.genesis());
  });

  it("adds a new block to the chain", () => {
    const newData = {
      sender: "second sender in the block",
      receiver: "second receiver in the block",
      amount: "0.5 BTC",
    };
    blockchain.addBlock({ data: newData });

    expect(blockchain.chain[blockchain.chain.length - 1].data).toEqual(newData);
  });
});
