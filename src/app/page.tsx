"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CalendarCheck,
  Users,
  Clock,
  Wrench,
  Star,
  Sparkles,
  Play,
  Zap,
  Shield,
  Headphones,
  ChevronLeft,
  ChevronRight,
  Download,
  Smartphone,
  X,
  Gift,
  TrendingUp,
  Award,
  QrCode,
  Share2,
  Heart,
  Mic,
  Video,
  Gamepad2,
  Camera,
  Podcast,
  CheckCircle2,
  MousePointer2,
} from "lucide-react";
import { spaces } from "@/data/spaces";
import SponsorBanner from "@/components/SponsorBanner";

/* ──────────── stats ──────────── */
const stats = [
  { icon: Users, value: "500+", label: "Happy Creators" },
  { icon: Wrench, value: "50+", label: "Equipment Items" },
  { icon: Clock, value: "24/7", label: "Available" },
  { icon: Star, value: "4.9", label: "Rating" },
];

/* ──────────── testimonials ──────────── */
const testimonials = [
  { name: "Rahul Kumar", role: "YouTuber", text: "Snapforest changed my content game. The YouTube studio is world-class!", avatar: "RK" },
  { name: "Priya Sharma", role: "Podcaster", text: "Best podcast room in Gaya. Crystal clear audio every single time.", avatar: "PS" },
  { name: "Amit Raj", role: "Gamer", text: "The gaming room with RTX 4090 is insane. My streams have never looked better.", avatar: "AR" },
  { name: "Neha Gupta", role: "Photographer", text: "Professional photography studio at affordable prices. Highly recommend!", avatar: "NG" },
];

/* ──────────── features ──────────── */
const features = [
  { icon: Zap, title: "Instant Booking", desc: "Book your studio in under 60 seconds" },
  { icon: Shield, title: "Secure Payments", desc: "Encrypted & safe transactions" },
  { icon: Headphones, title: "24/7 Support", desc: "Our team is always here to help" },
  { icon: Sparkles, title: "Premium Equipment", desc: "Top-tier gear for professional results" },
];

/* ──────────── Particle Network Background ──────────── */
function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = canvas.offsetWidth);
    let h = (canvas.height = canvas.offsetHeight);
    let animationId: number;

    const particles: { x: number; y: number; vx: number; vy: number }[] = [];
    const particleCount = 50;
    const connectionDistance = 180;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
      });
    }

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(16, 185, 129, 0.5)";
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(16, 185, 129, ${0.2 * (1 - dist / connectionDistance)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ opacity: 0.7 }} />;
}

/* ──────────── Glow Cursor Effect ──────────── */
function GlowCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const points = useRef<{ x: number; y: number; life: number }[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    let animId: number;

    const handleMove = (e: MouseEvent | TouchEvent) => {
      const x = "touches" in e ? e.touches[0].clientX : e.clientX;
      const y = "touches" in e ? e.touches[0].clientY : e.clientY;
      points.current.push({ x, y, life: 1 });
      if (points.current.length > 40) points.current.shift();
    };

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);

      points.current.forEach((p) => {
        p.life -= 0.015;
        if (p.life <= 0) return;

        const radius = 20 + (1 - p.life) * 30;
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius);
        gradient.addColorStop(0, `rgba(16, 185, 129, ${p.life * 0.4})`);
        gradient.addColorStop(0.4, `rgba(16, 185, 129, ${p.life * 0.15})`);
        gradient.addColorStop(1, "rgba(16, 185, 129, 0)");

        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      points.current = points.current.filter((p) => p.life > 0);
      animId = requestAnimationFrame(animate);
    }

    animate();
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleMove, { passive: true });

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none z-[9998]" />;
}

