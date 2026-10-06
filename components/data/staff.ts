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
  "Diploma in Communication Studies",
  "Bachelor of Arts in Communication Studies",
  "Post Graduate Diploma in Education"
],

  experience: "5 years",

  responsibilities: [
    "Academic Leadership",
    "Curriculum Oversight",
    "Teacher Development",
    "Student Welfare",
    "Parent Engagement"
  ],


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


},


 {
    id: "teacher7",
    slug: "teacher7",
    name: "Ms. Henrietta Animley",
    role: "Year 1 Teacher",
    category: "teachers",
    image: "/images/staff/teacher7.jpg",
  quote: "Every child can flourish when learning is filled with creativity, encouragement, and confidence.",
    bio: `Henrietta Korleki Animley is a licensed primary educator and a graduate of the University of Cape Coast, dedicated to creating supportive, learner-centered classrooms. Her deep love for reading inspired her to become a teacher, and she is passionate about helping young learners develop strong literacy skills while growing in confidence.

She believes learning should be meaningful and engaging, and incorporates creative, hands-on approaches such as storytelling and simple interactive projects into her classroom. Through these methods, she strives to create an environment where learners feel supported, inspired, and excited to learn.`,
    

qualifications: [
  "B.Ed Primary Education – University of Cape Coast"
],
experience: "1 year",
    
responsibilities: [
  "Primary Education",
  "Literacy Development",
  "Student Mentorship",
  "Creative & Hands-On Learning"
],


  },


 {
    id: "teacher-10",
    slug: "teacher-10",
    name: " Mrs. Rosina Ama Frimpomaa Abedi",
    role: "Year 2 Teacher",
    category: "teachers",
    image: "/images/staff/Teacher10.jpg",
   quote: "Every child has the potential to succeed when guided with patience, knowledge, and care.",
    bio: `Rosina Ama Frimpomaa Abedi is a dedicated educator with 12 years of experience in the teaching field. She is passionate about continuous learning, personal development, and embracing new challenges in education.

With a Bachelor of Education (B.Ed), Diploma in Basic Education (DBE), National Service Certificate, and Licensial Certificate, she brings valuable experience and a strong commitment to supporting learners' academic and personal growth. Mrs. Abedi is hardworking, adaptable, and committed to continually improving her skills and making a positive impact in the lives of her learners.`,

qualifications: [
  "Bachelor of Education (B.Ed)",
  "Diploma in Basic Education (DBE)",
  "National Service Certificate",
  "Licensial Certificate"
],

    experience: "12 years",

  responsibilities: [
  "Classroom Management",
  "Student Mentorship",
  "Learner Assessment",
  "Academic Development"
],
    
  },



  {
    id: "teacher-3",
    slug: "teacher-3",
    name: "Ms. Abigail Acquah",
    role: " Year 3 Teacher",
    category: "teachers",
    image: "/images/staff/teacher3.jpg",
    quote: "Nurturing young minds today, building confident and critical thinkers for tomorrow.",
  bio: `Miss Acquah is a dedicated early childhood educator passionate about helping children develop a growth mindset and become confident, independent critical thinkers. With 8 years of teaching experience, she brings a caring and learner-centered approach to the classroom.

She holds a Diploma in Education and a Level 4 Diploma in Montessori Education, and is currently pursuing further studies in Early Grade Education. Her experience includes classroom management, family engagement, effective teaching techniques, and student assessment. She is committed to creating supportive learning environments where young learners can develop academically, socially, and emotionally.`,
    qualifications: [
  "Diploma in Education",
  "Level 4 Diploma in Montessori Education",
  "B.Ed Early Grade Education (Currently Pursuing)"
],
    experience: "8 years",
    responsibilities: [
  "Early Childhood Education",
  "Classroom Management",
  "Teaching & Learning",
  "Student Assessment"
],
   
  },


  {
  id: "teacher-8",
  slug: "teacher-8",
  name: "Ms. Benedicta Agyei",
  role: " Year 4 Teacher",
  category: "teachers",
  image: "/images/staff/teacher08.jpg",
  quote: "Nurturing young minds today for a brighter tomorrow.",

  bio: `Ms. Benedicta Agyei is an experienced, passionate, creative, and versatile educator with 12 years of hands-on experience in Early Years Education. She brings strong expertise in curriculum delivery, child psychology, and holistic child development, creating engaging and nurturing learning experiences that help young learners thrive.

With a Diploma in Early Childhood Education and currently pursuing her final year at the University of Education, Winneba (UEW), she is committed to continuous professional growth and educational excellence. Known for her reliability, creativity, hard work, and child-friendly approach, Ms. Agyei builds positive relationships with learners, parents, and colleagues while fostering a supportive environment where every child can grow with confidence.`,

  qualifications: [
    "Diploma in Early Childhood Education",
    "Bachelor's Degree in Early Childhood Education – University of Education, Winneba (In Progress)"
  ],

  experience: "12 years",

  responsibilities: [
    "Child Development",
    "Early Years Education",
    "Student Mentorship",
   
  ],

},


  {
    id: "teacher-5",
    slug: "teacher-5",
    name: " Ms.Erica Owusua Boahemaa",
    role: "Year 5 Teacher",
    category: "teachers",
    image: "/images/staff/Teacher11.jpg",
   quote: "Every child has the potential to shine when given the right guidance, care, and opportunity to grow.",
    bio: `Erica Owusua Boahemaa is a dedicated educator and professional with over 6 years of experience and a strong background in psychology, entrepreneurship, technology, and education. She holds a B.A. in Psychology and an Executive MBA in Entrepreneurial Management from the University of Ghana, alongside professional certifications in Virtual Assistance from ALX, Software Development from Code Coast, Front-End Development from Google, and a Temporary Education Certificate from the Ghana Education Service.

At Palace Royal International School, she teaches English and Computing, where she is passionate about creating engaging learning experiences and equipping students with both academic knowledge and practical digital skills. Erica is known for her professionalism, creativity, and commitment to student growth and educational excellence.`,
   

qualifications: [
  "EMBA in Entrepreneurial Management — University of Ghana",
  "Bachelor's Degree in Psychology — University of Ghana",
  "Virtual Assistance Certificate — ALX",
  "Front-End Development Certificate — Google",
  "Software Development Certificate — Code Coast",
  "Temporary Education Certificate — Ghana Education Service"
],

    experience: "7 years",

  responsibilities: [
  "Early Years Education",
  "Child Development & Wellbeing",
  "Classroom Management",
  "Creative & Technology-Enhanced Learning"
],

  },

