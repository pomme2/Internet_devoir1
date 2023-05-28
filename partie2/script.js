function addToQueue() {
  let nameInput = document.getElementById("nameInput");
  let queue = document.getElementById("queue");
  if(nameInput.value.trim() !== "") {
      let userItem = document.createElement("li");
      userItem.classList.add("list-group-item", "d-flex", "justify-content-between");

      let userText = document.createElement("span");
      userText.textContent = nameInput.value;

      let buttonGroup = document.createElement("div");

      let commentButton = document.createElement("button");
      commentButton.classList.add("btn", "btn-info", "comment-btn", "me-2");
      commentButton.textContent = "Commenter";
      commentButton.setAttribute("data-bs-toggle", "modal");
      commentButton.setAttribute("data-bs-target", "#commentModal");
      commentButton.addEventListener("click", function() {
          window.currentUserItem = userItem;
      });

      let deleteButton = document.createElement("button");
      deleteButton.classList.add("btn", "btn-danger", "delete-btn");
      deleteButton.textContent = "X";
      deleteButton.setAttribute("data-bs-toggle", "modal");
      deleteButton.setAttribute("data-bs-target", "#deleteModal");
      deleteButton.addEventListener("click", function() {
          window.currentUserItem = userItem;
      });

      buttonGroup.appendChild(commentButton);
      buttonGroup.appendChild(deleteButton);

      userItem.appendChild(userText);
      userItem.appendChild(buttonGroup);

      queue.appendChild(userItem);

      nameInput.value = "";

      let addUserModal = bootstrap.Modal.getInstance(document.getElementById("addModal"));
      addUserModal.hide();
  }
}


function updateComment() {
  let commentInput = document.getElementById("commentInput");
  let comment = commentInput.value.trim();

  if (comment !== "") {
      if (window.currentUserItem) {
          let existingComment = window.currentUserItem.querySelector(".user-comment");

          // Si un commentaire existe, modifier
          if (existingComment) {
              existingComment.textContent = `"${comment}"`;
          } else {
              let commentSpan = document.createElement("span");
              commentSpan.classList.add("user-comment", "ms-2");
              commentSpan.textContent = `"${comment}"`;
              window.currentUserItem.insertBefore(commentSpan, window.currentUserItem.children[1]);
          }
      }
      commentInput.value = "";
      let commentModal = bootstrap.Modal.getInstance(document.getElementById("commentModal"));
      commentModal.hide();
  }
}

function selectUserForComment(userItem) {
  window.currentUserItem = userItem;
  let commentModal = bootstrap.Modal.getInstance(document.getElementById("commentModal"));
  commentModal.show();
}

let commentButtons = document.getElementsByClassName("comment-btn");
for (let i = 0; i < commentButtons.length; i++) {
  commentButtons[i].addEventListener("click", function() {
      let userItem = this.closest(".list-group-item");
      selectUserForComment(userItem);
  });
}

function deleteItem() {
  window.currentUserItem.remove();
  let deleteUserModal = bootstrap.Modal.getInstance(document.getElementById("deleteModal"));
  deleteUserModal.hide();
}
document.getElementById("confirmDeleteButton").addEventListener("click", deleteItem);
