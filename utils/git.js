const download = require('download-git-repo');
module.exports = {
    downloadTemplate: async (api,ProjectName) => {
        return new Promise((resolve, reject) => {
            download(api,ProjectName, { clone: true }, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            })
        })
    }
}
