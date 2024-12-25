import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./assets/style/global.css";
import { OrdersProvider } from "./content/OrdersContext";
import "aos/dist/aos.css";

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <head>
          {/* Meta Tags */}
          <meta
            name="google-site-verification"
            content="9TdsWg6r-S1EWJChiMZ7YB5mmsBPcVnm2KPhXhy6qvg"
          />
          <meta name="yandex-verification" content="68a87b605d860b9e" />

          {/* Yandex.Metrika Counter Script */}
          <script
            type="text/javascript"
            src="https://mc.yandex.ru/metrika/tag.js"
            async
          ></script>

          <script
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
