"use client";

import { Button } from "@material-tailwind/react";
import { createBrowserSupabaseClient } from "utils/supabase/client";

export default function LogoutButton() {
  const supabase = createBrowserSupabaseClient();

  return (
    <Button
      onClick={async () => {
        supabase.auth.signOut();
      }}
      color="red"
    >
      로그아웃
    </Button>
  );
}
