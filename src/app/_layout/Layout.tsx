import { Inter } from "next/font/google";

// Using Inter as a fallback font-family
const inter = Inter({ subsets: ["latin"] });

const UniversalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      lang="en"
      className={`${inter.className} font-raleway bg-background text-text min-h-screen max-w-screen-sm p-4 text-base font-normal`}
    >
      <body>
        <div className="border">Logo with nav to home page</div>
        <div className="border">Navbar: Home | Account | Panic button</div>
        {children}
      </body>
    </html>
  );
};

export default UniversalLayout;
