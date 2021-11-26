FROM nginx:1.19.1-alpine

COPY default.conf /etc/nginx/conf.d/

RUN mkdir /usr/share/docs
COPY src/main/vuejs/dist/ /usr/share/docs/

COPY entrypoint.sh .
RUN chmod +x entrypoint.sh

CMD ["sh", "-c", "./entrypoint.sh && nginx -g 'daemon off;'"]
