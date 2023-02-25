import db from "../../../lib/db";
import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "../../../lib/withHandler";
import { withApiSession } from "../../../lib/withSessino";


async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) { 
    const {id} = req.query // user의 id값
    

    const userInfo = await db.user.findUnique({
        where:{
            id: +id
        },
        select:{
            userName:true,
            userId: true,
        }
    })
    res.json({
        ok:true,
        userInfo
    })
}

export default withApiSession(
  withHandler({
    methods:["GET"],
    handler,
  })
);