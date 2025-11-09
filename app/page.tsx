"use client";

import { useState } from "react";

interface Investment {
  id: number;
  title: string;
  emoji: string;
  description: string;
  pros: string[];
  cons: string[];
  minimumInvestment: string;
  expectedReturn: string;
  riskLevel: "Low" | "Medium" | "High";
}

const investments: Investment[] = [
  {
    id: 1,
    title: "Dividend Stocks",
    emoji: "📈",
    description: "Invest in companies that pay regular dividends to shareholders. Many established companies pay monthly or quarterly dividends.",
    pros: [
      "Potential for capital appreciation",
      "Regular income stream",
      "Relatively liquid investments",
      "Can reinvest dividends for compound growth"
    ],
    cons: [
      "Market volatility risk",
      "Dividends can be cut or suspended",
      "Requires research and diversification",
      "Tax implications on dividend income"
    ],
    minimumInvestment: "$100-$500",
    expectedReturn: "3-8% annually",
    riskLevel: "Medium"
  },
  {
    id: 2,
    title: "REITs (Real Estate Investment Trusts)",
    emoji: "🏢",
    description: "Real Estate Investment Trusts own and operate income-generating properties. They're required to pay out 90% of taxable income as dividends.",
    pros: [
      "No property management hassles",
      "High dividend yields (often 4-10%)",
      "Diversification across properties",
      "More liquid than physical real estate"
    ],
    cons: [
      "Sensitive to interest rate changes",
      "Market price volatility",
      "Less control than direct ownership",
      "Tax treatment can be complex"
    ],
    minimumInvestment: "$500-$1,000",
    expectedReturn: "4-10% annually",
    riskLevel: "Medium"
  },
  {
    id: 3,
    title: "Peer-to-Peer Lending",
    emoji: "🤝",
    description: "Lend money to individuals or businesses through online platforms and earn interest on monthly repayments.",
    pros: [
      "Higher returns than savings accounts",
      "Monthly interest payments",
      "Can diversify across many loans",
      "Low minimum investment amounts"
    ],
    cons: [
      "Default risk on loans",
      "Not FDIC insured",
      "Less liquid than stocks",
      "Platform risk"
    ],
    minimumInvestment: "$25-$1,000",
    expectedReturn: "5-12% annually",
    riskLevel: "High"
  },
  {
    id: 4,
    title: "High-Yield Savings Accounts & CDs",
    emoji: "🏦",
    description: "Park your money in high-yield savings accounts or certificates of deposit that pay monthly interest.",
    pros: [
      "FDIC insured (up to $250k)",
      "Zero risk to principal",
      "Predictable returns",
      "High liquidity (for savings accounts)"
    ],
    cons: [
      "Lower returns than other options",
      "May not beat inflation",
      "Rates can change",
      "Early withdrawal penalties (CDs)"
    ],
    minimumInvestment: "$0-$1,000",
    expectedReturn: "4-5% annually",
    riskLevel: "Low"
  },
  {
    id: 5,
    title: "Bond Funds & ETFs",
    emoji: "📊",
    description: "Invest in funds that hold a diversified portfolio of bonds paying regular interest distributions.",
    pros: [
      "Regular income payments",
      "Professional management",
      "Instant diversification",
      "Lower volatility than stocks"
    ],
    cons: [
      "Interest rate risk",
      "Management fees",
      "Lower returns than stocks historically",
      "Inflation risk"
    ],
    minimumInvestment: "$100-$1,000",
    expectedReturn: "3-6% annually",
    riskLevel: "Low"
  },
  {
    id: 6,
    title: "Rental Properties",
    emoji: "🏠",
    description: "Own physical real estate and collect monthly rent from tenants. Can be residential or commercial properties.",
    pros: [
      "Tangible asset",
      "Tax benefits and deductions",
      "Potential appreciation",
      "Hedge against inflation"
    ],
    cons: [
      "High upfront costs",
      "Property management time/expense",
      "Vacancy risk",
      "Maintenance and repairs",
      "Less liquid"
    ],
    minimumInvestment: "$20,000-$100,000+",
    expectedReturn: "6-12% annually",
    riskLevel: "Medium"
  },
  {
    id: 7,
    title: "Create Digital Products",
    emoji: "💻",
    description: "Create and sell digital products like courses, ebooks, templates, or software that generate recurring revenue.",
    pros: [
      "Unlimited scalability",
      "Low overhead costs",
      "Complete creative control",
      "Can automate sales process"
    ],
    cons: [
      "Significant upfront time investment",
      "Marketing and promotion needed",
      "Competition in popular niches",
      "Income can be unpredictable initially"
    ],
    minimumInvestment: "$0-$500",
    expectedReturn: "Highly variable",
    riskLevel: "Medium"
  }
];

