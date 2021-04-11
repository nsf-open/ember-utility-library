import { decamelize } from '@ember/string';


/**
 * A type-safe `String.trim()` that will return either the trimmed argument, or an empty string.
 */
export function trim(value: any) {
	return typeof value === 'string' ? value.trim() : '';
}


/**
 * Truncates a string of characters to the nearest whitespace either on or before a maximum length.
 *
 * @param string The string to truncate.
 * @param [maxLen=40] The maximum number of characters in the truncated result. Since the split
 * will occur at the nearest whitespace on or before this character limit the returned string length
 * with almost always be shorter.
 * @param [postfix="..."]  An optional string that will be appended to the end of the result string
 * if it does get truncated. This does not count against the maximum character limit.
 */
export function truncate(string: string, maxLen = 40, postfix = ' ...') {
	if (typeof string !== 'string') {
		throw new TypeError('Only strings can be truncated');
	}

	if (string.length > maxLen) {
		let p = maxLen;

		for (; p > 0 && string[p] !== ' '; p -= 1) { /* Continue */ }

		if (p > 0) {
			const left = string.substring(0, p);
			return left + postfix;
		}

		return string.substring(0, maxLen) + postfix;
	}

	return string;
}


/**
 * Takes a camelCased, snake_cased, or skeleton-cased string and puts in some nice
 * looking spaces.
 *
 * ```js
 * humanize('fooBarBaz');   // "Foo bar baz"
 * humanize('foo_bar_baz'); // "Foo bar baz"
 * humanize('foo-bar-baz'); // "Foo bar baz"
 *
 * // Optional title casing
 * humanize('foo-bar-baz', true); // "Foo Bar Baz"
 * ```
 *
 * @param {string}  input
 * @param {boolean} [titleCase=false]
 */
export function humanize(input: string, titleCase = false) {
	if (typeof input !== 'string') {
		throw new TypeError('Only strings can be humanized');
	}

	const DASHES_REGEX      = /[_-]+/g;
	const MULTI_SPACE_REGEX = /\s{2,}/g;
	const TITLE_CASE_REGEX  = /\s(\w)/gm;

	let output = decamelize(input)
		.toLowerCase()
		.replace(DASHES_REGEX, ' ')
		.replace(MULTI_SPACE_REGEX, ' ')
		.trim();

	output = output.charAt(0).toUpperCase() + output.slice(1);

	if (titleCase) {
		output = output.replace(TITLE_CASE_REGEX, (_, p1) => ` ${p1.toUpperCase()}`);
	}

	return output;
}
