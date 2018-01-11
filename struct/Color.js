/**Class that represents an RGB color.*/
class Color {
	/**
	 * Creates an RGB Color.
	 * @param {number} r Red value
	 * @param {number} g Green value
	 * @param {number} b Blue value
	 */
	constructor(r, g, b){
		this.r = r;
		this.g = g;
		this.b = b;
	}
};
module.exports = Color;