import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import useMutation from "../lib/useMutation";

interface MutationResult {
  ok: boolean;
  exist?: string;
}

interface accountForm {
    email:string;
    password:string;
    userName: string;
    userId: string;
}
export default function CreateAccount() {
    const router = useRouter();
    const {register, handleSubmit, formState:{errors}, reset, setError}= useForm();
    const [createAccount, {loading, data}] = useMutation<MutationResult>("api/users/create-account");
    
    const onValid =(accountInfo:accountForm) => {
        console.log(accountInfo)
        createAccount(accountInfo)
    }

    useEffect(()=>{
        if(data?.ok){
            alert("환영합니다! 로그인창으로 이동합니다")
            router.push("/log-in")

        }
        if(data?.ok === false){
            if(data?.exist === "user"){
                alert("이미 가입된 유저입니다")
                router.push("/log-in")
            }else {
                setError("userId", {message:"이미 존재하는 아이디 입니다"}, {shouldFocus:true})
            }

        }
    },[data,router])

    return(
    <div className="flex flex-col w-screen h-screen  items-center">
        <div className="flex py-20 space-x-5">
            <svg viewBox="328 355 335 276" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                <path d="
                M 630, 425
                A 195, 195 0 0 1 331, 600
                A 142, 142 0 0 0 428, 570
                A  70,  70 0 0 1 370, 523
                A  70,  70 0 0 0 401, 521
                A  70,  70 0 0 1 344, 455
                A  70,  70 0 0 0 372, 460
                A  70,  70 0 0 1 354, 370
                A 195, 195 0 0 0 495, 442
                A  67,  67 0 0 1 611, 380
                A 117, 117 0 0 0 654, 363
                A  65,  65 0 0 1 623, 401
                A 117, 117 0 0 0 662, 390
                A  65,  65 0 0 1 630, 425
                Z" fill="#3BA9EE" />
            </svg>
            <span className="text-[#3BA9EE] font-extrabold text-3xl">Twitter 시작하기</span>
        </div>
        <form onSubmit={handleSubmit(onValid)} className=" border-[1px] p-10 rounded-xl bg-white shadow-lg">
            <div className="mb-5">
                <span className="text-2xl font-bold">계정을 생성하세요</span>
            </div>
            
            <div className="grid w-96 gap-10">
                <div className="relative ">
                    <div className=" flex items-center">
                        <input required className="peer border-[1px] h-16 rounded-xl focus:outline-none focus:ring focus:ring-[#3BA9EE] w-96 pl-3 pt-5" {...register("email", {required:"이메일을 입력해주세요"})}/>
                        <span className="absolute left-2 top-5 text-gray-600  peer-focus:top-2 peer-focus:text-gray-400 peer-focus:text-sm  peer-focus:duration-300 
                         peer-valid:top-2 peer-valid:text-gray-400 peer-valid:text-sm
                        ">
                            이메일
                        </span>
                    </div>
                    <div>
                        <span className="text-xs">{errors?.email?.message}</span>
                    </div>
                </div>
                <div className="relative ">
                    <div className=" flex items-center">
                        <input required className="peer border-[1px] h-16 rounded-xl focus:outline-none focus:ring focus:ring-[#3BA9EE] w-96 pl-3 pt-5" {...register("password", {required:"비밀번호를 입력해주세요"})}/>
                        <span className="absolute left-2 top-5 peer-focus:top-2 peer-focus:text-gray-400 peer-focus:text-sm  peer-focus:duration-300 peer-valid:top-2 text-gray-600 peer-valid:text-gray-400 peer-valid:text-sm">
                            비밀번호
                        </span>
                    </div>
                    <div>
                        <span className="text-xs">{errors?.password?.message}</span>
                    </div>
                </div>
                <div className="relative ">
                    <div className=" flex items-center">
                        <input required className="peer border-[1px] h-16 rounded-xl focus:outline-none focus:ring focus:ring-[#3BA9EE] w-96 pl-3 pt-5" {...register("userName", {required:"사용자 이름을 입력해주세요"})}/>
                        <span className="absolute left-2 top-5 peer-focus:top-2 peer-focus:text-gray-400 peer-focus:text-sm  peer-focus:duration-300 text-gray-600 peer-valid:top-2 peer-valid:text-gray-400 peer-valid:text-sm">
                            사용자 이름
                        </span>
                    </div>
                    <div>
                        <span className="text-xs">{errors?.userName?.message}</span>
                    </div>
                </div>
                
                <div className="relative ">
                    <div className=" flex items-center">
                        <input required className="peer border-[1px] h-16 rounded-xl focus:outline-none focus:ring focus:ring-[#3BA9EE] w-96 pl-3 pt-5" {...register("userId", {required:"사용자 아이디를 입력해주세요"})}/>
                        <span className="absolute left-2 top-5 peer-focus:top-2 peer-focus:text-gray-400 peer-focus:text-sm  peer-focus:duration-300 text-gray-600 peer-valid:top-2 peer-valid:text-gray-400 peer-valid:text-sm">
                            사용자 아이디
                        </span>
                    </div>
                    <div>
                        <span className="text-xs">{errors?.userId?.message}</span>
                    </div>
                </div>
            <button className="h-14 rounded-xl bg-[#3BA9EE] text-white font-bold text-xl hover:bg-white hover:ring-2 hover:ring-[#3BA9EE] hover:text-[#3BA9EE]">시작하기!</button>
            </div>
        
            
        </form>
        
    </div>)
}