FROM node:18.18.0-buster

WORKDIR /app

# COPYしておかないと、idealTreeエラーでnpm installが走らない。そのため、一度自分のディレクトリーをコピーする
# この時ホスト側はDockerfileからの相対パスであることに注意
COPY ./ ./

# npmのキャッシュをクリアするコマンド
RUN npm cache clean --force 
RUN npm install

# エントリポイントスクリプトをコピー
COPY entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/entrypoint.sh

# # NODE_ENVがproductionの場合のみnpm run buildを実行
# RUN if [ "$NODE_ENV" = "production" ]; then npm run build; fi
# エントリポイントを設定
ENTRYPOINT ["entrypoint.sh"]



CMD ["npm", "start"]
