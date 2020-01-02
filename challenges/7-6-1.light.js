// 7.6.1 Light, More Light (pg. 157)

function program(input) {
	const results = input.map(n => {
		// Create an array of switches that are all off.
		const switches = Array.from({ length: n }, () => false);

		// Make n walks down the hall.
		for (let i = 1; i <= n; i++) {
			switches.forEach((state, position) => {
				const switchPosition = position + 1;
				const isDivisible = switchPosition % i === 0;

				// For each switch, if its position is divisible by the current pass (i), flip it.
				if (isDivisible) {
					switches[position] = !state;
				}
			});
		}

		// Now that we're done walking, return the state of the nth switch.
		return switches[n - 1] ? "yes" : "no";
	});

	return results;
}

module.exports = program;
