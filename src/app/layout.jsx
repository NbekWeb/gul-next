import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./assets/style/global.css";
import { OrdersProvider } from "./content/OrdersContext";
import "aos/dist/aos.css";

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <head>
          <meta
            name="google-site-verification"
            content="googlef434395c08e2d4cd"
          />

          <meta name="yandex-verification" content="ba4d062d2d49eb07"/>

          <script src="https://mc.yandex.ru/metrika/tag.js" async></script>

          <script
            type="text/javascript"
            async
            dangerouslySetInnerHTML={{
              __html: `
              (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {
                  if (document.scripts[j].src === r) { return; }
                }
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
              })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

              ym(99314039, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true
              });
            `,
            }}
          />
        </head>
        <body>
          <OrdersProvider>
            <AntdRegistry>{children}</AntdRegistry>
          </OrdersProvider>
        </body>
      </html>
    </>
  );
}
