"use client";

export default function DonorboxWidget() {
  // Change cette variable à 'true' une fois que tu auras ton lien Donorbox
  const isLive = false;

  if (!isLive) {
    return (
      <div className="w-full h-[600px] bg-slate-100 rounded-2xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center p-8 text-center">
        <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mb-4">
          <span className="text-[#C3002B] text-2xl">❤</span>
        </div>
        <h3 className="text-xl font-bold text-[#2A248F] mb-2 font-roboto">
          Donation Form
        </h3>
        <p className="text-slate-500 max-w-xs text-sm">
          The Donorbox widget is currently in development mode. It will be
          activated once the official campaign is live.
        </p>
        <div className="mt-8 w-full space-y-3">
          <div className="h-10 bg-slate-200 rounded-md w-full"></div>
          <div className="h-10 bg-slate-200 rounded-md w-full"></div>
          <div className="h-12 bg-[#C3002B]/20 rounded-md w-full border border-[#C3002B]/30"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-[600px] rounded-2xl overflow-hidden shadow-xl border border-slate-100">
      <iframe
        src="https://donorbox.org/embed/TON-NOM-DE-CAMPAGNE"
        name="donorbox"
        allow="payment"
        scrolling="no"
        frameBorder="0"
        className="w-full h-[900px] max-w-full"
      />
    </div>
  );
}
