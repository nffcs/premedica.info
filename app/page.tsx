"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import Image from "next/image";
import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/* ============================ PAGE ============================ */
export default function PreMedicaLanding() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <SiteNav />

      {/* HERO */}
      <section id="hero" className="relative">
        <LampDemo
          title="PreMedica"
          subtitle="An intelligent questionnaire that predicts likely diagnoses and sends a summary to your clinician—so your visit starts with context, not guesswork."
        />
      </section>

      {/* WHAT IS PREMEDICA */}
      <section id="what-is-premedica" className="relative bg-slate-950 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-center gap-3">
            <PointerHighlight
              rectangleClassName="bg-transparent border-white/20 rounded-md"
              containerClassName="inline-block"
            >
              <h2 className="relative z-10 px-3 py-1 text-2xl md:text-4xl font-semibold">
                What is PreMedica?
              </h2>
            </PointerHighlight>
          </div>

          <div className="mt-6">
            <div className="relative z-10 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-sm">
              <p className="text-slate-300 text-lg">
                <strong>PreMedica</strong> is a{" "}
                <PointerHighlight
                  rectangleClassName="bg-transparent border-white/20 rounded-md"
                  containerClassName="inline-block mx-1"
                >
                  <span className="relative z-10">
                    digital health intake &amp; triage tool
                  </span>
                </PointerHighlight>
                . Patients answer a{" "}
                <PointerHighlight
                  rectangleClassName="bg-transparent border-white/20 rounded-md"
                  containerClassName="inline-block mx-1"
                >
                  <span className="relative z-10">
                    smart, adaptive questionnaire
                  </span>
                </PointerHighlight>
                ; the system synthesizes symptoms, flags red-flags, and prepares
                a concise summary with likely conditions for clinicians to
                review <em>before</em> the visit—so appointments start with
                context, not guesswork.
              </p>

              <ul className="mt-4 grid gap-3 md:grid-cols-3 text-slate-400">
                <li className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                  <PointerHighlight
                    rectangleClassName="bg-transparent border-white/20 rounded-md"
                    containerClassName="inline-block mr-1"
                  >
                    <span className="relative z-10">Adaptive triage</span>
                  </PointerHighlight>{" "}
                  that focuses on relevant questions.
                </li>
                <li className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                  <PointerHighlight
                    rectangleClassName="bg-transparent border-white/20 rounded-md"
                    containerClassName="inline-block mr-1"
                  >
                    <span className="relative z-10">Prediction hints</span>
                  </PointerHighlight>{" "}
                  to guide clinical attention (not a final diagnosis).
                </li>
                <li className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                  <PointerHighlight
                    rectangleClassName="bg-transparent border-white/20 rounded-md"
                    containerClassName="inline-block mr-1"
                  >
                    <span className="relative z-10">Secure handoff</span>
                  </PointerHighlight>{" "}
                  summary for faster, clearer consults.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="relative bg-slate-950 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl md:text-4xl font-semibold mb-6">
            How does PreMedica work?
          </h2>
          <Timeline
            data={[
              {
                title: "Patient books appointment",
                content: (
                  <CardRow
                    icon={
                      <IconCalendarCheck className="h-6 w-6 text-cyan-400 mt-1" />
                    }
                  >
                    Patients schedule online or via clinic. Intake starts
                    sooner, not at the front desk.
                  </CardRow>
                ),
              },
              {
                title: "Receives smart clinical questionnaires",
                content: (
                  <CardRow
                    icon={
                      <IconClipboardList className="h-6 w-6 text-cyan-400 mt-1" />
                    }
                  >
                    The adaptive form tailors questions to symptoms and risk
                    factors, minimizing noise.
                  </CardRow>
                ),
              },
              {
                title: "Data is analyzed automatically",
                content: (
                  <CardRow
                    icon={
                      <IconChartDots className="h-6 w-6 text-cyan-400 mt-1" />
                    }
                  >
                    PreMedica synthesizes answers, flags red-flags, and prepares
                    a concise clinical summary.
                  </CardRow>
                ),
              },
              {
                title: "Doctor receives a full report",
                content: (
                  <CardRow
                    icon={
                      <IconReportMedical className="h-6 w-6 text-cyan-400 mt-1" />
                    }
                  >
                    The provider reviews the summary before the visit, so the
                    appointment starts with context.
                  </CardRow>
                ),
              },
            ]}
          />
        </div>
      </section>

      {/* DEMO */}
      <section id="demo" className="relative bg-slate-950 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <ContainerScroll
            titleComponent={
              <>
                <h2 className="text-center text-3xl md:text-5xl font-semibold">
                  Try our demo!
                </h2>
                <p className="mt-3 text-center text-slate-400 max-w-3xl mx-auto">
                  Get a feel for the smart, adaptive questionnaire experience.
                  This preview mimics the intake flow your patients would
                  complete before the visit.
                </p>
              </>
            }
          >
            <div className="h-full w-full flex flex-col">
              <div className="flex items-center justify-between px-4 py-2 border-b border-white/10">
                <span className="text-sm text-slate-400">PreMedica Demo</span>
                <span className="text-xs text-slate-500">preview</span>
              </div>
              <div className="flex-1 grid md:grid-cols-2 gap-4 p-4">
                <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                  <label className="text-sm text-slate-400">
                    What brings you in today?
                  </label>
                  <input
                    className="mt-2 h-11 w-full rounded-lg bg-white/5 px-3 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    placeholder="e.g., cough, headache, ankle pain"
                  />
                </div>
                <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                  <label className="text-sm text-slate-400">
                    Duration of symptoms
                  </label>
                  <select className="mt-2 h-11 w-full rounded-lg bg-white/5 px-3 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400">
                    <option>Less than 24 hours</option>
                    <option>1–3 days</option>
                    <option>4–7 days</option>
                    <option>More than a week</option>
                  </select>
                </div>
                <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10 md:col-span-2">
                  <label className="text-sm text-slate-400">
                    Anything else we should know?
                  </label>
                  <textarea
                    rows={4}
                    className="mt-2 w-full rounded-lg bg-white/5 p-3 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    placeholder="Allergies, medications, recent travel, etc."
                  />
                </div>
                <div className="md:col-span-2 flex items-center justify-end gap-3">
                  <a
                    href="#contact"
                    className="w-full sm:w-auto text-center rounded-2xl px-5 py-3 text-sm md:text-base font-medium bg-white/5 hover:bg-white/10 text-white ring-1 ring-white/10 transition"
                  >
                    Contact us
                  </a>
                  <a
                    href="#contact"
                    className="w-full sm:w-auto text-center rounded-2xl px-5 py-3 text-sm md:text-base font-medium bg-cyan-500/90 hover:bg-cyan-400/90 text-slate-950 shadow-lg shadow-cyan-500/20 transition"
                  >
                    Start demo
                  </a>
                </div>
              </div>
            </div>
          </ContainerScroll>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative bg-slate-950 py-20">
        <div className="mx-auto max-w-6xl px-6 grid gap-10 md:grid-cols-2 items-start">
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold">Contact us</h2>
            <p className="mt-3 text-slate-400 max-w-xl">
              Have a clinic or pilot in mind? Drop a line and we’ll follow up.
            </p>
          </div>
          <form className="grid gap-3">
            <input
              placeholder="Your name"
              className="h-11 rounded-xl bg-white/5 px-4 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <input
              type="email"
              placeholder="Your email"
              className="h-11 rounded-xl bg-white/5 px-4 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <textarea
              rows={5}
              placeholder="How can we help?"
              className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <button
              type="button"
              className="h-11 rounded-xl bg-cyan-500/90 text-slate-950 font-medium hover:bg-cyan-400/90"
            >
              Send
            </button>
            <p className="text-xs text-slate-500">
              By sending, you consent to being contacted about your inquiry.
            </p>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}

