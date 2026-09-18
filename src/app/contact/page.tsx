"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useTranslation } from "@/lib/i18n";

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  inquiryType: "general" | "order" | "bulk" | "feedback";
  message: string;
};

export default function ContactPage() {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const contactSchema = React.useMemo(() => {
    return z.object({
      name: z.string().min(2, t("validation.nameMin")),
      email: z.string().email(t("validation.emailInvalid")),
      phone: z
        .string()
        .regex(/^[6-9]\d{9}$/, t("validation.phoneInvalid")),
      inquiryType: z.enum(["general", "order", "bulk", "feedback"]),
      message: z.string().min(10, t("validation.messageMin")),
    });
  }, [t]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      inquiryType: "general",
      message: "",
    },
  });

  const onSubmit = (_data: ContactFormData) => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      reset();
    }, 600);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2]">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge variant="gold" className="mb-3 px-3 py-1 text-xs font-bold uppercase tracking-wider">
            {t("contact.badge")}
          </Badge>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14382B]">
            {t("contact.heading")}
          </h1>
          <p className="mt-3 text-base text-[#596B62] leading-relaxed">
            {t("contact.subheading")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Phone Card */}
            <div className="bg-white rounded-3xl p-6 border border-[#E8DFD1] shadow-xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF4E6] text-[#8C651A] flex items-center justify-center shrink-0 border border-[#E3CE9B]">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#596B62]">
                  {t("contact.customerHelpline")}
                </span>
                <a
                  href="tel:7654007494"
                  className="font-serif text-xl font-bold text-[#14382B] block hover:text-[#C59B4B] transition-colors mt-0.5"
                >
                  {t("common.helpline")}
                </a>
                <p className="text-xs text-[#596B62] mt-1">
                  Direct phone call & WhatsApp support available.
                </p>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-3xl p-6 border border-[#E8DFD1] shadow-xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#EBF3EE] text-[#154E35] flex items-center justify-center shrink-0 border border-[#C6DFC9]">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#596B62]">
                  {t("contact.emailInquiries")}
                </span>
                <a
                  href="mailto:care@hridaykrishnafoods.com"
                  className="font-serif text-lg font-bold text-[#14382B] block hover:text-[#C59B4B] transition-colors mt-0.5"
                >
                  care@hridaykrishnafoods.com
                </a>
                <p className="text-xs text-[#596B62] mt-1">
                  Responses typically sent within 12 business hours.
                </p>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-white rounded-3xl p-6 border border-[#E8DFD1] shadow-xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF4E6] text-[#8C651A] flex items-center justify-center shrink-0 border border-[#E3CE9B]">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#596B62]">
                  {t("contact.facilityAddress")}
                </span>
                <h3 className="font-serif text-base font-bold text-[#14382B] mt-0.5">
                  Hriday Krishna Makhana (ह्रदय कृष्णा मखाना उद्योग)
                </h3>
                <p className="text-xs text-[#596B62] mt-1 leading-relaxed">
                  Baligarh, Runnisaidpur, Sitamarhi, Bihar – 843328
                </p>
                <span className="text-[11px] font-semibold text-[#8C651A] block mt-2">
                  {t("common.fssaiLic")}
                </span>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="bg-[#14382B] text-[#FAF7F2] rounded-3xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="w-5 h-5 text-[#C59B4B]" />
                <h4 className="font-serif font-bold text-base">{t("contact.supportHours")}</h4>
              </div>
              <p className="text-xs text-[#FAF7F2]/80 leading-relaxed whitespace-pre-line">
                {t("contact.supportHoursDetails")}
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#E8DFD1] shadow-xs">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#EBF3EE] text-[#154E35] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#14382B]">
                  {t("contact.successTitle")}
                </h3>
                <p className="text-sm text-[#596B62] max-w-md mx-auto leading-relaxed">
                  {t("contact.successDesc")}
                </p>
                <Button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                  className="mt-4 border-[#14382B] text-[#14382B]"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare className="w-5 h-5 text-[#8C651A]" />
                  <h2 className="font-serif text-2xl font-bold text-[#14382B]">
                    {t("contact.formTitle")}
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#14382B] uppercase tracking-wider mb-1">
                      {t("contact.yourName")}
                    </label>
                    <input
                      type="text"
                      {...register("name")}
                      placeholder={t("contact.namePlaceholder")}
                      className="w-full px-4 py-2.5 text-sm rounded-xl bg-[#FAF7F2] border border-[#E8DFD1] focus:outline-none focus:border-[#14382B]"
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-600 mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#14382B] uppercase tracking-wider mb-1">
                      {t("contact.email")}
                    </label>
                    <input
                      type="email"
                      {...register("email")}
                      placeholder={t("contact.emailPlaceholder")}
                      className="w-full px-4 py-2.5 text-sm rounded-xl bg-[#FAF7F2] border border-[#E8DFD1] focus:outline-none focus:border-[#14382B]"
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-600 mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#14382B] uppercase tracking-wider mb-1">
                      {t("contact.mobile")}
                    </label>
                    <input
                      type="tel"
                      {...register("phone")}
                      placeholder={t("contact.mobilePlaceholder")}
                      className="w-full px-4 py-2.5 text-sm rounded-xl bg-[#FAF7F2] border border-[#E8DFD1] focus:outline-none focus:border-[#14382B]"
                    />
                    {errors.phone && (
                      <p className="text-xs text-rose-600 mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#14382B] uppercase tracking-wider mb-1">
                      {t("contact.subject")} *
                    </label>
                    <select
                      {...register("inquiryType")}
                      className="w-full px-4 py-2.5 text-sm rounded-xl bg-[#FAF7F2] border border-[#E8DFD1] focus:outline-none focus:border-[#14382B]"
                    >
                      <option value="general">{t("contact.subjectGeneral")}</option>
                      <option value="order">{t("contact.subjectOrder")}</option>
                      <option value="bulk">{t("contact.subjectBulk")}</option>
                      <option value="feedback">{t("contact.subjectFeedback")}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#14382B] uppercase tracking-wider mb-1">
                    {t("contact.messageRequired")}
                  </label>
                  <textarea
                    rows={5}
                    {...register("message")}
                    placeholder={t("contact.messagePlaceholder")}
                    className="w-full px-4 py-2.5 text-sm rounded-xl bg-[#FAF7F2] border border-[#E8DFD1] focus:outline-none focus:border-[#14382B]"
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-600 mt-1">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#14382B] hover:bg-[#0D261C] text-[#FAF7F2] font-semibold h-12 rounded-2xl text-base flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{t("contact.sendMessage")}</span>
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
