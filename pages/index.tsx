import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/layout";
import Recipe from "../components/recipe";
import SideBar from "../components/side-bar";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>햄버거 찾기</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main className="flex items-center justify-center flex-1 h-full">
          <div className="grid w-1/2 grid-cols-7 gap-5 rounded-xl h-4/6">
            <SideBar />
            <Recipe />
          </div>
        </main>
      </Layout>
    </div>
  );
};

export default Home;
