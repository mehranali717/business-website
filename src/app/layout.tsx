import type { Metadata } from "next";
import { Roboto, Sora, Raleway } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import TopNav from "@/components/TopNav";
import { ThemeProvider } from "@/components/theme-provider";
import Head from "next/head";
import Script from "next/script";
import SuccessSolution from "@/components/success-solution";
import Footer from "@/components/footer";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const sora = Sora({
  weight: ["100", "300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const raleway = Raleway({
  weight: ["100", "300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

export const sabor = localFont({
  src: "../../public/fonts/Sabor-SSK.ttf",
  variable: "--font-sabor",
});

export const saborDisplaySSK = localFont({
  src: "../../public/fonts/SaborDisplaySSK.ttf",
  variable: "--font-saborDisplaySSK",
});

export const metadata: Metadata = {
  title: "Flexlab",
  description: "Unlocking Ideas with Intelligent Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${roboto.className} ${sora.variable} ${sabor.variable} ${saborDisplaySSK.variable} ${raleway.className}`}
      >
        <Head>
          <Script
            dangerouslySetInnerHTML={{
              __html: `
            !function () {
              var reb2b = window.reb2b = window.reb2b || [];
              if (reb2b.invoked) return;
              reb2b.invoked = true;
              reb2b.methods = ["identify", "collect"];
              reb2b.factory = function (method) {
                return function () {
                  var args = Array.prototype.slice.call(arguments);
                  args.unshift(method);reb2b.push(args);
                  return reb2b;
                };
              };
              for (var i = 0; i < reb2b.methods.length; i++) {
                var key = reb2b.methods[i];
                reb2b[key] = reb2b.factory(key);
              }
              reb2b.load = function (key) {
                var script = document.createElement("script");
                script.type = "text/javascript";
                script.async = true;
                script.src = "https://s3-us-west-2.amazonaws.com/b2bjsstore/b/" + key + "/reb2b.js.gz";
                var first = document.getElementsByTagName("script")[0];
                first.parentNode.insertBefore(script, first);
              };
              reb2b.SNIPPET_VERSION = "1.0.1";
              reb2b.load("ZQO92DHE0DN7");
            }();
          `,
            }}
          />
        </Head>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="w-full flex flex-col min-h-dvh h-full bg-[#0E0C15] dark:bg-[#0E0C15]">
            <TopNav />
            {children}
            <SuccessSolution />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
