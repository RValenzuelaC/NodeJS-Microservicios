module.exports = {
  remoteDB: process.env.REMOTE_DB || false,
  api: {
    port: process.env.API_PORT || 3000,
  },
  post: {
    port: process.env.POST_PORT || 3002,
  },
  jwt: {
    secret: process.env.JWT_SECRET || "notasecret!",
  },
  mysql: {
    host: process.env.MYSQL_HOST || "remotemysql.com",
    user: process.env.MYSQL_USER || "Dr7SjLVBTg ",
    password: process.env.MYSQL_PASS || "gUzoZwjgpd",
    database: process.env.MYSQL_DB || "Dr7SjLVBTg ",
  },
  mysqlService: {
    host: process.env.MYSQL_SRV_HOST || "localhost",
    port: process.env.MYSQL_SRV_PORT || 3001,
  },
  cacheService: {
    host: process.env.CACHE_SRV_HOST || "localhost",
    port: process.env.CACHE_SRV_PORT || 3003,
  },
  redis: {
    host:
      process.env.REDIS_HOST ||
      "redis-16336.c60.us-west-1-2.ec2.cloud.redislabs.com",
    port: process.env.REDIS_PORT || "16336",
    password: process.env.REDIS_PASS || "neQHXSOTeLIoAN1OpUgFJMG0SPyTYH4G",
  },
};
