import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
       <html lang="en">
        <body className={inter.className}>
          <img
            src="starry-bg.jpeg"
            className="fixed -z-10 h-[100vh] w-[100vw] opacity-[0.1]"
          />
          <img src="bg.png" className="fixed h-screen w-screen -z-10 opacity-[0.8]" />

          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

