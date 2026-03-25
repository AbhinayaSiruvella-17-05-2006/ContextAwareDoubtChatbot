import { motion } from "framer-motion";
import Header from "@/components/Header";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/data/courses";
import { Search } from "lucide-react";
import { useState } from "react";

const categories = ["All", ...Array.from(new Set(courses.map((c) => c.category)))];

const Courses = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = courses.filter((c) => {
    const matchesSearch =
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.description.toLowerCase().includes(search.toLowerCase());
    const matchesCat = activeCategory === "All" || c.category === activeCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="pt-28 pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10"
          >
            <h1 className="font-display text-4xl font-bold text-foreground mb-3">
              Explore Courses
            </h1>
            <p className="text-muted-foreground">
              Pick a lesson and start asking questions with our context-aware chatbot.
            </p>
          </motion.div>

          {/* Search & filter */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search courses..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-card border border-border text-sm outline-none focus:ring-2 focus:ring-accent/30 text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div className="flex gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-sm rounded-xl font-medium transition-all ${
                    activeCategory === cat
                      ? "gradient-amber text-primary"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-5">
            {filtered.map((course, i) => (
              <CourseCard
                key={course.id}
                id={course.id}
                title={course.title}
                description={course.description}
                duration={course.duration}
                lessons={course.sections.length}
                category={course.category}
                index={i}
              />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              No courses found matching your search.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Courses;
