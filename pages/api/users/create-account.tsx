import db from "../../../lib/db";
import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "../../../lib/withHandler";

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseType>
) {
    const {email, password, userName, userId} = req.body;
    
    const existingUser = await db.user.findUnique({
        where:{email},
    })

    if (existingUser) {
        res.json({
            ok:false,
            exist:"user"
        })
        return
    }

    const existingUserId = await db.user.findUnique({
        where : {userId},
    })
    if(existingUserId){
        res.json({
            ok:false,
            exist:"userId"
        })
    }
    
    const user = await db.user.create({
        data : {
            email,
            password,
            userName,
            userId,
        }
    })
    
    return res.json({
    ok:true,
    })
    
}

export default withHandler({methods:["POST"], handler, isPrivate: false})