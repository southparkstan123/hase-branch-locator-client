export const server = {
    port: process.env.VUE_APP_SERVER_PORT,
    domainName: process.env.VUE_APP_SERVER_DOMAIN_NAME,
    protocal: process.env.VUE_APP_SERVER_PROTOCAL,
};

export const baseUrl = (server.port) ? `${server.protocal}${server.domainName}:${server.port}` : `${server.protocal}${server.domainName}`;
export const googleMapAPIEndpoint =  process.env.VUE_APP_GOOGLE_MAP_API_ENDPOINT;
export const googleMapAPIKey =  process.env.VUE_APP_GOOGLE_MAP_API_KEY;