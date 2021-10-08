import Block from "./block";
import cryptoHash from "./crypto-hash";

export default class Blockchain {
  constructor() {
    this.chain = [Block.genesis()];
  }

  addBlock({ data }) {
    const previousBlock = this.chain[this.chain.length - 1];
    const newBlock = Block.mineBlock({ lastBlock: previousBlock, data });
    this.chain.push(newBlock);
  }

  replaceChain(chain){
    if(chain.length <= this.chain.length){
      console.error("The incoming chain must be longer");
      return;
    }

    if(!Blockchain.isValidChain(chain)){
      console.error("The incoming chain must be valid");
      return;
    }

    console.log("Replacing chain with", chain);    
    this.chain = chain;
  }

  static isValidChain(chain) {
    if (JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis()))
      return false;

    for (let i = 1; i < chain.length; i++) {
      let Block = chain[i];
      let actualLastHash = chain[i - 1].hash;
      const { timestamp, lastHash, hash, data } = Block;

      if (lastHash !== actualLastHash) return false;

      const validatedHash = cryptoHash(timestamp, lastHash, data);

      if(hash !== validatedHash) return false;
    }

    return true;
  }
}
