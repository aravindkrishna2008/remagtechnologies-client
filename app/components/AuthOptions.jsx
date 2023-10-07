"use client"

import { useUser, UserButton } from "@clerk/nextjs"
import { useRouter } from "next/navigation"

export default function AuthOptions() {

    let { isSignedIn, user, isLoaded } = useUser()
    let router = useRouter()

    return (
        <>
            {isSignedIn ? ( <UserButton afterSignOutUrl="/"/> ) : ( 
                <div className="flex flex-row items-center justify-center gap-8">
                    <div onClick={router.push("/sign-in")} className="text-[#ABABAB]">Log In</div>
                    <div onClick={router.push("/sign-up")} className="btn bg-[#3C77F7] px-[1.5vw] p-[1vw] flex items-center justify-center text-[#E6E6E6]">
                        Sign Up
                    </div>
                </div>
             ) }
        </>
    )
}