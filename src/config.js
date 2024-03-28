export const server = {
  port: process.env.VUE_APP_SERVER_PORT,
  domainName: process.env.VUE_APP_SERVER_DOMAIN_NAME,
  protocal: process.env.VUE_APP_SERVER_PROTOCAL,
};

export const baseUrl = (server.port) ? `${server.protocal}${server.domainName}:${server.port}` : `${server.protocal}${server.domainName}`;
export const apiKey = process.env.VUE_APP_API_KEY;