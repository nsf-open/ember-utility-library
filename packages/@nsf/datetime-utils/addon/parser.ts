import moment from 'moment';
import { PARSE_FORMATS } from './constants';


/** Configuration options for the parser. */
export type ParseOptions = {
	/** A custom formatting mask (e.g. MM/DD/YY). See: https://momentjs.com/docs/#/parsing/string-format/ */
	format?: string;

	/** If supplying a custom `format`, accept only that pattern and nothing else. */
	exactFormatMatch?: boolean;

	/** Whether or not to interpret an ambiguously parsed string as UTC. */
	utc?: boolean;

	/** A timezone to apply to parsed strings that don't define one. */
	tz?: string;
};


/**
 * Takes a variety of possible inputs and attempts to make a date. This will
 * only ever return either a Date instance, or null.
 */
export default function oneParserToRuleThemAll(value: any, options: ParseOptions = {}) {
	const { format, utc, tz, exactFormatMatch } = options;

	if (value instanceof Date) {
		return value;
	}
	else if (moment.isMoment(value) && value.isValid()) {
		return value.toDate();
	}
	else if (typeof value === 'number') {
		return new Date(value);
	}
	else if (typeof value === 'string' && value.trim().length) {
		const formats = format
			? (exactFormatMatch ? format : [format].concat(PARSE_FORMATS) )
			: PARSE_FORMATS;

		let time;

		if (utc) {
			time = moment.utc(value, formats);
		}
		else if (typeof tz === 'string') {
			time = moment.parseZone(value, formats);

			if (time.isValid()) {
				const flags  = time.parsingFlags();
				const format = time.creationData()?.format as string | undefined;

				// Only apply a timezone if the incoming value didn't provide one
				if ((format && !format.includes('ZZ')) || flags.unusedTokens.includes('ZZ')) {
					time.utcOffset(tz, true);
				}
			}
		}
		else {
			time = moment(value, formats);
		}

		if (time.isValid()) {
			return time.toDate();
		}
	}

	return null;
}
