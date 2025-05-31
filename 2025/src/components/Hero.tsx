import Image from "next/image";
import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("about");

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-16">
      <Image
        src={"/logo.svg"}
        alt={t("title")}
        width={240}
        height={240}
        // この指定がないとレイアウトがガタつく
        style={{ width: "240px", height: "240px" }}
      />
      <div>
        <h1 className="text-6xl font-bold">{t("title")}</h1>
        <time className="text-2xl font-bold">{t("eventDate")}</time>
        <p className="text-lg mt-4">{t("description")}</p>
      </div>
    </div>
  );
}
