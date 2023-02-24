
export default function Twitt() {
    return (
    <div className="flex p-4 space-x-3  w-full border-b-[1px]">
        <div>
            <div className="rounded-full w-11 h-11 bg-slate-500"/>
        </div>
        <div className="flex-1">
            <div className="flex">
                <span className="font-bold mr-1">쓴 사람</span>
                <div className="space-x-1">
                    <span className="text-slate-500">@아이디</span>
                    <span className="text-slate-500">·</span>
                    <span className="text-slate-500">9시간</span>            
                </div>
                
            </div>
            <div className="">
                <span>빨간머리 (?)🥕🥕✨✨<br/>
                    추억은 방울방울 💚<br/>
                    버니즈~ 오늘 하루도 화이팅 하세요!🌱
                </span><br/>
                <span className="text-cyan-500">#뉴진스 #혜인 #NEWJEANS</span>
            </div>
            <div className="grid grid-cols-2 gap-1 h-56 my-3">
                <div className="bg-slate-300 rounded-tl-2xl"/>
                <div className="bg-slate-300 rounded-tr-2xl"/>
                <div className="bg-slate-300 rounded-bl-2xl"/>
                <div className="bg-slate-300 rounded-br-2xl"/>  
            </div>
            <div className="flex text-xs text-slate-500 space-x-10">
                <span className="flex space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                    </svg>
                    <span>답글수</span>
                </span>
                <span className="flex space-x-2">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4">
                        <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" fill="currentColor" viewBox="0 0 24 24"  ></path>
                    </svg>
                    <span>리트윗수</span>    
                </span>
                <span className="flex space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                    <span>하트수</span>
                </span>
                <span className="flex space-x-2">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4"><path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z" fill="currentColor" ></path></svg>
                    <span>차트수</span>
                </span>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                    </svg>

                </span>
            </div>
        </div>
    </div>)
}