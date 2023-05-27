function resetInputAndCloseModal() {
  document.getElementById("nameInput").value = "";
  $("#exampleModal").modal("hide");
}

function addToQueue() {
  const name = document.getElementById("nameInput").value.trim();
  if (name) {
      createListItem(name);
      resetInputAndCloseModal();
  } else {
      alert("Veuillez entrer un nom!");
  }
}

function createListItem(name) {
  const li = document.createElement("li");
  li.classList.add("list-group-item", "d-flex", "justify-content-between");

  const span = document.createElement("span");
  span.textContent = name;

  const div = document.createElement("div");

  const commentButton = document.createElement("button");
  commentButton.classList.add("btn", "btn-info", "comment-btn", "me-2");
  commentButton.textContent = "Commenter";
  commentButton.addEventListener("click", function() {
    const comment = prompt("Veuillez entrer votre commentaire :");
    if(comment) span.textContent = name + " - " + comment;
  });

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("btn", "btn-danger", "delete-btn");
  deleteButton.textContent = "X";
  deleteButton.addEventListener("click", function() {
    li.remove();
  });

  div.appendChild(commentButton);
  div.appendChild(deleteButton);

  li.appendChild(span);
  li.appendChild(div);

  document.getElementById("queue").appendChild(li);
}

// Ajout des event listeners pour les éléments existants
document.querySelectorAll(".comment-btn").forEach((button) => {
button.addEventListener("click", function() {
  const name = this.parentNode.parentNode.querySelector("span").textContent;
  const comment = prompt("Veuillez entrer votre commentaire :");
  if(comment) this.parentNode.parentNode.querySelector("span").textContent = name + " - " + comment;
});
});

document.querySelectorAll(".delete-btn").forEach((button) => {
button.addEventListener("click", function() {
  this.parentNode.parentNode.remove();
});
});