/* ============================ HERO ============================ */
export function LampDemo({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        className="mt-8 bg-gradient-to-br from-slate-200 to-slate-500 py-4 bg-clip-text text-center text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight text-transparent"
      >
        {title}
      </motion.h1>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
          className="mx-auto mt-4 max-w-2xl text-center text-slate-400 text-lg md:text-xl"
        >
          {subtitle}
        </motion.p>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
        className="mt-8 flex flex-wrap items-center justify-center gap-3"
      >
        <a
          href="#demo"
          className="rounded-2xl px-5 py-3 text-sm md:text-base font-medium bg-cyan-500/90 hover:bg-cyan-400/90 text-slate-950 shadow-lg shadow-cyan-500/20 transition"
        >
          Try the Demo
        </a>
        <a
          href="#how-it-works"
          className="rounded-2xl px-5 py-3 text-sm md:text-base font-medium bg-white/5 hover:bg-white/10 text-white ring-1 ring-white/10 transition"
        >
          How it works
        </a>
      </motion.div>
    </LampContainer>
  );
}

export const LampContainer: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "relative flex min-h-[88vh] flex-col items-center justify-center overflow-hidden bg-slate-950 w-full rounded-none z-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-full left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-full left-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-40 h-full right-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-full right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl" />
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md" />
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl" />
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400/90 blur-2xl"
        />
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400/90"
        />
        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950" />
      </div>

      <div className="relative z-50 flex -translate-y-48 md:-translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};

