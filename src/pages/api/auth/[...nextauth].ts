import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import {query} from 'faunadb'

import { fauna } from '../../../services/fauna'

export default NextAuth({
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
            scope: 'read:user'
        }),
    ],
    callbacks: {
        async signIn(user, account, progile) {
            const { email } = user;

            try { await fauna.query(
                query.Create(
                    query.Collection('users'),
                    { data: {email} }
                )
            )

            return true } catch {
                return false
            }
        }
    }
})