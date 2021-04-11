
/** Configuration options for the toUSD() formatter. */
export type ToFormatOptions = {
	/** If true, cents will be included to the typical hundredth precision.  */
	cents?: boolean;

	/** If true, the USD currency symbol ($) will be prefixed. */
	currencySymbol?: boolean;

	/** If true, negative values will be enclosed in parenthesis. */
	accountingFormat?: boolean;
}


/**
 * Converts a numerical value to USD currency.
 *
 * ```javascript
 * toUSD(12345); // => "$12,345"
 *
 * toUSD(12345, { cents: true }); // => "$12,345.00"
 * ```
 */
export function toUSDFormat<T>(
	value: T,
	showCentsOrOptions: ToFormatOptions | boolean = false
): T extends number ? string : T {
	if (typeof value !== 'number') {
		return value as any;
	}

	const defaultOpts = {
		cents: false,
		currencySymbol: true,
		accountingFormat: false,
	};

	const opts = typeof showCentsOrOptions === 'boolean'
		? { ...defaultOpts, cents: showCentsOrOptions }
		: { ...defaultOpts, ...showCentsOrOptions };

	const formatterOpts = {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
		// Not currently supported in Safari, but when it is we can let Intl do this work.
		// currencySign: opts.accountingFormat ? 'accounting' : 'standard',
	}

	if (!opts.cents) {
		formatterOpts.minimumFractionDigits = 0;
		formatterOpts.maximumFractionDigits = 0;
	}

	let formattedResult = new Intl.NumberFormat('en-US', formatterOpts).format(value);

	if (!opts.currencySymbol) {
		formattedResult = formattedResult.replace('$', '');
	}

	if (opts.accountingFormat && value < 0) {
		formattedResult = `(${ formattedResult.replace('-', '') })`;
	}

	return formattedResult as any;
}


/**
 * Converts a formatted currency value to a float.
 *
 * ```javascript
 * fromUSD("$12,345"); // => 12345
 *
 * fromUSD("$12,345.55"); // => 12345.55
 *
 * fromUSD("(12,345.55)"); // => -12345.55
 * ```
 */
export function fromUSDFormat(value: any): number {
	if (typeof value === 'string') {
		let val = value.trim();

		// Accounting format negative value
		if (val.startsWith('(') && val.endsWith(')')) {
			val = `-${val.substring(1, val.length - 1)}`;
		}

		return parseFloat(val.replace(/[^0-9\-.]/g, ''));
	}

	return typeof value === 'number' ? value : NaN;
}
