let user = {
	name: 0,
	age: 30,
};

if (!Object.keys(user).length ) {
	console.log("Объект пустой");
} else {
    console.log("объект не пустой")
	if ("age" in user) {
		console.log("Ключ age есть");
	} else console.log("Ключа age нет");
}
