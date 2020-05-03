FROM nginx
LABEL maintainer="vivekanand.senthil@gmail.com"

EXPOSE 80 443

VOLUME /usr/share/nginx/html

VOLUME /etc/nginx