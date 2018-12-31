const upload = async (credentials, pathToLocalFile, pathToRemoteFile) => new Promise((resolve, reject) => {
    var Client = require('ftp');
    var options = {
        host: credentials.host,
        port: credentials.port,
        user: credentials.user,
        password: credentials.password
    };
    var c = new Client();

    c.on('ready', () => {
        c.put(pathToLocalFile, pathToRemoteFile, function(err) {
            if (err) {
                return reject(err);
            }
            c.end();
            return resolve;
        });
    });

    c.on('error', function(err) {
        console.log(err);
    });
    c.connect(options);
});
