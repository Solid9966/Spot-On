// src/App.jsx
import { useState } from "react";

const CATEGORIES = [
    { key: "korean",   label: "한식음식점",  icon: "🍚", bg: "bg-orange-50" },
    { key: "chinese",  label: "중식음식점",  icon: "🥟", bg: "bg-yellow-50" },
    { key: "japanese", label: "일식음식점",  icon: "🍣", bg: "bg-pink-50" },
    { key: "western",  label: "양식음식점",  icon: "🍕", bg: "bg-violet-50" },
    { key: "bakery",   label: "제과점",      icon: "🥐", bg: "bg-amber-50" },
    { key: "fastfood", label: "패스트푸드점", icon: "🥪", bg: "bg-emerald-50" },
    { key: "chicken",  label: "치킨전문점",  icon: "🍗", bg: "bg-yellow-50" },
    { key: "snack",    label: "분식전문점",  icon: "🍢", bg: "bg-indigo-50" },
    { key: "pub",      label: "호프·간이주점", icon: "🍺", bg: "bg-blue-50" },
    { key: "cafe",     label: "커피·음료",    icon: "☕", bg: "bg-teal-50" },
];

export default function App() {
    const [selected, setSelected] = useState(null);

    return (
        <div className="min-h-screen bg-white text-gray-900">
            {/* Navbar */}
            <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
                <nav className="max-w-6xl mx-auto h-16 px-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="h-9 w-9 rounded-xl bg-gray-100 grid place-content-center font-bold">
                            ɞ
                        </div>
                        <div className="font-semibold text-lg tracking-tight">Spot On</div>
                    </div>
                    <ul className="hidden md:flex items-center gap-6 text-sm text-gray-700">
                        <li className="hover:text-black cursor-pointer">Products</li>
                        <li className="hover:text-black cursor-pointer">Map</li>
                        <li className="hover:text-black cursor-pointer">Dashboard</li>
                    </ul>
                    <div className="flex items-center gap-2">
                        <button className="px-3 py-1.5 rounded-lg border text-sm hover:bg-gray-50">
                            Sign in
                        </button>
                        <button className="px-3 py-1.5 rounded-lg text-sm bg-gray-900 text-white hover:bg-black">
                            Register
                        </button>
                    </div>
                </nav>
            </header>

            {/* Main */}
            <main className="max-w-6xl mx-auto px-4 py-12 md:py-16">
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-center">
                    업종을 선택해주세요
                </h1>
                {selected && (
                    <p className="text-center text-sm text-gray-600 mt-2">
                        선택한 업종: <span className="font-medium">{selected.label}</span>
                    </p>
                )}

                <section className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-5">
                    {CATEGORIES.map((c) => (
                        <button
                            key={c.key}
                            onClick={() => setSelected(c)}
                            className={`group w-full h-28 rounded-2xl ${c.bg} border hover:shadow-md transition`}
                            aria-label={c.label}
                        >
                            <div className="h-full w-full flex flex-col items-center justify-center gap-2">
                                <div className="text-2xl">{c.icon}</div>
                                <div className="text-sm font-medium text-gray-800 group-hover:translate-y-[-1px] transition">
                                    {c.label}
                                </div>
                            </div>
                        </button>
                    ))}
                </section>
            </main>

            {/* Footer (옵션) */}
            <footer className="border-t">
                <div className="max-w-6xl mx-auto px-4 h-14 text-sm flex items-center justify-between text-gray-600">
                    <span>© {new Date().getFullYear()} Spot On</span>
                    <a href="#" className="hover:text-gray-900">
                        Privacy
                    </a>
                </div>
            </footer>
        </div>
    );
}
