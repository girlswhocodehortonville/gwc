window.onload = function loadNav(){
	// Get the main container for all the header stuff
	var headerContainer = document.getElementById('headerContainer');
	
	// Create the div for the header display
	var headerDiv = document.createElement('div');
	headerDiv.className = 'header';
	headerDiv.appendChild(document.createTextNode('Hortonville Girls Who Code'));

	var path = window.location.pathname;
	var currentPage = path.split("/").pop();

	// Create the navigation links
	var ul = document.createElement('ul');
	ul.className = 'tab';
	addTab(ul, 'index.html', 'Home', currentPage);
	addTab(ul, 'FaceMiniGame.html', 'Face Mini-Game', currentPage);
	addTab(ul, 'GG_Allison.html', 'GG and Allison', currentPage);
	addTab(ul, 'GreenTeam.html', 'Green Team', currentPage);
	addTab(ul, 'Katy_Laken.html', 'Katy and Laken', currentPage);
	addTab(ul, 'Rockin.html', 'Rockin', currentPage);
	addTab(ul, 'TeamJB.html', 'TeamJB', currentPage);

	// Add the Header and Tabs to the container
	headerContainer.appendChild(headerDiv);
	headerContainer.appendChild(ul);  
}

function addTab(navlist, pageName, pageDisplayName, currentPageName)
{
	// Create a new tab 
	var li = document.createElement('li');
	if (pageName == currentPageName){
		li.className = 'activeTab';
	}
	navlist.appendChild(li);	
	var alink = document.createElement('a');
	alink.href = 'pages/' + pageName;
	alink.appendChild(document.createTextNode(pageDisplayName));
	li.appendChild(alink);
}
