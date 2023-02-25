import { withIronSessionApiRoute } from "iron-session/next"

const cookieOptions = {
    cookieName: "twitter",
    password: ";N3`a^B.g6:MT7,f;}e`>syFsb=dd-*q"
}

export function withApiSession(fn : any) {
    return withIronSessionApiRoute(fn, cookieOptions)
}