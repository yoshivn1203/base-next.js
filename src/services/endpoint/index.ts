const prefixAuth: string = '/core';
const prefixBase: string = '/v1';

const endpointAuth = {
  LOGIN: `${prefixAuth}/login`,
  ME: `${prefixAuth}/me`,
};

const endpointBase = {
  TEST: `${prefixBase}/category/menu`,
};

export { endpointAuth, endpointBase };
