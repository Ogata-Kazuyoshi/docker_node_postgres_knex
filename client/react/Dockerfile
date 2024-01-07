FROM node:18.18.0-buster

WORKDIR /app

# COPYしておかないと、idealTreeエラーでnpm installが走らない。そのため、一度自分のディレクトリーをコピーする
# この時ホスト側はDockerfileからの相対パスであることに注意
COPY ./ ./

# npmのキャッシュをクリアするコマンド
RUN npm cache clean --force 
RUN npm install





# CMD ["npm", "start"]
CMD npm run dev