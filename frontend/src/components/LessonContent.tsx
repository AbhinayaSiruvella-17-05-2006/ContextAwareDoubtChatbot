import { useState, useCallback } from "react";
import { motion } from "framer-motion";

interface Section {
  id: string;
  title: string;
  content: string;
}

interface LessonContentProps {
  sections: Section[];
  onTextSelect: (text: string) => void;
  activeSection: string;
  onSectionChange: (id: string) => void;
}

const LessonContent = ({ sections, onTextSelect, activeSection, onSectionChange }: LessonContentProps) => {
  const [highlightedText, setHighlightedText] = useState<string | null>(null);

  const handleMouseUp = useCallback(() => {
    const selection = window.getSelection();
    const text = selection?.toString().trim();
    if (text && text.length > 3) {
      setHighlightedText(text);
      onTextSelect(text);
    }
  }, [onTextSelect]);

  return (
    <div className="flex gap-6">
      {/* Section nav */}
      <nav className="hidden lg:flex flex-col gap-1 min-w-[200px] sticky top-24 self-start">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
          Sections
        </p>
        {sections.map((section, i) => (
          <button
            key={section.id}
            onClick={() => onSectionChange(section.id)}
            className={`text-left px-3 py-2 text-sm rounded-lg transition-all ${
              activeSection === section.id
                ? "bg-accent/10 text-accent font-medium"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary"
            }`}
          >
            <span className="text-xs mr-2 opacity-50">{String(i + 1).padStart(2, "0")}</span>
            {section.title}
          </button>
        ))}
      </nav>

      {/* Content */}
      <div className="flex-1 lesson-content" onMouseUp={handleMouseUp}>
        {sections.map((section, i) => (
          <motion.div
            key={section.id}
            id={section.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="mb-10"
          >
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
              {section.title}
            </h2>
            <div className="prose prose-neutral max-w-none">
              {section.content.split("\n\n").map((paragraph, pi) => (
                <p key={pi} className="text-base leading-relaxed text-muted-foreground mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        ))}

        {highlightedText && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed bottom-24 left-1/2 -translate-x-1/2 z-40 px-4 py-2.5 rounded-xl glass-panel flex items-center gap-3"
          >
            <span className="text-xs text-muted-foreground">Selected:</span>
            <span className="text-sm font-medium text-foreground max-w-[200px] truncate">
              "{highlightedText}"
            </span>
            <button
              onClick={() => setHighlightedText(null)}
              className="text-xs px-2.5 py-1 rounded-md gradient-amber text-primary font-medium"
            >
              Ask about this
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default LessonContent;
