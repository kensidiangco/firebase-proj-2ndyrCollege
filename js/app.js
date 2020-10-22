const userList = document.querySelector('#user-list');
const form = document.querySelector('#add-user-form');

function renderUser(doc){
	let tr = document.createElement('tr');

	let name = document.createElement('td');
	let type = document.createElement('td');
	let skills = document.createElement('td');
	let health = document.createElement('td');
	let level = document.createElement('td');

	let del = document.createElement('button');

	let link = document.createElement('a')
	let update = document.createElement('button');


	tr.setAttribute('data-id', doc.id)
	link.setAttribute('href', 'update.html')
	link.setAttribute('data-id', doc.id)

	name.textContent = doc.data().name;
	level.textContent = doc.data().level;
	health.textContent = doc.data().health;
	skills.textContent = doc.data().skills;
	type.textContent = doc.data().type;

	del.textContent = 'Delete';
	update.textContent = 'Update';

	tr.appendChild(name);
	tr.appendChild(type);
	tr.appendChild(skills);
	tr.appendChild(health);
	tr.appendChild(level);

	tr.appendChild(del);
	tr.appendChild(link);
	link.appendChild(update);

	userList.appendChild(tr);

	// deleting data
	del.addEventListener('click', (e) => {
		e.stopPropagation();
		let id = e.target.parentElement.getAttribute('data-id');
		db.collection('users').doc(id).delete();
	})

	// updating data
	update.addEventListener('click', (e) => {
		e.stopPropagation();
		document.cookie = "id" + "=" + e.target.parentElement.getAttribute('data-id');
	})
}

// getting data
db.collection('users').get().then((snapshot) => {
	snapshot.docs.forEach(doc => {
		renderUser(doc);
	})
})

// saving data
form.addEventListener('submit', (e) => {
	e.preventDefault();
	db.collection('users').add({
		name: form.name.value,
		type: form.type.value,
		skills: form.skills.value,
		health: form.health.value,
		level: form.level.value
	});
	form.name.value = '';
	form.type.value = '';
	form.skills.value = '';
	form.health.value = '';
	form.level.value = '';
})