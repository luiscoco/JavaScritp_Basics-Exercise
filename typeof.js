const types = [
	typeof 0,
	typeof 'typeof',
	typeof '100',
	typeof Infinity,
	typeof String,
	typeof NaN,
	typeof 0.001,
	typeof console.log,
	typeof 1234789034244n,
	typeof Math.random,
	typeof 0b0111,
	typeof '\u34ff',
	typeof true,
	typeof 0x129fb0,
	typeof null,
	typeof 2e22,
	typeof undefined,
	typeof 0b1,
	typeof `${typeof 12} type`,
	typeof [],
	typeof Symbol('id'),
];
console.log(types[3 - 2]);
// console.log(types);
