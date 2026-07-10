import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const dynamic = "force-static";

export const alt =
  "Dr. Lisa Koche — physician, founder of Spectra Wellness, educator, and speaker";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const spectrum = [
  "#FFC13B",
  "#AFC13A",
  "#57A054",
  "#199E8C",
  "#3F86C9",
  "#7B65D0",
  "#D4568F",
];

function SpectrumStrip() {
  return (
    <div style={{ display: "flex", flexDirection: "row", height: 14 }}>
      {spectrum.map((color) => (
        <div key={color} style={{ display: "flex", flex: 1, background: color }} />
      ))}
    </div>
  );
}

export default async function Image() {
  const [frauncesRegular, frauncesItalic] = await Promise.all([
    readFile(join(process.cwd(), "src/assets/fonts/fraunces-regular.ttf")),
    readFile(join(process.cwd(), "src/assets/fonts/fraunces-italic.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          background: "#FBFAF6",
        }}
      >
        <SpectrumStrip />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
            padding: "0 80px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontFamily: "Fraunces",
              fontSize: 92,
              lineHeight: 1.05,
              color: "#33302A",
            }}
          >
            Dr. Lisa Koche
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 24,
              fontFamily: "Fraunces",
              fontStyle: "italic",
              fontSize: 40,
              color: "#A83A6B",
            }}
          >
            The voice behind whole-person medicine.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontFamily: "Fraunces",
              fontSize: 26,
              color: "#6E695D",
            }}
          >
            Physician · Founder of Spectra Wellness · Educator · Speaker
          </div>
        </div>
        <SpectrumStrip />
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Fraunces",
          data: frauncesRegular,
          style: "normal",
          weight: 400,
        },
        {
          name: "Fraunces",
          data: frauncesItalic,
          style: "italic",
          weight: 400,
        },
      ],
    },
  );
}
