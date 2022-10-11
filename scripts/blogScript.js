//BLOG COMMENTS

//INITIAL PSEUDOCODE:

//pull form, name, message from html
//find a way to include date comment was made

//use an event listener to capture and find value of name and message user inputs

//display these values with hard coded comments (append a new div to .commentSection div)

//Bonus stuff: 
//fix date to match design brief
//add bottom yellow border to every second comment
//don't let user hit submit unless they have inputed info into all fields


//PROCESS PSEUDOCODE:


//Grab needed elements from page
const commentForm = document.querySelector('.commentForm');
const userName = document.querySelector('input[type=text]');
const userComment = document.querySelector('textarea');
const commentSection = document.querySelector('.commentSection');

//Check to make sure they're all appearing:
// console.log(commentForm);
// console.log(userName);
// console.log(userComment);
// console.log(commentSection);

//Add event listener to form to capture user input values when user hits submit and then display those inputs on the page using the css styling already in place

commentForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const nameInput = userName.value;
    const commentInput = userComment.value;

    //create new div with a class of "comment" for each new comment
    const newComment = document.createElement('div');
    newComment.classList.add('comment');

    //created div for newComment, append this div on commentSection 
    commentSection.append(newComment);

    //for js to match original html/css, within newComment div, there needs to be two more divs, one for the user avatar img and one for the input values (ie the user name, comment and date they commented)

    const commentAvatar = document.createElement('div');
    commentAvatar.classList.add('commentAvatar');
    const avatarImg = document.createElement('img');
    avatarImg.src = "./assets/avatar-placeholder.png";
    commentAvatar.appendChild(avatarImg);
    newComment.appendChild(commentAvatar);

    const commentContent = document.createElement('div');
    commentContent.classList.add('commentContent');

    const date = new Date();
    const postDate = date.toDateString();
    const nameA = document.createElement('a');
    nameA.textContent = `${postDate} by ${nameInput}`;
    commentContent.appendChild(nameA);

    const commentP = document.createElement('p');
    commentP.classList.add('commentContent');
    commentP.textContent = `${commentInput}`;
    commentContent.appendChild(commentP);

    newComment.appendChild(commentContent);


    //reset form input values after sumbit so form is empty for next user
    commentForm.reset();
});