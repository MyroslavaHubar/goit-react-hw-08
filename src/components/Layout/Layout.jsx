import AppBar from "../AppBar/AppBar";

function Layout({ children }) {
  return (
    <>
      <AppBar />
      <div>{children}</div>
    </>
  );
}

export default Layout;
