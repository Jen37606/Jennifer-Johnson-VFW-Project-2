window.onload = saveItems;

var getItems = function(){
	if(localStorage.getItem('apptitle')){
		var genre = localStorage.getItem('appgenre');
		var title = localStorage.getItem('apptitle');
		var actor = localStorage.getItem('appactor');
		var director = localStorage.getItem('appdirector');
		var rating = localStorage.getItem('apprating');
		var favorites = localStorage.getItem('appfavorites');
		var familyyes = localStorage.getItem('appfamilyyes');
		var release = localStorage.getItem('apprelease');
		
		var viewMovie = [
			genre,
			title,
			actor,
			director,
			rating,
			favorites,
			family,
			release
		];
		
		console.log(viewMovie);
	}
};

var saveItems = function(id){
	var genre = document.getElementById('genre').value;
	var title = document.getElementById('title').value;
	var actor = document.getElementById('actor').value;
	var director = document.getElementById('director').value;
	var rating = document.getElementById('rating').value;
	var favorites = document.getElementById('favorites').value;
	var familyyes = document.getElementById('yes').value;
	var release = document.getElementById('release').value;
	localStorage.setItem('appgenre', genre);
	localStorage.setItem('apptitle', title);
	localStorage.setItem('appactor', actor);
	localStorage.setItem('appdirector', director);
	localStorage.setItem('apprating', rating);
	localStorage.setItem('appfavorites', favorites);
	localStorage.setItem('appfamilyyes', familyyes);
	localStorage.setItem('apprelease', release);
};

