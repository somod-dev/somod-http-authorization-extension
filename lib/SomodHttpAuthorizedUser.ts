export type SomodHttpAuthorizedUser = {
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
