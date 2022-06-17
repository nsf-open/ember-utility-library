/** Strips special characters, leaving a string of digits. */
function normalizePhoneNumber(value: unknown) {
	return typeof value === 'string'
		? value.replace(/[\s()-.+]/g, '').trim()
		: (typeof value === 'number' ? value.toString(10) : undefined);
}


/**
 * Normalizes a string or number into a standard US telephone number with area code.
 * If a valid string cannot be created, a default value will be returned.
 *
 * ```javascript
 * toDomesticUSPhoneNumber("1234567890"); // => "(123) 456-7890"
 *
 * toDomesticUSPhoneNumber("123-456-7890"); // => "(123) 456-7890"
 *
 * toDomesticUSPhoneNumber(1234567890); // => "(123) 456-7890"
 *
 * toDomesticUSPhoneNumber("1234", "N/A"); // => "N/A"
 * ```
 */
export function toDomesticUSPhoneNumber(value: unknown, defaultValue = 'None'): string {
	const normalized = normalizePhoneNumber(value);

	if (normalized) {
		// Not a full number
		if (normalized.length < 10) {
			return defaultValue;
		}

		// Compensate for possible country code
		const offset   = normalized.length - 10;
		const areaCode = normalized.substr(offset, 3);
		const prefix   = normalized.substr(3 + offset, 3);
		const suffix   = normalized.substr(6 + offset, 4);

		return `(${areaCode}) ${prefix}-${suffix}`;
	}

	return defaultValue;
}
