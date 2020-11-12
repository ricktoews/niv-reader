function stripPunctuation(str) {
	var stripped = str.replace(/(\d),(\d)/g, '$1QQ$2');
	stripped = stripped.replace(/(\w)'(\w)/g, '$1XX$2');
	stripped = stripped.replace(/\W/g, '*');
	stripped = stripped.replace(/\*+/g, ' ');
	stripped = stripped.replace(/QQ/g, ',');
	stripped = stripped.replace(/XX/g, "'");
	return stripped;
}

function compileWordList(text) {
	text = text.replace('--', ' ');
	var stripped = stripPunctuation(text);
	var words = stripped.trim().split(' ');

	return words;
}


function constructFragment(words, verse) {
	var reStr = '(\\W*' + words.join('\\W+') + '\\W*)';
	var re = new RegExp(reStr);
	var fragMatch = re.exec(verse);
	var frag = fragMatch ? fragMatch[1] : '';

	return frag;
}

export { compileWordList, constructFragment }

