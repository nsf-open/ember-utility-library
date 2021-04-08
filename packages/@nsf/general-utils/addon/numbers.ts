/**
 * Tests whether the argument is a finite number. Strings that could be
 * parsed as such are valid as well.
 */
export function isNumeric(value: any): value is number {
	return !isNaN(parseFloat(value)) && isFinite(value);
}


/**
 * Tests whether the argument is a whole number.
 */
export function isInteger(value: any): value is number {
	return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}
