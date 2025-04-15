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
        <div className="relative min-h-screen overflow-hidden">
            <div className="fixed top-0 left-0 w-full h-full -z-10">
                <Image
                    src="/images/contactSubstract.png"
                    alt="background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 pt-20 pb-8 text-white">
                <h2 className="text-4xl font-bold max-w-md leading-snug">
                    We are here to help you find the perfect product to suit your needs.
                </h2>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 pb-20">
                <div className="bg-white rounded-3xl shadow-xl p-10 space-y-6">
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input placeholder="Full Name"/>
                            <Input placeholder="Email"/>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input placeholder="Telephone"/>
                            <Input placeholder="Subject"/>
                        </div>
                        <Textarea placeholder="Message" className="h-32"/>

                        <div className="flex items-center space-x-2">
                            <Checkbox id="privacy" checked={accepted} onCheckedChange={() => setAccepted(!accepted)}/>
                            <Label htmlFor="privacy" className="text-sm text-black">
                                I have read and accept the <a href="#" className="underline">Privacy Policy</a>.
                            </Label>
                        </div>

                        <Button disabled={!accepted} className="bg-sky-400 text-white mt-2">
                            Submit
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-6">
                    <div className="bg-gray-100 p-4 rounded-2xl shadow-md text-center w-full md:w-1/2">
                        <p className="font-semibold">ADDRESS</p>
                        <p className="text-sm mt-1">
                            Adalet Mahallesi Manas Bul. No: 12/2 Center Office<br/>
                            Bayraklı IZMIR TURKEY
                        </p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-2xl shadow-md text-center w-full md:w-1/2">
                        <p className="font-semibold">EMAIL</p>
                        <p className="text-sm mt-1">feray@manavfood.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}