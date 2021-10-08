import Block from "./block.js";

export default class Blockchain {
  constructor() {
    this.chain = [Block.genesis()];
  }

  addBlock({ data }) {
    const previousBlock = this.chain[this.chain.length-1];
    const newBlock = Block.mineBlock({ lastBlock:previousBlock, data });
    this.chain.push(newBlock);
  }
}