/* ──────────── Booking Notification Toast ──────────── */
function BookingNotifications() {
  const names = [
    "Arvind", "Rohit", "Priya", "Amit", "Sneha", "Vikram",
    "Neha", "Rajesh", "Anjali", "Karan", "Divya", "Manish",
    "Pooja", "Rahul", "Sonia", "Aakash", "Meera", "Vivek",
  ];
  const rooms = ["Podcast Room", "YouTube Studio", "Gaming Room", "Photography Studio", "Editing Suite", "Interview Room", "Reel Setup"];
  const [toast, setToast] = useState<{ name: string; room: string } | null>(null);

  useEffect(() => {
    const showRandomToast = () => {
      const name = names[Math.floor(Math.random() * names.length)];
      const room = rooms[Math.floor(Math.random() * rooms.length)];
      setToast({ name, room });
      setTimeout(() => setToast(null), 4000);
    };

    const interval = setInterval(showRandomToast, 20000);
    const firstTimeout = setTimeout(showRandomToast, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(firstTimeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ opacity: 0, x: 300, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 300, scale: 0.8 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed top-24 right-4 z-[9999] max-w-sm"
        >
          <div className="bg-zinc-900/95 backdrop-blur-xl border border-emerald-400/30 rounded-2xl p-4 shadow-2xl shadow-emerald-500/10">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <p className="text-white text-sm font-medium">{toast.name} just booked {toast.room}</p>
                <p className="text-emerald-400 text-xs mt-1">{Math.floor(Math.random() * 10 + 1)} minutes ago</p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ──────────── App Download Popup ──────────── */
function AppDownloadPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9997] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
            transition={{ type: "spring", damping: 25 }}
            className="bg-zinc-900 border border-white/10 rounded-3xl p-8 max-w-md w-full relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl" />

            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative z-10 text-center">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Get the Snapforest App</h3>
              <p className="text-gray-400 mb-6">
                Book studios, manage appointments & get exclusive discounts on the go!
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                  <Download className="w-5 h-5" />
                  App Store
                </button>
                <button className="flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500 text-black rounded-xl font-semibold hover:bg-emerald-600 transition-colors">
                  <Download className="w-5 h-5" />
                  Play Store
                </button>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10">
                <div className="flex items-center justify-center gap-2">
                  <QrCode className="w-4 h-4 text-emerald-400" />
                  <span className="text-gray-400 text-sm">Scan QR code at the studio</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ──────────── Room Image Slider ──────────── */
function RoomSlider() {
  const [current, setCurrent] = useState(0);
  const featuredRooms = spaces.slice(0, 5);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % featuredRooms.length);
  }, [featuredRooms.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + featuredRooms.length) % featuredRooms.length);
  }, [featuredRooms.length]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-3xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-[16/9] md:aspect-[21/9]"
          >
            <Image
              src={featuredRooms[current].image}
              alt={featuredRooms[current].title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <span className="inline-block px-3 py-1 bg-emerald-500 text-black text-xs font-bold rounded-full mb-3">
                  FEATURED SPACE
                </span>
                <h3 className="text-2xl md:text-4xl font-bold text-white mb-2">{featuredRooms[current].title}</h3>
                <p className="text-gray-300 mb-4 max-w-xl">{featuredRooms[current].description}</p>
                <div className="flex flex-wrap items-center gap-4">
                  <span className="text-emerald-400 font-bold text-lg">{featuredRooms[current].price}</span>
                  <Link
                    href="/booking"
                    className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-xl transition-all flex items-center gap-2"
                  >
                    <CalendarCheck className="w-4 h-4" />
                    Book Now
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-emerald-500 hover:text-black transition-all"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-emerald-500 hover:text-black transition-all"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="flex items-center justify-center gap-2 mt-4">
        {featuredRooms.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all ${
              i === current ? "w-8 bg-emerald-400" : "w-2 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* ──────────── Confetti Effect ──────────── */
function ConfettiEffect({ trigger }: { trigger: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!trigger) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; vx: number; vy: number; color: string; size: number; rotation: number; rotSpeed: number }[] = [];
    const colors = ["#10b981", "#34d399", "#6ee7b7", "#fbbf24", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899"];

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        vx: (Math.random() - 0.5) * 15,
        vy: (Math.random() - 0.5) * 15 - 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 8 + 4,
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 10,
      });
    }

    let animId: number;
    const gravity = 0.2;

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += gravity;
        p.rotation += p.rotSpeed;

        if (p.y < canvas.height + 50) {
          alive = true;
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
          ctx.restore();
        }
      });

      if (alive) {
        animId = requestAnimationFrame(animate);
      }
    }

    animate();
    return () => cancelAnimationFrame(animId);
  }, [trigger]);

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none z-[9996]" />;
}

