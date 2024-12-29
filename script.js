document.getElementById("submit-comment").addEventListener("click", function() {
    var nameBox = document.getElementById("name-box");
    var commentBox = document.getElementById("comment-box");
    var name = nameBox.value.trim();
    var commentText = commentBox.value.trim();
  
    if (name !== "" && commentText !== "") {
      var newComment = document.createElement("div");
      newComment.classList.add("comment");
  
      newComment.innerHTML = "<strong>" + name + "</strong>: " + commentText;
      
      var commentsList = document.getElementById("comments-list");
      commentsList.appendChild(newComment);
      commentsList.style.display = "block";
  
      nameBox.value = "";
      commentBox.value = "";
    } else {
      alert("Vui lòng nhập tên và lời chúc của bạn!");
    }
  });
  