/* ====================== DEMO SCROLL CARD ====================== */
export const ContainerScroll: React.FC<{
  titleComponent: React.ReactNode;
  children: React.ReactNode;
}> = ({ titleComponent, children }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scaleDims: [number, number] = isMobile ? [0.7, 0.9] : [1.05, 1];
  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDims);
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-[42rem] sm:h-[56rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20"
      ref={containerRef}
    >
      <div
        className="py-10 md:py-40 w-full relative"
        style={{ perspective: "1000px" }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <DemoCard rotate={rotate} scale={scale}>
          {children}
        </DemoCard>
      </div>
    </div>
  );
};

const Header: React.FC<{
  translate: MotionValue<number>;
  titleComponent: React.ReactNode;
}> = ({ translate, titleComponent }) => (
  <motion.div
    style={{ translateY: translate }}
    className="max-w-5xl mx-auto text-center"
  >
    {titleComponent}
  </motion.div>
);

const DemoCard: React.FC<{
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  children: React.ReactNode;
}> = ({ rotate, scale, children }) => (
  <motion.div
    style={{
      rotateX: rotate,
      scale,
      boxShadow:
        "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
    }}
    className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl"
  >
    <div className="h-full w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl md:p-4">
      {children}
    </div>
  </motion.div>
);

/* ============================ TIMELINE ============================ */
export const Timeline: React.FC<{
  data: { title: string; content: React.ReactNode }[];
}> = ({ data }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) setHeight(ref.current.getBoundingClientRect().height);
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-slate-950 font-sans" ref={containerRef}>
      <div ref={ref} className="relative mx-auto max-w-6xl pb-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-28 md:gap-10"
          >
            <div className="sticky top-40 z-40 flex max-w-xs items-center self-start md:w-full">
              <div className="absolute left-3 h-10 w-10 rounded-full bg-slate-950 flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-800 border border-neutral-700" />
              </div>
              <h3 className="hidden md:block md:pl-16 text-2xl md:text-4xl font-bold text-neutral-500">
                {item.title}
              </h3>
            </div>
            <div className="relative w-full pl-12 pr-4 md:pl-4">
              <h3 className="md:hidden mb-4 block text-left text-2xl font-bold text-neutral-500">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        <div
          style={{ height: height + "px" }}
          className="absolute left-6 md:left-8 top-0 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent via-neutral-800 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-cyan-500 via-blue-500 to-transparent from-[0%] via-[10%]"
          />
        </div>
      </div>
    </div>
  );
};

