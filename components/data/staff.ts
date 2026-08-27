export interface StaffMember {
  id: string;
  slug: string;
  name: string;
  role: string;
  category: "administration" | "teachers" | "support";
  image: string;
  quote: string;
  bio: string;
 qualifications?: string[];
  experience?: string;
  responsibilities: string[];
  email: string;
}
export const staff: StaffMember[] = [
  {
    id: "admin-1",
    slug: "principal",
    name: "Mrs. [Principal's Name]",
    role: "Principal",
    category: "administration",
    image: "/images/staff/principal.jpg",
    quote: "Every child deserves an education that inspires greatness.",
    bio: "Principal biography goes here.",
    qualifications: ["Qualification 1", "Qualification 2"],
    experience: "15+ years",
    responsibilities: ["Academic Leadership", "School Management"],
    email: "principal@palaceroyal.edu.gh",
  },

  {
    id: "admin-2",
    slug: "vice-principal",
    name: "Mrs. [Vice Principal's Name]",
    role: "Vice Principal",
    category: "administration",
    image: "/images/staff/vice-principal.jpg",
    quote: "Excellence begins with leadership.",
    bio: "Vice Principal biography goes here.",
    qualifications: ["Qualification 1"],
    experience: "12+ years",
    responsibilities: ["Student Welfare"],
    email: "viceprincipal@palaceroyal.edu.gh",
  },
{
  id: "teacher-1",
  slug: "head-teacher",
  name: "Mrs Christiana Asiampong",
  role: "Head Teacher",
  category: "teachers",
  image: "/images/staff/teacher1.jpg",
  quote: "Learning begins with curiosity.",

  bio: `Christiana Oparebea Asiampong is an educator and school leader driven by a deep passion for nurturing the next generation. With a background in Communication Studies complemented by professional training in Education, she brings a unique blend of effective communication, compassionate leadership, and learner-centered teaching to the classroom.

She is committed to creating an environment where every child is seen, heard, and empowered to discover their full potential. Believing that education extends beyond academics, she inspires learners to build confidence, develop their voice, and grow into purposeful individuals prepared to make a meaningful impact in the world.

As Head Teacher of Palace Royal International School, Christiana champions a culture of excellence, character development, and holistic learning, ensuring that every child is equipped to thrive both inside and beyond the classroom.`,

  qualifications: [
    "B.A. Communication Studies",
    "Professional Training in Education"
  ],

  experience: "5+ years",

  responsibilities: [
    "Academic Leadership",
    "Curriculum Oversight",
    "Teacher Development",
    "Student Welfare",
    "Parent Engagement"
  ],

  email: "teacher1@palaceroyal.edu.gh",
},

{
  id: "teacher-2",
  slug: "preschool-head-teacher",
  name: "Ms. Esther Tekpor",
  role: "Preschool Head Teacher",
  category: "teachers",
  image: "/images/staff/teacher2.jpg",
  quote: "Every child's first steps in learning should be filled with confidence, curiosity, and care.",

  bio: `Ms. Esther Tekpor is a dedicated Early Years educator and Preschool Head Teacher with over 15 years of experience nurturing young learners during their most formative years. She is passionate about creating a safe, engaging, and inclusive learning environment where every child develops confidence, curiosity, and a lifelong love for learning.

With professional training in Montessori Education, Special Education, Cambridge Early Years, and First Aid, she brings a well-rounded approach to early childhood development. As she continues pursuing a Bachelor's degree in Early Childhood Education, Ms. Tekpor remains committed to educational excellence, innovative teaching, and partnering with families to help every child thrive.`,

  qualifications: [
    "Diploma in Montessori Education",
    "Diploma in Special Education",
    "Cambridge Early Years Training",
    "First Aid Certification",
    "Bachelor's Degree in Early Childhood Education (In Progress)"
  ],

  experience: "15+ years",

  responsibilities: [
    "Preschool Leadership",
    "Early Years Curriculum Development",
    "Teacher Mentorship",
    "Child Development & Welfare",
  ],

  email: "teacher2@palaceroyal.edu.gh",
},

  {
    id: "teacher-3",
    slug: "teacher-3",
    name: "Ms. Abigail Acquah",
    role: " Year 1 Teacher",
    category: "teachers",
    image: "/images/staff/teacher3.jpg",
    quote: "Learning begins with curiosity.",
    bio: "Teacher biography.",
    qualifications: ["Qualification"],
    experience: "5+ years",
    responsibilities: ["Subject Teaching"],
    email: "teacher3@palaceroyal.edu.gh",
  },

  {
  id: "teacher-4",
  slug: "teacher-4",
  name: "Mrs. Miriam Addo",
  role: "Subject Teacher",
  category: "teachers",
  image: "/images/staff/teacher4.jpg",
  quote: "Learning begins with curiosity.",

  bio: `Mrs. Miriam Naa Adoley Addo is a passionate educator dedicated to empowering every child to discover their strengths and reach their fullest potential. A proud graduate of the University of Cape Coast, she combines academic excellence with a nurturing, learner-centered approach that inspires confidence, curiosity, and personal growth.

She believes that every child thrives in an environment where they feel valued, supported, and encouraged to explore their unique abilities. At Palace Royal International School, Mrs. Addo is committed to cultivating a culture of excellence, character development, and lifelong learning, equipping learners with the skills and confidence to flourish both inside and beyond the classroom.`,

  qualifications: [
    "Graduate, University of Cape Coast"
  ],

  experience: "5+ years",

  responsibilities: [
    "Subject Teaching",
    "Student Mentorship",
    "Academic Development"
  ],

  email: "teacher4@palaceroyal.edu.gh",
},

  
  {
    id: "teacher-5",
    slug: "teacher-5",
    name: "Ms. Emmanuella Yeboah",
    role: "Reception Teacher",
    category: "teachers",
    image: "/images/staff/Teacher5.jpg",
    quote: "Learning begins with curiosity.",
    bio: "Teacher biography.",
    qualifications: ["Qualification"],
    experience: "5+ years",
    responsibilities: ["Subject Teaching"],
    email: "teacher6@palaceroyal.edu.gh",
  },

 {
  id: "teacher-7",
  slug: "teacher-7",
  name: "Ms. Edna Osei",
  role: "Reception 1 Teacher",
  category: "teachers",
  image: "/images/staff/teacher6.jpg",
  quote: "Every child blossoms when learning is filled with joy, creativity, and care.",

  bio: `Ms. Edna Osei is a passionate Early Childhood Educator dedicated to laying strong foundations for lifelong learning. With a Bachelor's Degree in Early Childhood Education from the University of Cape Coast and professional certifications in Montessori, Jolly Phonics, Jolly Grammar, and Cambridge Education, she creates engaging, learner-centered experiences that help young children develop confidence, literacy, and a love for discovery.

She believes every child flourishes in an environment built on patience, creativity, and purposeful guidance. Through hands-on learning, storytelling, music, arts and crafts, and phonics-rich instruction, Ms. Osei inspires young learners to grow academically, socially, and emotionally, ensuring they are equipped to thrive from their very first steps in education.`,

  qualifications: [
    "Bachelor's Degree in Early Childhood Education – University of Cape Coast",
    "Montessori Certification",
    "Jolly Phonics Certification",
    "Jolly Grammar Certification",
    "Cambridge Education Certification"
  ],

  experience: "5+ years",

  responsibilities: [
    "KG1 Instruction",
    "Early Literacy Development",
    "Phonics & Numeracy",
    "Child Development",
    "Parent Engagement"
  ],

  email: "teacher6@palaceroyal.edu.gh",
},

{
  id: "teacher-8",
  slug: "teacher-8",
  name: "Mrs. Millicent Baah-Mensah",
  role: "Teacher",
  category: "teachers",
  image: "/images/staff/teacher8.jpg",
  quote: "Learning begins with curiosity.",

  bio: `A graduate of the University of Cape Coast with a degree in Primary Education, Mrs. Millicent Baah-Mensah is passionate about shaping young lives through purposeful teaching and meaningful learning experiences. She believes that a teacher's words and guidance can leave a lifelong impact, and this conviction inspires her to nurture every child's confidence, curiosity, and character.

Committed to creating engaging and supportive classrooms, she finds joy in seeing learners understand new concepts, grow in their abilities, and develop the foundation they need to thrive both academically and personally.`,

  qualifications: [
    "Bachelor's Degree in Primary Education – University of Cape Coast"
  ],

  experience: "5+ years",

  responsibilities: [
    "Subject Teaching",
    "Student Mentorship",
    "Academic Development"
  ],

  email: "teacher8@palaceroyal.edu.gh",
},

{
  id: "teacher-9",
  slug: "teacher-9",
  name: "Mr. Richard Adika",
  role: "Year 5 Teacher",
  category: "teachers",
  image: "/images/staff/teacher9.jpg",
  quote: "Learning begins with curiosity.",

  bio: `A graduate of the University of Cape Coast with a BSc in Earth Science, Mr. Richard Adika is passionate about transforming the way children experience learning. Inspired by teachers who made challenging subjects engaging and enjoyable, he believes that the right educator can shape not only a child's understanding but also their confidence and attitude toward learning for life.

Committed to creating meaningful and engaging classroom experiences, he strives to make every lesson accessible, inspiring, and memorable. As he continues pursuing a second degree in Education at the University of Education, Winneba, he remains dedicated to equipping young learners with the curiosity, confidence, and critical thinking skills they need to thrive.`,

  qualifications: [
    "BSc Earth Science – University of Cape Coast",
    "MA Education – University of Education, Winneba (In Progress) "
  ],

  experience: "5+ years",

  responsibilities: [
    "Year 5 Instruction",
    "Science Education",
    "Student Mentorship",
    "Academic Development",
    "Learner Assessment"
  ],

  email: "teacher9@palaceroyal.edu.gh",
},

  {
    id: "teacher7",
    slug: "teacher7",
    name: "Ms. Henrietta Animley",
    role: "Year2 Teacher",
    category: "teachers",
    image: "/images/staff/teacher7.jpg",
    quote: "Learning begins with curiosity.",
    bio: "Teacher biography.",
    qualifications: ["Qualification"],
    experience: "5+ years",
    responsibilities: ["Subject Teaching"],
    email: "teacher10@palaceroyal.edu.gh",
  },

  {
    id: "support-1",
    slug: "support-1",
    name: "Ms. Anita Bondzie",
    role: "Teacher Assistant",
    category: "support",
    image: "/images/staff/support1.jpg",
    quote: "Supporting excellence every day.",
    bio: `Dedicated to providing a safe, loving, and nurturing environment, she supports the youngest learners with patience, warmth, and attentive care during their earliest developmental years.

Working alongside the Creche team, she helps create meaningful daily experiences that encourage comfort, trust, and early exploration, ensuring every child feels secure, valued, and ready to take their first steps in learning.`,

  
    responsibilities: ["Administration"],
    email: "support1@palaceroyal.edu.gh",
  },
{
  id: "support-2",
  slug: "support-2",
  name: "Ms. Martha Bondzie",
  role: "Teaaching Assistant",
  category: "support",
  image: "/images/staff/support2.jpg",
  quote: "Creating a welcoming environment.",
  bio: `Dedicated to providing a safe, loving, and nurturing environment, she supports the youngest learners with patience, warmth, and attentive care during their earliest developmental years.

Working alongside the Creche team, she helps create meaningful daily experiences that encourage comfort, trust, and early exploration, ensuring every child feels secure, valued, and ready to take their first steps in learning.`,
  
  responsibilities: ["School Operations"],
  email: "support2@palaceroyal.edu.gh",
}
];