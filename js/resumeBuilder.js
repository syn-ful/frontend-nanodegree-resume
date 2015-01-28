$("#main").append(internationalizeButton);

//Start biography section
bio = {
	"name": "Chris Crook",
	"role": "Network Engineer",
	"contacts": {
	    "mobile": "303-555-5555",
	    "email": "ccrook@me.com",
	    "github": "syn-ful",
	    "location": "Denver, CO",
	    },
	"pic": "images/fry.jpg",
	"msg": "Hi, I'm Chris.  You can just call me your future employee!",
	"skills": ["Network Operations", "Network Security", "Network Design ", "Network Automation"]
};
bio.display = function() {
   	$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
   	$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
   	$("#header").append(HTMLbioPic.replace("%data%", bio.pic));
	$("#header").append(HTMLWelcomeMsg.replace("%data%", bio.msg));
	//This for loop applies top and footer contacts to their respective sections
	for (contact in bio.contacts) {
		var html = "HTML"+contact;
		$("#topContacts").append(window[html].replace("%data%", bio.contacts[contact]));
		$("#footerContacts").append(window[html].replace("%data%", bio.contacts[contact]));
	}
	/*$("#topContacts").prepend(HTMLmobile.replace("%data%", bio.mobile));
	$("#topContacts").prepend(HTMLemail.replace("%data%", bio.email));
	$("#topContacts").prepend(HTMLlocation.replace("%data%", bio.location));
	$("#topContacts").prepend(HTMLgithub.replace("%data%", bio.github));*/
	if (bio.skills.length >= 1) {
	    $("#header").append(HTMLskillsStart);
	    for (skill in bio.skills) {
		    $("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
	}
}
}
bio.display();

//Function to change last name to upper case if 'internationalize' button is pushed
function inName() {
	names = bio.name.split(" ");
	firstName = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
	lastName = names[1].toUpperCase()
	fullName = firstName + " " + lastName
    return fullName
}
//End biography section


//Start work section
work = [
    job1 = {
    	"employer": "Employer1",
	    "title": "Job Title 1",
	    "location": "Antartica",
	    "dates": "Starting Date - Ending Date",
	    "description": "Bacon ipsum dolor amet boudin pastrami landjaeger pork kielbasa tongue jerky porchetta sirloin ribeye strip steak spare ribs. Corned beef t-bone ribeye, beef ribs short loin swine salami drumstick tenderloin pastrami pork chop ground round pork loin tongue. Turkey ground round short loin beef ribs sirloin turducken. Pastrami swine shankle tail pig drumstick.",
        },
    job2 = {
        "employer": "Employer2",
	    "title": "Job Title 2",
	    "location": "Denver CO",
	    "dates": "Starting Date - Ending Date",
    	"description": "Jerky aliqua ut, eiusmod pariatur short loin est laboris proident meatball swine cow short ribs. Drumstick aliqua in brisket voluptate. Cow drumstick aute magna qui cillum pancetta, ground round doner salami adipisicing irure occaecat. Esse occaecat bresaola turducken officia venison. In exercitation velit, laboris flank tempor shoulder tri-tip excepteur landjaeger pariatur turkey.",
        },
];

work.display = function() {
	for (job in work.slice(0)) {
	    $("#workExperience").append(HTMLworkStart);
	    $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work[job].employer) + HTMLworkTitle.replace("%data%", work[job].title));
	    $(".work-entry:last").append(HTMLworkDates.replace("%data%", work[job].dates));
        $(".work-entry:last").append(HTMLworkLocation.replace("%data%", work[job].location));
        $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work[job].description));
    }
}
work.display();
//End work secion

