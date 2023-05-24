import { SettingModal } from "@/components/SettingModal";
import User from "@/components/user"
import { useUser } from "@auth0/nextjs-auth0/client"
import { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";

export default function Home() {
  const { user } = useUser()
  return (
    <section className="bg-gray-50">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        {!! user ? (
          <>
            <User user={user}/>
          </>
        ) : (
          <div className="relative flex items-center justify-center py-16 bg-gray-50 sm:py-24 lg:py-32 mb-16">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 lime:from-neutral-700 dark:to-neutral-800"
                aria-hidden="true"></div>
            <div className="relative px-4 sm:px-6 lg:px-8">
              <div className="mx-auto text-lg text-center max-w-4xl">
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  <span className="block mb-6">I am learning Tailwind Elements</span>
                  <span className="block text-3xl">and it's awesome</span>
                </h1>
                <p className="mt-6 text-xl text-teal-50 max-w-3xl mb-6">
                  Tailwind Elements is a fantastic library, offering reusable UI components that save development time, ensure
                  design consistency, and boost productivity. Its seamless integration with Tailwind CSS enables effortless
                  customization.
                </p>

                <a role="button" href="https://tailwind-elements.com/learn/te-foundations/basics/introduction/" target="_blank"
                  className="inline-block rounded bg-neutral-50 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]">
                  Learn with me
                </a>

              </div>
            </div>
          </div>
        ) !!}
        
      </div>
    </section>
  )
}
