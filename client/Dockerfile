FROM ubuntu:20.04
RUN apt-get update -y && \
    apt-get install -y nginx
COPY ./react/dist /var/www/html
CMD ["nginx","-g","daemon off;"]