import React, { useState } from "react";
import jsPDF from "jspdf";
import bwipjs from "bwip-js";

const BookAppointment = () => {
  const appointmentTypes = [
    "Telephonic Consultation",
    "Video Call Consultation",
    "Visit Hospital",
  ];

  const purposesOfVisit = [
    "Cataract Evaluation",
    "Glaucoma Screening",
    "Vision Problem",
    "Regular Checkup",
    "Follow-up Visit",
    "Other",
  ];

  const [formData, setFormData] = useState({
    name: "",
    purpose: "",
    date: "",
    appointmentType: "",
    mobile: "",
    alternateMobile: "",
    email: "",
    time: "",
    agree: false,
  });

  const [submitting, setSubmitting] = useState(false);
  const [showSubmit, setShowSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (name === "agree") {
      setShowSubmit(checked);
    }
  };

  const generateBarcode = async (data) => {
    const canvas = document.createElement("canvas");
    try {
      bwipjs.toCanvas(canvas, {
        bcid: "code128",
        text: data,
        scale: 3,
        height: 10,
      });
      return canvas.toDataURL("image/png");
    } catch (err) {
      console.error("Barcode generation error", err);
      return null;
    }
  };

  const generatePDF = async () => {
    const doc = new jsPDF({ format: "a5" });
    const barcode = await generateBarcode(formData.mobile);

    doc.setFontSize(12);
    doc.text("Appointment Receipt", 10, 10);
    doc.text(`Name: ${formData.name}`, 10, 20);
    doc.text(`Purpose: ${formData.purpose}`, 10, 30);
    doc.text(`Date: ${formData.date}`, 10, 40);
    doc.text(`Appointment Type: ${formData.appointmentType}`, 10, 50);
    if (formData.mobile) doc.text(`Mobile: ${formData.mobile}`, 10, 60);
    if (formData.email) doc.text(`Email: ${formData.email}`, 10, 70);
    if (formData.time) doc.text(`Preferred Time: ${formData.time}`, 10, 80);

    if (barcode) doc.addImage(barcode, "PNG", 10, 90, 100, 20);

    doc.setFontSize(10);
    doc.text("Terms & Conditions:", 10, 120);
    doc.text("- Booking Amount is Non-Refundable.", 10, 130);
    doc.text("- If Patient is not available at scheduled time,", 10, 135);
    doc.text("  the appointment will be cancelled with no refund.", 10, 140);
    doc.text("- Patient will get a call from the appointment team.", 10, 145);

    doc.save("appointment-receipt.pdf");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await generatePDF();

    fetch("https://formsubmit.co/ajax/drpreetisbrighteyecare@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          alert("✅ Your appointment has been booked successfully.");
          window.location.reload();
        } else {
          alert("❌ Something went wrong. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Form submission error:", error);
        alert("❌ Network error. Please try again.");
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  const getToday = () => {
    return new Date().toISOString().split("T")[0];
  };

  const getTimeSlots = (): string[] => {
    const slots: string[] = [];
    const periods = ["AM", "PM"];
    for (let i = 1; i <= 12; i++) {
      periods.forEach((p) => {
        slots.push(`${i < 10 ? "0" + i : i}:00 ${p}`);
        slots.push(`${i < 10 ? "0" + i : i}:30 ${p}`);
      });
    }
    return slots;
  };

  return (
    <div className="bg-[url('/bg-100-vh.jpg')] bg-fixed py-60">
      <div className="max-w-4xl m-10 mx-auto p-10 bg-white rounded-3xl shadow-xl">
        <h1 className="text-2xl font-bold text-teal-800 text-center mb-6">
          Book Your Appointment
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            required
            onChange={handleChange}
            value={formData.name}
            placeholder="Full Name"
            className="w-full p-2 border rounded"
          />

          <select
            name="purpose"
            required
            onChange={handleChange}
            value={formData.purpose}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Purpose</option>
            {purposesOfVisit.map((p, i) => (
              <option key={i}>{p}</option>
            ))}
          </select>

          <input
            type="date"
            name="date"
            required
            min={getToday()}
            onChange={handleChange}
            value={formData.date}
            className="w-full p-2 border rounded"
          />

          <select
            name="appointmentType"
            required
            onChange={handleChange}
            value={formData.appointmentType}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Appointment Type</option>
            {appointmentTypes.map((type, i) => (
              <option key={i}>{type}</option>
            ))}
          </select>

          {(formData.appointmentType === "Telephonic Consultation" ||
            formData.appointmentType === "Visit Hospital") && (
            <input
              name="mobile"
              required
              placeholder="Mobile Number"
              onChange={handleChange}
              value={formData.mobile}
              className="w-full p-2 border rounded"
            />
          )}

          {formData.appointmentType === "Telephonic Consultation" && (
            <>
              <input
                name="alternateMobile"
                placeholder="Alternate Number"
                onChange={handleChange}
                value={formData.alternateMobile}
                className="w-full p-2 border rounded"
              />
              <select
                name="time"
                required
                onChange={handleChange}
                value={formData.time}
                className="w-full p-2 border rounded"
              >
                <option value="">Select Suitable Time</option>
                {getTimeSlots().map((t, i) => (
                  <option key={i}>{t}</option>
                ))}
              </select>
            </>
          )}

          {formData.appointmentType === "Video Call Consultation" && (
            <>
              <input
                name="email"
                required
                placeholder="Email ID"
                onChange={handleChange}
                value={formData.email}
                className="w-full p-2 border rounded"
              />
              <select
                name="time"
                required
                onChange={handleChange}
                value={formData.time}
                className="w-full p-2 border rounded"
              >
                <option value="">Select Preferred Time</option>
                {getTimeSlots().map((t, i) => (
                  <option key={i}>{t}</option>
                ))}
              </select>
            </>
          )}

          {(formData.appointmentType === "Telephonic Consultation" ||
            formData.appointmentType === "Video Call Consultation") && (
            <div className="bg-yellow-50 p-4 rounded">
              <label className="text-sm">
                <input
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  className="mr-2"
                />
                Telephonic/Video Consultations are available only with a nominal
                fee charged by the hospital. Please agree to proceed.
              </label>
            </div>
          )}

          {showSubmit && (
            <button
              disabled={submitting}
              type="submit"
              className="w-full bg-teal-700 text-white p-3 rounded hover:bg-teal-900"
            >
              {submitting ? "Booking..." : "Book Appointment"}
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default BookAppointment;
