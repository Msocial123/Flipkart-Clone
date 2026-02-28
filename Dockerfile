FROM ubuntu:latest
RUN apt-get update -y 
RUN apt-get install apache2 -y 
WORKDIR /var/www/html 
COPY . /var/www/html/
EXPOSE 83 
ENTRYPOINT apachectl -D FOREGROUND