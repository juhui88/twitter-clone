import React, { useEffect } from "react";
import UserBar from "../components/userBar";
import NavBar from "../components/navBar";
import SearchBar from "../components/searchBar";
import Twitt from "../components/twitt";
import useSWR from "swr";
import useUser from "../lib/useUser";
import useMutation from "../lib/useMutation";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Hone() {
  const {data} = useSWR("api/twitts");
  const router = useRouter();

  const onClick = (id)=> {
    router.push(`tweet/${id}`)
  }
  useEffect(()=>{

  },[data])
  return (
  <div className="flex justify-center">
    <div className="relative flex-1">
      <NavBar />
    </div>
    <div className="">
      <SearchBar>
        {data?.twitts.map((t,i) => 
        <div className="cursor-pointer hover:bg-slate-100 hover:duration-150" onClick={()=>onClick(t.id)}>
          <Twitt key={i} id={t.userId} content={t.content}/>
        </div>
         )}
      </SearchBar>
    
    </div>
    <div className="flex-1">
      <UserBar/>
    </div>
    
  </div>  
  )
}