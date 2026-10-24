import SiteScripts from "@/components/SiteScripts";
import { site, whatsappMessageHref } from "@/lib/config";

export default function Home() {
  return (
    <>
    <header id="header" className="fixed inset-x-0 top-0 z-50 transition-all duration-300 bg-transparent py-5">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="group flex items-center gap-2" style={{"textDecoration": "none"}}>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary text-white shadow-elevated transition-transform hover:rotate-[10deg]">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="h-6 w-6 text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path fill="none" d="M0 0h24v24H0z">
              </path>
              <path d="M13 8.57a1.43 1.43 0 1 0 0 2.86 1.43 1.43 0 0 0 0-2.86z">
              </path>
              <path d="M13 3C9.25 3 6.2 5.94 6.02 9.64L4.1 12.2a.5.5 0 0 0 .4.8H6v3c0 1.1.9 2 2 2h1v3h7v-4.68A6.999 6.999 0 0 0 13 3zm3 7c0 .13-.01.26-.02.39l.83.66c.08.06.1.16.05.25l-.8 1.39c-.05.09-.16.12-.24.09l-.99-.4c-.21.16-.43.29-.67.39L14 13.83c-.01.1-.1.17-.2.17h-1.6c-.1 0-.18-.07-.2-.17l-.15-1.06c-.25-.1-.47-.23-.68-.39l-.99.4c-.09.03-.2 0-.25-.09l-.8-1.39a.19.19 0 0 1 .05-.25l.84-.66c-.01-.13-.02-.26-.02-.39s.02-.27.04-.39l-.85-.66c-.08-.06-.1-.16-.05-.26l.8-1.38c.05-.09.15-.12.24-.09l1 .4c.2-.15.43-.29.67-.39L12 6.17c.02-.1.1-.17.2-.17h1.6c.1 0 .18.07.2.17l.15 1.06c.24.1.46.23.67.39l1-.4c.09-.03.2 0 .24.09l.8 1.38a.2.2 0 0 1-.05.26l-.85.66c.03.12.04.25.04.39z">
              </path>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-text leading-tight">Sehar Faiz
            </span>
            <span className="text-xs text-gray-500">Clinical Psychologist
            </span>
          </div>
        </a>
        <div className="hidden items-center gap-8 lg:flex">
          <a href="#home" className="text-sm font-medium text-gray-600 transition-colors hover:text-primary">Home
          </a>
          <a href="#about" className="text-sm font-medium text-gray-600 transition-colors hover:text-primary">About
          </a>
          <a href="#services" className="text-sm font-medium text-gray-600 transition-colors hover:text-primary">Services
          </a>
          <a href="#contact" className="text-sm font-medium text-gray-600 transition-colors hover:text-primary">Contact
          </a>
          <a href="#contact" className="btn-primary text-sm">Book Appointment
          </a>
        </div>
        <button id="mobile-menu-btn" className="rounded-lg p-2 text-text lg:hidden" aria-label="Toggle menu">
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-hidden="true" className="h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd">
            </path>
          </svg>
        </button>
      </nav>
      <div id="mobile-menu" className="glass border-t border-white/20 lg:hidden">
        <div className="flex flex-col gap-1 px-4 py-4">
          <a href="#home" className="mobile-link block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-primary/5 hover:text-primary">Home
          </a>
          <a href="#about" className="mobile-link block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-primary/5 hover:text-primary">About
          </a>
          <a href="#services" className="mobile-link block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-primary/5 hover:text-primary">Services
          </a>
          <a href="#contact" className="mobile-link block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-primary/5 hover:text-primary">Contact
          </a>
          <a href="#contact" className="mobile-link btn-primary mt-2 text-center text-sm">Book Appointment
          </a>
        </div>
      </div>
    </header>
    <main>
      <section id="home" className="relative min-h-screen overflow-hidden bg-gradient-hero pt-28 pb-16 lg:pt-32">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl opacity-50">
          </div>
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-secondary/10 blur-3xl opacity-50">
          </div>
        </div>
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 fade-up">
          <div>
            <div>
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">{" "}Clinical Psychologist{" "}
              </span>
            </div>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-text sm:text-5xl lg:text-6xl">{" "}Helping You{" "}
              <span className="text-gradient">Heal, Grow
              </span>{" "}&{" "}Live Better{" "}
            </h1>
            <p className="mt-6 max-w-lg text-lg text-gray-600">{" "}Compassionate, evidence-based therapy tailored to your unique journey. Take the first step toward emotional wellness with a trusted professional by your side.{" "}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">{" "}Book Appointment{" "}
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd">
                  </path>
                </svg>
              </a>
              <a href="#about" className="btn-secondary">Learn More
              </a>
              <a href={whatsappMessageHref} target="_blank" rel="noopener noreferrer" className="btn-secondary">Chat on WhatsApp
              </a>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md lg:max-w-none fade-up">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl shadow-elevated lg:max-w-md">
              <div className="absolute inset-0 bg-gradient-primary opacity-10">
              </div>
              <img src="./hero-mind.svg" alt="Illustration of a head profile with connected nodes and a growing sprout" className="object-cover w-full h-full absolute inset-0" />
            </div>
            <div className="absolute hidden sm:block float-anim" style={{"top": "8%", "left": "-8%", "animationDelay": "0s"}}>
              <div className="glass flex items-center gap-2 rounded-2xl px-4 py-3 shadow-card">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/20 text-accent">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-hidden="true" className="h-3.5 w-3.5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                    </path>
                  </svg>
                </span>
                <span className="whitespace-nowrap text-sm font-semibold text-text">Anxiety Support
                </span>
              </div>
            </div>
            <div className="absolute hidden sm:block float-anim" style={{"top": "30%", "right": "-5%", "animationDelay": "0.5s"}}>
              <div className="glass flex items-center gap-2 rounded-2xl px-4 py-3 shadow-card">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/20 text-accent">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-hidden="true" className="h-3.5 w-3.5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                    </path>
                  </svg>
                </span>
                <span className="whitespace-nowrap text-sm font-semibold text-text">Depression Therapy
                </span>
              </div>
            </div>
            <div className="absolute hidden sm:block float-anim" style={{"bottom": "30%", "left": "-12%", "animationDelay": "1s"}}>
              <div className="glass flex items-center gap-2 rounded-2xl px-4 py-3 shadow-card">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/20 text-accent">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-hidden="true" className="h-3.5 w-3.5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                    </path>
                  </svg>
                </span>
                <span className="whitespace-nowrap text-sm font-semibold text-text">Behavior Therapy
                </span>
              </div>
            </div>
            <div className="absolute hidden sm:block float-anim" style={{"bottom": "8%", "right": "-8%", "animationDelay": "1.5s"}}>
              <div className="glass flex items-center gap-2 rounded-2xl px-4 py-3 shadow-card">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/20 text-accent">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-hidden="true" className="h-3.5 w-3.5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                    </path>
                  </svg>
                </span>
                <span className="whitespace-nowrap text-sm font-semibold text-text">Stress Management
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="section-padding bg-white">
        <div className="mx-auto max-w-7xl fade-up">
          <div className="text-center mb-24 lg:mb-32">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">About Me
            </span>
            <h2 className="section-heading mx-auto mt-2">Professional{" "}
              <span className="text-gradient">Profile
              </span>
            </h2>
          </div>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-32">
            <div className="relative mx-auto w-full max-w-md lg:max-w-md">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-elevated max-h-[600px]">
                <img src="./about-growth.svg" alt="Illustration of rising steps with a growing sprout, representing progress" className="object-cover w-full h-full absolute inset-0" />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden h-48 w-48 rounded-3xl bg-gradient-primary opacity-20 blur-2xl lg:block">
              </div>
            </div>
            <div className="lg:pl-12 xl:pl-16">
              <h2 className="section-heading mt-2">Your Partner in{" "}
                <span className="text-gradient">Mental Wellness
                </span>
              </h2>
              <p className="mt-6 text-gray-600 leading-relaxed">I'm Sehar Faiz, a Clinical Psychologist and Behavior Therapist based in Lahore. I provide evidence-based psychological care to children, adolescents, and adults, with a particular focus on children and young people across the neurodevelopmental spectrum.
              </p>
              <div className="mt-8 space-y-4">
                <div className="rounded-2xl bg-gradient-soft p-4">
                  <h3 className="font-semibold text-primary">Education
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">I hold a BS in Applied Psychology from the University of the Punjab and an MS in Clinical Psychology from Lahore Garrison University.
                  </p>
                </div>
                <div className="rounded-2xl bg-gradient-soft p-4">
                  <h3 className="font-semibold text-primary">Experience
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">I completed 900 hours of supervised clinical training across child, adult, and community settings, including rehabilitation, mental health, school, and therapy-center placements. I currently deliver ABA-informed behavior therapy at The First Hope Therapy Center.
                  </p>
                </div>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-accent/20 bg-accent/5 p-4">
                  <h3 className="font-semibold text-accent">Mission
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">My mission is to provide accessible, compassionate mental health care that empowers every person to heal, grow, and live authentically. I believe everyone deserves a safe space to be heard and supported without judgment.{" "}
                  </p>
                </div>
                <div className="rounded-2xl border border-secondary/20 bg-secondary/5 p-4">
                  <h3 className="font-semibold text-secondary">Vision
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">I envision a world where seeking therapy is normalized and celebrated — where mental health is prioritized with the same importance as physical health, and where every individual has the tools to thrive emotionally.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-24 mb-32 grid grid-cols-2 gap-6 lg:grid-cols-4 fade-up">
            <div className="glass rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-gradient sm:text-4xl">
                <span className="counter" data-target="900">0
                </span>+
              </div>
              <p className="mt-2 text-sm font-medium text-gray-600">Supervised Clinical Hours
              </p>
            </div>
            <div className="glass rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-gradient sm:text-4xl">
                <span className="counter" data-target="8">0
                </span>
              </div>
              <p className="mt-2 text-sm font-medium text-gray-600">Clinical Roles and Placements
              </p>
            </div>
            <div className="glass rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-gradient sm:text-4xl">
                <span className="counter" data-target="2">0
                </span>
              </div>
              <p className="mt-2 text-sm font-medium text-gray-600">Peer-Reviewed Publications
              </p>
            </div>
            <div className="glass rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-gradient sm:text-4xl">
                <span className="counter" data-target="2">0
                </span>
              </div>
              <p className="mt-2 text-sm font-medium text-gray-600">Psychology-Informed Digital Tools
              </p>
            </div>
          </div>
          <div className="mt-32 pt-24 border-t border-gray-100 fade-up">
            <h2 className="section-heading text-center">Experience Timeline
            </h2>
            <div className="relative mt-24">
              <div className="absolute left-4 top-0 hidden h-full w-0.5 bg-gradient-primary md:left-1/2 md:block">
              </div>
              <div>
                <div className="relative flex flex-col gap-6 md:flex-row md:flex-row-reverse mb-12 md:mb-0">
                  <div className="hidden md:block md:w-1/2">
                  </div>
                  <div className="md:w-1/2 md:pr-12 md:text-right">
                    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-card">
                      <span className="text-sm font-semibold text-primary">September 2026 – Present
                      </span>
                      <h3 className="mt-2 text-lg font-bold text-text">Behavior Therapist
                      </h3>
                      <p className="mt-1 text-sm font-medium text-secondary">The First Hope Therapy Center
                      </p>
                      <p className="mt-3 text-sm text-gray-600">Delivers individualized, ABA-informed behavior therapy for children and young people, with structured intervention planning and ongoing progress monitoring in collaboration with caregivers and the care team.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-4 top-6 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-primary shadow-elevated md:left-1/2 md:block">
                  </div>
                </div>
                <div className="relative flex flex-col gap-6 md:flex-row mb-12 md:mb-0 md:-mt-8">
                  <div className="hidden md:block md:w-1/2">
                  </div>
                  <div className="md:w-1/2 md:pl-12">
                    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-card">
                      <span className="text-sm font-semibold text-primary">June 2025 – May 2026
                      </span>
                      <h3 className="mt-2 text-lg font-bold text-text">Special Needs Assistant / Shadow Teacher
                      </h3>
                      <p className="mt-1 text-sm font-medium text-secondary">Roots Millennium School
                      </p>
                      <p className="mt-3 text-sm text-gray-600">Provided one-to-one classroom support for students with additional learning and developmental needs, working closely with teachers and parents.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-4 top-6 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-primary shadow-elevated md:left-1/2 md:block">
                  </div>
                </div>
                <div className="relative flex flex-col gap-6 md:flex-row md:flex-row-reverse mb-12 md:mb-0 md:-mt-8">
                  <div className="hidden md:block md:w-1/2">
                  </div>
                  <div className="md:w-1/2 md:pr-12 md:text-right">
                    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-card">
                      <span className="text-sm font-semibold text-primary">July – September 2025
                      </span>
                      <h3 className="mt-2 text-lg font-bold text-text">Clinical Placement
                      </h3>
                      <p className="mt-1 text-sm font-medium text-secondary">Community Mental Health Care
                      </p>
                      <p className="mt-3 text-sm text-gray-600">Supervised clinical practice in a community mental health setting.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-4 top-6 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-primary shadow-elevated md:left-1/2 md:block">
                  </div>
                </div>
                <div className="relative flex flex-col gap-6 md:flex-row mb-12 md:mb-0 md:-mt-8">
                  <div className="hidden md:block md:w-1/2">
                  </div>
                  <div className="md:w-1/2 md:pl-12">
                    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-card">
                      <span className="text-sm font-semibold text-primary">May – June 2025
                      </span>
                      <h3 className="mt-2 text-lg font-bold text-text">Clinical Placement
                      </h3>
                      <p className="mt-1 text-sm font-medium text-secondary">Bright Therapy Center
                      </p>
                      <p className="mt-3 text-sm text-gray-600">Supervised clinical practice in a therapy-center setting, supporting clinical and behavioral care.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-4 top-6 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-primary shadow-elevated md:left-1/2 md:block">
                  </div>
                </div>
                <div className="relative flex flex-col gap-6 md:flex-row md:flex-row-reverse mb-12 md:mb-0 md:-mt-8">
                  <div className="hidden md:block md:w-1/2">
                  </div>
                  <div className="md:w-1/2 md:pr-12 md:text-right">
                    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-card">
                      <span className="text-sm font-semibold text-primary">December 2024 – March 2025
                      </span>
                      <h3 className="mt-2 text-lg font-bold text-text">Clinical Trainee
                      </h3>
                      <p className="mt-1 text-sm font-medium text-secondary">Punjab Rehab
                      </p>
                      <p className="mt-3 text-sm text-gray-600">Supervised clinical training in a rehabilitation setting.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-4 top-6 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-primary shadow-elevated md:left-1/2 md:block">
                  </div>
                </div>
                <div className="relative flex flex-col gap-6 md:flex-row mb-12 md:mb-0 md:-mt-8">
                  <div className="hidden md:block md:w-1/2">
                  </div>
                  <div className="md:w-1/2 md:pl-12">
                    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-card">
                      <span className="text-sm font-semibold text-primary">April – July 2024
                      </span>
                      <h3 className="mt-2 text-lg font-bold text-text">Clinical Placement
                      </h3>
                      <p className="mt-1 text-sm font-medium text-secondary">Roshni Association
                      </p>
                      <p className="mt-3 text-sm text-gray-600">Supervised clinical practice in a community and support-focused setting.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-4 top-6 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-primary shadow-elevated md:left-1/2 md:block">
                  </div>
                </div>
                <div className="relative flex flex-col gap-6 md:flex-row md:flex-row-reverse mb-12 md:mb-0 md:-mt-8">
                  <div className="hidden md:block md:w-1/2">
                  </div>
                  <div className="md:w-1/2 md:pr-12 md:text-right">
                    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-card">
                      <span className="text-sm font-semibold text-primary">October 2023 – March 2024
                      </span>
                      <h3 className="mt-2 text-lg font-bold text-text">Clinical Trainee
                      </h3>
                      <p className="mt-1 text-sm font-medium text-secondary">Fountain House
                      </p>
                      <p className="mt-3 text-sm text-gray-600">Supervised clinical training in a mental health and rehabilitation setting.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-4 top-6 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-primary shadow-elevated md:left-1/2 md:block">
                  </div>
                </div>
                <div className="relative flex flex-col gap-6 md:flex-row mb-12 md:mb-0 md:-mt-8">
                  <div className="hidden md:block md:w-1/2">
                  </div>
                  <div className="md:w-1/2 md:pl-12">
                    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-card">
                      <span className="text-sm font-semibold text-primary">March – September 2023
                      </span>
                      <h3 className="mt-2 text-lg font-bold text-text">Clinical Psychology / Behavior Therapy Trainee
                      </h3>
                      <p className="mt-1 text-sm font-medium text-secondary">Rising School Institute
                      </p>
                      <p className="mt-3 text-sm text-gray-600">Supervised experience in school-based clinical psychology and behavior therapy.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-4 top-6 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-primary shadow-elevated md:left-1/2 md:block">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="section-padding bg-gradient-soft fade-up">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">My Services
            </span>
            <h2 className="section-heading mx-auto mt-2">Areas of{" "}
              <span className="text-gradient">Practice
              </span>
            </h2>
            <p className="section-subheading mx-auto">Evidence-based assessment and intervention, tailored to each individual and delivered with compassion and professional care.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="group flex h-full flex-col rounded-2xl bg-white p-6 shadow-card transition-shadow duration-300 hover:shadow-elevated hover:-translate-y-2 transform transition-transform">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-white shadow-elevated transition-transform duration-300 group-hover:scale-110">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zM104 424c0 13.3 10.7 24 24 24s24-10.7 24-24-10.7-24-24-24-24 10.7-24 24zm216-135.4v49c36.5 7.4 64 39.8 64 78.4v41.7c0 7.6-5.4 14.2-12.9 15.7l-32.2 6.4c-4.3.9-8.5-1.9-9.4-6.3l-3.1-15.7c-.9-4.3 1.9-8.6 6.3-9.4l19.3-3.9V416c0-62.8-96-65.1-96 1.9v26.7l19.3 3.9c4.3.9 7.1 5.1 6.3 9.4l-3.1 15.7c-.9 4.3-5.1 7.1-9.4 6.3l-31.2-4.2c-7.9-1.1-13.8-7.8-13.8-15.9V416c0-38.6 27.5-70.9 64-78.4v-45.2c-2.2.7-4.4 1.1-6.6 1.9-18 6.3-37.3 9.8-57.4 9.8s-39.4-3.5-57.4-9.8c-7.4-2.6-14.9-4.2-22.6-5.2v81.6c23.1 6.9 40 28.1 40 53.4 0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.3 16.9-46.5 40-53.4v-80.4C48.5 301 0 355.8 0 422.4v44.8C0 491.9 20.1 512 44.8 512h358.4c24.7 0 44.8-20.1 44.8-44.8v-44.8c0-72-56.8-130.3-128-133.8z">
                  </path>
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-bold text-text">Individual Therapy
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">Personalized one-on-one sessions to help you navigate life's challenges, build resilience, and achieve emotional well-being.
              </p>
            </div>
            <div className="group flex h-full flex-col rounded-2xl bg-white p-6 shadow-card transition-shadow duration-300 hover:shadow-elevated hover:-translate-y-2 transform transition-transform">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-white shadow-elevated transition-transform duration-300 group-hover:scale-110">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" className="h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M120 72c0-39.765 32.235-72 72-72s72 32.235 72 72c0 39.764-32.235 72-72 72s-72-32.236-72-72zm254.627 1.373c-12.496-12.497-32.758-12.497-45.254 0L242.745 160H141.254L54.627 73.373c-12.496-12.497-32.758-12.497-45.254 0-12.497 12.497-12.497 32.758 0 45.255L104 213.254V480c0 17.673 14.327 32 32 32h16c17.673 0 32-14.327 32-32V368h16v112c0 17.673 14.327 32 32 32h16c17.673 0 32-14.327 32-32V213.254l94.627-94.627c12.497-12.497 12.497-32.757 0-45.254z">
                  </path>
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-bold text-text">Child Counseling
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">Gentle, age-appropriate therapy for children dealing with anxiety, behavioral issues, trauma, or difficult life transitions.
              </p>
            </div>
            <div className="group flex h-full flex-col rounded-2xl bg-white p-6 shadow-card transition-shadow duration-300 hover:shadow-elevated hover:-translate-y-2 transform transition-transform">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-white shadow-elevated transition-transform duration-300 group-hover:scale-110">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z">
                  </path>
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-bold text-text">Behavior Therapy
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">ABA-informed, individualized intervention for children and young people, with measurable goals and ongoing progress monitoring.
              </p>
            </div>
            <div className="group flex h-full flex-col rounded-2xl bg-white p-6 shadow-card transition-shadow duration-300 hover:shadow-elevated hover:-translate-y-2 transform transition-transform">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-white shadow-elevated transition-transform duration-300 group-hover:scale-110">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" className="h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z">
                  </path>
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-bold text-text">School-Based Support
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">One-to-one classroom support and close collaboration with teachers and parents to support learning and participation.
              </p>
            </div>
            <div className="group flex h-full flex-col rounded-2xl bg-white p-6 shadow-card transition-shadow duration-300 hover:shadow-elevated hover:-translate-y-2 transform transition-transform">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-white shadow-elevated transition-transform duration-300 group-hover:scale-110">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M208 0c-29.9 0-54.7 20.5-61.8 48.2-.8 0-1.4-.2-2.2-.2-35.3 0-64 28.7-64 64 0 4.8.6 9.5 1.7 14C52.5 138 32 166.6 32 200c0 12.6 3.2 24.3 8.3 34.9C16.3 248.7 0 274.3 0 304c0 33.3 20.4 61.9 49.4 73.9-.9 4.6-1.4 9.3-1.4 14.1 0 39.8 32.2 72 72 72 4.1 0 8.1-.5 12-1.2 9.6 28.5 36.2 49.2 68 49.2 39.8 0 72-32.2 72-72V64c0-35.3-28.7-64-64-64zm368 304c0-29.7-16.3-55.3-40.3-69.1 5.2-10.6 8.3-22.3 8.3-34.9 0-33.4-20.5-62-49.7-74 1-4.5 1.7-9.2 1.7-14 0-35.3-28.7-64-64-64-.8 0-1.5.2-2.2.2C422.7 20.5 397.9 0 368 0c-35.3 0-64 28.6-64 64v376c0 39.8 32.2 72 72 72 31.8 0 58.4-20.7 68-49.2 3.9.7 7.9 1.2 12 1.2 39.8 0 72-32.2 72-72 0-4.8-.5-9.5-1.4-14.1 29-12 49.4-40.6 49.4-73.9z">
                  </path>
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-bold text-text">Stress Management
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">Learn practical coping strategies and mindfulness techniques to manage stress and prevent burnout.
              </p>
            </div>
            <div className="group flex h-full flex-col rounded-2xl bg-white p-6 shadow-card transition-shadow duration-300 hover:shadow-elevated hover:-translate-y-2 transform transition-transform">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-white shadow-elevated transition-transform duration-300 group-hover:scale-110">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z">
                  </path>
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-bold text-text">Trauma-Informed Care
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">Safe, structured and evidence-based support that prioritizes safety, trust and gradual progress.
              </p>
            </div>
            <div className="group flex h-full flex-col rounded-2xl bg-white p-6 shadow-card transition-shadow duration-300 hover:shadow-elevated hover:-translate-y-2 transform transition-transform">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-white shadow-elevated transition-transform duration-300 group-hover:scale-110">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path fill="none" d="M0 0h24v24H0z">
                  </path>
                  <path d="M13 8.57a1.43 1.43 0 1 0 0 2.86 1.43 1.43 0 0 0 0-2.86z">
                  </path>
                  <path d="M13 3C9.25 3 6.2 5.94 6.02 9.64L4.1 12.2a.5.5 0 0 0 .4.8H6v3c0 1.1.9 2 2 2h1v3h7v-4.68A6.999 6.999 0 0 0 13 3zm3 7c0 .13-.01.26-.02.39l.83.66c.08.06.1.16.05.25l-.8 1.39c-.05.09-.16.12-.24.09l-.99-.4c-.21.16-.43.29-.67.39L14 13.83c-.01.1-.1.17-.2.17h-1.6c-.1 0-.18-.07-.2-.17l-.15-1.06c-.25-.1-.47-.23-.68-.39l-.99.4c-.09.03-.2 0-.25-.09l-.8-1.39a.19.19 0 0 1 .05-.25l.84-.66c-.01-.13-.02-.26-.02-.39s.02-.27.04-.39l-.85-.66c-.08-.06-.1-.16-.05-.26l.8-1.38c.05-.09.15-.12.24-.09l1 .4c.2-.15.43-.29.67-.39L12 6.17c.02-.1.1-.17.2-.17h1.6c.1 0 .18.07.2.17l.15 1.06c.24.1.46.23.67.39l1-.4c.09-.03.2 0 .24.09l.8 1.38a.2.2 0 0 1-.05.26l-.85.66c.03.12.04.25.04.39z">
                  </path>
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-bold text-text">Anxiety Treatment
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">Comprehensive treatment for generalized anxiety, panic attacks, social anxiety, and phobias using CBT and exposure therapy.
              </p>
            </div>
            <div className="group flex h-full flex-col rounded-2xl bg-white p-6 shadow-card transition-shadow duration-300 hover:shadow-elevated hover:-translate-y-2 transform transition-transform">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-white shadow-elevated transition-transform duration-300 group-hover:scale-110">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M275.3 250.5c7 7.4 18.4 7.4 25.5 0l108.9-114.2c31.6-33.2 29.8-88.2-5.6-118.8-30.8-26.7-76.7-21.9-104.9 7.7L288 36.9l-11.1-11.6C248.7-4.4 202.8-9.2 172 17.5c-35.3 30.6-37.2 85.6-5.6 118.8l108.9 114.2zm290 77.6c-11.8-10.7-30.2-10-42.6 0L430.3 402c-11.3 9.1-25.4 14-40 14H272c-8.8 0-16-7.2-16-16s7.2-16 16-16h78.3c15.9 0 30.7-10.9 33.3-26.6 3.3-20-12.1-37.4-31.6-37.4H192c-27 0-53.1 9.3-74.1 26.3L71.4 384H16c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h356.8c14.5 0 28.6-4.9 40-14L564 377c15.2-12.1 16.4-35.3 1.3-48.9z">
                  </path>
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-bold text-text">Depression Therapy
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">Compassionate support and proven therapeutic methods to help you overcome depression and rediscover joy in life.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="why-choose" className="section-padding bg-white fade-up">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Why Choose Me
            </span>
            <h2 className="section-heading mx-auto mt-2">A Trusted Partner for Your{" "}
              <span className="text-gradient">Healing Journey
              </span>
            </h2>
            <p className="section-subheading mx-auto">I combine clinical expertise with genuine compassion to create a therapeutic experience that truly makes a difference.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-card transition-all duration-300 hover:border-primary/20 hover:shadow-elevated hover:-translate-y-1 transform transition-transform">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-gradient-primary group-hover:text-white">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z">
                  </path>
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-bold text-text">Confidential Sessions
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">Your privacy is sacred. All sessions are strictly confidential and conducted in a safe, judgment-free space.
              </p>
            </div>
            <div className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-card transition-all duration-300 hover:border-primary/20 hover:shadow-elevated hover:-translate-y-1 transform transition-transform">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-gradient-primary group-hover:text-white">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" className="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 40c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm121.2 231.8l-143 141.8c-4.7 4.7-12.3 4.6-17-.1l-82.6-83.3c-4.7-4.7-4.6-12.3.1-17L99.1 285c4.7-4.7 12.3-4.6 17 .1l46 46.4 106-105.2c4.7-4.7 12.3-4.6 17 .1l28.2 28.4c4.7 4.8 4.6 12.3-.1 17z">
                  </path>
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-bold text-text">Evidence-Based Therapy
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">Treatment approaches grounded in scientific research, including CBT, ACT, motivational interviewing and ABA-informed strategies.
              </p>
            </div>
            <div className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-card transition-all duration-300 hover:border-primary/20 hover:shadow-elevated hover:-translate-y-1 transform transition-transform">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-gradient-primary group-hover:text-white">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M458.622 255.92l45.985-45.005c13.708-12.977 7.316-36.039-10.664-40.339l-62.65-15.99 17.661-62.015c4.991-17.838-11.829-34.663-29.661-29.671l-61.994 17.667-15.984-62.671C337.085.197 313.765-6.276 300.99 7.228L256 53.57 211.011 7.229c-12.63-13.351-36.047-7.234-40.325 10.668l-15.984 62.671-61.995-17.667C74.87 57.907 58.056 74.738 63.046 92.572l17.661 62.015-62.65 15.99C.069 174.878-6.31 197.944 7.392 210.915l45.985 45.005-45.985 45.004c-13.708 12.977-7.316 36.039 10.664 40.339l62.65 15.99-17.661 62.015c-4.991 17.838 11.829 34.663 29.661 29.671l61.994-17.667 15.984 62.671c4.439 18.575 27.696 24.018 40.325 10.668L256 458.61l44.989 46.001c12.5 13.488 35.987 7.486 40.325-10.668l15.984-62.671 61.994 17.667c17.836 4.994 34.651-11.837 29.661-29.671l-17.661-62.015 62.65-15.99c17.987-4.302 24.366-27.367 10.664-40.339l-45.984-45.004z">
                  </path>
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-bold text-text">Supervised Clinical Training
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">900 hours of supervised practice across child, adult and community settings, including rehabilitation, school and therapy-center placements.
              </p>
            </div>
            <div className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-card transition-all duration-300 hover:border-primary/20 hover:shadow-elevated hover:-translate-y-1 transform transition-transform">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-gradient-primary group-hover:text-white">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M519.442 288.651c-41.519 0-59.5 31.593-82.058 31.593C377.409 320.244 432 144 432 144s-196.288 80-196.288-3.297c0-35.827 36.288-46.25 36.288-85.985C272 19.216 243.885 0 210.539 0c-34.654 0-66.366 18.891-66.366 56.346 0 41.364 31.711 59.277 31.711 81.75C175.885 207.719 0 166.758 0 166.758v333.237s178.635 41.047 178.635-28.662c0-22.473-40-40.107-40-81.471 0-37.456 29.25-56.346 63.577-56.346 33.673 0 61.788 19.216 61.788 54.717 0 39.735-36.288 50.158-36.288 85.985 0 60.803 129.675 25.73 181.23 25.73 0 0-34.725-120.101 25.827-120.101 35.962 0 46.423 36.152 86.308 36.152C556.712 416 576 387.99 576 354.443c0-34.199-18.962-65.792-56.558-65.792z">
                  </path>
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-bold text-text">Personalized Care
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">Every treatment plan is tailored to your unique needs, goals, and personal journey toward healing.
              </p>
            </div>
            <div className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-card transition-all duration-300 hover:border-primary/20 hover:shadow-elevated hover:-translate-y-1 transform transition-transform">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-gradient-primary group-hover:text-white">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" className="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M232 224h56v56a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8v-56h56a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8h-56v-56a8 8 0 0 0-8-8h-48a8 8 0 0 0-8 8v56h-56a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8zM576 48a48.14 48.14 0 0 0-48-48H112a48.14 48.14 0 0 0-48 48v336h512zm-64 272H128V64h384zm112 96H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33-17.47-32.77-32H16a16 16 0 0 0-16 16v16a64.19 64.19 0 0 0 64 64h512a64.19 64.19 0 0 0 64-64v-16a16 16 0 0 0-16-16z">
                  </path>
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-bold text-text">Collaborative Approach
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">Close collaboration with caregivers, teachers and colleagues to support consistent, coordinated care.
              </p>
            </div>
            <div className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-card transition-all duration-300 hover:border-primary/20 hover:shadow-elevated hover:-translate-y-1 transform transition-transform">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-gradient-primary group-hover:text-white">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z">
                  </path>
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-bold text-text">Supportive Environment
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">A warm, welcoming space where you feel heard, understood, and empowered to make meaningful changes.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="faq" className="section-padding bg-white fade-up">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">FAQ
            </span>
            <h2 className="section-heading mx-auto mt-2">Frequently Asked{" "}
              <span className="text-gradient">Questions
              </span>
            </h2>
            <p className="section-subheading mx-auto">Find answers to common questions about therapy, sessions, and getting started.
            </p>
          </div>
          <div className="mt-12 space-y-3">
            <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-card faq-item">
              <button className="faq-button flex w-full items-center justify-between gap-4 p-5 text-left">
                <span className="font-semibold text-text">What should I expect during my first therapy session?
                </span>
                <span className="shrink-0 text-primary accordion-icon rotate">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-hidden="true" className="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd">
                    </path>
                  </svg>
                </span>
              </button>
              <div className="accordion-content open">
                <p className="border-t border-gray-100 px-5 pb-5 pt-3 text-sm leading-relaxed text-gray-600">{" "}Your first session is an opportunity to get to know each other. We'll discuss what brought you to therapy, your goals, and your history. I'll explain my approach and answer any questions. There's no pressure — it's a safe space to share at your own pace.{" "}
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-card faq-item">
              <button className="faq-button flex w-full items-center justify-between gap-4 p-5 text-left">
                <span className="font-semibold text-text">How long does therapy typically last?
                </span>
                <span className="shrink-0 text-primary accordion-icon">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-hidden="true" className="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd">
                    </path>
                  </svg>
                </span>
              </button>
              <div className="accordion-content">
                <p className="border-t border-gray-100 px-5 pb-5 pt-3 text-sm leading-relaxed text-gray-600">The duration varies based on your individual needs and goals. Some clients benefit from short-term therapy (8-12 sessions), while others prefer ongoing support. We'll regularly review your progress and adjust the treatment plan together.
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-card faq-item">
              <button className="faq-button flex w-full items-center justify-between gap-4 p-5 text-left">
                <span className="font-semibold text-text">Do you offer online therapy sessions?
                </span>
                <span className="shrink-0 text-primary accordion-icon">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-hidden="true" className="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd">
                    </path>
                  </svg>
                </span>
              </button>
              <div className="accordion-content">
                <p className="border-t border-gray-100 px-5 pb-5 pt-3 text-sm leading-relaxed text-gray-600">{" "}Yes! I offer secure, HIPAA-compliant video sessions for clients who prefer the convenience of telehealth. Online sessions are just as effective as in-person therapy for most concerns.
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-card faq-item">
              <button className="faq-button flex w-full items-center justify-between gap-4 p-5 text-left">
                <span className="font-semibold text-text">Is everything I share confidential?
                </span>
                <span className="shrink-0 text-primary accordion-icon">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-hidden="true" className="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd">
                    </path>
                  </svg>
                </span>
              </button>
              <div className="accordion-content">
                <p className="border-t border-gray-100 px-5 pb-5 pt-3 text-sm leading-relaxed text-gray-600">{" "}Absolutely. Confidentiality is a cornerstone of therapy. Everything discussed in sessions is private, with very limited exceptions required by law (such as imminent harm to yourself or others).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding fade-up">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/80" style={{"background": "linear-gradient(to right, rgba(79, 70, 229, 0.9), rgba(6, 182, 212, 0.8))"}}>
          </div>
          <div className="relative px-8 py-16 text-center sm:px-16 sm:py-20">
            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Ready to Start Your Healing Journey?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">Take the first step toward a healthier, happier you. Get in touch to arrange an appointment or discuss a professional enquiry.
            </p>
            <div className="mt-8">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-primary shadow-elevated transition-all duration-300 hover:scale-105 hover:shadow-lg" style={{"textDecoration": "none"}}>{" "}Book Appointment{" "}
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd">
                  </path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="section-padding bg-white fade-up">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Contact
            </span>
            <h2 className="section-heading mx-auto mt-2">Get in{" "}
              <span className="text-gradient">Touch
              </span>
            </h2>
            <p className="section-subheading mx-auto">Ready to take the first step? Reach out to schedule a consultation or ask any questions about my services.
            </p>
          </div>
          <div className="grid gap-12 lg:gap-16 xl:gap-20 lg:grid-cols-5 items-start">
            <div className="flex flex-col h-full lg:col-span-2 order-2 lg:order-last lg:pl-4 xl:pl-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-text">Direct Contact
                </h3>
                <div className="mt-3 h-1 w-16 rounded-full bg-primary">
                </div>
              </div>
              <div className="space-y-6">
                <div className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-primary/30">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" className="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z">
                      </path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Location
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-text">Lahore, DHA Phase 5
                    </p>
                  </div>
                </div>
                <div className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-primary/30">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z">
                      </path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Email
                    </p>
                    <a href="mailto:faizsehar7@gmail.com" className="mt-0.5 block text-sm font-medium text-text transition-colors hover:text-primary" style={{"textDecoration": "none"}}>faizsehar7@gmail.com
                    </a>
                  </div>
                </div>
                <div className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-primary/30">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z">
                      </path>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Phone / WhatsApp
                    </p>
                    <a href="tel:+923038810635" className="mt-0.5 block text-sm font-medium text-text transition-colors hover:text-primary" style={{"textDecoration": "none"}}>+92 303 8810 635
                    </a>
                    <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-[#25D366]/10 px-3 py-1.5 text-xs font-semibold text-[#25D366] transition-colors hover:bg-[#25D366] hover:text-white" style={{"textDecoration": "none"}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                      </svg>{" "}Message on WhatsApp{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div id="contact-form-container" className="lg:col-span-3 order-1 lg:order-first">
              <form id="contact-form" className="bg-white rounded-3xl p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100">
                <div className="grid gap-5">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-text">Full Name
                    </label>
                    <input type="text" id="name" required className="w-full rounded-xl border border-gray-200 bg-white/80 px-4 py-3 text-sm text-text outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="Enter your full name" />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-text">Message
                    </label>
                    <textarea id="message" rows={5} required className="w-full rounded-xl border border-gray-200 bg-white/80 px-4 py-3 text-sm text-text outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="Enter your message">
                    </textarea>
                  </div>
                </div>
                <button type="submit" id="submit-btn" className="btn-primary mt-6 w-full sm:w-auto">
                  <span id="submit-text">Send WhatsApp message
                  </span>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z">
                    </path>
                  </svg>
                </button>
              </form>
              <div id="success-message" className="bg-white rounded-3xl p-10 text-center sm:p-14 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 hidden">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/20 text-accent mb-6">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-hidden="true" className="h-8 w-8" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z">
                    </path>
                  </svg>
                </div>
                <h3 className="mt-6 text-2xl font-bold text-text">Message Sent!
                </h3>
                <p className="mt-2 text-gray-600">Thank you for reaching out. I'll get back to you within 24 hours.
                </p>
                <button id="send-another-btn" className="btn-primary mt-6">Send Another Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer className="bg-text text-white">
      <div className="mx-auto max-w-7xl px-4 pt-24 pb-8 sm:px-6 lg:px-8">
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#home" className="flex items-center gap-2" style={{"textDecoration": "none"}}>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="h-6 w-6 text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path fill="none" d="M0 0h24v24H0z">
                  </path>
                  <path d="M13 8.57a1.43 1.43 0 1 0 0 2.86 1.43 1.43 0 0 0 0-2.86z">
                  </path>
                  <path d="M13 3C9.25 3 6.2 5.94 6.02 9.64L4.1 12.2a.5.5 0 0 0 .4.8H6v3c0 1.1.9 2 2 2h1v3h7v-4.68A6.999 6.999 0 0 0 13 3zm3 7c0 .13-.01.26-.02.39l.83.66c.08.06.1.16.05.25l-.8 1.39c-.05.09-.16.12-.24.09l-.99-.4c-.21.16-.43.29-.67.39L14 13.83c-.01.1-.1.17-.2.17h-1.6c-.1 0-.18-.07-.2-.17l-.15-1.06c-.25-.1-.47-.23-.68-.39l-.99.4c-.09.03-.2 0-.25-.09l-.8-1.39a.19.19 0 0 1 .05-.25l.84-.66c-.01-.13-.02-.26-.02-.39s.02-.27.04-.39l-.85-.66c-.08-.06-.1-.16-.05-.26l.8-1.38c.05-.09.15-.12.24-.09l1 .4c.2-.15.43-.29.67-.39L12 6.17c.02-.1.1-.17.2-.17h1.6c.1 0 .18.07.2.17l.15 1.06c.24.1.46.23.67.39l1-.4c.09-.03.2 0 .24.09l.8 1.38a.2.2 0 0 1-.05.26l-.85.66c.03.12.04.25.04.39z">
                  </path>
                </svg>
              </div>
              <div>
                <span className="text-sm font-bold">Sehar Faiz
                </span>
                <p className="text-xs text-gray-400">Clinical Psychologist
                </p>
              </div>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">Compassionate, evidence-based therapy to help you heal, grow, and live your best life.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="https://www.linkedin.com/in/sehar-faiz-74a44b355/" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-gray-300 transition-colors hover:bg-primary hover:text-white">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                  </path>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">Quick Links
            </h3>
            <ul className="mt-8 space-y-4">
              <li>
                <a href="#home" className="text-sm text-gray-400 transition-colors hover:text-white" style={{"textDecoration": "none"}}>Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm text-gray-400 transition-colors hover:text-white" style={{"textDecoration": "none"}}>About
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-gray-400 transition-colors hover:text-white" style={{"textDecoration": "none"}}>Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-gray-400 transition-colors hover:text-white" style={{"textDecoration": "none"}}>Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">Services
            </h3>
            <ul className="mt-8 space-y-4">
              <li>
                <a href="#services" className="text-sm text-gray-400 transition-colors hover:text-white" style={{"textDecoration": "none"}}>Individual Therapy
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-gray-400 transition-colors hover:text-white" style={{"textDecoration": "none"}}>Child Counseling
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-gray-400 transition-colors hover:text-white" style={{"textDecoration": "none"}}>Behavior Therapy
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-gray-400 transition-colors hover:text-white" style={{"textDecoration": "none"}}>School-Based Support
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">Contact Info
            </h3>
            <ul className="mt-8 space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-0.5 h-4 w-4 shrink-0 text-secondary">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="h-full w-full" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z">
                    </path>
                  </svg>
                </div>
                <a href="mailto:faizsehar7@gmail.com" className="text-sm text-gray-400 transition-colors hover:text-white" style={{"textDecoration": "none"}}>faizsehar7@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 h-4 w-4 shrink-0 text-secondary">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="h-full w-full" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z">
                    </path>
                  </svg>
                </div>
                <a href="tel:+923038810635" className="text-sm text-gray-400 transition-colors hover:text-white" style={{"textDecoration": "none"}}>+92 303 8810 635
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 h-4 w-4 shrink-0 text-secondary">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" className="h-full w-full" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z">
                    </path>
                  </svg>
                </div>
                <span className="text-sm text-gray-400">DHA Phase 5, Lahore
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-12 text-center">
          <p className="text-sm text-gray-500">&copy;{" "}
            <span id="year">
            </span>{" "}Sehar Faiz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    <button id="scrollToTopBtn" aria-label="Scroll to top" className="bg-primary text-white" style={{"position": "fixed", "bottom": "95px", "right": "20px", "borderRadius": "50%", "width": "50px", "height": "50px", "display": "flex", "alignItems": "center", "justifyContent": "center", "boxShadow": "0 4px 10px rgba(0,0,0,0.15)", "zIndex": "999", "transition": "all 0.3s ease", "opacity": "0", "pointerEvents": "none", "border": "none", "cursor": "pointer", "transform": "translateY(15px)"}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
    <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="whatsapp-float" style={{"position": "fixed", "bottom": "20px", "right": "20px", "backgroundColor": "#25D366", "color": "white", "borderRadius": "50%", "width": "60px", "height": "60px", "display": "flex", "alignItems": "center", "justifyContent": "center", "boxShadow": "0 4px 10px rgba(0,0,0,0.15)", "zIndex": "1000", "transition": "transform 0.3s ease"}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
      </svg>
    </a>
      <SiteScripts />
    </>
  );
}
