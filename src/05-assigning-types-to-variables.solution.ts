import { expect, it } from "vitest";

type User = {
  id: number;
  firstName: string;
  lastName: string;
} & UserRoleAttributes;

type UserRoleAttributes =
  | {
      role: "admin";
      adminPassword: string;
    }
  | {
      role: "user";
    }
  | {
      role: "super-admin";
      superAdminPassword: string;
    };

type Role = UserRoleAttributes["role"];
/**
 * How do we ensure that defaultUser is of type User
 * at THIS LINE - not further down in the code?
 */
const role: Role = "admin";
const defaultUser: User = {
  id: 1,
  firstName: "Matt",
  lastName: "Pocock",
  role: role,
  adminPassword: "bfsjdbvfjk",
};

const getUserId = (user: User) => {
  return user.id;
};

it("Should get the user id", () => {
  expect(getUserId(defaultUser)).toEqual(1);
});
