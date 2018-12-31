const upload = async (credentials, pathToLocalFile, pathToRemoteFile) => new Promise((resolve, reject) => {
    var Client = require('ftp');
    var options = {
        host: credentials.host,
        port: credentials.port,
        user: credentials.user,
        password: credentials.password
    };
    var c = new Client();
    //on client ready, upload the file.
    c.on('ready', () => {
        c.put(pathToLocalFile, pathToRemoteFile, function(err) {
            c.end(); //end client
            if (err) return reject(err); //reject promise
            return resolve; //fullfill promise
        });
    });
    //general error
    c.on('error', (err) => {
        console.log(err);
    });
    c.connect(options);
});
