import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { ArrowRightIcon } from "./icons";

type ContainerProps = ComponentPropsWithoutRef<"div">;

export function Container({ className = "", ...props }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-10 ${className}`}
      {...props}
    />
  );
}

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  tone?:
    | "porcelain"
    | "white"
    | "lagoon-mist"
    | "violet-mist"
    | "leaf-mist"
    | "azure-mist"
    | "orchid-mist";
};

export function Section({
  className = "",
  tone = "porcelain",
  ...props
}: SectionProps) {
  const tones = {
    porcelain: "bg-[var(--porcelain)]",
    white: "bg-white",
    "lagoon-mist": "bg-[var(--lagoon-mist)]",
    "violet-mist": "bg-[var(--violet-mist)]",
    "leaf-mist": "bg-[var(--leaf-mist)]",
    "azure-mist": "bg-[var(--azure-mist)]",
    "orchid-mist": "bg-[var(--orchid-mist)]",
  };

  return (
    <section
      className={`relative py-20 sm:py-24 ${tones[tone]} ${className}`}
      {...props}
    />
  );
}

type EyebrowProps = {
  children: ReactNode;
  color?: string;
  className?: string;
};

export function Eyebrow({
  children,
  color = "var(--orchid-deep)",
  className = "",
}: EyebrowProps) {
  return (
    <p
      className={`mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] ${className}`}
      style={{ color }}
    >
      {children}
    </p>
  );
}

type AccentProps = {
  children: ReactNode;
  color?: string;
};

/** Italic serif accent for a word or line inside a heading. Defaults to the
 * site's orchid anchor hue (the Spectra clinic site anchors on lagoon). */
export function Accent({ children, color = "var(--orchid-deep)" }: AccentProps) {
  return (
    <em className="italic" style={{ color }}>
      {children}
    </em>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  eyebrowColor?: string;
  title: ReactNode;
  body?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  eyebrowColor,
  title,
  body,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} ${className}`}
    >
      {eyebrow ? <Eyebrow color={eyebrowColor}>{eyebrow}</Eyebrow> : null}
      <h2 className="font-serif text-4xl leading-[1.04] font-[380] tracking-normal text-[var(--ink)] sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {body ? (
        <p className="mt-5 text-base leading-8 text-[var(--muted)] sm:text-lg">
          {body}
        </p>
      ) : null}
    </div>
  );
}

/** Segmented 7-hue spectrum ring: hard-stop equal sevenths in spectrum order. */
export const SPECTRUM_RING_GRADIENT =
  "linear-gradient(90deg, var(--sunshine) 0 14.3%, var(--chartreuse) 0 28.6%, var(--leaf) 0 42.9%, var(--lagoon) 0 57.2%, var(--azure) 0 71.5%, var(--violet) 0 85.8%, var(--orchid) 0 100%)";

type PrimaryButtonProps = ComponentPropsWithoutRef<"a"> & {
  children: ReactNode;
};

export function PrimaryButton({
  children,
  className = "",
  style,
  ...props
}: PrimaryButtonProps) {
  return (
    <a
      className={`group/cta inline-flex rounded-full p-[3px] transition-transform duration-200 hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink)] focus-visible:ring-offset-2 ${className}`}
      style={{ background: SPECTRUM_RING_GRADIENT, ...style }}
      {...props}
    >
      <span className="inline-flex min-h-[46px] w-full items-center justify-center gap-2.5 rounded-full bg-white px-6 text-[15px] font-semibold whitespace-nowrap text-[var(--ink)] transition-colors duration-200 group-hover/cta:bg-[var(--cream)]">
        <span>{children}</span>
        <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover/cta:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover/cta:translate-x-0" />
      </span>
    </a>
  );
}

type SecondaryButtonProps = ComponentPropsWithoutRef<"a"> & {
  children: ReactNode;
  variant?: "underline" | "ring";
  color?: string;
  surface?:
    | "porcelain"
    | "white"
    | "lagoon-mist"
    | "violet-mist"
    | "leaf-mist"
    | "azure-mist"
    | "orchid-mist";
};

export function SecondaryButton({
  children,
  className = "",
  variant = "underline",
  color = "var(--orchid)",
  surface = "porcelain",
  style,
  ...props
}: SecondaryButtonProps) {
  if (variant === "ring") {
    const surfaces = {
      porcelain: "bg-[var(--porcelain)]",
      white: "bg-white",
      "lagoon-mist": "bg-[var(--lagoon-mist)]",
      "violet-mist": "bg-[var(--violet-mist)]",
      "leaf-mist": "bg-[var(--leaf-mist)]",
      "azure-mist": "bg-[var(--azure-mist)]",
      "orchid-mist": "bg-[var(--orchid-mist)]",
    };

    return (
      <a
        className={`group/cta inline-flex rounded-full p-[2px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink)] focus-visible:ring-offset-2 ${className}`}
        style={{ background: SPECTRUM_RING_GRADIENT, ...style }}
        {...props}
      >
        <span
          className={`inline-flex min-h-11 w-full items-center justify-center rounded-full px-[22px] text-[15px] font-semibold whitespace-nowrap text-[var(--ink)] transition-colors duration-200 group-hover/cta:bg-white ${surfaces[surface]}`}
        >
          {children}
        </span>
      </a>
    );
  }

  return (
    <a
      className={`group inline-flex min-h-12 items-center justify-center gap-2 text-sm font-semibold text-[var(--ink)] transition duration-200 hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink)] focus-visible:ring-offset-2 ${className}`}
      style={style}
      {...props}
    >
      <span className="border-b-2 pb-0.5" style={{ borderColor: color }}>
        {children}
      </span>
      <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
    </a>
  );
}

export const SPECTRUM_7 = [
  "var(--sunshine)",
  "var(--chartreuse)",
  "var(--leaf)",
  "var(--lagoon)",
  "var(--azure)",
  "var(--violet)",
  "var(--orchid)",
];

export const SPECTRUM_5 = [
  "var(--sunshine)",
  "var(--leaf)",
  "var(--lagoon)",
  "var(--azure)",
  "var(--violet)",
];

type SpectrumStripProps = {
  variant?: 5 | 7;
  height?: number;
  className?: string;
};

/** Signature brand element: a segmented bar of solid spectrum color blocks. */
export function SpectrumStrip({
  variant = 7,
  height = 5,
  className = "",
}: SpectrumStripProps) {
  const colors = variant === 5 ? SPECTRUM_5 : SPECTRUM_7;

  return (
    <div aria-hidden="true" className={`flex w-full ${className}`} style={{ height }}>
      {colors.map((color) => (
        <span className="flex-1" key={color} style={{ background: color }} />
      ))}
    </div>
  );
}

type DiamondItemProps = {
  children: ReactNode;
  color?: string;
  className?: string;
};

/** Inline text item with a small colored diamond marker. */
export function DiamondItem({
  children,
  color = "var(--orchid)",
  className = "",
}: DiamondItemProps) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 text-sm font-semibold text-[var(--ink)] ${className}`}
    >
      <span aria-hidden="true" className="text-[0.6rem] leading-none" style={{ color }}>
        ◆
      </span>
      <span>{children}</span>
    </span>
  );
}
