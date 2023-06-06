$(document).ready(function () {
  let count = 0;

  // Ajouter un utilisateur à la file d'attente
  $("#addModal .btn-primary").click(function () {
      var userName = $("#nameInput").val();
      if (userName === '') {
          alert('Veuillez entrer votre nom.');
          return;
      }
      count++;

      var newUser = $("<li class='list-group-item d-flex justify-content-between align-items-center'>"
                      + userName
                      + "<span id='comment-" + count + "' class='comment-text mx-3'></span>"
                      + "<div>"
                          + "<button type='button' class='btn btn-info comment-btn me-2' data-bs-toggle='modal' data-bs-target='#commentModal' data-id='" + count + "'>Commenter</button>"
                          + "<button type='button' class='btn btn-danger delete-btn'>X</button>"
                      + "</div>"
                  + "</li>");

      $("#queue").append(newUser);
      $("#addModal").modal('hide');
      $("#nameInput").val('');
  });

  // Supprimer un utilisateur de la file d'attente
  $(document).on('click', '.delete-btn', function () {
      $(this).closest('li').remove();
  });

  // Ouvrir le modal de commentaire et pré-remplir le champ de commentaire avec le commentaire existant
  $(document).on('click', '.comment-btn', function () {
      let id = $(this).data('id');
      let existingComment = $("#comment-" + id).text();
      $("#commentInput").val(existingComment.replace(/"/g, ''));
      $("#commentModal .btn-primary").data('id', id); 
  });

  // Ajouter ou modifier un commentaire
  $("#commentModal .btn-primary").click(function () {
      let id = $(this).data('id');
      let comment = $("#commentInput").val();

      // Ajouter le commentaire à côté du nom de l'utilisateur
      $("#comment-" + id).text('"' + comment + '"');

      // Fermer le modal et réinitialiser le champ de commentaire
      $("#commentModal").modal('hide');
      $("#commentInput").val('');
  });
});