/* ──────────── Loyalty Program Banner ──────────── */
function LoyaltyBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-900/50 via-zinc-900 to-emerald-900/50 border border-emerald-400/20 p-8 md:p-10"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center">
            <Award className="w-7 h-7 text-emerald-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Snapforest Rewards</h3>
            <p className="text-gray-400 text-sm">Earn points on every booking. Get free studio hours!</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-400">10%</div>
            <div className="text-xs text-gray-400">Cashback</div>
          </div>
          <div className="w-px h-10 bg-white/10" />
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-400">Free</div>
            <div className="text-xs text-gray-400">5th Hour</div>
          </div>
          <div className="w-px h-10 bg-white/10" />
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-400">VIP</div>
            <div className="text-xs text-gray-400">Access</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ──────────── Referral Section ──────────── */
function ReferralSection() {
  const [copied, setCopied] = useState(false);
  const referralCode = "SNAP500";

  const copyCode = () => {
    navigator.clipboard?.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-400/10 border border-emerald-400/20 rounded-full mb-4">
        <Gift className="w-4 h-4 text-emerald-400" />
        <span className="text-emerald-400 text-sm font-medium">Refer & Earn</span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Invite Friends, Earn Rewards</h2>
      <p className="text-gray-400 max-w-xl mx-auto mb-8">
        Share your referral code and both get ₹500 off on your next booking!
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          onClick={copyCode}
          className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-xl hover:border-emerald-400/30 transition-all"
        >
          <span className="text-white font-mono text-lg tracking-wider">{referralCode}</span>
          <Share2 className="w-5 h-5 text-emerald-400" />
        </button>
        {copied && (
          <motion.span initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-emerald-400 text-sm">
            Code copied!
          </motion.span>
        )}
      </div>
    </motion.div>
  );
}

/* ──────────── Feature Icons Row ──────────── */
const iconFeatures = [
  { icon: Video, label: "Content Creation" },
  { icon: Mic, label: "Podcast Rooms" },
  { icon: Podcast, label: "Interview Rooms" },
  { icon: Gamepad2, label: "Gaming Rooms" },
  { icon: Camera, label: "Selfie Studio" },
];

