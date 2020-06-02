const Handlebars = require("handlebars");
const fs = require("fs");

module.exports = {
	updateFile: (config) => {
		fs.readFile(`./${config.projectName}/package.json`, "utf8", function (err, temp) {
			let templatePackage = Handlebars.compile(temp);
			let resultPackage = templatePackage(config);
			fs.writeFile(`./${config.projectName}/package.json`, resultPackage, "utf8", (err) => {
				if (err) throw err;
			});
		});
		fs.readFile(`./${config.projectName}/scripts/webpack.config.base.js`, "utf8", function (err, temp) {
			let templateWebpack = Handlebars.compile(temp);
			let resultWebpack = templateWebpack(config);
			fs.writeFile(`./${config.projectName}/scripts/webpack.config.base.js`, resultWebpack, "utf8", (err) => {
				if (err) throw err;
			});
		});
		fs.readFile(`./${config.projectName}/.babelrc`, "utf8", function (err, temp) {
			let templateBabel = Handlebars.compile(temp);
			let resultBabel = templateBabel(config);
			fs.writeFile(`./${config.projectName}/.babelrc`, resultBabel, "utf8", (err) => {
				if (err) throw err;
			});
		});
		fs.readFile(`./${config.projectName}/postcss.config.js`, "utf8", function (err, temp) {
			let templateCss = Handlebars.compile(temp);
			let resultCss = templateCss(config);
			fs.writeFile(`./${config.projectName}/postcss.config.js`, resultCss, "utf8", (err) => {
				if (err) throw err;
			});
		});
	}
}