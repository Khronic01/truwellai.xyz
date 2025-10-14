"use client"

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-mint/20 to-background"></div>

      {/* Animated floating orbs */}
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Large green orb - top right */}
        <div
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-20 blur-3xl animate-float-slow"
          style={{
            background: "radial-gradient(circle, #1DB954 0%, transparent 70%)",
            animationDelay: "0s",
          }}
        ></div>

        {/* Medium blue orb - left center */}
        <div
          className="absolute top-1/3 -left-32 w-80 h-80 rounded-full opacity-15 blur-3xl animate-float-medium"
          style={{
            background: "radial-gradient(circle, #0077B6 0%, transparent 70%)",
            animationDelay: "2s",
          }}
        ></div>

        {/* Small green orb - bottom left */}
        <div
          className="absolute bottom-20 left-1/4 w-64 h-64 rounded-full opacity-20 blur-2xl animate-float-fast"
          style={{
            background: "radial-gradient(circle, #1DB954 0%, transparent 70%)",
            animationDelay: "1s",
          }}
        ></div>

        {/* Medium mint orb - center right */}
        <div
          className="absolute top-1/2 right-1/4 w-72 h-72 rounded-full opacity-10 blur-3xl animate-float-slow"
          style={{
            background: "radial-gradient(circle, #E8F9F3 0%, transparent 70%)",
            animationDelay: "3s",
          }}
        ></div>

        {/* Small blue orb - bottom right */}
        <div
          className="absolute bottom-32 right-20 w-56 h-56 rounded-full opacity-15 blur-2xl animate-float-medium"
          style={{
            background: "radial-gradient(circle, #0077B6 0%, transparent 70%)",
            animationDelay: "4s",
          }}
        ></div>

        {/* Extra small green accent - top center */}
        <div
          className="absolute top-40 left-1/2 w-48 h-48 rounded-full opacity-20 blur-2xl animate-float-fast"
          style={{
            background: "radial-gradient(circle, #1DB954 0%, transparent 70%)",
            animationDelay: "2.5s",
          }}
        ></div>
      </div>

      {/* Animated gradient mesh overlay */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0 animate-gradient-rotate"
          style={{
            background:
              "radial-gradient(circle at 20% 50%, rgba(29, 185, 84, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(0, 119, 182, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 20%, rgba(232, 249, 243, 0.15) 0%, transparent 50%)",
          }}
        ></div>
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(29, 185, 84, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(29, 185, 84, 0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      ></div>
    </div>
  )
}
