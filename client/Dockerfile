FROM ubuntu:20.04
RUN apt-get update -y && \
    apt-get install -y nginx
ENV VITE_NODE_ENV=production
COPY dist /var/www/html
CMD ["nginx","-g","daemon off;"]