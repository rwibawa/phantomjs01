const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

(async => {
	const answer = await rl.question('answer: ');
	console.log(answer);
})();