//
//Start projects section
//
projects = [
    project1 = {
    	"title": "Project 1 title",
    	"dates": "Starting Date - Ending Date",
    	"description": "Jerky aliqua ut, eiusmod pariatur short loin est laboris proident meatball swine cow short ribs. Drumstick aliqua in brisket voluptate. Cow drumstick aute magna qui cillum pancetta, ground round doner salami adipisicing irure occaecat. Esse occaecat bresaola turducken officia venison. In exercitation velit, laboris flank tempor shoulder tri-tip excepteur landjaeger pariatur turkey.",
    	"images": ["http://placehold.it/200x200", "http://placehold.it/200x200", "http://placehold.it/200x200"],
    },
    project2 = {
    	"title": "Project 2 title",
    	"dates": "Starting Date - Ending Date",
    	"description": "Bacon ipsum dolor amet boudin pastrami landjaeger pork kielbasa tongue jerky porchetta sirloin ribeye strip steak spare ribs. Corned beef t-bone ribeye, beef ribs short loin swine salami drumstick tenderloin pastrami pork chop ground round pork loin tongue. Turkey ground round short loin beef ribs sirloin turducken. Pastrami swine shankle tail pig drumstick.",
    	"images": ["http://placehold.it/200x200", "http://placehold.it/200x200", "http://placehold.it/200x200"],
    }
];
projects.display = function() {
	for (project in projects.slice(0)) {
	    $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects[project].title));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects[project].dates));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects[project].description));
        //$(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects[project].images[0]) + HTMLprojectImage.replace("%data%", projects[project].images[1]) + HTMLprojectImage.replace("%data%", projects[project].images[2]));
        if (projects[project].images.length > 0) {
            for (image in projects[project].images) {
        	    $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects[project].images[image]));
            }
        }
    }
}
projects.display();
//End projects section

//
//Start education section
//
education = [
    school1 = {
    	"name": "School 1 name",
    	"location": "Denver, CO",
    	"degree": ["Degree Earned 1", "Degree earned 2"],
    	"majors": ["Majored in something 1", "Majored in something 2"],
    	"dates": "Starting Date - Ending Date",
    	"website": "www.school1.com",
    },
    school2 = {
    	"name": "School 2 name",
    	"location": "Denver, CO",
    	"degree": ["Degree Earned 1", "Degree earned 2"],
    	"majors": ["Majored in something 1", "Majored in something 2"],
    	"dates": "Starting Date - Ending Date",
    	"website": "www.school2.com",
    },
    onlineCourse = [
        course1 = {
        	"title": "Online course1",
        	"school": "School1",
        	"dates": "Starting Date - Ending Date",
        	"website": "www.onlinecourse1.com",
        },
        course2 = {
        	"title": "Online course2",
        	"school": "School2",
        	"dates": "Starting Date - Ending Date",
        	"website": "www.onlinecourse2.com",
        },
    ]
];
education.display = function() {
	for (school in education.slice(0)) {
		if (Object.prototype.toString.call(education[school]) === '[object Object]') {
	        $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(HTMLschoolName.replace("%data%", education[school].name) + HTMLschoolDegree.replace("%data%", education[school].degree));
            $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education[school].dates));
            $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education[school].location));
            $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education[school].majors));				
		} else if (Array.isArray(education[school])) {
			$(".education-entry:last").append(HTMLonlineClasses);
	        for (course in education[school]) {
                $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education[school][course].title) + HTMLonlineSchool.replace("%data%", education[school][course].school));
                $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education[school][course].dates));
                $(".education-entry:last").append(HTMLonlineURL.replace("%data%", education[school][course].website));
			}	
		}
    }
}
education.display();
//End education section

//
// Map location section
//
$("#mapDiv").append(googleMap);



