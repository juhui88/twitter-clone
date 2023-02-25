import db from "../../../lib/db";
import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "../../../lib/withHandler";
import { withApiSession } from "../../../lib/withSessino";


async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
    const {content} = req.body
    
    const twittInfo = await db.twitt.create({
        data: {
          content,
        user: {
            connect: {
            id: req.session.user?.id
            },
        },
        },
    });
    res.json({
      ok:true,
      twittInfo
    })
    
}

export default withApiSession(
  withHandler({
    methods:["POST"],
    handler,
  })
);