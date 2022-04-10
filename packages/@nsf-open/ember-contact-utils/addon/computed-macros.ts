import { computed, get } from '@ember/object';
import { toDomesticUSPhoneNumber } from './formatters';


/**
 * Exposes the `toDomesticUSPhoneNumber` formatter as an Ember computed decorator that normalizes a
 * string or number into a standard US telephone number with area code.
 *
 * ```javascript
 * public phone = "1234567890"
 *
 * @domesticUSPhoneNumber('phone')
 * public formattedPhone!: string; // => "(123) 456-7890"
 * ```
 */
export function domesticUSPhoneNumber(dependantKey: string, defaultValue = 'None') {
	return computed(dependantKey, function computedDomesticUSPhoneNumber() {
		return toDomesticUSPhoneNumber(get(this, dependantKey), defaultValue);
	});
}
