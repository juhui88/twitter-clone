import Link from "next/link";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import useMutation from "../lib/useMutation";

interface MutationResult {
  ok: boolean;
}

interface TwittForm {
    content:String
}


export default function UserBar() {
    const {data} = useSWR("api/users/me")
    const {register,handleSubmit, reset} = useForm();
    const [uploadTwitt, {loading, data:twittData}] = useMutation("api/twitts/upload")

    const onValid = (data:TwittForm) => {
        if(loading) return
        uploadTwitt(data)
        reset();
    }
    return (
    <div className="m-4 p-2 w-80 border-[1px] rounded-xl space-y-2">
        {data?.ok ? 
        <div className=" " >
            <div className=" flex space-x-3 py-3">
                <div className="rounded-full w-11 h-11 bg-slate-500"/>
                <div className="grid">
                    <span className="font-bold">
                    {data?.profile.userName}
                    </span>
                    <span className="text-slate-500 text-sm">
                        @{data?.profile.userId}
                    </span>
                </div>
            </div>
            <form onSubmit={handleSubmit(onValid)} className="flex flex-col items-center space-y-2">
                <textarea className="w-full h-32" {...register("content")} placeholder="What's happening?"/>
                <button className="bg-[#3BA9EE] rounded-xl h-10 w-20 text-white font-semibold">Twitt</button>
            </form>
            


        </div>
        :<div className="">
            <div>
                <span className="font-bold text-lg">트위터에 처음이세요?</span>
            </div>
            <div>
                <span className="text-sm">지금 가입해서 나에게 맞춤 설정된 타임라인을 만들어 보세요!</span>
            </div>
            <div className="flex flex-col space-y-3">
                <Link href="/log-in">
                <div  className="h-10 flex items-center justify-center border rounded-xl w-full text-center hover:bg-gray-100 hover:duration-300 cursor-pointer font-bold">
                    로그인하기
                </div>
                </Link>
                <Link href="create-account">
                <div className="h-10 flex items-center justify-center border rounded-xl w-full text-center hover:bg-gray-100 hover:duration-300 cursor-pointer font-bold">
                    계정 만들기
                </div> 
                </Link>
            </div>    
        </div>
        }
        
        
    </div>)
}