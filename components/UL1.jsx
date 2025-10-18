"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Video } from "lucide-react";
import { useState, useCallback, useMemo } from "react";
import { useMeasure } from "@uidotdev/usehooks";

// Types
type Guest = {
  name: string;
  avatar: string;
  timezone: string;
};

type TimeSlot = {
  active: boolean;
  guestIndex: number | null;
};

// Constants
const GUESTS: Guest[] = [
  {
    name: "Sarah Chen",
    avatar: "https://i.pravatar.cc/150?img=1",
    timezone: "-8 hours GMT-8",
  },
  {
    name: "Michael Park",
    avatar: "https://i.pravatar.cc/150?img=5",
    timezone: "+1 hours GMT+1",
  },
  {
    name: "Emma Davis",
    avatar: "https://i.pravatar.cc/150?img=8",
    timezone: "+9 hours GMT+9",
  },
];

const TIME_SLOTS: TimeSlot[] = [
  { active: true, guestIndex: 0 },
  { active: false, guestIndex: null },
  { active: true, guestIndex: 1 },
  { active: false, guestIndex: null },
  { active: false, guestIndex: null },
  { active: true, guestIndex: 2 },
];

const COLORS = {
  emerald: "rgb(52 211 153)",
  border: "#272727",
  inactive: "rgba(255, 255, 255, 0.05)",
  active: "rgba(255, 255, 255, 0.1)",
} as const;

const ANIMATION_CONFIG = {
  spring: {
    type: "spring" as const,
    stiffness: 400,
    damping: 25,
  },
  card: {
    type: "spring" as const,
    stiffness: 200,
    damping: 20,
    mass: 1.2,
  },
  fade: {
    duration: 0.2,
  },
} as const;

// Utility functions
const parseTimezone = (timezone: string) => {
  const parts = timezone.split(" ");
  return {
    offset: parts.slice(0, 2).join(" "),
    gmt: parts[2],
  };
};

export default function CalendarWidget() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoveredGuestIndex, setHoveredGuestIndex] = useState<number | null>(null);
  const [contentRef, { height: contentHeight }] = useMeasure();
  const [headerRef, { height: headerHeight }] = useMeasure();

  const collapsedHeight = headerHeight || 100;
  const expandedHeight = (headerHeight || 0) + (contentHeight || 0) || 200;

  const hoveredGuest = useMemo(
    () => (hoveredGuestIndex !== null ? GUESTS[hoveredGuestIndex].name : null),
    [hoveredGuestIndex]
  );

  const handleGuestHover = useCallback((index: number | null) => {
    setHoveredGuestIndex(index);
  }, []);

  const toggleExpanded = useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);

  return (
    <div className="flex min-h-[400px] items-center justify-center p-4">
      <motion.article
        onClick={toggleExpanded}
        initial={false}
        animate={{
          width: isExpanded ? 360 : 220,
          height: isExpanded ? expandedHeight : collapsedHeight,
        }}
        transition={ANIMATION_CONFIG.card}
        className="relative cursor-pointer overflow-hidden rounded-2xl border border-white/5 bg-[#272727] text-sm"
        style={{
          boxShadow:
            "inset 0 1px 0 0 rgba(255, 255, 255, 0.05), 0 25px 50px -12px rgba(0, 0, 0, 0.5)",
        }}
      >
        <motion.div ref={headerRef} className="space-y-4 p-4">
          <span className="inline-block w-fit rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-400">
            In 15 mins
          </span>
          <div className="space-y-1">
            <h1 className="text-sn font-semibold text-white">Design Sync</h1>
            <h2 className="text-small text-white/40">1:30PM → 2:30PM</h2>
          </div>
        </motion.div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={ANIMATION_CONFIG.fade}
              className="absolute right-4 top-4"
            >
              <motion.button
                type="button"
                aria-label="Start video call"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Video className="h-5 w-5 text-black" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          ref={contentRef}
          initial={false}
          animate={{
            opacity: isExpanded ? 1 : 0,
            pointerEvents: isExpanded ? "auto" : "none",
          }}
        >
          <div className="h-[1px] w-full bg-white/5" />
          <div className="space-y-4 p-4">
            <div className="flex items-end justify-between">
              <div className="space-y-2">
                <div className="flex items-baseline gap-2 text-sm text-white">
                  <span>Guests</span>
                  <div className="text-xs text-white/60">
                    {hoveredGuest || GUESTS.length}
                  </div>
                </div>

                <div className="flex -space-x-3">
                  {GUESTS.map((guest, index) => {
                    const isHighlighted = hoveredGuestIndex === index;

                    return (
                      <motion.img
                        key={guest.name}
                        src={guest.avatar}
                        alt={guest.name}
                        className="h-8 w-8 rounded-full border-2 object-cover"
                        animate={{
                          borderColor: isHighlighted ? COLORS.emerald : COLORS.border,
                        }}
                        transition={ANIMATION_CONFIG.spring}
                        onMouseEnter={() => handleGuestHover(index)}
                        onMouseLeave={() => handleGuestHover(null)}
                      />
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <div className="flex items-center text-right text-xs text-white/60">
                  {hoveredGuestIndex !== null &&
                    TIME_SLOTS.some((slot) => slot.guestIndex === hoveredGuestIndex) && (
                      <motion.span
                        key={hoveredGuestIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={ANIMATION_CONFIG.fade}
                      >
                        {parseTimezone(GUESTS[hoveredGuestIndex].timezone).offset}{" "}
                        <span className="text-white">
                          {parseTimezone(GUESTS[hoveredGuestIndex].timezone).gmt}
                        </span>
                      </motion.span>
                    )}
                </div>
                <div className="flex gap-[6px]">
                  {TIME_SLOTS.map((slot, index) => {
                    const isHovered =
                      hoveredGuestIndex !== null && slot.guestIndex === hoveredGuestIndex;

                    const backgroundColor = isHovered
                      ? COLORS.emerald
                      : slot.active
                        ? COLORS.active
                        : COLORS.inactive;

                    return (
                      <motion.div
                        key={index}
                        animate={{ backgroundColor }}
                        transition={ANIMATION_CONFIG.fade}
                        className="h-8 w-[8px] cursor-pointer rounded-full"
                        onMouseEnter={() => {
                          if (slot.guestIndex !== null) {
                            handleGuestHover(slot.guestIndex);
                          }
                        }}
                        onMouseLeave={() => handleGuestHover(null)}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.article>
    </div>
  );
}
