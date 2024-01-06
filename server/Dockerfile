FROM node:18.18.0-buster

WORKDIR /app

# COPYしておかないと、idealTreeエラーでnpm installが走らない。そのため、一度自分のディレクトリーをコピーする
# この時ホスト側はDockerfileからの相対パスであることに注意
COPY ./ ./

# npmのキャッシュをクリアするコマンド
RUN npm cache clean --force 
RUN npm install

# **エントリーポイントを指定した方法が下記。ただ難しいので、CMDに無理やり２つ書いた方法で最後はデプロイ*********
# # エントリポイントスクリプトをコピー
# COPY entrypoint.sh /usr/local/bin/
# RUN chmod +x /usr/local/bin/entrypoint.sh

# # エントリポイントを設定
# ENTRYPOINT ["entrypoint.sh"]
# ********************************************************************************************



# CMD ["npm", "start"]
CMD npm run build && npm start
