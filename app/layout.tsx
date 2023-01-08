import ContextProvider from "../context/ContextProvider";
import "../styles/globals.css";
import AppBar from "./shared/AppBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="text-green-900 bg-neutral-50">
        <ContextProvider>
          <AppBar />
          {children}
        </ContextProvider>
      </body>
    </html>
  );
}
