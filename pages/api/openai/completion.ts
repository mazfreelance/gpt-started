// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Configuration, OpenAIApi } from 'openai'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const openaikey = JSON.parse(req.body).apikey
  
  const configuration = new Configuration({
    // apiKey: process.env.OPENAI_API_KEY
    apiKey: openaikey ?? ''
  })

  const openai = new OpenAIApi(configuration)

  const prompt = req.query.prompt

  if(!prompt) {
    return res.status(400).json({ error: true, message: 'Prompt Missing' })
  }

  if(prompt.length > 100) {
    return res.status(400).json({ error: true, message: 'Prompt too long' })
  }

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Create a dark jokes quote based on the following topic.\n
      Topic: ${prompt}\n
      Dark jokes quote:`,
      max_tokens: 500,
      temperature: 1,
      presence_penalty: 0,
      frequency_penalty: 0,
    })

    const quote = completion.data.choices[0].text;
    
    return res.status(200).json({ quote })
  } catch (error : any) {
    return res.status(error.response.status).json({ error: true, message:error.response.data.error.message, openaikey})
  }
}
