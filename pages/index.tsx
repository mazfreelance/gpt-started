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
      <main className="flex flex-col items-center m-auto pl-16 pt-4 min-w-[600px] text-center">
        <h1 className="text-3xl">Dark Jokes AI</h1>
        <h2 className="text-lg">powered by GPT-3</h2>
        <div>
          Enter a topic and the AI will generate a dark jokes.
        </div>
        <form className="w-full max-w-lg" onSubmit={ handleSubmit }>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Create dark jokes quote about...
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="prompt" name='prompt' type="text" placeholder="eg: potatoes, cat, ..." maxLength={100}/>
          </div>
          <div className="flex items-center justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" disabled={quoteLoading}>
              Generate
            </button>
          </div>
        </form>
        { quoteLoading && 
          <div className="flex items-center justify-center mt-3">
            <div className="border border-t-8 border-blue-200 rounded-full w-10 h-10 animate-spin"></div>
          </div>
        }
        { quoteLoadingError && "Something went wrong. Please try again."}
        { quote && 
          <blockquote className="border-l-4 border- border-sky-500 p-4 my-4">
            <p className="italic font-medium text-lg">{quote}</p>
          </blockquote>
        }
      </main>
    </>
  )
}
