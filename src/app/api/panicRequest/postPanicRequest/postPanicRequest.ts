type PostPanicRequestParams = {
  timeOfRequest: string;
  aidRequired: "AMBULANCE" | "SECURITY" | "POLICE";
  location: {
    lat: number;
    lng: number;
    displayValue: string;
  };
  user: {
    firstName: string;
    lastName: string;
    externalId: string;
    email: string;
    contactNumber: string; // "+27-768854000"
    nextOfKinContactNumber: string; // "+27-768854001"
  };
};

export type PostPanicRequestResponseData = {
  id: string;
  status: "OPEN" | "ACKNOWLEDGED" | "DISPATCHED" | "RESOLVED";
  serviceDisplayName: string; // "Guuber"
  aidRequired: "AMBULANCE" | "SECURITY" | "POLICE";
  timeOfRequest: string; // ISO timestamp
  severity: "LOW" | "MEDIUM" | "HIGH";
  location: {
    lat: string;
    lng: string;
    displayValue: string;
  };
  user: {
    firstName: string;
    lastName: string;
    id: string;
    externalId: string;
    email: string;
    contactNumber: string; // "+27-768854000"
    nextOfKinContactNumber: string; // "+27-768854001"
  };
};

export const postPanicRequest = async (
  body: PostPanicRequestParams,
): Promise<PostPanicRequestResponseData> => {
  const payload = {
    serviceDisplayName: "Guuber",
    aidRequired: body?.aidRequired,
    timeOfRequest: body?.timeOfRequest,
    severity: "HIGH", // Guuber considers all panic requests to be high severity
    location: body?.location,
    user: body?.user,
  };
  const res = await fetch("/api/panicRequest/postPanicRequest", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error("Failed to post panic request");
  }

  return res.json();
};
