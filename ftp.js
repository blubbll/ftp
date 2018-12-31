function upload(credentials,pathToRemoteFile,pathToLocalFile, callback){
  var Client = require('ftp');
  var options = {
      host: credentials.host,
      port: credentials.port,
      username: credentials.username,
      password: credentials.password
    };
  var c = new Client();

  c.on('ready', function() {
    c.mkdir(remoteDirectory, true, function(err) {
    if (err) throw err;
    else{
      c.put(localDirectory+localFile,remoteDirectory+remoteFile, function(err) {
        if (err){throw err;}
         if(callback!==void 0) callback();
        c.end();
      });
    }
  });
});
c.on('error',function(err){
  console.log(err);
});
c.connect(options);

}
module.exports.upload = upload;