{
  id: "teacher-9",
  slug: "teacher-9",
  name: "Mr. Richard Adika",
  role: "Year 6 Teacher",
  category: "teachers",
  image: "/images/staff/teacher9.jpg",
  quote: "Every lesson is an opportunity to spark curiosity, build confidence, and inspire a lifelong love for learning.",

  bio: `A graduate of the University of Cape Coast with a BSc in Earth Science, Mr. Richard Adika is passionate about transforming the way children experience learning. Inspired by teachers who made challenging subjects engaging and enjoyable, he believes that the right educator can shape not only a child's understanding but also their confidence and attitude toward learning for life.

Committed to creating meaningful and engaging classroom experiences, he strives to make every lesson accessible, inspiring, and memorable. As he continues pursuing a second degree in Education at the University of Education, Winneba, he remains dedicated to equipping young learners with the curiosity, confidence, and critical thinking skills they need to thrive.`,

  qualifications: [
    "BSc Earth Science – University of Cape Coast",
    "Special Post Graduate Diploma in Education"
  ],

  experience: "5 years",

  responsibilities: [
    "Student Mentorship",
    "Learner Assessment",
    "Critical Thinking Development"
  ],


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
   // "Montessori Certification",
    //"Jolly Phonics Certification",
   // "Jolly Grammar Certification",//
   // "Cambridge Education Certification"
  ],

  experience: "2 years",

  responsibilities: [
    "KG1 Instruction",
    "Early Literacy Development",
    "Phonics & Numeracy",
    "Child Development"
  ],


},

{
  id: "teacher-4",
  slug: "teacher-4",
  name: "Mrs. Miriam Addo",
  role: "Reception 2 Teacher",
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

 
},


   
{
  id: "teacher-05",
  slug: "teacher-05",
  name: "Ms. Edith Gordon",
  role: "Nursery 1 Teacher",
  category: "teachers",
  image: "/images/staff/Teacher5.jpg",

  quote:
    "Every child deserves a safe, nurturing environment where they can learn, grow, and thrive.",

  bio: `Ms. Edith Gordon is a health professional with a strong passion for early childhood education and learner wellbeing. With a BSc in Midwifery, she brings a unique health and wellbeing perspective to the Nursery 1 learning environment.

Her professional background strengthens her contribution to the early years by supporting healthy habits, personal hygiene, safety, and the overall wellbeing of young learners. She is passionate about creating a warm, safe, and nurturing environment where children can build confidence, develop positive habits, and grow academically, socially, and physically.

With experience supporting teaching and learning, Ms. Gordon is committed to providing patient and caring support to young learners while continually developing her skills and growing her contribution to the education sector.`,

  qualifications: [
    "BSc Midwifery — University of Health and Allied Sciences (UHAS)",
  ],

  experience: "1+ years",

  responsibilities: [
    "Early Years Learning Support",
    "Child Health & Wellbeing",
    "Hygiene & Personal Care Education",
    "Classroom Support",
    "Child Safety & Wellbeing",
    "Learner Development Support",
  ],
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

  
    responsibilities: ["Child-Care"    ] 
   
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

}
];