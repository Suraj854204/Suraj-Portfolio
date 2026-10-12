import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border">
      <div className="container-x section-y">
        <div className="reveal mb-8 sm:mb-12">
          <span className="eyebrow">Technical Skills</span>
          <h2 className="section-title">Tools I build with.</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <div key={group.category} className="reveal panel panel-glow panel-hover p-5 sm:p-6">
              <div className="mb-4 flex items-center justify-between gap-3">
                <h3 className="text-sm font-semibold sm:text-base">{group.category}</h3>
                <span className="font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
