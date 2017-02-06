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
	addTab(ul, 'page1.html', 'Page 1', currentPage);
	addTab(ul, 'page2.html', 'Page 2', currentPage);
	addTab(ul, 'page3.html', 'Page 3', currentPage);
	addTab(ul, 'page4.html', 'Page 4', currentPage);

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
	alink.href = pageName;
	alink.appendChild(document.createTextNode(pageDisplayName));
	li.appendChild(alink);
}
