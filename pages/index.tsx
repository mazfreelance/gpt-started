import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { FormEvent, useState } from 'react'
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [quote, setQuote] = useState("")
  const [quoteLoading, setQuoteLoading] = useState(false)
  const [quoteLoadingError, setQuoteLoadingError] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const prompt = formData.get("prompt")?.toString().trim()

    if(prompt) {
      try {
        setQuote("")
        setQuoteLoadingError(false)
        setQuoteLoading(true)

        const response = await fetch("/api/openai?prompt=" + encodeURIComponent(prompt))
        const body = await response.json()
        setQuote(body.quote)
      } catch (error) {
        console.log("🚀 ~ file: index.tsx:31 ~ handleSubmit ~ error:", error)
        setQuoteLoadingError(true)
        setQuoteLoading(false)
      } finally {
        setQuoteLoading(false)
      }
    }
  }
  return (
    <>
      <Head>
        <title>Dark Jokes AI - Create dark jokes quotes</title>
        <meta name="description" content="by mohdazmin.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="bg-gray-50">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Dark Jokes AI <sub className=' text-sm'>powered by GPT-3</sub>
            </h2>

            <p className="hidden text-gray-500 sm:mt-4 sm:block">
            Enter a topic and the AI will generate a dark jokes.
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-xl">
            <form className="sm:flex sm:gap-4" onSubmit={ handleSubmit }>
              <div className="sm:flex-1">
                <label className="sr-only">Email</label>

                <input
                  id="prompt" 
                  name='prompt' 
                  type="text" 
                  placeholder="eg: potatoes, cat, ..." 
                  maxLength={100}
                  className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400"
                />
              </div>

              <button
                disabled={quoteLoading}
                type="submit"
                className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-blue-500 hover:bg-blue-700 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
              >
                <span className="text-sm font-medium"> Generate </span>

                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </form>
            
            { quoteLoading && 
              <div className="flex items-center justify-center mt-3">
                <div className="border border-t-8 border-blue-200 rounded-full w-10 h-10 animate-spin"></div>
              </div>
            }
            { quoteLoadingError && 
              <div className="flex items-center justify-center mt-3">
              "Something went wrong. Please try again."
            </div>}
            { quote && 
              <blockquote className="border-l-4 border- border-sky-500 p-4 my-4">
                <p className="italic font-medium text-lg">{quote}</p>
              </blockquote>
            }
          </div>
          
        </div>
      </section>
    </>
  )
}
