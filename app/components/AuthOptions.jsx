"use client"

import { useUser, SignedIn, SignedOut, SignInButton, UserButton, SignUpButton } from "@clerk/nextjs"
import { useRouter } from "next/navigation"

export default function AuthOptions() {

    let { isSignedIn, user, isLoaded } = useUser()
    let router = useRouter()

    if(!isLoaded) return <>Loading </>

    return (
        <>
            <SignedIn>
                <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <SignedOut>
                <div className="flex flex-row items-center justify-center gap-8">
                    <div className="btn bg-[#3C77F7] px-[1.5vw] p-[1vw] flex items-center justify-center text-[#E6E6E6]">
                        <SignInButton mode="modal">
                            <p className="items-center justify-center text-[#E6E6E6]">Sign In</p>
                        </SignInButton>
                    </div>
                </div> 
            </SignedOut>
        </>
    )
}