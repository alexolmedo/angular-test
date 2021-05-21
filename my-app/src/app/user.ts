export interface User {
  id?: number;
  avatar_url: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  login: string;
  html_url: string;
  name: string;
  company: string;
  location: string;
  email: string;
  hireable: boolean;
}
