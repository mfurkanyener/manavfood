import Head from "next/head";
import Image from "next/image";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import emailjs from '@emailjs/browser';
import { FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
    const [accepted, setAccepted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const formRef = useRef();
    const { messages } = useLanguage();
    const t = messages.contactPage;

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = formRef.current;
        const email = form.email.value.trim();
        const fullName = form.fullName.value.trim();
        const message = form.message.value.trim();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!fullName || !message || !emailRegex.test(email)) {
            alert("Please fill in all required fields with valid data.");
            return;
        }

        setIsSubmitting(true);

        emailjs
            .sendForm(
                'service_8rdzckj',
                'template_yh0uwcn',
                formRef.current,
                'I7aisYlFWzMjQG89a'
            )
            .then(() => {
                alert("Message sent successfully!");
                form.reset();
                setAccepted(false);
            })
            .catch(() => {
                alert("Failed to send message.");
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <div className="relative min-h-screen overflow-hidden">
            <Head>
                <title>{t.pageTitle} | ManavFood - Sunblu</title>
                <link rel="icon" href="/images/sunblu.ico" />
                <meta charSet="UTF-8" />
                <meta name="description" content={t.metaDescription || "Get in touch with ManavFood for premium sun-dried tomatoes, seafood, and export partnership inquiries."} />
                <meta name="keywords" content="ManavFood, Sunblu, Contact, Feray Manav, Turkish food exporter, dried tomatoes, seafood, Mediterranean food, organic food, get in touch, export contact" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            {/* Background */}
            <div className="fixed top-0 left-0 w-full h-full -z-10">
                <Image
                    src="/images/contact/contactSubstract.png"
                    alt="background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Heading */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold max-w-md leading-snug text-white drop-shadow-lg">
                    {t.heading}
                </h2>
            </div>

            {/* Form */}
            <div className="relative z-10 max-w-[1200px] w-full mx-auto pb-20">
                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="bg-white rounded-3xl shadow-xl p-10 space-y-6 w-full max-w-[800px] mx-auto"
                >
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input name="fullName" placeholder={t.fullName} required/>
                            <Input name="email" type="email" placeholder={t.email} required/>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input name="telephone" placeholder={t.telephone}/>
                            <Input name="subject" placeholder={t.subject}/>
                        </div>
                        <Textarea name="message" placeholder={t.message} className="h-32" required/>

                        <div className="flex items-center space-x-2">
                            <Checkbox
                                id="privacy"
                                checked={accepted}
                                onCheckedChange={() => setAccepted(!accepted)}
                            />
                            <Label htmlFor="privacy" className="text-sm text-black">
                                {t.privacyLabel}
                                <Link href="/privacy" className="underline">
                                    {t.privacyPolicy}
                                </Link>
                            </Label>
                        </div>

                        <Button
                            type="submit"
                            disabled={!accepted || isSubmitting}
                            className={`bg-sky-400 text-white mt-2 transition-all ${
                                isSubmitting ? "opacity-60 cursor-not-allowed" : ""
                            }`}
                        >
                            {isSubmitting ? (
                                <div className="flex items-center gap-2">
                                    <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></span>
                                    {t.sending}
                                </div>
                            ) : (
                                t.send
                            )}
                        </Button>
                    </div>
                </form>

                {/* Address Section */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-6">
                    {/* Address Card */}
                    <div
                        className="bg-white rounded-[48px] shadow-xl w-[260px] h-[260px] p-4 grid grid-rows-[48px_32px_1fr] items-center text-center">
                        <FaMapMarkerAlt className="text-[#45BEE0] w-8 h-8 mx-auto"/>
                        <p className="font-bold text-base">{t.addressTitle}</p>
                        <p className="mt-5 max-w-[260px] text-center text-sm leading-snug">{t.company}</p>
                        <p className="max-w-[260px] text-center text-sm leading-snug">
                            {t.address}
                        </p>
                    </div>

                    {/* Email Card */}
                    <div
                        className="bg-white rounded-[48px] shadow-xl w-[260px] h-[260px] p-4 grid grid-rows-[48px_32px_1fr] items-center text-center">
                        <HiOutlineMail className="text-[#45BEE0] w-8 h-8 mx-auto"/>
                        <p className="font-bold text-base">{t.emailTitle}</p>
                        <a href="mailto:ozden@manavfood.com"
                           className="max-w-[260px] -mt-11 text-center text-sm leading-snug">
                            feray@manavfood.com                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}