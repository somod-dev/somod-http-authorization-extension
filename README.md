# somod-http-authorization-extension

This extension provides a middleware specification to implement the authorization strategy for serverless functions of type _HttpApi_.

> The exact authorization strategy has to be implemented by extending the authorization middleware in this module.

Read more about [Serverless Middlewares](https://docs.somod.dev/reference/main-concepts/serverless/middlewares) in somod documentation.

## Middleware Context

Access the authorized user from [SomodMiddlewareContext](https://docs.somod.dev/reference/main-concepts/serverless/middlewares) using the key `somod-http-authorized-user`.

### Type of `somod-http-authorized-user`

```typescript
type SomodHttpAuthorizedUser = {
  id: string;
  attributes: {
    // inspired from openid connect speficication
    // https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims
    sub?: string;
    name?: string;
    given_name?: string;
    family_name?: string;
    middle_name?: string;
    nickname?: string;
    preferred_username?: string;
    profile?: string;
    picture?: string;
    website?: string;
    email?: string;
    email_verified?: boolean;
    gender?: string;
    birthdate?: string;
    zoneinfo?: string;
    locale?: string;
    phone_number?: string;
    phone_number_verified?: boolean;
    address?: string;
    updated_at?: string;
  } & Record<string, unknown>; // the authorization implementation can add more attributes
};
```

## Implementing Authorization

Extend the Authorization middleware in this module to provide the actual implementation of authorization.

> Read the [Serverless Template.yaml](https://docs.somod.dev/reference/main-concepts/serverless/template.yaml) documentation to understand how to extend a resource from another SOMOD module

The implementation can decide how to authorize the incoming request. The implementation should take care of the performance and scaling of the authorization strategy it uses.

## Issues

The project issues, features, and milestones are maintained in this GitHub repo.

Create issues or feature requests at https://github.com/somod-dev/somod-http-authorization-extension/issues

## Contributions

Please read our [CONTRIBUTING](https://github.com/somod-dev/somod/blob/main/CONTRIBUTING.md) guide before contributing to this project.
