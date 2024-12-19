import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./assets/style/global.css";
import { OrdersProvider } from "./content/OrdersContext";

export default function RootLayout({ children }) {
  return (
    <>
      <html>
        <body>
          <OrdersProvider>
            <AntdRegistry>{children}</AntdRegistry>
          </OrdersProvider>
        </body>
      </html>
    </>
  );
}
