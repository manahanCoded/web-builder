"use client"
import { cn } from "@/lib/utils";

const MaxWidthWrapper = ({className, children})=>{
    return (
        <div className={cn(`w-auto h-auto mx-auto  px-3.5 md:px-8 lg:px-24 xl:px-32`, className)}>
            {children}
        </div>
    )
}

export default MaxWidthWrapper