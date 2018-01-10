
$(document).ready(function(){
    console.log('enter ready'+$(document).find("title").text());
	//console.log('Link '+window.location.href);
	chrome.tabs.query({
            active: true,
            lastFocusedWindow: true
        }, function(tabs) {
            // and use that tab to fill in out title and url
            var tab = tabs[0];
            //console.log(tab.url);
            var title = tab.title;
			//console.log('title:'+title);
			document.getElementById("LinkTextarea").value = title+' : '+tab.url;
        });
	
	
});


document.addEventListener('DOMContentLoaded', () => {
	var Copybutton = document.getElementById('Copybutton');
	Copybutton.addEventListener('click', function() {
        CopyFunction();
    });
    
	

});

function CopyFunction(){
	console.log('copy enter ****');
	var copyFrom = $('<textarea/>');
    copyFrom.text(document.getElementById("LinkTextarea").value);
    $('body').append(copyFrom);
    copyFrom.select();
    document.execCommand('copy');
    copyFrom.remove();
	document.getElementById("TooltipId").style.display = "";

setTimeout(function () {
 document.getElementById("TooltipId").style.display = "none";
}, 1000);
	
	/*
	var copyText = document.getElementById("LinkTextarea").value;
	console.log('copyText:'+ copyText );
	copyText.select();

	document.execCommand("Copy");
	console.log('copy!');
	
	*/
}



/*
function CopyFunction() {
  chrome.tabs.executeScript({
   console.log('copy enter ');
	var copyText = document.getElementById("LinkTextarea").value;
	console.log('copyText:'+ copyText );
	copyText.select();

	document.execCommand("Copy");
	console.log('copy!');
  }); 
}
*/
/*

document.getElementById('Copybutton').onclick = CopyFunction;*/
//document.getElementById('Copybutton').addEventListener('click', CopyFunction);