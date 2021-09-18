import { Block } from "./block";
import { GENESIS_DATA } from "./config";

describe("Block", () => {
  const timestamp = "a-date";
  const lastHash = "foo-hash";
  const hash = "d3986943-eb55-41c8-8faa-e134b20c2b29";
  const data = { sender: "Carlos", receiver: "Marcos", amount: "0.5 BTC" };
  const block = new Block({ timestamp, lastHash, hash, data });

  it("has a timestamp, lastHash, hash, and data propery", () => {
    expect(block.timestamp).toEqual(timestamp);
    expect(block.lastHash).toEqual(lastHash);
    expect(block.hash).toEqual(hash);
    expect(block.data).toEqual(data);
  });

  describe("genesis()", () => {
    const genesisBlock = Block.genesis();

    it("returns a Block instance", () => {
      expect(genesisBlock instanceof Block).toBe(true);
    });

    it("returns the genesis data", () => {
      expect(genesisBlock).toEqual(GENESIS_DATA);
    });
  });
});
