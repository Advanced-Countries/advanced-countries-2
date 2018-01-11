var Location = require("./Location.js");
var Climate = require("./Climate.js");
/** A class that represents a cell on the map. */
class Cell{
	/**
	 * Creates a new cell.
	 * @param {Location} location The location of this cell.
	 * @param {Climate} climate The climate of this cell.
	 * @param {number} height The height of this cell.
	 */
	constructor(location, climate, height){
		this.location = location;
		this.height = height;
		this.climate = climate;
	}
}
module.exports = Cell;