import axios from "axios";
import { useState } from "react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    billingAddress: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    // Basic validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phoneNumber ||
      !formData.cardNumber
    ) {
      setError("Please fill in all required fields.");
      setLoading(false);
      return;
    }

    try {
      // Replace URL with your actual API endpoint
      const response = await axios.post("http://localhost:5000/bookings", formData);
      setSuccess("✅ Booking confirmed successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        cardNumber: "",
        expirationDate: "",
        cvv: "",
        billingAddress: "",
      });
    } catch (err) {
      console.error("Booking submission failed:", err);
      setError("❌ Failed to submit booking. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-2xl mt-8">
      <h1 className="text-2xl font-bold mb-4">Booking Form</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="border p-2 rounded-md w-full"
          />
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="border p-2 rounded-md w-full"
          />
        </div>

        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="border p-2 rounded-md w-full"
        />

        <input
          name="phoneNumber"
          type="tel"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Phone Number"
          className="border p-2 rounded-md w-full"
        />

        {/* Payment Details */}
        <input
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleChange}
          placeholder="Card Number"
          className="border p-2 rounded-md w-full"
        />

        <div className="grid grid-cols-2 gap-4">
          <input
            name="expirationDate"
            value={formData.expirationDate}
            onChange={handleChange}
            placeholder="MM/YY"
            className="border p-2 rounded-md w-full"
          />
          <input
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            placeholder="CVV"
            className="border p-2 rounded-md w-full"
          />
        </div>

        <input
          name="billingAddress"
          value={formData.billingAddress}
          onChange={handleChange}
          placeholder="Billing Address"
          className="border p-2 rounded-md w-full"
        />

        {/* Buttons and Messages */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
        >
          {loading ? "Processing..." : "Confirm & Pay"}
        </button>

        {error && <p className="text-red-500 mt-2">{error}</p>}
        {success && <p className="text-green-600 mt-2">{success}</p>}
      </form>
    </div>
  );
}
