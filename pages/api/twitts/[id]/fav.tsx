import db from "../../../../lib/db";
import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "../../../../lib/withHandler";
import { withApiSession } from "../../../../lib/withSessino";


async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {id} = req.query

  const alreadyExists = await db.fav.findFirst({
    where: {
        twittId: +id,
        userId: req.session.user?.id
    }
  })
  console.log(alreadyExists);
   if (alreadyExists){
    await db.fav.delete({
        where:{
            id: alreadyExists.id,
        }
    })
   } else {
     await db.fav.create({
      data: {
        user: {
          connect: {
            id: req.session.user?.id
          },
        },
        twitt: {
          connect: {
            id: +id.toString(),
          },
        },
      },
    });
   } 

  res.json({ ok: true });
}

export default withApiSession(
  withHandler({
    methods: ["POST"],
    handler,
  })
);