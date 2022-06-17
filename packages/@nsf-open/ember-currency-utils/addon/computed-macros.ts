import type { ToFormatOptions } from './formatters';

import { computed, get } from '@ember/object';
import { fromUSDFormat, toUSDFormat } from './formatters';



/**
 * Exposes the `fromUSDFormat` formatter as an Ember computed decorator that converts
 * a formatted currency value to a float.
 *
 * ```javascript
 * public totalCost = "$12,345.55"
 *
 * @fromUSD('totalCost')
 * public numericCost!: number; // => 12345.55
 * ```
 */
export function fromUSD(dependantKey: string): PropertyDecorator {
	return computed(dependantKey, function computedFromUSD() {
		return fromUSDFormat(get(this, dependantKey));
	});
}


/**
 * Exposes the `toUSDFormat` formatter as an Ember computed decorator that converts
 * a numerical value to USD currency.
 *
 * ```javascript
 * public someNumber = 12345.55
 *
 * @toUSD('someNumber')
 * public formattedWhole!: string; // => "$12,345"
 *
 * @toUSD('someNumber', { cents: true })
 * public formattedDouble!: string; // => "$12,345.55"
 * ```
 */
export function toUSD(dependantKey: string, showCentsOrOptions: ToFormatOptions | boolean = false): PropertyDecorator {
	return computed(dependantKey, function computedToUSD() {
		return toUSDFormat(get(this, dependantKey), showCentsOrOptions);
	});
}
