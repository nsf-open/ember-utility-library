/**
 * Makes a string safe for use inside a regular expression by escaping regex special characters.
 */
export function escapeRegExp<S>(string: S): string | S {
	if (typeof string === 'string') {
		// $& means the whole matched string
		return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	}

	return string;
}
