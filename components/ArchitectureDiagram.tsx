import type { Diagram } from "@/lib/data";

// Layered architecture diagram rendered from data (works in light + dark, no images).
export default function ArchitectureDiagram({ layers }: { layers: Diagram }) {
  return (
    <ol className="flex flex-col items-stretch">
      {layers.map((layer, i) => (
        <li key={layer.label} className="flex flex-col items-stretch">
          <div className="grid gap-2 sm:grid-cols-[7.5rem_minmax(0,1fr)] sm:items-center sm:gap-4">
            <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              {layer.label}
            </span>
            <div className="flex flex-wrap gap-2.5">
              {layer.nodes.map((n) => (
                <div
                  key={n.name}
                  className="min-w-[8.5rem] flex-1 rounded-xl border border-border bg-[color-mix(in_srgb,var(--accent)_8%,var(--card))] px-3.5 py-2.5"
                >
                  <p className="text-sm font-semibold leading-tight">{n.name}</p>
                  {n.note && (
                    <p className="mt-0.5 text-xs leading-snug text-muted-foreground">{n.note}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {i < layers.length - 1 && (
            <div aria-hidden="true" className="flex justify-center py-1.5 sm:justify-start sm:pl-[8.75rem]">
              <span className="text-accent">↓</span>
            </div>
          )}
        </li>
      ))}
    </ol>
  );
}
