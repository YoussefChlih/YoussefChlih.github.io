"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Workflow,
  Layers,
  Database,
  Box,
  Server,
  Activity,
} from "lucide-react";

interface ExperienceIllustrationProps {
  type: "mentora" | "dgcnn" | "hardtech";
  imagePath: string;
  alt: string;
}

export function ExperienceIllustration({
  type,
  imagePath,
  alt,
}: ExperienceIllustrationProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="w-full mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-slate-100 dark:border-white/5">
      {/* Large Dominant Panoramic Showcase Stage Under Experience */}
      <div className="relative w-full aspect-[16/6] sm:aspect-[16/5] md:aspect-[21/6] min-h-[200px] sm:min-h-[280px] lg:min-h-[340px] xl:min-h-[380px] rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 dark:border-slate-800/90 bg-gradient-to-br from-slate-50/90 via-white to-teal-50/30 dark:from-[#0f111a] dark:via-[#12121a] dark:to-teal-950/20 shadow-[0_12px_36px_rgba(15,23,42,0.06)] dark:shadow-[0_12px_36px_rgba(0,0,0,0.4)] group/ill transition-all duration-500 hover:shadow-[0_20px_50px_rgba(13,148,136,0.1)] dark:hover:shadow-[0_20px_50px_rgba(0,212,170,0.1)] hover:border-teal-400/50 dark:hover:border-teal-500/40 flex items-center justify-center">
        {/* Soft Ambient Radial Glow Backdrop */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(13,148,136,0.1),transparent_70%)] dark:bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(0,212,170,0.12),transparent_70%)]" />

        {/* Subtle Decorative Geometric Grid Lines */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px]" />

        {/* Corner Precision Reticles */}
        <div className="pointer-events-none absolute top-3 right-3 w-3 h-3 border-t border-r border-teal-500/40 dark:border-teal-400/40" />
        <div className="pointer-events-none absolute bottom-3 left-3 w-3 h-3 border-b border-l border-teal-500/40 dark:border-teal-400/40" />

        {/* The Actual Full Large Image Rendered Dominantly */}
        {!imageError ? (
          <div className="relative w-full h-full flex items-center justify-center p-2.5 sm:p-4 lg:p-6">
            <Image
              src={imagePath}
              alt={alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1400px) 95vw, 1280px"
              className="object-contain transition-transform duration-700 ease-out group-hover/ill:scale-[1.015] drop-shadow-[0_8px_20px_rgba(15,23,42,0.06)] dark:drop-shadow-[0_8px_24px_rgba(0,0,0,0.5)]"
              onError={() => setImageError(true)}
              priority={type === "mentora"}
            />
          </div>
        ) : (
          /* Fallback in case of asset loading failure */
          <div className="absolute inset-0 flex flex-col justify-between p-6 select-none bg-white dark:bg-[#12121a]">
            {type === "mentora" && <MentoraIllustration />}
            {type === "dgcnn" && <DGCNNIllustration />}
            {type === "hardtech" && <HardTechIllustration />}
          </div>
        )}
      </div>
    </div>
  );
}

function MentoraIllustration() {
  return (
    <div className="h-full flex flex-col justify-between">
      <div className="flex items-center justify-between border-b border-slate-200/70 dark:border-slate-800 pb-2">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-[11px] font-bold text-slate-700 dark:text-slate-300 tracking-wider uppercase">
            Mentora AI Multi-Agent Engine
          </span>
        </div>
        <span className="text-[10px] font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/70 dark:border-emerald-800 px-2 py-0.5 rounded-full font-medium">
          LangGraph Active
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2 my-auto">
        <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <Database className="w-4 h-4 text-teal-600 dark:text-teal-400 mb-1" />
          <div className="text-[10px] font-bold text-slate-800 dark:text-slate-200">Supabase RLS</div>
          <div className="text-[9px] text-slate-500 font-mono">Multi-Tenant Schema</div>
        </div>
        <div className="p-2.5 rounded-xl bg-slate-900 text-white border border-slate-800">
          <Workflow className="w-4 h-4 text-emerald-400 mb-1" />
          <div className="text-[10px] font-bold text-slate-100">LangGraph Agents</div>
          <div className="text-[9px] text-slate-400 font-mono">LangSmith Monitored</div>
        </div>
        <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <Layers className="w-4 h-4 text-sky-600 dark:text-sky-400 mb-1" />
          <div className="text-[10px] font-bold text-slate-800 dark:text-slate-200">Gemini &amp; Claude</div>
          <div className="text-[9px] text-slate-500 font-mono">n8n VLM Pipeline</div>
        </div>
      </div>

      <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[10px] font-mono text-slate-600 dark:text-slate-400 flex items-center justify-between">
        <span>Contract: LessonDataIndex → LessonBlueprint</span>
        <span className="text-emerald-600 dark:text-emerald-400 font-bold">200 OK</span>
      </div>
    </div>
  );
}

function DGCNNIllustration() {
  return (
    <div className="h-full flex flex-col justify-between">
      <div className="flex items-center justify-between border-b border-slate-200/70 dark:border-slate-800 pb-2">
        <div className="flex items-center gap-2">
          <Box className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
          <span className="font-mono text-[11px] font-bold text-slate-700 dark:text-slate-300 tracking-wider uppercase">
            3D Point Cloud DGCNN Architecture
          </span>
        </div>
        <span className="text-[10px] font-mono text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/40 border border-teal-200/70 dark:border-teal-800 px-2 py-0.5 rounded-full font-medium">
          ModelNet10
        </span>
      </div>

      <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between my-auto">
        <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
          Dynamic Graph Conv (EdgeConv)
          <div className="text-[10px] text-slate-500 font-mono font-normal">Streamlit Real-Time Classification</div>
        </div>
        <span className="text-xs font-mono font-bold text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950 px-2 py-1 rounded">
          98.2% Accuracy
        </span>
      </div>

      <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[10px] font-mono text-slate-600 dark:text-slate-400 flex items-center justify-between">
        <span>PyTorch + Streamlit UI</span>
        <span className="text-teal-600 dark:text-teal-400 font-bold">Inference &lt;15ms</span>
      </div>
    </div>
  );
}

function HardTechIllustration() {
  return (
    <div className="h-full flex flex-col justify-between">
      <div className="flex items-center justify-between border-b border-slate-200/70 dark:border-slate-800 pb-2">
        <div className="flex items-center gap-2">
          <Server className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
          <span className="font-mono text-[11px] font-bold text-slate-700 dark:text-slate-300 tracking-wider uppercase">
            Predictive IT Telemetry Diagnostics
          </span>
        </div>
        <span className="text-[10px] font-mono text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 border border-blue-200/70 dark:border-blue-800 px-2 py-0.5 rounded-full font-medium">
          ML Pipeline
        </span>
      </div>

      <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between my-auto">
        <div className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
          <Activity className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" /> Infrastructure Stability
        </div>
        <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-2 py-1 rounded">
          ROC-AUC 0.965
        </span>
      </div>

      <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[10px] font-mono text-slate-600 dark:text-slate-400 flex items-center justify-between">
        <span>Data Preprocessing &amp; Predictive Anomaly Detection</span>
        <span className="text-blue-600 dark:text-blue-400 font-bold">Automated</span>
      </div>
    </div>
  );
}
