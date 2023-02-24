import Link from "next/link";

export default function UserBar() {
    return (
    <div className="m-4 p-2 w-80 border-[1px] rounded-xl space-y-2">
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
        
    </div>)
}