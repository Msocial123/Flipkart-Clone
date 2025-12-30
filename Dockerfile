#Stage 1 - Trying to Building 
FROM ubuntu:latest 
RUN apt-get update -y 
RUN apt-get install apache2 -y 
WORKDIR /var/www/html 
COPY . . 
# Stage2 
EXPOSE 8083 
ENTRYPOINT apachectl -D FOREGROUND

