"use server"

export async function initializeRazorpay(amount: number, duration: string) {
  const razorpayKey = process.env.RAZORPAY_KEY_ID

  if (!razorpayKey) {
    throw new Error("Razorpay key not configured")
  }

  // Return the key and payment details to the client
  // The key is only accessed on the server
  return {
    key: razorpayKey,
    amount,
    currency: "INR",
    name: "Pandit Jagannath Guruji",
    description: `Janma Kundali - ${duration} Minutes`,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-11-10%20101603-benI3VabIXEfzT7U20tRstbG0GgEEA.png",
  }
}