export default function Home() {
  const [selectedInvestment, setSelectedInvestment] = useState<Investment | null>(null);
  const [activeSection, setActiveSection] = useState<string>("intro");

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section id="intro" className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            💰 7 Investments That Pay You <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Monthly</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Have you ever dreamed of making money while you sleep? 😴
          </p>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
            Imagine checking your bank account and seeing cash roll in — even though you didn&apos;t clock in, take a call, or lift a finger that day. That&apos;s the magic of passive income.
          </p>
          <button
            onClick={() => scrollToSection("what-is")}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform shadow-lg"
          >
            Start Learning 🚀
          </button>
        </div>
      </section>

      {/* What is Passive Income */}
      <section id="what-is" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            🧠 What is Passive Income?
          </h2>
          <div className="bg-slate-700/50 rounded-2xl p-8 backdrop-blur-sm">
            <p className="text-xl text-gray-200 mb-6">
              Before we jump into the list, let&apos;s get one thing straight: Passive income isn&apos;t &quot;get rich quick.&quot;
            </p>
            <p className="text-lg text-gray-300 mb-6">
              It&apos;s money that keeps coming in after you&apos;ve done the work or invested your money wisely.
            </p>
            <div className="flex items-center justify-center my-8">
              <div className="text-6xl">🌳</div>
            </div>
            <p className="text-lg text-gray-300 italic text-center">
              Think of it like planting a tree — you water it, nurture it, and eventually it bears fruit year after year without much effort.
            </p>
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => scrollToSection("investments")}
              className="bg-white text-purple-900 px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform shadow-lg"
            >
              See the 7 Investments 📋
            </button>
          </div>
        </div>
      </section>

      {/* Investments Grid */}
      <section id="investments" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            7 Monthly Income Investments
          </h2>
          <p className="text-xl text-gray-300 mb-12 text-center">
            Click on any investment to learn more details
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {investments.map((investment) => (
              <div
                key={investment.id}
                onClick={() => setSelectedInvestment(investment)}
                className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 cursor-pointer card-hover border border-slate-700 hover:border-purple-500"
              >
                <div className="text-5xl mb-4">{investment.emoji}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{investment.title}</h3>
                <p className="text-gray-300 mb-4">{investment.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    investment.riskLevel === "Low" ? "bg-green-500/20 text-green-300" :
                    investment.riskLevel === "Medium" ? "bg-yellow-500/20 text-yellow-300" :
                    "bg-red-500/20 text-red-300"
                  }`}>
                    {investment.riskLevel} Risk
                  </span>
                  <span className="text-purple-400 font-semibold">Learn More →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section id="getting-started" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            🎯 How to Get Started
          </h2>
          <div className="space-y-6">
            <div className="bg-slate-700/50 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-3">1️⃣ Start Small</h3>
              <p className="text-gray-300">
                You don&apos;t need thousands of dollars to begin. Many of these investments can be started with $100 or less. The key is to start now and let compound interest work its magic.
              </p>
            </div>
            <div className="bg-slate-700/50 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-3">2️⃣ Diversify Your Income Streams</h3>
              <p className="text-gray-300">
                Don&apos;t put all your eggs in one basket. Spread your investments across 3-4 different options to reduce risk and create multiple income sources.
              </p>
            </div>
            <div className="bg-slate-700/50 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-3">3️⃣ Reinvest Your Returns</h3>
              <p className="text-gray-300">
                In the early stages, reinvest your passive income back into your investments. This accelerates growth through the power of compounding.
              </p>
            </div>
            <div className="bg-slate-700/50 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-3">4️⃣ Be Patient</h3>
              <p className="text-gray-300">
                Building substantial passive income takes time. Stay consistent, keep learning, and don&apos;t get discouraged if results are slow at first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Passive Income Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Choose one investment from the list above and take action today. Your future self will thank you! 🌟
          </p>
          <button
            onClick={() => scrollToSection("investments")}
            className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform shadow-lg"
          >
            Review Investment Options 💡
          </button>
        </div>
      </section>

      {/* Modal for Investment Details */}
      {selectedInvestment && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedInvestment(null)}
        >
          <div
            className="bg-slate-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <span className="text-6xl">{selectedInvestment.emoji}</span>
                <div>
                  <h3 className="text-3xl font-bold text-white">{selectedInvestment.title}</h3>
                  <span className={`inline-block mt-2 px-3 py-1 rounded-full text-sm font-semibold ${
                    selectedInvestment.riskLevel === "Low" ? "bg-green-500/20 text-green-300" :
                    selectedInvestment.riskLevel === "Medium" ? "bg-yellow-500/20 text-yellow-300" :
                    "bg-red-500/20 text-red-300"
                  }`}>
                    {selectedInvestment.riskLevel} Risk
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedInvestment(null)}
                className="text-gray-400 hover:text-white text-3xl"
              >
                ×
              </button>
            </div>

            <p className="text-gray-300 mb-6 text-lg">{selectedInvestment.description}</p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-slate-700/50 rounded-xl p-4">
                <h4 className="text-white font-semibold mb-2">💵 Minimum Investment</h4>
                <p className="text-purple-400 text-xl font-bold">{selectedInvestment.minimumInvestment}</p>
              </div>
              <div className="bg-slate-700/50 rounded-xl p-4">
                <h4 className="text-white font-semibold mb-2">📊 Expected Return</h4>
                <p className="text-green-400 text-xl font-bold">{selectedInvestment.expectedReturn}</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-white font-semibold text-xl mb-3">✅ Pros</h4>
              <ul className="space-y-2">
                {selectedInvestment.pros.map((pro, index) => (
                  <li key={index} className="text-gray-300 flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold text-xl mb-3">⚠️ Cons</h4>
              <ul className="space-y-2">
                {selectedInvestment.cons.map((con, index) => (
                  <li key={index} className="text-gray-300 flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-700">
              <button
                onClick={() => setSelectedInvestment(null)}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-semibold transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-slate-900 py-8 px-4 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center text-gray-400">
          <p>💡 Disclaimer: This is educational content only. Not financial advice. Always do your own research and consult with a financial advisor before investing.</p>
          <p className="mt-4">© 2025 Passive Income Guide. Built to help you achieve financial freedom.</p>
        </div>
      </footer>
    </div>
  );
}
