import type { ParseOptions } from './parser';

import { computed, get } from '@ember/object';
import {
	toBigEndianDateString,
	toMiddleEndianDateString,
	toMiddleEndianTimeString,
	toMiddleEndianDateTimeString,
} from './formatters';


/**
 * Exposes the `toMiddleEndianDateString` formatter as an Ember computed decorator to format
 * a date-like value as "MONTH/DAY/YEAR".
 *
 * ```javascript
 * public dateValue: new Date(1970, 9, 25, 13, 10, 50);
 *
 * @middleEndianDateString('dateValue');
 * public formattedDate!: string; // => '10/25/1970'
 * ```
 */
export function middleEndianDateString(dependantKey: string, defaultValue = 'None', options: ParseOptions = {}) {
	return computed(dependantKey, function computedMiddleEndianDateString() {
		return toMiddleEndianDateString(get(this, dependantKey), defaultValue, options);
	});
}


/**
 * Exposes the `middleEndianTimeString` formatter as an Ember computed decorator to format
 * a date-like value as "HOUR:MINUTE MERIDIEM".
 *
 * ```javascript
 * public dateValue: new Date(1970, 9, 25, 13, 10, 50);
 *
 * @middleEndianTimeString('dateValue');
 * public formattedTime!: string; // => '1:10 PM'
 * ```
 */
export function middleEndianTimeString(dependantKey: string, defaultValue = 'None', options: ParseOptions = {}) {
	return computed(dependantKey, function computedMiddleEndianTimeString() {
		return toMiddleEndianTimeString(get(this, dependantKey), defaultValue, options);
	});
}


/**
 * Exposes the `middleEndianDateTimeString` formatter as an Ember computed decorator to format
 * a date-like value as "MONTH/DAY/YEAR HOUR:MINUTE MERIDIEM".
 *
 * ```javascript
 * public dateValue: new Date(1970, 9, 25, 13, 10, 50);
 *
 * @middleEndianDateTimeString('dateValue');
 * public formattedDateTime!: string; // => '10/25/1970 1:10 PM'
 * ```
 */
export function middleEndianDateTimeString(dependantKey: string, defaultValue = 'None', options: ParseOptions = {}) {
	return computed(dependantKey, function computedMiddleEndianDateTimeString() {
		return toMiddleEndianDateTimeString(get(this, dependantKey), defaultValue, options);
	});
}


/**
 * Exposes the `bigEndianDateString` formatter as an Ember computed decorator to format
 * a date-like value as "YEAR-MONTH-DAY".
 *
 * ```javascript
 * public dateValue: new Date(1970, 9, 25, 13, 10, 50);
 *
 * @bigEndianDateString('dateValue');
 * public formattedDate!: string; // => '1970-10-25'
 * ```
 */
export function bigEndianDateString(dependantKey: string, defaultValue = 'None', options: ParseOptions = {}) {
	return computed(dependantKey, function computedBigEndianDateString() {
		return toBigEndianDateString(get(this, dependantKey), defaultValue, options);
	});
}
