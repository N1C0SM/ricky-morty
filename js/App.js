function getCharacters() {
	fetch('https://rickandmortyapi.com/api/character')
		.then((response) => response.json())
		.then((data) => {
			for (const character of data.results) {
				let article = document.createElement('article');

				let image = document.createElement('img');
				image.setAttribute('src', character.image);

				let info = document.createElement('section');
				info.setAttribute('id', 'info');

				let name = document.createElement('h1');
				name.innerText = character.name;

				let characteriscs = document.createElement('section');
				characteriscs.setAttribute('id', 'characteriscs');

				let origin = document.createElement('p');
				origin.innerText = character.origin.name;

				let status = document.createElement('p');
				status.setAttribute('id', 'status');
				status.innerText = character.status + ' - ' + character.species;

				info.appendChild(name);
				info.appendChild(status);
				characteriscs.appendChild(origin);

				article.appendChild(image);
				article.appendChild(info);
				article.appendChild(characteriscs);

				let characters = document.getElementById('characters');
				characters.append(article);
			}
		})
		.catch((error) => {
			console.error('Error al obtener los datos:', error);
		});
}
getCharacters();
