import React from "react";

export default function DocAnalytics({ colors }) {
  return (
    <div
      style={{
        backgroundColor: colors.surface,
        borderColor: colors.surfaceLight,
      }}
      className="p-10 rounded-xl border text-center"
    >
      <h2
        style={{ color: colors.text }}
        className="text-2xl font-bold mb-2"
      >
        Analitikler
      </h2>
      <p style={{ color: colors.textSecondary }}>
        Analitikler bölümü yakında eklenecek...
      </p>
    </div>
  );
}
