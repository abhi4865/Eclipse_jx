import { skills } from '../data'
import SectionHeading from './SectionHeading'

export default function Skills() {
  return (
    <section id="skills" className="border-b border-line py-24">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading label="technical stack" title="Skills" />

        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {skills.map((group) => (
            <div key={group.group}>
              <h4 className="font-mono text-xs uppercase tracking-widest text-lime mb-4">
                {group.group}
              </h4>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
