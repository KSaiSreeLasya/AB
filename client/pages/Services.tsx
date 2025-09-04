import { useEffect, useState, useRef } from "react";
import {
  ChevronRight,
  Code,
  Database,
  Globe,
  Smartphone,
  Cpu,
  Zap,
  Shield,
  BarChart3,
  Radio,
  ShoppingCart,
  Car,
  Settings,
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

function Section({ children, className = "" }: SectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } ${className}`}
    >
      {children}
    </div>
  );
}

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [carouselApi, setCarouselApi] = useState<any>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    document.documentElement.classList.add("dark");
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (!carouselApi) return;

    carouselApi.on("select", () => {
      setSelectedIndex(carouselApi.selectedScrollSnap());
    });
  }, [carouselApi]);


  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-dark-bg via-background to-card-bg">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div
              className={`transition-all duration-1000 ${isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
                }`}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Our <span className="text-gradient">Services</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Comprehensive technology solutions across multiple industries designed to drive innovation
                and accelerate your business growth
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Work With */}
      <Section>
        <section className="py-20 bg-card-bg/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Industries We Work With
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Specialized solutions across diverse technology sectors
              </p>
            </div>

            {/* Industries Carousel */}
            <div className="relative">
              <Carousel
                opts={{ align: "start", loop: true, slidesToScroll: 1 }}
                setApi={setCarouselApi}
                className="animate-fade-in-up"
              >
                <CarouselContent>
                  <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <div className="group flex flex-col items-center justify-center p-8 rounded-xl border border-border-subtle bg-card/60 hover:bg-card transition-colors duration-200">
                      <div className="text-tech-blue mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Cpu className="w-16 h-16" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Semiconductors</h3>
                      <p className="text-sm text-muted-foreground text-center">Advanced chip design & verification</p>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <div className="group flex flex-col items-center justify-center p-8 rounded-xl border border-border-subtle bg-card/60 hover:bg-card transition-colors duration-200">
                      <div className="text-tech-blue mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Radio className="w-16 h-16" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Telecom & Network</h3>
                      <p className="text-sm text-muted-foreground text-center">Communication infrastructure solutions</p>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <div className="group flex flex-col items-center justify-center p-8 rounded-xl border border-border-subtle bg-card/60 hover:bg-card transition-colors duration-200">
                      <div className="text-tech-blue mb-6 group-hover:scale-110 transition-transform duration-300">
                        <ShoppingCart className="w-16 h-16" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Retail</h3>
                      <p className="text-sm text-muted-foreground text-center">Digital transformation solutions</p>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <div className="group flex flex-col items-center justify-center p-8 rounded-xl border border-border-subtle bg-card/60 hover:bg-card transition-colors duration-200">
                      <div className="text-tech-blue mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Car className="w-16 h-16" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Automotive</h3>
                      <p className="text-sm text-muted-foreground text-center">Next-generation vehicle electronics</p>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>

              {/* Dots navigation */}
              <div className="flex justify-center space-x-3 mt-8">
                {[0, 1, 2, 3].map((index) => (
                  <button
                    key={index}
                    onClick={() => carouselApi?.scrollTo(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      selectedIndex === index
                        ? "bg-tech-blue scale-125"
                        : "bg-tech-blue/30 hover:bg-tech-blue/60"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </Section>

      {/* Detailed Services with Tabs */}
      <Section>
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Our <span className="text-gradient">Services</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Specialized solutions across diverse technology sectors
              </p>
            </div>

            <Tabs defaultValue="semiconductors" className="w-full">
              <TabsList className="grid w-full grid-cols-5 mb-12 h-auto p-2 bg-card border border-border-subtle">
                <TabsTrigger
                  value="semiconductors"
                  className="data-[state=active]:bg-tech-blue data-[state=active]:text-white py-3 px-6 rounded-lg font-semibold"
                >
                  <Cpu className="w-4 h-4 mr-2" />
                  Semiconductors
                </TabsTrigger>
                <TabsTrigger
                  value="embedded"
                  className="data-[state=active]:bg-tech-blue data-[state=active]:text-white py-3 px-6 rounded-lg font-semibold"
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Embedded services
                </TabsTrigger>
                <TabsTrigger
                  value="automotive"
                  className="data-[state=active]:bg-tech-blue data-[state=active]:text-white py-3 px-6 rounded-lg font-semibold"
                >
                  <Car className="w-4 h-4 mr-2" />
                  Automotive
                </TabsTrigger>
                <TabsTrigger
                  value="retail"
                  className="data-[state=active]:bg-tech-blue data-[state=active]:text-white py-3 px-6 rounded-lg font-semibold"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Retail
                </TabsTrigger>
                <TabsTrigger
                  value="telecom"
                  className="data-[state=active]:bg-tech-blue data-[state=active]:text-white py-3 px-6 rounded-lg font-semibold"
                >
                  <Radio className="w-4 h-4 mr-2" />
                  Telecom and Network
                </TabsTrigger>
              </TabsList>

              <TabsContent value="semiconductors" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      name: "Analog and Mixed Signal",
                      features: ["Analog Design", "Mixed Signal Design", "PLL/DLL Design", "Data Converters"]
                    },
                    {
                      name: "Bench Characterization",
                      features: ["Device Characterization", "Performance Testing", "Parameter Extraction", "Model Validation"]
                    },
                    {
                      name: "Design Verification",
                      features: ["UVM Verification", "Formal Verification", "SystemVerilog Verification", "Coverage Analysis"]
                    },
                    {
                      name: "Design for Testability (DFT)",
                      features: ["Scan Chain Design", "BIST Implementation", "JTAG Integration", "Test Pattern Generation"]
                    },
                    {
                      name: "FPGA Design",
                      features: ["FPGA Implementation", "IP Core Development", "DSP Design", "High-Speed Interfaces"]
                    },
                    {
                      name: "Architecture & Silicon Validation",
                      features: ["Architecture Definition", "Silicon Validation", "Performance Analysis", "Debug Support"]
                    },
                    {
                      name: "Prototyping and Emulation",
                      features: ["Hardware Prototyping", "FPGA Emulation", "System Modeling", "Early Software Development"]
                    },
                    {
                      name: "Physical Design",
                      features: ["Floor Planning", "Place and Route", "Clock Tree Synthesis", "Power Planning"]
                    },
                    {
                      name: "RTL Design",
                      features: ["RTL Design", "SystemVerilog", "VHDL", "Functional Modeling"]
                    },
                    {
                      name: "Signal flows",
                      features: ["Signal Processing", "Data Flow Design", "Pipeline Architecture", "Streaming Interfaces"]
                    },
                    {
                      name: "Silicon Validation",
                      features: ["Post-Silicon Validation", "Functional Testing", "Performance Characterization", "Debug and Bring-up"]
                    },
                    {
                      name: "Synthesis and STA",
                      features: ["Logic Synthesis", "Timing Analysis", "Constraints Development", "Power Analysis"]
                    },
                    {
                      name: "Test and Product Engineering",
                      features: ["Test Development", "ATE Programming", "Yield Analysis", "Production Testing"]
                    },
                    {
                      name: "Product Solutions",
                      features: ["Custom Solutions", "System Integration", "Product Development", "Technical Consulting"]
                    }
                  ].map((service, index) => (
                    <div
                      key={index}
                      className="bg-card border border-border-subtle rounded-xl p-6 card-hover group"
                    >
                      <h3 className="text-lg font-bold text-foreground mb-4 group-hover:text-tech-blue transition-colors">
                        {service.name}
                      </h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="text-muted-foreground flex items-center gap-2 text-sm"
                          >
                            <div className="w-1.5 h-1.5 bg-coral rounded-full flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="embedded" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    "Bare Metal Programming",
                    "Board Support Package",
                    "CI/CD",
                    "Device Drivers",
                    "Diagnostics",
                    "OS Porting and Customization",
                    "Cyber Security",
                    "Verification and Validation"
                  ].map((service, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-card to-card-bg border border-tech-blue/20 rounded-xl p-6 card-hover group text-center"
                    >
                      <div className="text-tech-blue mb-4 flex justify-center">
                        <Settings className="w-8 h-8" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground group-hover:text-tech-blue transition-colors">
                        {service}
                      </h3>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="automotive" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      name: "ADAS Systems",
                      features: ["Computer Vision", "Sensor Fusion", "Real-time Processing", "Safety Systems"]
                    },
                    {
                      name: "Electric Vehicle Solutions",
                      features: ["Battery Management", "Power Electronics", "Charging Systems", "Energy Optimization"]
                    },
                    {
                      name: "Infotainment Systems",
                      features: ["HMI Development", "Connectivity Solutions", "Media Processing", "User Experience"]
                    },
                    {
                      name: "Vehicle Communication",
                      features: ["V2X Communication", "CAN/LIN Networks", "Ethernet Automotive", "Wireless Connectivity"]
                    }
                  ].map((service, index) => (
                    <div
                      key={index}
                      className="bg-card border border-border-subtle rounded-xl p-6 card-hover group"
                    >
                      <div className="text-tech-blue mb-4">
                        <Car className="w-8 h-8" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-4 group-hover:text-tech-blue transition-colors">
                        {service.name}
                      </h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="text-muted-foreground flex items-center gap-2 text-sm"
                          >
                            <div className="w-1.5 h-1.5 bg-coral rounded-full flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="retail" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      name: "E-commerce Solutions",
                      features: ["Online Store Development", "Payment Integration", "Inventory Management", "Customer Analytics"]
                    },
                    {
                      name: "Point of Sale Systems",
                      features: ["POS Software", "Hardware Integration", "Multi-channel Support", "Real-time Reporting"]
                    },
                    {
                      name: "Digital Signage",
                      features: ["Interactive Displays", "Content Management", "Remote Monitoring", "Analytics & Insights"]
                    },
                    {
                      name: "Supply Chain Technology",
                      features: ["RFID Solutions", "IoT Sensors", "Logistics Optimization", "Warehouse Management"]
                    }
                  ].map((service, index) => (
                    <div
                      key={index}
                      className="bg-card border border-border-subtle rounded-xl p-6 card-hover group"
                    >
                      <div className="text-tech-blue mb-4">
                        <ShoppingCart className="w-8 h-8" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-4 group-hover:text-tech-blue transition-colors">
                        {service.name}
                      </h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="text-muted-foreground flex items-center gap-2 text-sm"
                          >
                            <div className="w-1.5 h-1.5 bg-coral rounded-full flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="telecom" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      name: "5G/6G Technologies",
                      features: ["5G Network Design", "6G Research & Development", "mmWave Solutions", "Massive MIMO"]
                    },
                    {
                      name: "Network Infrastructure",
                      features: ["SDN Solutions", "NFV Implementation", "Edge Computing", "Cloud Networking"]
                    },
                    {
                      name: "Wireless Communications",
                      features: ["RF Design", "Antenna Design", "Protocol Stack", "Baseband Processing"]
                    },
                    {
                      name: "Network Security",
                      features: ["Cybersecurity Solutions", "Network Monitoring", "Threat Detection", "Security Protocols"]
                    }
                  ].map((service, index) => (
                    <div
                      key={index}
                      className="bg-card border border-border-subtle rounded-xl p-6 card-hover group"
                    >
                      <div className="text-tech-blue mb-4">
                        <Radio className="w-8 h-8" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-4 group-hover:text-tech-blue transition-colors">
                        {service.name}
                      </h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="text-muted-foreground flex items-center gap-2 text-sm"
                          >
                            <div className="w-1.5 h-1.5 bg-coral rounded-full flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </Section>


      {/* CTA Section */}
      <Section>
        <section className="py-20 bg-card-bg">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's discuss how our industry-specific solutions can drive your success
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/get-started"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg text-lg transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2 group"
                >
                  Get Started
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/get-started"
                  className="border border-border-subtle hover:border-tech-blue text-foreground px-8 py-4 rounded-lg text-lg transition-all duration-200 hover:scale-105 text-center block"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Section>

      <Footer />
    </div>
  );
}
