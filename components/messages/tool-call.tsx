"use client";

import { ToolCallPart, ToolResultPart } from "ai";
import { AlertCircle, BookOpen, Globe, Search, Wrench } from "lucide-react";
import { Shimmer } from "../ai-elements/shimmer";
import { useRotatingLabel } from "@/hooks/use-rotating-label";
import { pickRandomPastTense, type FunLabelCategory } from "@/lib/fun-labels";
import { useMemo } from "react";

// ---- Tool display config ----

interface ToolDisplayConfig {
  callCategory: FunLabelCategory;
  resultCategory: FunLabelCategory;
  call_icon: React.ReactNode;
  result_icon: React.ReactNode;
  formatArgs?: (toolName: string, input: unknown) => string;
}

function formatSearchArgs(_: string, input: unknown): string {
  try {
    if (typeof input !== "object" || input === null) return "";
    const args = input as Record<string, unknown>;
    return args.query ? String(args.query) : "";
  } catch {
    return "";
  }
}

const TOOL_CONFIG: Record<string, ToolDisplayConfig> = {
  webSearch: {
    callCategory: "webSearch",
    resultCategory: "webSearch",
    call_icon: <Globe className="w-4 h-4" />,
    result_icon: <Globe className="w-4 h-4" />,
    formatArgs: formatSearchArgs,
  },
  vectorDatabaseSearch: {
    callCategory: "knowledgeBase",
    resultCategory: "knowledgeBase",
    call_icon: <BookOpen className="w-4 h-4" />,
    result_icon: <BookOpen className="w-4 h-4" />,
    formatArgs: formatSearchArgs,
  },
  fetchOwnerProfiles: {
    callCategory: "webSearch",
    resultCategory: "webSearch",
    call_icon: <Globe className="w-4 h-4" />,
    result_icon: <Globe className="w-4 h-4" />,
  },
};

const DEFAULT_CONFIG: ToolDisplayConfig = {
  callCategory: "processing",
  resultCategory: "processing",
  call_icon: <Wrench className="w-4 h-4" />,
  result_icon: <Wrench className="w-4 h-4" />,
};

// ---- Helpers ----

function extractToolName(
  part: ToolCallPart | ToolResultPart
): string | undefined {
  const p = part as unknown as { type?: string; toolName?: string };
  if (p.type?.startsWith("tool-")) return p.type.slice(5);
  if (p.toolName) return p.toolName;
  if ("toolName" in part && part.toolName) return part.toolName;
  return undefined;
}

function formatToolArguments(
  toolName: string,
  input: unknown,
  config?: ToolDisplayConfig
): string {
  if (config?.formatArgs) return config.formatArgs(toolName, input);
  try {
    if (typeof input !== "object" || input === null) return String(input);
    const args = input as Record<string, unknown>;
    if (args.query) return String(args.query);
    return "";
  } catch {
    return "";
  }
}

// A short, human label per tool for the failed-state chip. Deliberately
// plain (no "fun" rotating word) — a failure shouldn't look playful.
const TOOL_LABEL: Record<string, string> = {
  webSearch: "Web search",
  vectorDatabaseSearch: "Knowledge base search",
  fetchOwnerProfiles: "Owner profile lookup",
};

// ---- Components ----

function RotatingLabel({ category }: { category: FunLabelCategory }) {
  const label = useRotatingLabel(category, 3000);
  return <Shimmer duration={1}>{label}</Shimmer>;
}

export function ToolCall({ part }: { part: ToolCallPart }) {
  const { input } = part;
  const toolName = extractToolName(part);
  const config = toolName
    ? TOOL_CONFIG[toolName] || DEFAULT_CONFIG
    : DEFAULT_CONFIG;
  const formattedArgs = formatToolArguments(toolName || "", input, config);

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-2 text-muted-foreground shrink-0">
        {config.call_icon}
        <RotatingLabel category={config.callCategory} />
      </div>
      {config.formatArgs && formattedArgs && (
        <span className="text-muted-foreground/75 flex-1 min-w-0 truncate">
          {formattedArgs}
        </span>
      )}
    </div>
  );
}

export function ToolResult({ part }: { part: ToolResultPart }) {
  const toolName = extractToolName(part);
  const config = toolName
    ? TOOL_CONFIG[toolName] || DEFAULT_CONFIG
    : DEFAULT_CONFIG;

  const input = "input" in part ? part.input : undefined;
  const formattedArgs =
    input !== undefined
      ? formatToolArguments(toolName || "", input, config)
      : "";

  // Pick a random past-tense label once on mount
  const resultLabel = useMemo(
    () => pickRandomPastTense(config.resultCategory),
    [config.resultCategory]
  );

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-2 text-muted-foreground shrink-0">
        {config.result_icon}
        <span>{resultLabel}</span>
      </div>
      {config.formatArgs && formattedArgs && (
        <span className="text-muted-foreground/75 flex-1 min-w-0 truncate">
          {formattedArgs}
        </span>
      )}
    </div>
  );
}

// Renders a tool part that ended in a terminal error state (e.g. AI SDK's
// "output-error"), instead of falling through to the animated in-progress
// ToolCall forever. The model itself keeps going and answers from other
// tools/knowledge — this chip is purely a UI acknowledgement so a stalled
// backend call doesn't look like it's still running.
export function ToolError({ part }: { part: ToolResultPart | ToolCallPart }) {
  const toolName = extractToolName(part);
  const label = (toolName && TOOL_LABEL[toolName]) || "This step";

  return (
    <div className="flex items-center gap-2 text-muted-foreground/80">
      <AlertCircle className="w-4 h-4 shrink-0" />
      <span>{label} didn&apos;t come through — continuing without it</span>
    </div>
  );
}
