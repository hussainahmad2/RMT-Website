import React from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { HardHat, TrendingUp, ShieldCheck, HeartPulse } from "lucide-react";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const openPositions = [
  { id: 1, title: "Senior Structural Welder", location: "Houston, TX", type: "Full-Time" },
  { id: 2, title: "Industrial Electrician (Journeyman)", location: "Corpus Christi, TX", type: "Full-Time" },
  { id: 3, title: "Project Manager - Outages", location: "Midland, TX", type: "Full-Time" },
  { id: 4, title: "Safety Coordinator (HSE)", location: "Saudi Arabia", type: "Contract" },
  { id: 5, title: "Pipefitter", location: "Port Arthur, TX", type: "Full-Time" }
];

export default function Careers() {
  const { toast } = useToast();
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      position: "",
      message: ""
    }
  });

  function onSubmit(data: any) {
    toast({
      title: "Application Received",
      description: "Thank you for applying to RMT USA. We will review your application.",
    });
    form.reset();
  }

  return (
    <div className="bg-background min-h-screen pt-20">
      <section className="py-24 bg-card border-b border-border">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <AnimatedSection>
            <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase tracking-tight mb-6">
              Build Your <span className="text-primary">Career</span>
            </h1>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              Join the elite team of craftsmen, engineers, and professionals building the infrastructure that powers the world.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold uppercase tracking-tight mb-4">Why Work at RMT USA?</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <ShieldCheck />, title: "Safety Culture", desc: "We prioritize your life over everything else. Zero incidents is our standard." },
              { icon: <TrendingUp />, title: "Career Growth", desc: "Clear pathways from apprentice to management with paid training." },
              { icon: <HeartPulse />, title: "Premium Benefits", desc: "Top-tier health, dental, and vision insurance plus 401(k) matching." },
              { icon: <HardHat />, title: "Best Projects", desc: "Work on the most complex, high-profile industrial sites worldwide." }
            ].map((benefit, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="bg-card border border-border p-8 text-center">
                <div className="w-16 h-16 bg-secondary mx-auto flex items-center justify-center text-primary mb-6">
                  {React.cloneElement(benefit.icon as React.ReactElement, { className: "w-8 h-8" })}
                </div>
                <h3 className="font-heading text-xl font-bold uppercase mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            
            <AnimatedSection>
              <h2 className="font-heading text-4xl font-bold uppercase tracking-tight mb-8">Current <span className="text-primary">Openings</span></h2>
              <div className="space-y-4">
                {openPositions.map((pos) => (
                  <div key={pos.id} className="bg-card border border-border p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-primary/50 transition-colors">
                    <div>
                      <h3 className="font-heading text-xl font-bold">{pos.title}</h3>
                      <div className="flex gap-4 text-sm text-muted-foreground mt-2 font-mono uppercase tracking-wider">
                        <span>{pos.location}</span>
                        <span>&bull;</span>
                        <span className="text-primary">{pos.type}</span>
                      </div>
                    </div>
                    <Button variant="outline" className="shrink-0 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-none">
                      Apply Now
                    </Button>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideLeft">
              <div className="bg-card border border-border p-8 md:p-10">
                <h2 className="font-heading text-3xl font-bold uppercase tracking-tight mb-6">General Application</h2>
                <p className="text-muted-foreground mb-8">Don't see your exact role? Submit your details to our recruiting database.</p>
                
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
                              <Input type="email" placeholder="john@example.com" {...field} className="bg-background border-border rounded-none h-12" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="position"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="uppercase font-bold text-xs tracking-wider text-muted-foreground">Desired Position</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-background border-border rounded-none h-12">
                                <SelectValue placeholder="Select a trade/role" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="welder">Welder / Pipefitter</SelectItem>
                              <SelectItem value="electrician">Electrician</SelectItem>
                              <SelectItem value="management">Project Management</SelectItem>
                              <SelectItem value="engineering">Engineering</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="uppercase font-bold text-xs tracking-wider text-muted-foreground">Cover Letter / Experience Summary</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Briefly describe your experience and certifications..." className="min-h-[120px] bg-background border-border rounded-none" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="pt-4 border-t border-border">
                      <FormItem>
                        <FormLabel className="uppercase font-bold text-xs tracking-wider text-muted-foreground block mb-2">Resume Upload</FormLabel>
                        <Input type="file" className="bg-background border-border rounded-none h-12 file:bg-secondary file:text-foreground file:border-0 file:h-full file:mr-4 file:px-4 cursor-pointer" />
                        <p className="text-xs text-muted-foreground mt-2">PDF or Word doc (Max 5MB)</p>
                      </FormItem>
                    </div>

                    <Button type="submit" size="lg" className="w-full rounded-none h-14 font-bold text-lg">
                      Submit Application
                    </Button>
                  </form>
                </Form>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>
    </div>
  );
}