/* ===================== POINTER HIGHLIGHT (no arrow) ===================== */
export function PointerHighlight({
  children,
  rectangleClassName,
  containerClassName,
}: {
  children: React.ReactNode;
  rectangleClassName?: string;
  containerClassName?: string;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;
    const update = () => {
      const { width, height } = el.getBoundingClientRect();
      setDimensions({ width, height });
    };
    update();

    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      className={cn("relative w-fit", containerClassName)}
      ref={containerRef}
    >
      {children}
      {dimensions.width > 0 && dimensions.height > 0 && (
        <motion.div
          className="pointer-events-none absolute inset-0 -z-10"
          initial={{ opacity: 0, scale: 0.95, originX: 0, originY: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.div
            className={cn(
              "absolute inset-0 border border-neutral-800/50 dark:border-neutral-200/40",
              rectangleClassName
            )}
            initial={{ width: 0, height: 0 }}
            whileInView={{ width: dimensions.width, height: dimensions.height }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </div>
  );
}

/* ============================== NAV & FOOTER ============================== */
function SiteNav() {
  return (
    <header className="sticky top-0 z-[100] w-full border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex h-20 md:h-24 max-w-6xl items-center justify-between px-4">
        <a href="#hero" className="flex items-center gap-2">
          <Image
            src="/premedica-logo.png"
            alt="PreMedica"
            width={160}
            height={64}
            className="h-14 md:h-16 w-auto object-contain select-none"
            priority
          />
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          <a className="hover:text-white" href="#what-is-premedica">
            About
          </a>
          <a className="hover:text-white" href="#how-it-works">
            How it works
          </a>
          <a className="hover:text-white" href="#contact">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image
            src="/premedica-logo.png"
            alt="PreMedica"
            width={140}
            height={40}
            className="h-8 md:h-10 w-auto opacity-90"
          />
          <span className="text-sm text-slate-500">
            © {new Date().getFullYear()} PreMedica. All rights reserved.
          </span>
        </div>
        <div className="flex gap-6 text-sm text-slate-400">
          <a href="#hero" className="hover:text-white">
            Home
          </a>
          <a href="#what-is-premedica" className="hover:text-white">
            About
          </a>
          <a href="#how-it-works" className="hover:text-white">
            How it works
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ============================ SMALL HELPERS ============================ */
const CardRow: React.FC<{
  icon: React.ReactNode;
  children: React.ReactNode;
}> = ({ icon, children }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <div className="flex items-start gap-3">
      {icon}
      <p className="text-slate-300">{children}</p>
    </div>
  </div>
);

/* ======================== INLINE SVG ICONS (no deps) ======================== */
const IconBase = (p: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...p}
  />
);

export const IconCalendarCheck = (p: React.SVGProps<SVGSVGElement>) => (
  <IconBase {...p}>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
    <path d="m9 16 2 2 4-4" />
  </IconBase>
);

export const IconClipboardList = (p: React.SVGProps<SVGSVGElement>) => (
  <IconBase {...p}>
    <path d="M9 4h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
    <path d="M9 4h6v2H9z" />
    <path d="M9 11h6M9 15h6" />
    <circle cx="8" cy="11" r="1" />
    <circle cx="8" cy="15" r="1" />
  </IconBase>
);

export const IconChartDots = (p: React.SVGProps<SVGSVGElement>) => (
  <IconBase {...p}>
    <path d="M3 3v18h18" />
    <circle cx="7" cy="14" r="2" />
    <circle cx="12" cy="9" r="2" />
    <circle cx="18" cy="13" r="2" />
    <path d="M8.5 12.5 10.5 10.5 16 12" />
  </IconBase>
);

export const IconReportMedical = (p: React.SVGProps<SVGSVGElement>) => (
  <IconBase {...p}>
    <path d="M8 2h6l3 3v15a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
    <path d="M14 2v5h5" />
    <path d="M9 13h6M12 10v6" />
  </IconBase>
);
