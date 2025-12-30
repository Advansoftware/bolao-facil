"use client";

import { useEffect } from "react";
import { ADSENSE_CONFIG, isAdSenseConfigured } from "@/lib/adsense-config";
import { AdPlaceholder } from "./AdPlaceholder";

interface AdSenseProps {
  slot: keyof typeof ADSENSE_CONFIG.slots;
  format?: "auto" | "rectangle" | "vertical" | "horizontal";
  responsive?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export function AdSense({
  slot,
  format = "auto",
  responsive = true,
  style,
  className,
}: AdSenseProps) {
  const slotId = ADSENSE_CONFIG.slots[slot];
  const isConfigured = isAdSenseConfigured();
  const isEnabled = ADSENSE_CONFIG.enabled && isConfigured;

  useEffect(() => {
    if (isEnabled) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.error("AdSense error:", err);
      }
    }
  }, [isEnabled]);

  // Em desenvolvimento ou sem configuração, mostra placeholder
  if (!isEnabled) {
    const heightMap = {
      horizontal: 90,
      rectangle: 250,
      vertical: 600,
      auto: 250,
    };
    
    return (
      <AdPlaceholder
        height={heightMap[format]}
        label={isConfigured ? "AdSense (Desabilitado em Dev)" : "Configure AdSense"}
        variant={format === "auto" || format === "rectangle" ? "horizontal" : format}
      />
    );
  }

  return (
    <ins
      className={`adsbygoogle ${className || ""}`}
      style={{
        display: "block",
        ...style,
      }}
      data-ad-client={ADSENSE_CONFIG.publisherId}
      data-ad-slot={slotId}
      data-ad-format={format}
      data-full-width-responsive={responsive ? "true" : "false"}
    />
  );
}
