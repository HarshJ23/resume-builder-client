'use client'
import Link from "next/link";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Trash2 } from 'lucide-react';

export default function Page() {
  const [socialLinks, setSocialLinks] = useState([""]);


  const handleAddLink = () => {
    if (socialLinks.length < 3) {
      setSocialLinks([...socialLinks, ""]);
    } else {
      // Provide feedback to the user that the limit is reached (e.g., alert, toast, etc.)
      alert("You can add only up to 3 links.");
    }
  };

  const handleDeleteLink = (index) => {
    const updatedLinks = [...socialLinks];
    updatedLinks.splice(index, 1);
    setSocialLinks(updatedLinks);
  };

  const handleSocialLinkChange = (index, value) => {
    const updatedLinks = [...socialLinks];
    updatedLinks[index] = value;
    setSocialLinks(updatedLinks);
  };
  return (
    <main>
      <h1 className="m-4">
        <Link
          href="/"
          className="font-semibold hover:bg-yellow-400 p-1 rounded-md transition ease-in-out"
        >
          Home
        </Link>{" "}
        /{" "}
        <Link
          href="/create-resume"
          className="font-semibold hover:bg-yellow-400 p-1 rounded-md transition ease-in-out"
        >
          Create-Resume
        </Link>
      </h1>

      <section>
        <h1 className="m-6 font-bold text-4xl">1) Personal Details</h1>
        <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="name">Enter your name</Label>
            <Input type="text" id="name" placeholder="ex)- Sundar Pichai" className="transition ease-in-out"/>
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">E-Mail address</Label>
            <Input type="email" id="email" placeholder="ex)- user123@gmail.com" className="transition ease-in-out"/>
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="contact">Contact number</Label>
            <Input type="tel" id="contact" placeholder="ex)- +91-9700040437" className="transition ease-in-out"/>
          </div>

          <div>
          <h1 className="mt-7 mb-2 font-bold text-3xl"># Social links # </h1>
          <p className="font-medium mb-2">(Maximum 3 links are suggested for a neat resume)</p>
          {/* <p className="font-normal mb-3">Tip : Add links like personal website, portfolio, linkedin, github etc.</p> */}
            {socialLinks.map((link, index) => (
              <div key={index} className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor={`socialLink-${index}`}>Social Link {index + 1}</Label>
                <div className="flex flex-row">

                <Input 
                  type="url"
                  id={`socialLink-${index}`}
                  placeholder={"Linkedin , Github, Personal website etc"}
                  value={link}
                  onChange={(e) => handleSocialLinkChange(index, e.target.value)}
                  className="transition ease-in-out my-2"
                  />
             {socialLinks.length > 1 && (
                 <Button onClick={() => handleDeleteLink(index)} className="ml-2 bg-red-500 hover:bg-red-600 text-white">
                 <Trash2 />
                 </Button>
                )}
                  </div>
              </div>
            ))}
            <Button onClick={handleAddLink} className="my-4 font-semibold">
              Add another link
            </Button>
          </div>
          </div>
      
      </section>
    </main>
  );
}


