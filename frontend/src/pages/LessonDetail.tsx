import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import LessonContent from "@/components/LessonContent";
import ChatBot from "@/components/ChatBot";
import { courses } from "@/data/courses";
import { ArrowLeft, Clock, BookOpen } from "lucide-react";

const LessonDetail = () => {
  const { id } = useParams<{ id: string }>();
  const course = courses.find((c) => c.id === id);
  const [selectedText, setSelectedText] = useState<string | undefined>();
  const [activeSection, setActiveSection] = useState(course?.sections[0]?.id || "");

  if (!course) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-28 px-6 text-center">
          <h1 className="font-display text-2xl text-foreground mb-4">Course not found</h1>
          <Link to="/courses" className="text-accent hover:underline">
            ← Back to courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="pt-28 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8"
          >
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Courses
            </Link>
          </motion.div>

          {/* Lesson header */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10"
          >
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-accent/15 text-accent mb-4">
              {course.category}
            </span>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              {course.title}
            </h1>
            <p className="text-muted-foreground mb-4">{course.description}</p>
            <div className="flex items-center gap-5 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" /> {course.duration}
              </span>
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-4 h-4" /> {course.sections.length} sections
              </span>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="h-px bg-border mb-10" />

          {/* Content + sidebar nav */}
          <LessonContent
            sections={course.sections}
            onTextSelect={setSelectedText}
            activeSection={activeSection}
            onSectionChange={setActiveSection}
          />
        </div>
      </div>

      {/* Chatbot */}
      <ChatBot lessonTitle={course.title} selectedText={selectedText} />
    </div>
  );
};

export default LessonDetail;
