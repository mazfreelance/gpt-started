import Link from "next/link";
import React from "react";
import { FaCoins } from "react-icons/fa";

export const SideBar = ({ children }: any) => {
    return (
        <div className="grid grid-cols-[300px_1fr] h-screen max-h-screen">
            <div className="flex flex-col text-white overflow-hidden">
                <div className="bg-slate-800 border-red-600 p-3">
                    <Link className="bg-green-500 tracking-wider w-full text-center font-bold cursor-pointer uppercase px-4 py-2 rounded-md hover:bg-green-600 transition-colors block" href="/posts/new">
                        New Post
                    </Link>
                    <Link className="block mt-2 text-center" href="/token-topup">
                        <FaCoins className="text-yellow-500 inline"/>
                        <span className="pl-1">0 tokens available</span>
                    </Link>
                </div>
                <div className="flex-1 overflow-auto bg-gradient-to-b from-slate-800 to-cyan-800 p-3">
                    list of posts
                </div>
                <div className="bg-cyan-800 flex items-center gap-2 border-t">

                </div>
            </div>
            { children }
        </div>
    );
};
