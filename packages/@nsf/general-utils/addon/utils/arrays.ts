/**
 * Given two array arguments, creates a new array that contains only the elements
 * found in both arguments.
 */
export function intersection<T>(arrayA: T[], arrayB: T[]): T[] {
	if (Array.isArray(arrayA) && Array.isArray(arrayB)) {
		return arrayA.filter(item => arrayB.includes(item));
	}

	return [];
}
