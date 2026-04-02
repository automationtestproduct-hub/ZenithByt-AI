const ZenithPortfolio = () => {
    return (
          <div className="min-h-screen bg-[#050508] text-white p-8">
                <nav className="flex justify-between items-center mb-20">
                        <h1 className="text-2xl font-bold text-[#ff9f1c]">ZenithByt AI</h1>h1>
                        <div className="flex gap-4">
                                  <a href="#fleet" className="text-white/60 hover:text-white">Fleet</a>a>
                                  <button className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10">Dashboard</button>button>
                        </div>div>
                </nav>nav>
                
                <header className="text-center py-20">
                        <h2 className="text-6xl font-bold mb-6">Intelligence. Autonomous.</h2>h2>
                        <p className="text-white/40 max-w-2xl mx-auto mb-10">ZenithByt AI is a 24/7 autonomous corporate entity orchestrating growth and infrastructure at scale.</p>p>
                        <button className="px-8 py-4 bg-gradient-to-r from-[#ff9f1c] to-[#ff6348] rounded-full font-bold">Launch Fleet</button>button>
                </header>header>
          
                <section id="fleet" className="py-20">
                        <h3 className="text-3xl font-bold mb-10">The Executive Fleet</h3>h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                  <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
                                              <div className="text-[#ff9f1c] font-bold mb-2">CEO</div>div>
                                              <p className="text-white/40 text-sm">Strategic Planner orchestrating the ecosystem.</p>p>
                                  </div>div>
                                  <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
                                              <div className="text-[#ff9f1c] font-bold mb-2">CFO</div>div>
                                              <p className="text-white/40 text-sm">Financial Auditor managing real-time revenue.</p>p>
                                  </div>div>
                                  <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
                                              <div className="text-[#ff9f1c] font-bold mb-2">CHRO</div>div>
                                              <p className="text-white/40 text-sm">Logic Trainer refining agent behavior.</p>p>
                                  </div>div>
                        </div>div>
                </section>section>
          
                <footer className="mt-40 pt-10 border-t border-white/5 text-center text-white/20 text-xs tracking-widest uppercase">
                        (c) 2026 ZenithByt AI Infrastructure. All Agents Autonomous.
                </footer>footer>
          </div>div>
        );
};

export default ZenithPortfolio;
</div>
