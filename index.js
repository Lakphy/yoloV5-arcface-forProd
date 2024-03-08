const express = require("express");
const app = express();

// 引入 Node-Media-Server 模块
const NodeMediaServer = require("node-media-server");
const nms = new NodeMediaServer({
  rtmp: {
    port: 1935, // 推流端口
    chunk_size: 60000,
    gop_cache: true, // 是否启用 GOP 缓存，缓存关键帧以提高快进、快退时的响应速度，默认为开启；
    ping: 60, // RTMP 连接保持时间，一旦超过这段时间，连接就会断开
    ping_timeout: 30, // 定义 RTMP 服务器不响应 ’ping’ 请求的超时时间（秒），默认为 30 秒
  },
  http: {
    port: 8090, // 拉流端口
    allow_origin: "*", //允许跨域
  },
});

nms.run(); //启动流媒体服务器
