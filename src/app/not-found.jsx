import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default function NotFound() {
  const cookieStore = cookies();
  const locale = cookieStore.get("NEXT_LOCALE")?.value || "ru";
  redirect(`/${locale}/404`);
}
