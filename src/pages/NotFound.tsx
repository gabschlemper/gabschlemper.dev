import { Link } from "react-router-dom";
import { useLocale, useStrings } from "../lib/useKnowledgeBase";
import { withLocale } from "../lib/locale";

export default function NotFound() {
  const locale = useLocale();
  const t = useStrings();

  return (
    <div className="screen">
      <div className="notfound-code">{t.notFound.code}</div>
      <h1 className="display">{t.notFound.title}</h1>
      <p className="lede">
        {t.notFound.lede} <Link to={withLocale("/", locale)}>{t.notFound.index}</Link>.
      </p>
      <span className="margin-note margin-note--block">{t.notFound.marginNote}</span>
    </div>
  );
}
