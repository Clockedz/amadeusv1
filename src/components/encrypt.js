export function crypta(int) {
	int = int * 69;
	return int.toString(2);
}

export function cryptb(int) {
	const int2 = parseInt(int, 2);
	return int2 / 69;
}
