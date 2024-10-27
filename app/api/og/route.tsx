/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";
import { Logo } from "./_components/logo";
import { Dots } from "./_components/dots";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const title = request.nextUrl.searchParams.get("title") || "";
  const subtitle = request.nextUrl.searchParams.get("subtitle") || "";
  const companyId = request.nextUrl.searchParams.get("company") || "";
  const filename = request.nextUrl.searchParams.get("filename") || "";

  if (!title || !companyId || !filename) {
    return new Response(null, {
      status: 400,
    });
  }

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ffffff",
          fontSize: 32,
          fontWeight: 600,
          position: "relative",
        }}
      >
        <Logo />

        <div
          style={{
            display: "flex",
            width: 250,
            height: "100%",
            backgroundColor: "#268DDF",
            opacity: 1,
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <Dots />
        </div>

        <img
          width="350"
          height="350"
          src={`https://edge.cardanoskills.com/api/files/2qcuepcq93wnvr5/${companyId}/${filename}?thumb=350x350`}
          style={{
            borderRadius: 50,
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontStyle: "normal",
            color: "black",
            whiteSpace: "pre-wrap",
            marginLeft: 30,
            width: 650,
          }}
        >
          <span
            style={{
              fontSize: 50,
              fontWeight: "bolder",
              width: "100%",
              textAlign: "justify",
            }}
          >
            {title}
          </span>

          {!!subtitle && (
            <div
              style={{
                fontSize: 25,
                width: "100%",
                textAlign: "justify",
                opacity: 0.6,
              }}
            >
              {subtitle}
            </div>
          )}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
