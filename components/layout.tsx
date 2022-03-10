import Header from "./header";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex items-center justify-center flex-1">
        {children}
      </main>
    </div>
  );
};

export default Layout;
