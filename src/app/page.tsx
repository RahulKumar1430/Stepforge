import Link from "next/link";
import { ArrowUpRight, BarChart3, Bell, Footprints, MapPin, ShieldCheck, Sparkles } from "lucide-react";

const supportEmail = "rahulkumar27382@gmail.com";

const features = [
  { icon: Footprints, title: "Your day, at a glance", text: "See steps, distance, calories, active minutes, and goal progress in one calm dashboard." },
  { icon: BarChart3, title: "Patterns that help", text: "Move from today to week and month views to understand your rhythm without noisy feeds." },
  { icon: MapPin, title: "Optional route sessions", text: "Record a walk or run with GPS only when you choose to start a route session." },
  { icon: Bell, title: "Useful nudges", text: "Set goal alerts and daily reminders that support your routine instead of interrupting it." },
];

export default function Home() {
  return <main>
    <header className="site-header"><Link className="brand" href="/"><span className="brand-mark"><Footprints size={20} /></span><span>StepForge</span></Link><nav><Link href="#features">Features</Link><Link href="/privacy">Privacy</Link><Link href="/support">Support</Link><Link className="nav-cta" href="/testing">Testing guide <ArrowUpRight size={15} /></Link></nav></header>
    <section className="hero section-wrap">
      <div className="hero-copy"><p className="eyebrow"><span className="eyebrow-dot" /> ANDROID WALKING COACH</p><h1>Make every step <em>count.</em></h1><p className="hero-lede">StepForge is a simple, thoughtful pedometer for building a more active day. Track your movement, set a goal, and keep going at your pace.</p><div className="hero-actions"><Link className="button button-dark" href="/testing">Closed testing guide <ArrowUpRight size={17} /></Link><Link className="text-link" href="#features">Explore the app <span>↓</span></Link></div><div className="hero-note"><ShieldCheck size={17} /><span>Local-first by design. No account or ads in this build.</span></div></div>
      <div className="hero-visual"><div className="visual-glow" /><div className="phone"><div className="phone-top"><span>9:41</span><span>● ● ▰</span></div><p className="phone-kicker">TODAY</p><div className="phone-steps"><strong>7,842</strong><span>steps</span></div><div className="progress-ring"><div><strong>78%</strong><small>of goal</small></div></div><div className="phone-stats"><span><b>5.8 km</b><small>Distance</small></span><span><b>312</b><small>Calories</small></span><span><b>64 min</b><small>Active</small></span></div><div className="phone-chart"><i /><i /><i /><i /><i /><i /><i /><i /><i /></div><div className="phone-footer"><span>Week</span><b>Today</b><span>Month</span></div></div><div className="floating-card"><Sparkles size={17} /><span><b>Goal coach</b><small>You're on a good stride</small></span></div></div>
    </section>
    <section className="trust-band"><div className="section-wrap trust-inner"><span>BUILT FOR EVERYDAY WELLNESS</span><span className="trust-line" /><span>ANDROID FIRST</span><span className="trust-line" /><span>PRIVATE BY DEFAULT</span></div></section>
    <section className="feature-section section-wrap" id="features"><div className="section-intro"><p className="eyebrow">A QUIETLY USEFUL TOOL</p><h2>The right amount of <em>motivation.</em></h2><p>StepForge keeps the useful parts of fitness tracking close at hand, with a clear interface that makes checking in feel easy.</p></div><div className="feature-grid">{features.map(({ icon: Icon, title, text }) => <article className="feature" key={title}><div className="feature-icon"><Icon size={21} /></div><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="privacy-callout"><div className="section-wrap privacy-inner"><div><p className="eyebrow">YOUR DATA, YOUR DEVICE</p><h2>Wellness tracking without the baggage.</h2><p>StepForge stores activity and profile data locally on your Android device. Location is optional and only used for a route session you start.</p></div><Link className="button button-light" href="/privacy">Read the privacy policy <ArrowUpRight size={17} /></Link></div></section>
    <section className="final-section section-wrap"><p className="eyebrow">READY WHEN YOU ARE</p><h2>Start with one step.</h2><p>StepForge is entering closed testing. Help shape a dependable walking companion for Android.</p><Link className="button button-dark" href="/testing">Join the testing conversation <ArrowUpRight size={17} /></Link></section>
    <Footer />
  </main>;
}

function Footer() { return <footer><div className="section-wrap footer-inner"><Link className="brand" href="/"><span className="brand-mark"><Footprints size={18} /></span><span>StepForge</span></Link><div className="footer-links"><Link href="/privacy">Privacy policy</Link><Link href="/support">Support</Link><Link href="/testing">Testing guide</Link><a href={`mailto:${supportEmail}`}>{supportEmail}</a></div><span className="copyright">© 2026 StepForge</span></div></footer>; }
