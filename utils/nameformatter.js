
function nameFormatter(config) {
  this.conf = config;
  
  this.format = function(address) {
    if (this.conf.names[address]) {
      return this.conf.names[address];
    } else {
      return address.substring(0,15)+'...';;
    }
  }
}
module.exports = nameFormatter;
