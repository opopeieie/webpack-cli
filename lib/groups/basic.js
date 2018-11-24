const GroupHelper = require("../utils/group-helper");

class BasicGroup extends GroupHelper {
	constructor(options) {
		super(options);
	}
	run() {
		return this.opts;
	}
}

module.exports = BasicGroup;