import Link from "next/link";
import Head from "next/head";

export default function Home() {
  const links = [
    {
      social: "Github",
      href: "https://github.com/",
    },
    {
      social: "CodePen",
      href: "https://codepen.io/",
    },
    {
      social: "Email",
      href: "mailto:",
    },
  ];
  return (
    <>
      <Head>
        <title>Linktree Clone</title>
      </Head>
      <div className="flex flex-col items-center text-center">
        <div className="my-7">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
            width={96}
            height={96}
            className="rounded-full"
          />
          <p className="font-semibold mt-1">@username</p>
        </div>
        {links.map((link, index) => (
          <Link
            href={link.href}
            index={index}
            className="`px-6 py-1 bg-transparent rounded-lg border-2 border-white-500 my-2 hover:bg-sky-700 hover:border-sky-700 text-lg w-1/3"
          >
            {link.social}
          </Link>
        ))}
        <p>
          powered by <Link href={"https://vercel.com/"}>Vercel</Link>&#10084;
          built with <Link href={"https://nextjs.org/"}>NextJS</Link>&#11088;
        </p>
      </div>
    </>
  );
}
