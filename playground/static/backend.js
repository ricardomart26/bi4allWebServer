function submit()
{
	// if (!document.getElementById("email").value || !document.getElementById("name").value || 
	// !document.getElementById("date").value || !document.getElementById("start").value || !document.getElementById("end").value || !document.getElementById("members").value)
	// {
	// 	alert('Please insert all the required data');
	// 	return;
	// }

	httpPost();
	console.log('Saiu?')
	// let curURL = window.location.href;
	// let endURL = curURL.substring(0, curURL.search('book'));

	// let counter = endURL.length;
	// while (endURL[counter] != '/')
	// 	counter--;
	
	// let authURL = 'authenticate.html';
	// let i = 0;
	// endURL += authURL;
	// window.location.href = endURL;
}

function changeURL() {
	const allURL = ["https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Europe%2FLisbon&src=ZTg5M2YyaWI4MW1oa2Y3OHBvbzNwMWg4dm9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=YjYzNDNmOXIzcXJna2o0MGFjdG9mbnZhazBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=N29nOHFvZG00dWgxMmcyNjE1bnRqajZiNmdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=dWJxZGJmYmptN2FjZHNkM2xkYWF0OWExYmNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=b2xvdWtnOGc1cDB2c2xrbXUzNTM4OHV1bm9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=cHQtcHQucG9ydHVndWVzZSNob2xpZGF5QGdyb3VwLnYuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%232952a3&color=%232952a3&color=%232952a3&color=%232952a3&color=%232952a3&color=%230B8043", 
	"https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Europe%2FLisbon&src=ZTg5M2YyaWI4MW1oa2Y3OHBvbzNwMWg4dm9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%232952a3", 
	"https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Europe%2FLisbon&src=YjYzNDNmOXIzcXJna2o0MGFjdG9mbnZhazBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%232952a3", 
	"https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Europe%2FLisbon&src=N29nOHFvZG00dWgxMmcyNjE1bnRqajZiNmdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%232952a3", 
	"https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Europe%2FLisbon&src=dWJxZGJmYmptN2FjZHNkM2xkYWF0OWExYmNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%232952a3", 
	"https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Europe%2FLisbon&src=b2xvdWtnOGc1cDB2c2xrbXUzNTM4OHV1bm9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%232952a3"];

	let room = document.getElementById("room-changer").value;

	let iframe = document.getElementById("calendar-url");
	iframe.src = allURL[room];
	// httpPost();
}

async function httpPost() {
	// const url = "https://script.google.com/macros/s/AKfycbwnLa_nFsWYHsSpAyJofRCXymjaCBRcTUm2nq9DeBXs0Vol3lI25xzCOadOur-gu6adCQ/exec"
	// const url = "https://script.google.com/macros/s/AKfycbyLJBdpWh4w806sHyG1xNuqt7e6eaKEqvjcUeJREZNC_rXTTgAIABotTGhoTpZscuax/exec"
	const url = "https://script.google.com/macros/s/AKfycbxr_ls8M1AcmUBJ4a2tNvJ1ezMR5H9Qb9KGFqVRwCvJP9DAQYJdV2wRGQ4M4ufgeUuN/exec"
	const input =  
	{
		name: document.getElementById("name").value,
		email: document.getElementById("email").value,
		date: document.getElementById("date").value,
		start: document.getElementById("start").value,
		end: document.getElementById("end").value,
		members: document.getElementById("members").value
	};

	const requestOptions = {
		method: "POST",
		mode: 'no-cors',
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(input)
	};

	let response = await fetch(url, requestOptions);
	let data = await response.text(); //or .json
	console.log("response " + response);
	console.log("data " + data);
}


async function httpDelete() {
	console.log("test");
	const url = "https://script.google.com/macros/s/AKfycbwnLa_nFsWYHsSpAyJofRCXymjaCBRcTUm2nq9DeBXs0Vol3lI25xzCOadOur-gu6adCQ/exec"

	const delete_id = {
		id: document.getElementById("Delete").value
	}
	// const input =  {
	// 	name: document.getElementById("name").value,
	// 	email: document.getElementById("email").value,
	// 	date: document.getElementById("date").value,
	// 	start: document.getElementById("start").value,
	// 	end: document.getElementById("end").value,
	// 	members: document.getElementById("members".value),
	// };

	const requestOptions = {
		method: "DELETE",
		mode: 'no-cors',
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(delete_id)
	};
	
	let response = await fetch(url, requestOptions);
	let data = await response.text(); //or .json
	console.log(data);
}
