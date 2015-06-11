var x = document.getElementById("form_sample");
var createform = document.createElement('form'); // Create New Element Form
createform.setAttribute("action", "#"); // Setting Action Attribute on Form
createform.setAttribute("method", "post"); // Setting Method Attribute on Form
createform.setAttribute("name", "form"); // Setting Method Attribute on Form
x.appendChild(createform);

var heading = document.createElement('h2'); // Heading of Form
heading.innerHTML = "Contact Me";
createform.appendChild(heading);

var line = document.createElement('hr'); // Giving Horizontal Row After Heading
createform.appendChild(line);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var namelabel = document.createElement('label'); // Create Label for Name Field
namelabel.innerHTML = "Your Name : "; // Set Field Labels
createform.appendChild(namelabel);

var inputelement = document.createElement('input'); // Create Input Field for Name
inputelement.setAttribute("type", "text");
inputelement.setAttribute("name", "vname");
createform.appendChild(inputelement);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var emaillabel = document.createElement('label'); // Create Label for E-mail Field
emaillabel.innerHTML = "Your Email : ";
createform.appendChild(emaillabel);

var emailelement = document.createElement('input'); // Create Input Field for E-mail
emailelement.setAttribute("type", "text");
emailelement.setAttribute("name", "vemail");
createform.appendChild(emailelement);

var emailbreak = document.createElement('br');
createform.appendChild(emailbreak);

var sublabel = document.createElement('label'); // Create Label for Subject Field
sublabel.innerHTML = "Subject : ";
createform.appendChild(sublabel);

var subelement = document.createElement('input'); // Create Input Field for Subject
subelement.setAttribute("type", "text");
subelement.setAttribute("name", "sub");
createform.appendChild(subelement);

var subbreak = document.createElement('br');
createform.appendChild(subbreak);

var messagelabel = document.createElement('label'); // Append Textarea
messagelabel.innerHTML = "Your Message : ";
createform.appendChild(messagelabel);

var texareaelement = document.createElement('textarea');
texareaelement.setAttribute("name", "msg");
createform.appendChild(texareaelement);

var messagebreak = document.createElement('br');
createform.appendChild(messagebreak);

var submitelement = document.createElement('input'); // Append Submit Button
submitelement.setAttribute("type", "submit");
submitelement.setAttribute("name", "submit");
submitelement.setAttribute("value", "Submit");
createform.appendChild(submitelement);

var submitbreak = document.createElement('br');
createform.appendChild(submitbreak);

var errormessages = document.createElement('p'); // Create Paragraph for Errors
errormessages.innerHTML = "";
createform.appendChild(errormessages);