//Userlist array for data

var userListData = [];
$(document).ready(function(){
	populateTable();
})

function populateTable(){
	var tableContent = '';

	$.getJSON ('/users/userlist', function(data){
		$.each(data, function(){
			tableContent += '<tr>';
			tableContent += '<td><a href="#" class="linkshowuser" rel="' + this.username + '">' + this.username + '</a></td>';
			tableContent += '<td><a href="#" class="linkshowemail" rel="' + this.useremail + '">' + this.useremail + '</a></td>';
			tableContent += '</tr>';
		});

		$('#userList table tbody').html(tableContent);
	});
}