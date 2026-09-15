import ProjectCardFull from "@/components/ProjectCardFull";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";

// TODO: replace placeholder image, live, and githubLink values with your real ones
const projects = [
  {
    title: "TaskFlow",
    subtitle: "Jira / Trello style Project Management App",
    image: "/projects/taskflow.png",
    description:
      "Full MERN-stack Kanban & project management tool with drag-and-drop boards, backlog, calendar view, global search, and real-time notifications. Deployed to AWS (EC2 + S3) with Terraform and Jenkins CI/CD.",
    tags: [
      "React",
      "Redux Toolkit",
      "MUI",
      "Node.js",
      "MongoDB",
      "AWS",
      "Terraform",
    ],
    link: "http://taskflow-prabhu-rajagopal-2026.s3-website.ap-south-1.amazonaws.com/login",
    githubLink: "https://github.com/prabhuunn-wq/taskflow",
  },
  {
    title: "Uzhavan-Harvest",
    subtitle: "Agricultural Delivery Platform",
    image: "/projects/uzhavan-harvest.png",
    description:
      "Farm-to-consumer delivery platform with Stripe payments, Cloudinary media uploads, and event-driven background jobs via Inngest.",
    tags: ["React", "TypeScript", "Express", "Prisma", "PostgreSQL", "Stripe"],
    link: "https://uzhavan-harvest1.vercel.app/",
    githubLink: "https://github.com/prabhuunn-wq/uzhavan-harvest",
  },
  {
    title: "SnapCart",
    subtitle: "Full-Featured E-commerce Platform",
    image: "/projects/snapcart.png",
    description:
      "22+ page e-commerce app with admin and delivery partner dashboards, Razorpay payments, and JWT auth. Deployed with Vercel (frontend) and Render (backend).",
    tags: ["React", "TypeScript", "Tailwind", "Node.js", "MongoDB", "Razorpay"],
    link: "https://snapkart-ecommerce.vercel.app/",
    githubLink: "https://github.com/prabhuunn-wq/snapkart-ecommerce",
  },
  {
    title: "InsightForge",
    subtitle: "Typeform-style Survey Builder & Analytics",
    image: "/projects/insightforge.png",
    description:
      "Survey builder with 7 question types, chart-based analytics, CSV/PDF export, QR code sharing, and email-based password reset flow.",
    tags: [
      "React",
      "TypeScript",
      "Tailwind v4",
      "Recharts",
      "Node.js",
      "MongoDB",
    ],
    link: "https://insight-forge-inky.vercel.app/",
    githubLink: "https://github.com/prabhuunn-wq/insightforge",
  },
];

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen">
      <PageBackground />
      <Navbar />

      <main className="relative z-10 mx-auto max-w-6xl px-6 pb-20 pt-32 sm:px-12">
        <div className="mb-10">
          <p className="text-xs font-semibold tracking-[0.25em] text-amber-600 dark:text-amber-400">
            MY WORK
          </p>
          <h1 className="mt-3 text-3xl font-black text-gray-900 dark:text-white sm:text-4xl">
            Projects
          </h1>
          <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
            A selection of full-stack apps I&apos;ve built and shipped.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCardFull key={project.title} {...project} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