function FeatureIconsRow() {
  return (
    <section className="py-10 bg-zinc-950 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {iconFeatures.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-emerald-400/20 hover:bg-white/[0.07] transition-all cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                <item.icon className="w-6 h-6 text-emerald-400" />
              </div>
              <span className="text-sm text-gray-300 font-medium text-center">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────── Features Strip ──────────── */
const stripFeatures = [
  { icon: CheckCircle2, title: "Affordable Pricing", desc: "Studios starting at just ₹299/hour" },
  { icon: Wrench, title: "Fully Equipped", desc: "Professional gear included with every booking" },
  { icon: Shield, title: "Private & Professional", desc: "Sound-treated rooms with complete privacy" },
  { icon: Clock, title: "Book by Hourly", desc: "Flexible hourly, daily & monthly packages" },
];

function FeaturesStrip() {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stripFeatures.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-emerald-400/20 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   MAIN HOME PAGE
   ═══════════════════════════════════════════ */
export default function Home() {
  const [showConfetti, setShowConfetti] = useState(false);

  const triggerCelebration = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  return (
    <>
      {/* Magic Effects */}
      <GlowCursor />
      <ConfettiEffect trigger={showConfetti} />

      {/* ═══════════ HERO SECTION ═══════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-black pt-24 pb-10">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl" />
          <ParticleNetwork />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left: Heading & Subtext */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 text-sm font-medium mb-6">
                <Play className="w-4 h-4 fill-emerald-400" />
                India's Premier Creator Space
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Everything You Need to{" "}
                <span className="text-emerald-400">Create, Record</span> and{" "}
                <span className="text-emerald-400">Grow</span>
              </h1>
              <p className="text-lg text-gray-400 max-w-xl mb-8 leading-relaxed">
                Premium podcast rooms, YouTube studios, gaming rooms & more. Professional equipment. Affordable prices. Book your creative space in Gaya today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/booking"
                  onClick={triggerCelebration}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-xl transition-all hover:scale-105 active:scale-95 text-lg touch-glow"
                >
                  <CalendarCheck className="w-5 h-5" />
                  Book Your Room Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/spaces"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 transition-all active:scale-95 touch-glow"
                >
                  <MousePointer2 className="w-5 h-5" />
                  Explore Spaces
                </Link>
              </div>

              {/* Quick Stats below CTA */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 text-center"
                  >
                    <stat.icon className="w-5 h-5 text-emerald-400 mx-auto mb-2" />
                    <div className="text-xl lg:text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Large Image + Founder Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-emerald-500/10">
                <Image
                  src="/images/podcast-room-gaya.jpg"
                  alt="Snapforest Podcast Studio"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Founder Overlay Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -bottom-6 -left-6 right-6 sm:left-auto sm:right-4 sm:w-72 bg-zinc-900/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-400/30">
                    <Image
                      src="/images/founder-ved-prakash-arya.jpg"
                      alt="Ved Prakash Arya"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Ved Prakash Arya</p>
                    <p className="text-emerald-400 text-xs">Founder, Snapforest</p>
                  </div>
                </div>
                <p className="text-gray-400 text-xs mt-3 leading-relaxed">
                  "We built Snapforest to give every creator in Gaya access to world-class studios without the world-class price tag."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════ FEATURE ICONS ROW ═══════════ */}
      <FeatureIconsRow />

      {/* ═══════════ ROOM SLIDER ═══════════ */}
      <section className="py-16 lg:py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="inline-block px-3 py-1 bg-emerald-400/10 text-emerald-400 text-xs font-medium rounded-full mb-4">
              FEATURED SPACES
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Most <span className="text-emerald-400">Popular</span> Studios
            </h2>
          </motion.div>
          <RoomSlider />
        </div>
      </section>

      {/* ═══════════ IMAGE GALLERY GRID ═══════════ */}
      <section className="py-16 lg:py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-3 py-1 bg-emerald-400/10 text-emerald-400 text-xs font-medium rounded-full mb-4">
              GALLERY
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Explore All <span className="text-emerald-400">Studios</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Choose from our wide range of professional creator spaces
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {spaces.map((space, i) => (
              <motion.div
                key={space.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-emerald-400/30 transition-all"
              >
                <div className="aspect-video overflow-hidden relative">
                  <Image
                    src={space.image}
                    alt={space.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-white font-semibold mb-1">{space.title}</h3>
                  <p className="text-gray-400 text-sm mb-3 line-clamp-2">{space.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-emerald-400 font-bold">{space.price}</span>
                    <Link
                      href="/booking"
                      onClick={triggerCelebration}
                      className="flex items-center gap-1 text-sm text-white bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-lg transition-colors"
                    >
                      Book
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/spaces"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 transition-all"
            >
              View All Spaces
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ FEATURES STRIP ═══════════ */}
      <FeaturesStrip />

      {/* ═══════════ WHY CHOOSE US ═══════════ */}
      <section className="py-16 lg:py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose <span className="text-emerald-400">Snapforest</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Everything you need to create professional content
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-emerald-400/30 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-500/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-emerald-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ LOYALTY BANNER ═══════════ */}
      <section className="py-8 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LoyaltyBanner />
        </div>
      </section>

      {/* ═══════════ TESTIMONIALS ═══════════ */}
      <section className="py-16 lg:py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-3 py-1 bg-emerald-400/10 text-emerald-400 text-xs font-medium rounded-full mb-4">
              TESTIMONIALS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Loved by <span className="text-emerald-400">Creators</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-emerald-400/20 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-sm">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.role}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{t.text}</p>
                <div className="flex gap-1 mt-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3 h-3 text-emerald-400 fill-emerald-400" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ SPONSOR BANNER ═══════════ */}
      <SponsorBanner />

      {/* ═══════════ REFERRAL SECTION ═══════════ */}
      <section className="py-16 lg:py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ReferralSection />
        </div>
      </section>

      {/* ═══════════ CTA SECTION ═══════════ */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-zinc-950 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-8 h-8 text-emerald-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Book Your Room Now
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
              Book your studio today and join 500+ creators who trust Snapforest for their content creation needs in Gaya.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/booking"
                onClick={triggerCelebration}
                className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-xl transition-all text-lg hover:scale-105"
              >
                <CalendarCheck className="w-5 h-5" />
                Book Your Studio Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/articles"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 transition-all"
              >
                <Heart className="w-5 h-5" />
                Read Creator Tips
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
