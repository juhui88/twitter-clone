import { useRouter } from "next/router";
import useSWR from "swr";
import Twitt from "../../components/twitt";
import useMutation from "../../lib/useMutation";

export default function TwittDetail(){
    const router = useRouter();
    const {data} = useSWR(router.query.id ? `/api/twitts/${router.query.id}`: null )


    return (
        <div className="flex justify-center">
            <Twitt id ={data?.twittInfo?.userId} content={data?.twittInfo?.content} />
        </div>
    )
}