const showComment = document.getElementById('show-btn');
const hideComment = document.getElementById('hide-btn');
const commentSection = document.getElementById('comment-section')

function show() {
    commentSection.classList.remove("hide");
    hideComment.classList.remove("hide");
    showComment.classList.add("hide");
};

function hide() {
    commentSection.classList.add("hide");
    showComment.classList.remove("hide");
    hideComment.classList.add("hide");
};

showComment.addEventListener("click", show);
hideComment.addEventListener("click", hide);