import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

interface ContactRequest {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  service?: string;
  industry?: string;
  budget?: string;
  preferredContact?: string;
  requirements?: string;
  message?: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactRequest = await request.json();

    const {
      name,
      company,
      email,
      phone,
      service,
      industry,
      budget,
      preferredContact,
      requirements,
      message,
    } = body;

    // -----------------------------
    // Server-side validation
    // -----------------------------

    if (!name?.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Name is required.",
        },
        { status: 400 }
      );
    }

    if (!email?.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Email is required.",
        },
        { status: 400 }
      );
    }

    if (!service?.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Service is required.",
        },
        { status: 400 }
      );
    }

    if (!requirements?.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Project requirements are required.",
        },
        { status: 400 }
      );
    }

    // -----------------------------
    // Prepare enquiry data
    // -----------------------------

    const enquiry = {
      name: name.trim(),
      company: company?.trim() || null,
      email: email.trim(),
      phone: phone?.trim() || null,
      service: service.trim(),
      industry: industry?.trim() || null,
      budget: budget?.trim() || null,
      preferred_contact: preferredContact?.trim() || null,
      requirements: requirements.trim(),
      message: message?.trim() || null,
    };

    console.log("Attempting Supabase insert:", enquiry);

    // -----------------------------
    // Insert into Supabase
    // -----------------------------
    // IMPORTANT:
    // Do not use .select() here.
    // Our RLS policy only needs to allow INSERT.
    // We don't need to return the inserted
    // enquiry back to the browser.

    const { error } = await supabase
      .from("contact_enquiries")
      .insert(enquiry);

    // -----------------------------
    // Supabase error
    // -----------------------------

    if (error) {
      console.error("SUPABASE ERROR:", error);

      return NextResponse.json(
        {
          success: false,
          message: error.message,
          code: error.code,
          details: error.details,
          hint: error.hint,
        },
        { status: 500 }
      );
    }

    // -----------------------------
    // Success
    // -----------------------------

    console.log("SUPABASE INSERT SUCCESS");

    return NextResponse.json(
      {
        success: true,
        message: "Your enquiry has been received successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("CONTACT API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Unable to process your enquiry.",
      },
      { status: 500 }
    );
  }
}