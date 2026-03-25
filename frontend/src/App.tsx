import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Landing from "./pages/Landing";
import Courses from "./pages/Courses";
import LessonDetail from "./pages/LessonDetail";
import ChatHistory from "./pages/ChatHistory";
import NotFound from "./pages/NotFound";
import ChatView from "./pages/ChatView";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/lesson/:id" element={<LessonDetail />} />
          <Route path="/chat-history" element={<ChatHistory />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/chat-view" element={<ChatView />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
