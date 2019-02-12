var details = document.getElementById("details");
var discussion = document.getElementById("discussion");
var activity = document.getElementById("activity");

var c = document.getElementById("comment-box");
var s = document.getElementById("share-box");


function hideDetailsView(){
    details.classList.remove("db");
    details.classList.add("dn");
}

function hideDiscussionView(){
    discussion.classList.remove("db");
    discussion.classList.add("dn");
}

function hideActivityView(){
    activity.classList.remove("db");
    activity.classList.add("dn");
}

function detailsView() {
    details.classList.remove("dn");
    details.classList.add("db");

    console.log(activity.classList);

    hideDiscussionView();
    hideActivityView();
}

function discussionView() {
    discussion.classList.remove("dn");
    discussion.classList.add("db");

    hideDetailsView();
    hideActivityView();
}

function activityView() {
    activity.classList.remove("dn");
    activity.classList.add("db");
    console.log(activity.classList);

    hideDetailsView();
    hideDiscussionView();
}

function commentsView(){
    c.classList.remove("dn");
    c.classList.add("db");

}
function shareView(){
    s.classList.remove("dn");
    s.classList.add("db");

}
