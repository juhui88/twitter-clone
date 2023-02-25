import db from "../../../../lib/db";
import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "../../../../lib/withHandler";
import { withApiSession } from "../../../../lib/withSessino";


async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) { 
    const {id} = req.query // 트위터 아이디값

    const twittInfo = await db.twitt.findUnique({
        where:{
            id: +id
        },
        select:{
            content: true,
            userId:true
        }
    })

    const isLiked = Boolean(await db.fav.findFirst({
      where: {
        twittId: +id,
        userId: req.session.user?.id
      },
      select: {
      id:true
    }
    }))
    res.json({
        ok:true,
        twittInfo,
        isLiked
    })
}

export default withApiSession(
  withHandler({
    methods:["GET"],
    handler,
  })
);