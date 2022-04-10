import type { ParseOptions } from './parser';

import moment from 'moment';
import parser from './parser';

import {
	MIDDLE_ENDIAN_DATE_FORMAT,
	MIDDLE_ENDIAN_TIME_FORMAT,
	MIDDLE_ENDIAN_DATETIME_FORMAT,
	BIG_ENDIAN_DATE_FORMAT,
	BIG_ENDIAN_TIME_FORMAT,
	BIG_ENDIAN_DATETIME_FORMAT,
} from './constants';


/**
 * Given a value that can be converted into a valid MomentJS instance, format
 * it with the provided mask. If it cannot be converted, a default value
 * (usually a string) is returned.
 */
export function toFormattedString(value: any, formatOut: string, defaultValue: any = '', options: ParseOptions = {}) {
	const date = parser(value, options);

	return date
		? moment(date).format(formatOut)
		: defaultValue;
}


/**
 * Formats a date-like value as "MONTH/DAY/YEAR".
 *
 * ```javascript
 * toMiddleEndianDateString(new Date(1970, 9, 25, 13, 10, 50)); // => '10/25/1970'
 * ```
 */
export function toMiddleEndianDateString(value: any, defaultValue: any = 'None', options: ParseOptions = {}) {
	return toFormattedString(value, MIDDLE_ENDIAN_DATE_FORMAT, defaultValue, options);
}


/**
 * Formats a date-like value as "HOUR:MINUTE MERIDIEM".
 *
 * ```javascript
 * toMiddleEndianTimeString(new Date(1970, 9, 25, 13, 10, 50)); // => '1:10 PM'
 * ```
 */
export function toMiddleEndianTimeString(value: any, defaultValue: any = 'None', options: ParseOptions = {}) {
	return toFormattedString(value, MIDDLE_ENDIAN_TIME_FORMAT, defaultValue, options);
}


/**
 * Formats a date-like value as "MONTH/DAY/YEAR HOUR:MINUTE MERIDIEM".
 *
 * ```javascript
 * toMiddleEndianDateTimeString(new Date(1970, 9, 25, 13, 10, 50)); // => '10/25/1970 1:10 PM'
 * ```
 */
export function toMiddleEndianDateTimeString(value: any, defaultValue: any = 'None', options: ParseOptions = {}) {
	return toFormattedString(value, MIDDLE_ENDIAN_DATETIME_FORMAT, defaultValue, options);
}


/**
 * Formats a date-like value as "YEAR-MONTH-DAY".
 *
 * ```javascript
 * toBigEndianDateString(new Date(1970, 9, 25, 13, 10, 50)); // => '1970-10-25'
 * ```
 */
export function toBigEndianDateString(value: any, defaultValue: any = 'None', options: ParseOptions = {}) {
	return toFormattedString(value, BIG_ENDIAN_DATE_FORMAT, defaultValue, options);
}


/**
 * Formats a date-like value as "HOUR:MINUTE:SECOND.MILLISECOND[TIMEZONE]".
 *
 * ```javascript
 * toBigEndianTimeString(new Date(1970, 9, 25, 13, 10, 50)); // => '13:10:50.000-05:00' (assuming EST)
 * ```
 */
export function toBigEndianTimeString(value: any, defaultValue: any = 'None', options: ParseOptions = {}) {
	return toFormattedString(value, BIG_ENDIAN_TIME_FORMAT, defaultValue, options);
}


/**
 * Formats a date-like value as "YEAR-MONTH-DAY HOUR:MINUTE:SECOND.MILLISECOND[TIMEZONE]".
 *
 * ```javascript
 * toBigEndianDateTimeString(new Date(1970, 9, 25, 13, 10, 50)); // => '1970-10-25 13:10:50.000-05:00' (assuming EST)
 * ```
 */
export function toBigEndianDateTimeString(value: any, defaultValue: any = 'None', options: ParseOptions = {}) {
	return toFormattedString(value, BIG_ENDIAN_DATETIME_FORMAT, defaultValue, options);
}
