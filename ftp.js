const upload = async (credentials, pathToLocalFile, pathToRemoteFile) => new Promise((resolve, reject) => {
    var Client = require('ftp');
    var options = {
        host: credentials.host,
        port: credentials.port,
        username: credentials.username,
        password: credentials.password
    };
    var c = new Client();

    c.on('ready', function() {
        c.mkdir(pathToRemoteFile, true, function(err) {
            if (err) throw err;
            else {
                c.put(pathToLocalFile, pathToRemoteFile, function(err) {
                    if (err) {
                        return reject(err);
                    }
                    c.end();
                    return resolve;
                });
            }
        });
    });
    c.on('error', function(err) {
        console.log(err);
    });
    c.connect(options);
});
