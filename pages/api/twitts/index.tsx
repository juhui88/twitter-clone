import db from "../../../lib/db";
import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "../../../lib/withHandler";
import { withApiSession } from "../../../lib/withSessino";


async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) { 
    const twitts = await db.twitt.findMany(

    );
    res.json({
      ok:true,
      twitts
    })
    
}

export default withApiSession(
  withHandler({
    methods:["GET"],
    handler,
  })
);