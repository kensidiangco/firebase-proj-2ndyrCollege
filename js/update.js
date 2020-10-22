const valueList = document.querySelector('#value-list');
const updateForm = document.querySelector('#update-user-form');

function renderUserValue(value){

	document.getElementById("name").value = value.data().name;
	document.getElementById("level").value = value.data().level;
	document.getElementById("skills").value = value.data().skills;
	document.getElementById("type").value = value.data().type;
	document.getElementById("health").value = value.data().health;

	let tr = document.createElement('tr');

	let name = document.createElement('td');
	let type = document.createElement('td');
	let skills = document.createElement('td');
	let health = document.createElement('td');
	let level = document.createElement('td');
	tr.setAttribute('value-id', value.id)

	name.textContent = value.data().name;
	level.textContent = value.data().level;
	health.textContent = value.data().health;
	skills.textContent = value.data().skills;
	type.textContent = value.data().type;

	tr.appendChild(name);
	tr.appendChild(type);
	tr.appendChild(skills);
	tr.appendChild(health);
	tr.appendChild(level);

	valueList.appendChild(tr);
}

function getCookie(id) {
    var cookieArr = document.cookie.split(";");
    for(var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
        if(id == cookiePair[0].trim()) {
           	return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
}

id = getCookie("id");


db.collection('users').doc(id).get().then((value) => {
	renderUserValue(value);
});

updateForm.addEventListener('submit', (e) => {
	e.preventDefault();
	db.collection('users').doc(id).update({
		name: updateForm.name.value,
		type: updateForm.type.value,
		skills: updateForm.skills.value,
		health: updateForm.health.value,
		level: updateForm.level.value
	});
	updateForm.name.value = '';
	updateForm.type.value = '';
	updateForm.skills.value = '';
	updateForm.health.value = '';
	updateForm.level.value = '';
})