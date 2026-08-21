

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  date: string;
  category: "News" | "Event" | "Announcement";
  image: string;
  excerpt: string;
  content: string;
}

export const news: NewsArticle[] = [
  {
    id: "1",
    slug: "admissions-2026-open",
    title: "Admissions for 2026 Are Now Open",
    date: "20 August 2026",
    category: "Announcement",
    image: "/images/news/admissions.jpg",
    excerpt:
      "We are delighted to welcome new families to Palace Royal International School.",
    content: `Applications are now open for learners from Creche through Junior High School.

Our admissions process is designed to help every family discover how Palace Royal nurtures academic excellence, strong values, creativity and leadership.

We invite parents to visit our campus, meet our teachers and experience our vibrant learning environment.`,
  },

  {
    id: "2",
    slug: "classroom-excellence",
    title: "Celebrating Excellence in the Classroom",
    date: "12 August 2026",
    category: "News",
    image: "/images/news/classroom.jpg",
    excerpt:
      "Our learners continue to demonstrate confidence, curiosity and academic excellence.",
    content: `Across every classroom, learners are embracing curiosity, collaboration and confidence.

Through engaging lessons and personalised learning, students are developing the skills they need to succeed both academically and personally.`,
  },

  {
    id: "3",
    slug: "cultural-day-2026",
    title: "Cultural Day Preparations Begin",
    date: "5 August 2026",
    category: "Event",
    image: "/images/news/cultural-day.jpg",
    excerpt:
      "Students and staff are preparing for an exciting celebration of culture and heritage.",
    content: `Our annual Cultural Day celebrates diversity, heritage and creativity.

Families can look forward to traditional attire, performances, exhibitions and cultural displays from across Ghana and beyond.`,
  },
];