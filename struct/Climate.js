Color = require("./Color.js");
/** This class represents a climate. */
class Climate{
	/**
 	* Creates a climate.
 	* @param {string} name The name of this climate.
 	* @param {number} warAffect The effect this has on war. Positive, easier to war, lower, harder.
 	* @param {Color} color The color of this climate.
 	*/
	constructor(name, warAffect, color){
		this.name = name;
		this.warAffect = warAffect;
		this.color = color;
	}
};
module.exports = Climate;