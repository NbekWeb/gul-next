

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";



export async function generateMetadata({ params }) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    console.log('sa')
    notFound();
  }

  
}

export default function HomePage() {
  const t = useTranslations("HomePage");
  const translatedText = t("sa");

  return (
    <div>
     
      <h1>{translatedText}</h1>
      <span>sss</span>
      <h1>{translatedText}</h1>
      <Link href="/home">{translatedText}</Link>
    </div>
  );
}
