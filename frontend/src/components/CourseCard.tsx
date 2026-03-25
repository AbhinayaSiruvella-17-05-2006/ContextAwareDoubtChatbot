import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, BookOpen, ArrowRight } from "lucide-react";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  duration: string;
  lessons: number;
  category: string;
  index: number;
}

const CourseCard = ({ id, title, description, duration, lessons, category, index }: CourseCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={`/lesson/${id}`}
        className="group block p-6 rounded-2xl bg-card border border-border hover-lift cursor-pointer"
      >
        <div className="flex items-center gap-2 mb-4">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-accent/15 text-accent">
            {category}
          </span>
        </div>
        <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {duration}
            </span>
            <span className="flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5" /> {lessons} sections
            </span>
          </div>
          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
        </div>
      </Link>
    </motion.div>
  );
};

export default CourseCard;
