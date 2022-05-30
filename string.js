// 문자열타입
let string = '안냐세유';
string = `안녕!`;
console.log(string);

// 특수 문자 출력하는법
string = '"할룽!"';
console.log(string);

string = '하이!\n킨나라!\t\t 내 이름은\\\u09AC';
console.log(string);

// 템플릿 리터럴 (Template Literal) ``
let id = '킨나라';
let greetings = "'하이!, " + id + "✋🏻\n오늘도 즐거운 하루!";
console.log(greetings);

greetings = `'안녕, ${id}✋🏻
즐거운 하루 보내!'`;
console.log(greetings);