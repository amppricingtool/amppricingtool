import { signIn } from "next-auth/react";

async function login(
  email: string,
  password: string
): Promise<{ success: boolean; message: string }> {
  if (!email || !password) {
    return { success: false, message: "Por favor, preencha todos os campos." };
  }

  try {
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      return { success: false, message: res.error };
    }

    return { success: true, message: "Login bem-sucedido!" };
  } catch (error) {
    console.error("Erro inesperado no login:", error);
    return {
      success: false,
      message: "Ocorreu um erro. Tente novamente mais tarde.",
    };
  }
}
