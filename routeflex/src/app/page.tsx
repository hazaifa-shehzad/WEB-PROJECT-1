import Image from "next/image";
import Link from "next/link";
import { FiChevronRight, FiCheck, FiMapPin, FiZap, FiShield } from "react-icons/fi";

function NavBar() {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border/50">
      <div className="max-w-7xl mx-auto container-px flex items-center justify-between h-16">
        <Link href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-primary/90 grid place-items-center text-primary-foreground font-bold">R</div>
          <span className="font-semibold tracking-tight">RouteFlex</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <Link href="#features" className="hover:text-foreground">Features</Link>
          <Link href="#how" className="hover:text-foreground">How it works</Link>
          <Link href="#pricing" className="hover:text-foreground">Pricing</Link>
          <Link href="#faq" className="hover:text-foreground">FAQ</Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link href="#pricing" className="hidden sm:inline-flex h-9 px-4 items-center rounded-md border border-border hover:bg-muted/40 transition">Pricing</Link>
          <Link href="#cta" className="inline-flex h-9 px-4 items-center rounded-md bg-primary text-primary-foreground hover:opacity-90 transition">Get started</Link>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="w-full pt-16 sm:pt-24 lg:pt-28">
      <div className="max-w-7xl mx-auto container-px grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-muted/60 text-xs px-3 py-1 border border-border/60">
            <span className="text-muted-foreground">New</span>
            <span className="font-medium">AI-powered route optimization</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
            Plan smarter routes. Deliver faster.
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl">
            RouteFlex helps operations teams plan, optimize, and track delivery routes with real-time constraints and live traffic data.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="#cta" className="inline-flex h-11 px-5 items-center rounded-md bg-primary text-primary-foreground gap-2 hover:opacity-90 transition">
              Start free trial
              <FiChevronRight className="h-4 w-4" />
            </Link>
            <Link href="#features" className="inline-flex h-11 px-5 items-center rounded-md border border-border hover:bg-muted/40 transition">
              See features
            </Link>
          </div>
          <div className="flex items-center gap-6 pt-2 text-sm text-muted-foreground">
            <div className="flex -space-x-3">
              <Image src="/users.svg" alt="Users" width={96} height={32} className="h-8 w-auto" />
            </div>
            <span>Trusted by logistics teams across 20+ cities</span>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-primary/20 via-secondary/10 to-transparent rounded-2xl blur-2xl" />
          <div className="rounded-2xl border border-border bg-card/60 backdrop-blur p-2">
                          <Image
              src="/hero-map.svg"
              alt="RouteFlex dashboard preview"
              width={1200}
              height={800}
              className="rounded-xl border border-border"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) {
  return (
    <div className="rounded-xl border border-border bg-card/60 p-6 hover:bg-card transition">
      <div className="h-10 w-10 rounded-md bg-primary/15 text-primary grid place-items-center mb-4">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="font-medium text-lg mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

function FeaturesSection() {
  return (
    <section id="features" className="w-full py-16 sm:py-24">
      <div className="max-w-7xl mx-auto container-px">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Everything you need to move smarter</h2>
          <p className="text-muted-foreground mt-3">Powerful tools that adapt to your constraints, fleet, and SLAs.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <Feature icon={FiMapPin} title="Dynamic routing" description="Automatically generate optimal routes that adapt to time windows, capacity, and traffic." />
          <Feature icon={FiZap} title="Real-time tracking" description="Monitor fleet locations, ETAs, and exceptions with minute-level updates." />
          <Feature icon={FiShield} title="Reliable SLAs" description="Built-in constraints ensure deliveries hit promised time windows." />
          <Feature icon={FiCheck} title="Driver app" description="Simple iOS/Android app for turn-by-turn navigation and proof of delivery." />
          <Feature icon={FiCheck} title="APIs & integrations" description="Connect your OMS/WMS with webhooks, API, and native integrations." />
          <Feature icon={FiCheck} title="Analytics" description="Post-run insights, route costs, and on-time performance trends." />
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      title: "Import orders",
      desc: "Upload CSV or connect your OMS to sync stops, time windows, and capacities.",
    },
    {
      title: "Optimize",
      desc: "Choose objectives (time, distance, cost) and let RouteFlex compute the best plan.",
    },
    {
      title: "Dispatch",
      desc: "Send routes to driver app with turn-by-turn navigation and live updates.",
    },
  ];
  return (
    <section id="how" className="w-full py-16 sm:py-24">
      <div className="max-w-7xl mx-auto container-px">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">How it works</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-xl border border-border bg-card/60 p-6">
              <div className="text-sm text-muted-foreground">Step {i + 1}</div>
              <h3 className="mt-2 font-medium text-lg">{s.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingCard({ plan, price, features, cta }: { plan: string; price: string; features: string[]; cta: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card/70 p-6 flex flex-col">
      <h3 className="text-xl font-semibold">{plan}</h3>
      <div className="mt-2 text-4xl font-bold">{price}</div>
      <div className="text-sm text-muted-foreground">per month</div>
      <ul className="mt-6 space-y-2 text-sm">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <span className="mt-1 text-success"><FiCheck /></span>
            <span className="text-muted-foreground">{f}</span>
          </li>
        ))}
      </ul>
      <Link href="#cta" className="mt-6 inline-flex h-10 items-center justify-center rounded-md bg-primary text-primary-foreground hover:opacity-90 transition">
        {cta}
      </Link>
    </div>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="w-full py-16 sm:py-24">
      <div className="max-w-7xl mx-auto container-px">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Simple, transparent pricing</h2>
          <p className="text-muted-foreground mt-3">Start free. Upgrade when you scale.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <PricingCard
            plan="Starter"
            price="$39"
            cta="Start free"
            features={["100 orders/mo", "Up to 5 drivers", "Email support"]}
          />
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-b from-primary/30 via-secondary/20 to-transparent rounded-3xl blur" />
            <div className="relative">
              <PricingCard
                plan="Growth"
                price="$149"
                cta="Try 14 days free"
                features={["5,000 orders/mo", "Up to 50 drivers", "Priority support", "Advanced analytics"]}
              />
            </div>
          </div>
          <PricingCard
            plan="Enterprise"
            price="Custom"
            cta="Contact sales"
            features={["Unlimited orders", "SAML SSO", "Uptime SLA", "Dedicated CSM"]}
          />
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="w-full py-16 sm:py-24">
      <div className="max-w-7xl mx-auto container-px">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Teams deliver more with RouteFlex</h2>
          <p className="text-muted-foreground mt-3">Real results from real operations leaders.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-xl border border-border bg-card/60 p-6">
              <p className="text-sm leading-relaxed">
                “RouteFlex cut our route planning time by 80% and improved on-time delivery by 12%. Our drivers love the app.”
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-muted" />
                <div>
                  <div className="text-sm font-medium">Alex Chen</div>
                  <div className="text-xs text-muted-foreground">Ops Manager, RapidGrocer</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section id="cta" className="w-full py-16 sm:py-24">
      <div className="max-w-7xl mx-auto container-px">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-tr from-primary/15 via-secondary/10 to-transparent">
          <div className="p-8 sm:p-12 grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Ready to optimize your next run?</h2>
              <p className="text-muted-foreground mt-3 max-w-xl">
                Start your 14-day free trial. No credit card required.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link href="#" className="inline-flex h-11 px-5 items-center rounded-md bg-primary text-primary-foreground gap-2 hover:opacity-90 transition">
                  Create account
                  <FiChevronRight className="h-4 w-4" />
                </Link>
                <Link href="#pricing" className="inline-flex h-11 px-5 items-center rounded-md border border-border hover:bg-muted/40 transition">
                  View pricing
                </Link>
              </div>
            </div>
            <div className="flex items-center md:justify-end">
              <div className="rounded-xl border border-border bg-card/70 p-3 w-full max-w-sm">
                <div className="text-sm text-muted-foreground">Example results</div>
                <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-lg bg-background/60 border border-border p-3">
                    <div className="text-2xl font-semibold">-22%</div>
                    <div className="text-muted-foreground">Distance</div>
                  </div>
                  <div className="rounded-lg bg-background/60 border border-border p-3">
                    <div className="text-2xl font-semibold">+14%</div>
                    <div className="text-muted-foreground">On-time</div>
                  </div>
                  <div className="rounded-lg bg-background/60 border border-border p-3">
                    <div className="text-2xl font-semibold">-35m</div>
                    <div className="text-muted-foreground">Planning</div>
                  </div>
                  <div className="rounded-lg bg-background/60 border border-border p-3">
                    <div className="text-2xl font-semibold">99.9%</div>
                    <div className="text-muted-foreground">Uptime</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="w-full border-t border-border/50 py-10 mt-8">
      <div className="max-w-7xl mx-auto container-px grid md:grid-cols-2 gap-6 items-center">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-md bg-primary/90 grid place-items-center text-primary-foreground font-bold">R</div>
          <span className="font-semibold">RouteFlex</span>
          <span className="text-sm text-muted-foreground">© {new Date().getFullYear()}</span>
        </div>
        <div className="flex md:justify-end gap-6 text-sm text-muted-foreground">
          <Link href="#">Privacy</Link>
          <Link href="#">Terms</Link>
          <Link href="#">Contact</Link>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <NavBar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <PricingSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
