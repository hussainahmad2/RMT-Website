import React from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const offices = [
  { name: "Houston Headquarters", address: "12500 Industrial Blvd, Houston, TX 77015", phone: "+1 (800) 555-0199" },
  { name: "Permian Basin Operations", address: "4500 Energy Way, Midland, TX 79706", phone: "+1 (432) 555-0199" },
  { name: "Coastal Division", address: "8900 Refinery Rd, Corpus Christi, TX 78409", phone: "+1 (361) 555-0199" },
  { name: "Middle East Branch", address: "Jubail Industrial City, Kingdom of Saudi Arabia", phone: "+966 13 555 0199" }
];

export default function Contact() {
  const { toast } = useToast();
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    }
  });

  function onSubmit(data: any) {
    toast({
      title: "Message Sent",
      description: "Our team will contact you shortly regarding your inquiry.",
    });
    form.reset();
  }

  return (
    <div className="bg-background min-h-screen pt-20">
      
      {/* HEADER */}
      <section className="py-24 bg-card border-b border-border">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <AnimatedSection>
            <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase tracking-tight mb-6">
              Contact <span className="text-primary">RMT USA</span>
            </h1>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              For project estimating, emergency response dispatch, or general inquiries, our operations center is standing by 24/7/365.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* CONTACT INFO */}
            <AnimatedSection>
              <h2 className="font-heading text-4xl font-bold uppercase tracking-tight mb-8">Global <span className="text-primary">Reach</span></h2>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {offices.map((office, i) => (
                  <div key={i} className="bg-card border border-border p-6">
                    <h3 className="font-heading text-xl font-bold mb-4 uppercase">{office.name}</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-sm">{office.address}</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-muted-foreground text-sm">{office.phone}</span>
                      </li>
                    </ul>
                  </div>
                ))}
              </div>

              <div className="bg-primary text-primary-foreground p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2" />
                <div className="flex items-center gap-4 mb-4">
                  <Clock className="w-8 h-8" />
                  <h3 className="font-heading text-2xl font-bold uppercase">24/7 Emergency Dispatch</h3>
                </div>
                <p className="text-primary-foreground/90 mb-6">
                  For immediate turnaround or critical outage response, call our emergency hotline.
                </p>
                <div className="font-mono text-3xl font-bold tracking-wider">+1 (800) 555-9111</div>
              </div>
            </AnimatedSection>

            {/* CONTACT FORM */}
            <AnimatedSection animation="slideLeft">
              <div className="bg-card border border-border p-8 md:p-10 shadow-2xl">
                <h2 className="font-heading text-3xl font-bold uppercase tracking-tight mb-8 border-b border-border pb-4">Request a Consultation</h2>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="uppercase font-bold text-xs tracking-wider text-muted-foreground">Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} className="bg-background border-border rounded-none h-12" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="uppercase font-bold text-xs tracking-wider text-muted-foreground">Email Address</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="john@company.com" {...field} className="bg-background border-border rounded-none h-12" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="uppercase font-bold text-xs tracking-wider text-muted-foreground">Phone Number</FormLabel>
                            <FormControl>
                              <Input type="tel" placeholder="+1 (555) 000-0000" {...field} className="bg-background border-border rounded-none h-12" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="uppercase font-bold text-xs tracking-wider text-muted-foreground">Subject</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-background border-border rounded-none h-12">
                                  <SelectValue placeholder="Select Inquiry Type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="quote">Request a Quote</SelectItem>
                                <SelectItem value="services">Services Information</SelectItem>
                                <SelectItem value="vendor">Vendor / Supplier</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="uppercase font-bold text-xs tracking-wider text-muted-foreground">Project Details / Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Please describe your requirements..." className="min-h-[150px] bg-background border-border rounded-none" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" size="lg" className="w-full rounded-none h-14 font-bold text-lg">
                      Send Message
                    </Button>
                  </form>
                </Form>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* MAP PLACEHOLDER */}
      <section className="h-[400px] w-full bg-secondary border-y border-border relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-background/50 z-10" />
        <div className="absolute inset-0 z-0 flex flex-wrap opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        
        <div className="relative z-20 text-center bg-card p-6 border border-border max-w-sm mx-auto shadow-2xl">
          <MapPin className="w-10 h-10 text-primary mx-auto mb-4" />
          <h3 className="font-heading font-bold text-xl uppercase">Houston, TX Headquarters</h3>
          <p className="text-muted-foreground text-sm mt-2">12500 Industrial Blvd<br/>Houston, TX 77015</p>
          <div className="mt-4 pt-4 border-t border-border">
            <span className="text-xs font-mono text-primary uppercase">Interactive Map Loading...</span>
          </div>
        </div>
      </section>

    </div>
  );
}
