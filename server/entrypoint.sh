#!/bin/bash
# entrypoint.sh

# ビルドプロセスを実行
if [ "$NODE_ENV" = "production" ]; then
  npm run build
fi

# コンテナのメインプロセスを実行（例: npm start）
exec "$@"