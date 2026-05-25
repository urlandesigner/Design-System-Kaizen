import { changelogLegend } from "@/content/changelog/types";

export function ChangelogLegend() {
  return (
    <div className="changelog-legend">
      <p className="changelog-legend-title">Legendas</p>
      <ul className="changelog-legend-list">
        {changelogLegend.map((item) => (
          <li
            key={item.type}
            className={item.type === "arrow" ? undefined : `changelog-entry--${item.type}`}
          >
            {item.type === "arrow" ? (
              <>
                <span className="changelog-entry-type">→</span> = {item.label}
              </>
            ) : (
              <>
                <span className="changelog-entry-type">({item.type})</span> = {item.label}
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
