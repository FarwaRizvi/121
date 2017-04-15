// User model based on the structure of github api at
// https://api.github.com/users/{username}
export interface UserModel {
  login: string;
  avatar_url: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
}
