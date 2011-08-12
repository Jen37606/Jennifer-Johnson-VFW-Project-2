function getItems(){
	if(localStorage.getItem('apptitle')){
		var genre = localStorage.getItem('appgenre');
		var title = localStorage.getItem('apptitle');
		var actor = localStorage.getItem('appactor');
		var director = localStorage.getItem('appdirector');
		var rating = localStorage.getItem('apprating');
		var favorites = localStorage.getItem('appfavorites');
		var family = localStorage.getItem('appfamily');
		var release = localStorage.getItem('apprelease');
		var description = localStorage.getItem('appdescription');
		
		var viewMovie = [genre,	title, actor, director, rating, favorites, family, release, description];
		
		console.log(viewMovie);
		alert(viewMovie);
		document.getElementById('main').style.display = "none";
		var clearLink = document.getElementById('clear');
		clearLink.style.display = "block";
	}else{
		var title = "Enter Movie Title";
		var actor = "Enter Actor/Actress Name";
		var director = "Enter Director Name";
		var title = document.getElementById('title').value = title;
		var actor = document.getElementById('actor').value = actor;
		var director = document.getElementById('director').value = director;
	}
}

function saveItems(id){
	var genre = document.getElementById('genre').value;
	var title = document.getElementById('title').value;
	var actor = document.getElementById('actor').value;
	var director = document.getElementById('director').value;
	var rating = document.getElementById('rating').value;
	var favorites = document.getElementById('favorites').value;
	if(document.getElementById('yes').checked){
		var family = "family movie"
	}else{
		var family = "not a family movie"
	}
	var release = document.getElementById('release').value;
	var description = document.getElementById('description').value;
	localStorage.setItem('appgenre', genre);
	localStorage.setItem('apptitle', title);
	localStorage.setItem('appactor', actor);
	localStorage.setItem('appdirector', director);
	localStorage.setItem('apprating', rating);
	localStorage.setItem('appfavorites', favorites);
	localStorage.setItem('appfamily', family);
	localStorage.setItem('apprelease', release);
	localStorage.setItem('appdescription', description);
}

function clearItems(){
	localStorage.clear();
	return false;
}
