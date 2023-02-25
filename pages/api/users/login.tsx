import db from "../../../lib/db";
import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "../../../lib/withHandler";
import { withApiSession } from "../../../lib/withSessino";


async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseType>
) {
    const {email, password} = req.body;
    
    const existingUser = await db.user.findUnique({
        where:{
            email
        },
    })
    if(!existingUser) return res.json({
        ok:false
    })
    
    if(existingUser.password === password) {
        req.session.user = {
            id: existingUser.id
        }
        await req.session.save();
        
        res.json({
        ok:true
        })
    }
    
}

export default withApiSession(withHandler({methods : ["POST"], handler}));