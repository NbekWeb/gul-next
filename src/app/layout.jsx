import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./assets/style/global.css";

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
