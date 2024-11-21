import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div>
      <h1>{t("sa")}</h1>
      <span>sss</span>
      <span>sss</span>
      <span>sss</span>
      <h1>{t("sa")}</h1>
      <Link href="/home">{t("sa")} asasa</Link>
    </div>
  );
}
