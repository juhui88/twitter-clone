import db from "../../../lib/db";
import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "../../../lib/withHandler";
import { withApiSession } from "../../../lib/withSessino";


async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseType>
) {
    console.log("여기me api", req.session)

    const profile = await db.user.findUnique({
        where: { id: req.session.user?.id },
    });
    if(!profile) {
        res.json({
            ok:false
        })
        return
    }
    res.json({
        ok: true,
        profile,
    });
}

export default withApiSession(withHandler({methods : ["GET"], handler}));