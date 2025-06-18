"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/utils/supabase/server";

export async function registerForOpen(formData) {
  const supabase = await createClient();

  const data = await supabase.from("bg_open_participants").insert(formData);

  return data;
}
