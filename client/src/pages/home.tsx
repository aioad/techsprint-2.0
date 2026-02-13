import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import techsprintLogo from "@assets/LOGO_OF_TECHSPRINT_2.0_1770979642459.png";
import universityLogo from "@assets/image_1770979723540.png";
import {
  Calendar,
  Clock,
  MapPin,
  Trophy,
  Medal,
  Award,
  BookOpen,
  Phone,
  Mail,
  ChevronDown,
  Code2,
  Lightbulb,
  Rocket,
  Users,
  ExternalLink,
  Menu,
  X,
  ClipboardList,
  Coffee,
  Presentation,
  UserCheck,
  Timer,
  Laptop,
  MessageSquare,
  PartyPopper,
} from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Timeline", href: "#timeline" },
  { label: "Prizes", href: "#prizes" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white/70 backdrop-blur-2xl ${
        scrolled
          ? "border-b border-[#f1f5f9]"
          : ""
      }`}
      style={{ boxShadow: scrolled ? "0 1px 30px rgba(0,0,0,0.04)" : "none" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-16">
          <a
            href="#hero"
            className="font-heading font-extrabold text-base sm:text-lg gradient-text"
            data-testid="link-logo"
          >
            TechSprint 2.0
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-testid={`link-nav-${link.label.toLowerCase()}`}
                className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <Button size="sm" className="animate-glow rounded-full" asChild>
              <a
                href="https://forms.google.com/your-form-link"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-register-nav"
              >
                Register
              </a>
            </Button>
          </div>

          <Button
            size="icon"
            variant="ghost"
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white/90 backdrop-blur-2xl border-b border-[#f1f5f9] px-6 pb-6"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-slate-600 hover:text-slate-900 font-medium transition-colors"
              data-testid={`link-mobile-nav-${link.label.toLowerCase()}`}
            >
              {link.label}
            </a>
          ))}
          <Button className="w-full mt-3 rounded-full" size="sm" asChild>
            <a
              href="https://forms.google.com/your-form-link"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-register-mobile"
            >
              Register Now
            </a>
          </Button>
        </motion.div>
      )}
    </nav>
  );
}

function MeshGradientBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-60 -right-60 w-[700px] h-[700px] rounded-full opacity-40 blur-[140px]" style={{ background: "linear-gradient(135deg, #bfdbfe, #c4b5fd)" }} />
      <div className="absolute -bottom-60 -left-60 w-[600px] h-[600px] rounded-full opacity-30 blur-[140px]" style={{ background: "linear-gradient(135deg, #c7d2fe, #ddd6fe)" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-20 blur-[120px]" style={{ background: "linear-gradient(135deg, #e0f2fe, #ede9fe)" }} />
    </div>
  );
}

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[110vh] flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      <MeshGradientBg />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <img
            src={universityLogo}
            alt="Punjabi University Patiala"
            className="w-20 h-20 sm:w-24 sm:h-24 mx-auto"
            style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.08))" }}
            data-testid="img-university-logo"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-heading font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl gradient-text mb-4 leading-tight"
          data-testid="text-hero-title"
        >
          TechSprint 2.0
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4"
        >
          <img
            src={techsprintLogo}
            alt="TechSprint 2.0 - Leveraging the power of AI | Google Developer Group On Campus PUP"
            className="max-w-full w-full sm:w-[520px] md:w-[640px] mx-auto rounded-2xl"
            style={{ boxShadow: "0 20px 60px rgba(0, 0, 0, 0.08)" }}
            data-testid="img-hero-logo"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-heading font-semibold text-lg sm:text-xl md:text-2xl text-slate-600 tracking-wide mb-3"
          data-testid="text-hero-subtitle"
        >
          Ideathon + Hackathon
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl sm:text-2xl md:text-3xl font-light text-slate-400 mb-10"
          data-testid="text-tagline"
        >
          Innovate. Build. Compete.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mb-12 text-slate-500"
        >
          <div className="flex items-center gap-2" data-testid="info-dates">
            <Calendar className="w-4 h-4 text-blue-500" />
            <span className="text-sm sm:text-base font-medium" data-testid="text-dates">24 &ndash; 26 February</span>
          </div>
          <div className="flex items-center gap-2" data-testid="info-time">
            <Clock className="w-4 h-4 text-blue-500" />
            <span className="text-sm sm:text-base font-medium" data-testid="text-time">9:30 AM &ndash; 4:00 PM</span>
          </div>
          <div className="flex items-center gap-2" data-testid="info-venue">
            <MapPin className="w-4 h-4 text-blue-500" />
            <span className="text-sm sm:text-base font-medium" data-testid="text-venue">Punjabi University, Patiala</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="animate-float"
        >
          <Button
            size="lg"
            className="font-heading font-bold tracking-wide rounded-full animate-glow text-base"
            asChild
          >
            <a
              href="https://forms.google.com/your-form-link"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-register-hero"
            >
              Register Now
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="mt-16"
        >
          <ChevronDown className="w-6 h-6 text-slate-300 animate-bounce mx-auto" />
        </motion.div>
      </div>
    </section>
  );
}

function SectionHeading({ title, accent, description, testIdPrefix }: { title: string; accent: string; description?: string; testIdPrefix: string }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={0}
      className="text-center mb-16"
    >
      <h2
        className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl mb-4"
        data-testid={`text-${testIdPrefix}-title`}
      >
        <span className="text-slate-900">{title} </span>
        <span className="gradient-text">{accent}</span>
      </h2>
      {description && (
        <p className="text-slate-500 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mt-4" data-testid={`text-${testIdPrefix}-description`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}

function AboutSection() {
  const features = [
    {
      icon: Lightbulb,
      title: "Ideate",
      description: "Brainstorm innovative solutions to real-world problems with your team.",
      color: "#3B82F6",
    },
    {
      icon: Code2,
      title: "Build",
      description: "Transform your ideas into a working MVP over an intense 3-day sprint.",
      color: "#6366F1",
    },
    {
      icon: Rocket,
      title: "Compete",
      description: "Present your project to expert judges and win exciting prizes.",
      color: "#8B5CF6",
    },
  ];

  return (
    <section id="about" className="py-28 px-4 relative" data-testid="section-about">
      <MeshGradientBg />
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading
          title="About the"
          accent="Event"
          testIdPrefix="about"
          description="TechSprint 2.0 is a 3-day interdisciplinary Ideathon + Hackathon organized by the Department of Computer Science & Engineering, Punjabi University Patiala. Teams from across disciplines come together to ideate, prototype, and pitch innovative solutions."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index * 0.15}
            >
              <Card className="glass-card p-8 text-center h-full hover-elevate" data-testid={`card-feature-${index}`}>
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ backgroundColor: `${feature.color}10` }}
                >
                  <feature.icon className="w-8 h-8" style={{ color: feature.color }} />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3 text-slate-900" data-testid={`text-feature-title-${index}`}>
                  {feature.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const EVENT_ICONS: Record<string, typeof Clock> = {
  "Entry & Registration": UserCheck,
  "PPT Preparation": ClipboardList,
  "Lunch Break": Coffee,
  "Pitching Round & Results": Presentation,
  "Buffer Time": Timer,
  "MVP Link Preparation": Laptop,
  "MVP Final Touches": Code2,
  "MVP Presentation + Judges Q&A": MessageSquare,
  "Results & Prize Distribution": PartyPopper,
};

interface TimelineEvent {
  time: string;
  activity: string;
}

interface DaySchedule {
  day: string;
  date: string;
  label: string;
  events: TimelineEvent[];
  icon: typeof Calendar;
  color: string;
}

const TIMELINE_DATA: DaySchedule[] = [
  {
    day: "Day 1",
    date: "24 Feb",
    label: "Ideation",
    icon: Lightbulb,
    color: "#3B82F6",
    events: [
      { time: "09:30 - 10:00", activity: "Entry & Registration" },
      { time: "10:00 - 12:30", activity: "PPT Preparation" },
      { time: "01:00 - 02:00", activity: "Lunch Break" },
      { time: "02:00 - 04:30", activity: "Pitching Round & Results" },
    ],
  },
  {
    day: "Day 2",
    date: "25 Feb",
    label: "Development",
    icon: Code2,
    color: "#6366F1",
    events: [
      { time: "09:30 - 10:00", activity: "Entry & Registration" },
      { time: "10:00 - 12:30", activity: "MVP Link Preparation" },
      { time: "12:30 - 01:00", activity: "Buffer Time" },
      { time: "01:00 - 02:00", activity: "Lunch Break" },
      { time: "02:00 - 04:00", activity: "MVP Final Touches" },
    ],
  },
  {
    day: "Day 3",
    date: "26 Feb",
    label: "Showdown",
    icon: Trophy,
    color: "#8B5CF6",
    events: [
      { time: "09:30 - 10:00", activity: "Entry & Registration" },
      { time: "10:00 - 01:00", activity: "MVP Presentation + Judges Q&A" },
      { time: "01:00 - 02:00", activity: "Lunch Break" },
      { time: "02:00 - 04:00", activity: "Results & Prize Distribution" },
    ],
  },
];

function TimelineSection() {
  return (
    <section
      id="timeline"
      className="py-28 px-4 relative bg-[#FAFBFE]"
      data-testid="section-timeline"
    >
      <MeshGradientBg />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading
          title="Event"
          accent="Timeline"
          testIdPrefix="timeline"
          description="Three days of innovation, building, and competing."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TIMELINE_DATA.map((day, dayIndex) => (
            <motion.div
              key={day.day}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={dayIndex * 0.15}
            >
              <Card className="glass-card overflow-visible h-full hover-elevate" data-testid={`card-day-${dayIndex + 1}`}>
                <div className="p-6 pb-4">
                  <div className="flex items-center gap-4 mb-1">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${day.color}12` }}
                    >
                      <day.icon className="w-6 h-6" style={{ color: day.color }} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl text-slate-900" data-testid={`text-day-title-${dayIndex + 1}`}>
                        {day.day}
                      </h3>
                      <p className="text-sm text-slate-400 font-medium" data-testid={`text-day-date-${dayIndex + 1}`}>
                        {day.date} &middot; {day.label}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 space-y-1">
                  {day.events.map((event, eventIndex) => {
                    const EventIcon = EVENT_ICONS[event.activity] || Clock;
                    return (
                      <div
                        key={eventIndex}
                        className="flex items-center gap-3 py-2.5 px-3 rounded-xl"
                        data-testid={`timeline-event-${dayIndex + 1}-${eventIndex}`}
                      >
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                          style={{ backgroundColor: `${day.color}08` }}
                        >
                          <EventIcon className="w-4 h-4" style={{ color: day.color }} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-slate-800" data-testid={`text-event-activity-${dayIndex + 1}-${eventIndex}`}>
                            {event.activity}
                          </p>
                          <p className="text-xs text-slate-400 font-mono" data-testid={`text-event-time-${dayIndex + 1}-${eventIndex}`}>
                            {event.time}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface PrizeData {
  place: string;
  icon: typeof Trophy;
  amount: string;
  extras: string[];
  tint: string;
  tintBg: string;
  iconColor: string;
}

const PRIZES: PrizeData[] = [
  {
    place: "Winner",
    icon: Trophy,
    amount: "Rs. 2,000",
    extras: ["Medals", "Certificates", "Goodies"],
    tint: "linear-gradient(135deg, rgba(250, 204, 21, 0.06), rgba(234, 179, 8, 0.02))",
    tintBg: "rgba(250, 204, 21, 0.10)",
    iconColor: "#D97706",
  },
  {
    place: "1st Runner-up",
    icon: Medal,
    amount: "Rs. 1,500",
    extras: ["Medals", "Certificates", "Goodies"],
    tint: "linear-gradient(135deg, rgba(148, 163, 184, 0.08), rgba(100, 116, 139, 0.02))",
    tintBg: "rgba(148, 163, 184, 0.12)",
    iconColor: "#64748B",
  },
  {
    place: "2nd Runner-up",
    icon: Award,
    amount: "Rs. 1,000",
    extras: ["Medals", "Certificates", "Goodies"],
    tint: "linear-gradient(135deg, rgba(180, 83, 9, 0.06), rgba(217, 119, 6, 0.02))",
    tintBg: "rgba(180, 83, 9, 0.10)",
    iconColor: "#92400E",
  },
];

function PrizesSection() {
  return (
    <section id="prizes" className="py-28 px-4 relative" data-testid="section-prizes">
      <MeshGradientBg />
      <div className="max-w-5xl mx-auto relative z-10">
        <SectionHeading
          title="Prizes &"
          accent="Rewards"
          testIdPrefix="prizes"
          description="Exciting prizes await the top performers."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {PRIZES.map((prize, index) => (
            <motion.div
              key={prize.place}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index * 0.12}
            >
              <Card className="glass-card p-8 text-center h-full hover-elevate" style={{ background: prize.tint }} data-testid={`card-prize-${index}`}>
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ backgroundColor: prize.tintBg }}
                >
                  <prize.icon className="w-8 h-8" style={{ color: prize.iconColor }} />
                </div>
                <h3 className="font-heading font-bold text-xl mb-2 text-slate-900" data-testid={`text-prize-place-${index}`}>
                  {prize.place}
                </h3>
                <p className="font-heading font-extrabold text-2xl gradient-text mb-4" data-testid={`text-prize-amount-${index}`}>
                  {prize.amount}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {prize.extras.map((extra) => (
                    <Badge
                      key={extra}
                      variant="secondary"
                      className="text-xs font-medium"
                      data-testid={`badge-reward-${extra.replace(/[\s.]/g, "-").toLowerCase()}`}
                    >
                      {extra}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.4}
        >
          <Card className="glass-card p-6 text-center" data-testid="card-top10">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <BookOpen className="w-5 h-5 text-blue-500" />
              <p className="text-sm" data-testid="text-top10-prize">
                <span className="font-bold text-slate-900">Top 10 Teams</span>
                <span className="text-slate-500"> &mdash; Diary and Pen Set</span>
              </p>
            </div>
          </Card>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.5}
          className="mt-4"
        >
          <Card className="glass-card p-6 text-center" data-testid="card-3rd-runnerup">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Award className="w-5 h-5 text-blue-500" />
              <p className="text-sm" data-testid="text-3rd-runnerup-prize">
                <span className="font-bold text-slate-900">3rd Runner-up</span>
                <span className="text-slate-500"> &mdash; Medals, Certificates & Goodies</span>
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

interface TeamMember {
  name: string;
  designation: string;
  initials: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  { name: "Dr. Rajesh Kumar", designation: "HOD, Dept. of CSE", initials: "RK" },
  { name: "Dr. Priya Sharma", designation: "Faculty Advisor", initials: "PS" },
  { name: "Prof. Amit Singh", designation: "Event Organizer", initials: "AS" },
  { name: "Dr. Neha Gupta", designation: "HOD, Dept. of IT", initials: "NG" },
  { name: "Dr. Vikram Patel", designation: "HOD, Dept. of ECE", initials: "VP" },
  { name: "Dr. Sunita Rani", designation: "HOD, Dept. of EEE", initials: "SR" },
];

function TeamSection() {
  return (
    <section
      id="team"
      className="py-28 px-4 relative bg-[#FAFBFE]"
      data-testid="section-team"
    >
      <MeshGradientBg />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading
          title="Organizing"
          accent="Team"
          testIdPrefix="team"
          description="Meet the distinguished faculty members behind TechSprint 2.0."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={member.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index * 0.08}
              className="text-center group"
              data-testid={`card-team-${index}`}
            >
              <div className="relative mx-auto mb-4 w-20 h-20">
                <div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.15))", filter: "blur(8px)" }}
                />
                <Avatar className="w-20 h-20 border border-[#f1f5f9]">
                  <AvatarFallback className="bg-white font-heading font-bold text-sm text-blue-500">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
              </div>
              <h4 className="text-sm font-semibold text-slate-800 mb-0.5" data-testid={`text-team-name-${index}`}>{member.name}</h4>
              <p className="text-xs text-slate-400 leading-tight" data-testid={`text-team-role-${index}`}>{member.designation}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-28 px-4 relative" data-testid="section-contact">
      <MeshGradientBg />
      <div className="max-w-4xl mx-auto relative z-10">
        <SectionHeading
          title="Get In"
          accent="Touch"
          testIdPrefix="contact"
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.15}
          className="max-w-lg mx-auto"
        >
          <Card className="glass-card p-8 sm:p-10" data-testid="card-contact">
            <div className="flex items-center gap-4 mb-8">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "rgba(59, 130, 246, 0.08)" }}
              >
                <Users className="w-7 h-7 text-blue-500" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-slate-900" data-testid="text-coordinator-title">Event Coordinator</h3>
                <p className="text-sm text-slate-400" data-testid="text-coordinator-name">Rahul Verma</p>
              </div>
            </div>

            <div className="space-y-4">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-4 p-4 rounded-xl hover-elevate"
                data-testid="link-phone"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: "rgba(59, 130, 246, 0.08)" }}
              >
                <Phone className="w-5 h-5 text-blue-500" />
              </div>
              <span className="text-sm font-medium text-slate-600" data-testid="text-phone">+91 98765 43210</span>
            </a>
            <a
              href="mailto:techsprint@pbi.ac.in"
              className="flex items-center gap-4 p-4 rounded-xl hover-elevate"
              data-testid="link-email"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: "rgba(59, 130, 246, 0.08)" }}
              >
                <Mail className="w-5 h-5 text-blue-500" />
              </div>
              <span className="text-sm font-medium text-slate-600" data-testid="text-email">techsprint@pbi.ac.in</span>
            </a>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 px-4 bg-[#FAFBFE] border-t border-[#f1f5f9]" data-testid="section-footer">
      <div className="max-w-6xl mx-auto text-center">
        <p className="font-heading font-extrabold text-lg gradient-text mb-3" data-testid="text-footer-title">
          TechSprint 2.0
        </p>
        <p className="font-heading font-bold text-sm text-slate-900 mb-1" data-testid="text-footer-org">
          Department of CSE, Punjabi University Patiala
        </p>
        <p className="text-xs text-slate-400 mt-4" data-testid="text-footer-tagline">
          Innovate. Build. Compete.
        </p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-foreground scroll-smooth">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <PrizesSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
