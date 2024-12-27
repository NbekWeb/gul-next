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
            content="unsFweJY8bLs_xFHYdP01fGEDlWWkTlUJqJ1LNET9NM"
          />
         
          <meta name="yandex-verification" content="ba4d062d2d49eb07"   />

          <script
            
            src="https://mc.yandex.ru/metrika/tag.js"
            async
          ></script>

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
          <noscript>
            <div>
              <img
                src="https://mc.yandex.ru/watch/99314039"
                style={{ position: "absolute", left: "-9999px" }}
                alt="Yandex Metrika"
              />
            </div>
          </noscript>

          <OrdersProvider>
            <AntdRegistry>{children}</AntdRegistry>
          </OrdersProvider>
        </body>
      </html>
    </>
  );
}
