import { SideBar } from "@/components/layouts"
import { withPageAuthRequired } from "@auth0/nextjs-auth0"

export default function NewPost(props: any) {
  console.log("🚀 ~ file: new.tsx:3 ~ NewPost ~ props:", props)
  return (
    <div>
      <h1>this is new post page.</h1>
    </div>
  )
}

NewPost.getLayout = function getLayout(page: any, pageProps: any) {
  return <SideBar {...pageProps}>{page}</SideBar>
}

export const getServerSideProps = withPageAuthRequired();