/*
This shows the x,y coordanits when you click inside the page
$(document).click(function(car) {
	console.log(car.pageY, car.pageX);
});

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
//var formattedContact = HTMLcontactGeneric.replace("%contact", myContacts);
var formattedMobile = HTMLmobile.replace("%data%", bio.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.email);
var formatedLocation = HTMLlocation.replace("%data%", bio.location);
var formattedPic = HTMLbioPic.replace("%data%", bio.pic);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.msg);


$("#workExperience").prepend(HTMLworkStart);
$("#workExperience").append(HTMLworkEmployer.replace("%data%", work[0].employer) + HTMLworkTitle.replace("%data%", work[0].title));
$("#workExperience").append(HTMLworkDates.replace("%data%", work[0].dates));
$("#workExperience").append(HTMLworkLocation.replace("%data%", work[0].location));
$("#workExperience").append(HTMLworkDescription.replace("%data%", work[0].description));
$("#workExperience").append(HTMLworkEmployer.replace("%data%", work[1].employer) + HTMLworkTitle.replace("%data%", work[1].title));
$("#workExperience").append(HTMLworkDates.replace("%data%", work[1].dates));
$("#workExperience").append(HTMLworkLocation.replace("%data%", work[1].location));
$("#workExperience").append(HTMLworkDescription.replace("%data%", work[1].description));

$("#projects").prepend(HTMLprojectStart);
$("#projects").append(HTMLprojectTitle.replace("%data%", projects[0].title));
$("#projects").append(HTMLprojectDates.replace("%data%", projects[0].dates));
$("#projects").append(HTMLprojectDescription.replace("%data%", projects[0].description));
$("#projects").append(HTMLprojectImage.replace("%data%", projects[0].images[0]) + HTMLprojectImage.replace("%data%", projects[0].images[1]) + HTMLprojectImage.replace("%data%", projects[0].images[2]));
$("#projects").append(HTMLprojectTitle.replace("%data%", projects[1].title));
$("#projects").append(HTMLprojectDates.replace("%data%", projects[1].dates));
$("#projects").append(HTMLprojectDescription.replace("%data%", projects[1].description));
$("#projects").append(HTMLprojectImage.replace("%data%", projects[1].images[0]) + HTMLprojectImage.replace("%data%", projects[1].images[1]) + HTMLprojectImage.replace("%data%", projects[1].images[2]));


$("#education").prepend(HTMLschoolStart);
$("#education").append(HTMLschoolName.replace("%data%", education[0].name) + HTMLschoolDegree.replace("%data%", education[1].degree));
$("#education").append(HTMLschoolDates.replace("%data%", education[0].dates));
$("#education").append(HTMLschoolLocation.replace("%data%", education[0].location));
$("#education").append(HTMLschoolMajor.replace("%data%", education[0].majors));
$("#education").append(HTMLschoolName.replace("%data%", education[1].name) + HTMLschoolDegree.replace("%data%", education[1].degree));
$("#education").append(HTMLschoolDates.replace("%data%", education[1].dates));
$("#education").append(HTMLschoolLocation.replace("%data%", education[1].location));
$("#education").append(HTMLschoolMajor.replace("%data%", education[1].majors));
$("#education").append(HTMLonlineClasses)
$("#education").append(HTMLonlineTitle.replace("%data%", education[2][0].title) + HTMLonlineSchool.replace("%data%", education[2][0].school));
$("#education").append(HTMLonlineDates.replace("%data%", education[2][0].dates));
$("#education").append(HTMLonlineURL.replace("%data%", education[2][0].website));
$("#education").append(HTMLonlineTitle.replace("%data%", education[2][1].title) + HTMLonlineSchool.replace("%data%", education[2][1].school));
$("#education").append(HTMLonlineDates.replace("%data%", education[2][1].dates));
$("#education").append(HTMLonlineURL.replace("%data%", education[2][1].website));

//console.log(awesomeThoughts)


// TEST SECION HERE:
var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!
    var bothNames = oldName.split(' ');
    var firstLetter = oldName[0][0].toUpperCase()
    var firstName = firstLetter + bothNames[0].slice(1).toLowerCase()
    var lastName = bothNames[1].toUpperCase()
    finalName = firstName + " " + lastName
    
    
    // Don't delete this line!
    return finalName;
};

// Did your code work? The line below will tell you!
console.log(nameChanger(name));


/*
$("#main").append([(299792458 * 100) / (1.0 / 1000000000)])
*/

/*
var formattedName = HTMLheaderName.replace("%data%", myName);
var formattedRole = HTMLheaderRole.replace("%data%", myRole);
var formattedContact = HTMLcontactGeneric.replace("%contact", myContacts);
var formattedMobile = HTMLmobile.replace("%data%", myMobile);
var formattedEmail = HTMLemail.replace("%data%", myEmail);
var formatedLocation = HTMLlocation.replace("%data%", myLocation);
var formattedPic = HTMLbioPic.replace("%data%", myPic);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", myWelcomeMsg);
*/