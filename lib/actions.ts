'use server';
import { signIn, signOut } from "@/auth";
import { AuthError } from "next-auth";
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import {
  addMeeting,
  updateMeeting as dbUpdateMeeting,
  deleteMeeting as dbDeleteMeeting,
} from '@/lib/meetings-db';

const MeetingFormSchema = z.object({
  date: z.string().min(1, 'Date is required.'),
  meetingType: z.enum(['testimony', 'regular', 'stake', 'general'], {
    message: 'Please select a valid meeting type.',
  }),
  presiding: z.string().min(1, 'Presiding is required.'),
  conducting: z.string().min(1, 'Conducting is required.'),
});

export type State = {
  errors?: {
    date?: string[];
    meetingType?: string[];
    presiding?: string[];
    conducting?: string[];
  };
  message?: string | null;
};

export async function createMeeting(
  prevState: State,
  formData: FormData,
): Promise<State> {
  const validatedFields = MeetingFormSchema.safeParse({
    date: formData.get('date'),
    meetingType: formData.get('meetingType'),
    presiding: formData.get('presiding'),
    conducting: formData.get('conducting'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Please correct the errors below.',
    };
  }

  const { date, meetingType, presiding, conducting } =
    validatedFields.data;

  try {
    await addMeeting({
      id: 0,
      date,
      meetingType,
      presiding,
      conducting,
      announcements: [],
      openingHymn: { number: 0, title: '' },
      openingPrayer: '',
      wardBusiness: [],
      stakeBusiness: false,
      sacramentHymn: { number: 0, title: '' },
      speakers: [],
      closingHymn: { number: 0, title: '' },
      closingPrayer: '',
    });

    revalidatePath('/meetings');
  } catch (error) {
    console.error('Failed to create meeting:', error);

    return {
      message: 'Something went wrong while creating the meeting.',
    };
  }

  redirect('/meetings');
}

export async function updateMeeting(
  id: number,
  prevState: State,
  formData: FormData,
): Promise<State> {
  const validatedFields = MeetingFormSchema.safeParse({
    date: formData.get('date'),
    meetingType: formData.get('meetingType'),
    presiding: formData.get('presiding'),
    conducting: formData.get('conducting'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Please correct the errors below.',
    };
  }

  const { date, meetingType, presiding, conducting } =
    validatedFields.data;

  try {
    await dbUpdateMeeting(id, {
      id,
      date,
      meetingType,
      presiding,
      conducting,
      announcements: [],
      openingHymn: { number: 0, title: '' },
      openingPrayer: '',
      wardBusiness: [],
      stakeBusiness: false,
      sacramentHymn: { number: 0, title: '' },
      speakers: [],
      closingHymn: { number: 0, title: '' },
      closingPrayer: '',
    });

    revalidatePath('/meetings');
  } catch (error) {
    console.error('Failed to update meeting:', error);

    return {
      message: 'Something went wrong while updating the meeting.',
    };
  }

  redirect('/meetings');
}

export async function deleteMeeting(id: number) {
  try {
    await dbDeleteMeeting(id);
    revalidatePath('/meetings');
  } catch (error) {
    console.error('Failed to delete meeting:', error);
    throw new Error('Failed to delete meeting.');
  }

  redirect('/meetings');
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirectTo: formData.get("callbackUrl")?.toString() || "/",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid email or password.";
        default:
          return "Something went wrong.";
      }
    }

    throw error;
  }
}

export async function logout() {
  await signOut({ redirectTo: "/login" });
}