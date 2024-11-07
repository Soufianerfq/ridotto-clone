import "./styles.css";

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className="flex flex-col max-[650px]:w-[100%] ">
        <nav className=""><h1>navigation header</h1></nav>
        <div className="flex">
          <aside className=" flex-none h-screen	border-solid  lg:block  max-md:hidden max-lg:hidden"><h1>navigation side menu</h1></aside>
          <main className=" flex-auto h-screen	 ">
            <div>games drop down</div>
            {children}
          </main>
        </div>
        <footer className=" "><h1>footer</h1></footer>
      </body>
    </html>
  );
}
