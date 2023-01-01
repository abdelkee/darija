import ContextProvider from "../context/ContextProvider";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="text-green-900 bg-neutral-50">
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  );
}
