import { Middleware } from "somod";

const Authorizer: Middleware = async () => {
  throw new Error(
    "This Middleware must to be extended. Refer https://github.com/somod-dev/somod-http-authorization-extension#implementing-authorization"
  );
};

export default Authorizer;
