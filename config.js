var web3 = require('web3');
var net = require('net');

var config = function () {

  this.logFormat = "combined";
  this.ipcPath = process.env["HOME"] + "/.local/share/io.parity.ethereum/jsonrpc.ipc";
  this.provider = new web3.providers.IpcProvider(this.ipcPath, net);

  this.bootstrapUrl = "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/lumen/bootstrap.min.css";

  this.names = {
    "0x00522e276908428C02457d8a8747b9aA0AB52570": "Dev Fund",
    "0x46739b691c011530aaf480aacd339c206a2046e6": "Community Fund",
    "0x65767ec6d4d3d18a200842352485cdc37cbf3a21": "pool.ellaism.org",
    "0x395231b5f396fd5b9c6833feea540a3506121ec3": "ella.pool.sexy",
    "0xb170c70143b543cd61e7bcadcb9a2f799becda90": "ella.cryptobitpool.eu",
    "0xd4f3670058cde2fc5548293ada3d0a1d34af9ddc": "ella.cryptopools.info",
    "0xe6be7841a6e6b98edd7b38f884a9e32b4170d6b5": "ella.minerpool.net",
    "0x70a55acb5eec85a7823be72b9c41d73f4411fb85": "pool.ellaism.i0",
    "0x4a44ef8b619e27f707bf0b0284c6ecf3e40cefd0": "ella.epool.io",
    "0xf9fdd1d78f106b4e7ede5a0613077fd69d835f88": "DegenPool",
    "0x852936b16e86a831c9653f48489bbc815390795e": "ellaismpool.com"

  }

}

module.exports = config;
