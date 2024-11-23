import { AntdRegistry } from "@ant-design/nextjs-registry";



export default function RootLayout({ children }) {
  return (
    <>
      <html>
        <body>
          <AntdRegistry>{children}</AntdRegistry>
        </body>
      </html>
    </>
  );
}
