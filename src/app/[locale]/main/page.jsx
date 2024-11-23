import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { routing } from "@/i18n/routing";

export async function generateMetadata({ params, title }) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {

    notFound(routing.locales.includes(locale));
    console.log('as')
  }

  const pageTitle = locale === "en" ? "English" : "ГЛАВНАЯ";

  return {
    title: pageTitle,
    description: `This is the description for the ${pageTitle}`,
    metadataBase: new URL(`https://yourdomain.com/${locale}`), // Set the base URL dynamically
  };
}

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div>
      <h1>{t("sa")}</h1>
      <span>sss main</span>
      <span>sss</span>
      <span>sss</span>
      <h1>{t("sa")}</h1>
      <Link href="/home">{t("sa")} asasa</Link>
    </div>
  );
}
