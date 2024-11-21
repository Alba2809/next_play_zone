export const sendEmailVerification = async (email, token) => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/send`, {
      method: "POST",
      body: JSON.stringify({ email, token }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    
    const data = await res.json();

    if (data.error) {
      return { error: data.error };
    }

    return { success: true };
  } catch (error) {
    console.error("Error asd asdasdas:", error);
    return { error: "Error al enviar el correo de verificación" };
  }
};
