import NextAuth from "next-auth/next";
import { GithubProfile } from "next-auth/providers/github";

declare module 'next-auth' {

    interface Session {
        user: {
            name: string
            email: string
            image: string
            githubProfile: GithubProfile
        }
    }
}