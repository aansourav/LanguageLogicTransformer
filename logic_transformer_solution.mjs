const weirdExpressions = [
	"a othoba b",
	"b ebong c othoba d",
	"ebong ebong othoba othoba ebong",
	"((ebong) othoba ebong) ebong othoba",
	"(ebong othoba (ebong ebong ((othoba)othoba(ebong))))",
	"ebong",
];

for (const expression of weirdExpressions) {
	const tokens = expression.split(" ");

	const convertedExpression = tokens.map((token, index) => {
		const count = index + 1;
		if (count % 2 == 1) {
			return token;
		} else {
			if (token.includes("ebong")) {
				let temp = token;
				temp = temp.replace("ebong", "&&");
				return temp;
			} else if (token.includes("othoba")) {
				let temp = token;
				temp = temp.replace("othoba", "||");
				return temp;
			}
		}
	})
	console.log(convertedExpression.join(" "));
}
