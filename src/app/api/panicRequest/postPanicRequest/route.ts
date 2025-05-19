import { NextRequest, NextResponse } from "next/server";
import { emergencyResponseAPI } from "src/app/api/api";
import { PostPanicRequestResponseData } from "./postPanicRequest";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      aidRequired,
      timeOfRequest,
      location,
      user,
      serviceDisplayName,
      severity,
    } = body;

    const response =
      await emergencyResponseAPI.post<PostPanicRequestResponseData>("/panic", {
        aidRequired,
        timeOfRequest,
        location,
        user,
        serviceDisplayName,
        severity,
      });

    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error posting panic request:", error);
    return NextResponse.json(
      { error: "Failed to post panic request" },
      { status: 500 },
    );
  }
}
