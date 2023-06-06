# Utilisation de l'image Nginx de base
FROM nginx

# Nom du responsable
MAINTAINER Axel Seguin <axel.seguin@umontreal.ca>

# Copie des fichiers sources dans le répertoire racine de Nginx
COPY . /usr/share/nginx/html

# Exposition du port 80 pour permettre l'accès HTTP au conteneur
EXPOSE 80


# Commande lancée au démarrage du conteneur
# Ici on démarre ndinx au premier plan
CMD ["nginx", "-g", "daemon off;"]