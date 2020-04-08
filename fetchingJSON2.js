
requestURL = 
'https://spreadsheets.google.com/feeds/cells/1bKhRwRpBOnx5IqmwFL6xpFJQfA8pLHMq1T1mVndxCLI/2/public/values?alt=json';

const request1 = new XMLHttpRequest();

request1.open('GET', requestURL);

request1.responseType = 'json';

request1.send();

request1.onload = function() {

	const obj1 = request1.response;

	populateContent1(obj1);

	console.log(obj1);

}


function populateContent1(jsonObj)
{
	const noOfAlumni1 = (jsonObj['feed']['entry'].length)/6 - 1;
	
	for (let i = 1; i <= noOfAlumni1; i++ )
	{
		const card = document.createElement('div');
		const profile_image_container = document.createElement('div');
		const profile_image_back = document.createElement('div');
		const profile_name = document.createElement('div');
		const profile_title = document.createElement('div');

		const linkImage = document.createElement('a');
		const image = document.createElement('img');

		const linkName = document.createElement('a');
		const batch = document.createElement('p');

	/* ----------------------------------------------------------------*/

	    image.src = jsonObj['feed']['entry'][i*6 + 2]['content']['$t'];
	    image.alt = jsonObj['feed']['entry'][i*6 + 1]['content']['$t'];
	    linkImage.href = jsonObj['feed']['entry'][i*6 + 4]['content']['$t'];
	    linkImage.target = '_blank';

	    linkImage.appendChild(image);
	    profile_image_container.appendChild(linkImage);
	    card.appendChild(profile_image_container);

	    linkName.href = jsonObj['feed']['entry'][i*6 + 4]['content']['$t'];
	    linkName.target = '_blank';

	    const name = document.createTextNode(jsonObj['feed']['entry'][i*6 + 1]['content']['$t']);
	    linkName.appendChild(name);

	    batch.textContent = jsonObj['feed']['entry'][i*6 + 5]['content']['$t'];

	    const title = document.createTextNode(jsonObj['feed']['entry'][i*6 + 3]['content']['$t']);
        profile_title.appendChild(title);

	    profile_name.appendChild(linkName);
	    profile_name.appendChild(batch);
	    profile_image_back.appendChild(profile_name);
	    profile_image_back.appendChild(profile_title);
	    card.appendChild(profile_image_back);

	    content.appendChild(card);

	/* ----------------------------------------------------------------*/	

		card.setAttribute('class', 'card');
		profile_image_container.setAttribute('class', 'profile-image-container');
        profile_image_back.setAttribute('class', 'profile-image-back');
        profile_name.setAttribute('class', 'profile-name');
        profile_title.setAttribute('class', 'profile-title');
	}

}