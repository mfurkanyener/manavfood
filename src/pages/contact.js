import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
    const [accepted, setAccepted] = useState(false);
    return (
        <div className="min-h-screen bg-white">
            {/* Header Section */}
            <div className="bg-sky-400 text-white pb-20 relative">
                <div className="max-w-7xl mx-auto px-6 pt-10">
                    <Image src="/images/sunblu.png" alt="sunblu logo" width={100} height={100}/>
                    <h2 className="mt-16 text-4xl font-bold max-w-md leading-snug">
                        We are here to help you find the perfect product to suit your needs.
                    </h2>
                </div>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-white rounded-bl-[100px]"></div>
            </div>

            {/* Contact Form */}
            <div className="relative z-10 max-w-6xl mx-auto -mt-40 px-6">
                <div className="bg-white rounded-3xl shadow-xl p-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input placeholder="Full Name" />
                            <Input placeholder="Email" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input placeholder="Telephone" />
                            <Input placeholder="Subject" />
                        </div>
                        <Textarea placeholder="Message" className="h-32" />

                        <div className="flex items-center space-x-2">
                            <Checkbox id="privacy" checked={accepted} onCheckedChange={() => setAccepted(!accepted)} />
                            <Label htmlFor="privacy" className="text-sm">
                                I have read and accept the <a href="#" className="underline">Privacy Policy</a>.
                            </Label>
                        </div>

                        <Button disabled={!accepted} className="bg-sky-400 text-white mt-2">
                            Submit
                        </Button>
                    </div>

                    {/* Address & Email cards */}
                    <div className="flex flex-col items-start justify-end space-y-6">
                        <div className="bg-gray-100 p-4 rounded-2xl shadow-md">
                            <p className="font-semibold">ADDRESS</p>
                            <p className="text-sm">
                                Adalet Mahallesi Manas Bul. No: 12/2 Center Office<br />
                                Bayraklı IZMIR TURKEY
                            </p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-2xl shadow-md">
                            <p className="font-semibold">EMAIL</p>
                            <p className="text-sm">feray@manavfood.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
