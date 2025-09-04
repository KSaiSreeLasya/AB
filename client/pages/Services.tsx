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

  useEffect(() => {
    document.documentElement.classList.add("dark");
    setIsVisible(true);
  }, []);

  const industries = [
    {
      title: "Semiconductors",
      icon: <Cpu className="w-12 h-12" />,
      description: "Advanced semiconductor design and manufacturing solutions for next-generation technology applications.",
      services: [
        {
          name: "Analog and Mixed Signal",
          features: [
            "Analog Design",
            "Mixed Signal Design",
            "PLL/DLL Design",
            "Data Converters"
          ]
        },
        {
          name: "Bench Characterization",
          features: [
            "Device Characterization",
            "Performance Testing",
            "Parameter Extraction",
            "Model Validation"
          ]
        },
        {
          name: "Design Verification",
          features: [
            "UVM Verification",
            "Formal Verification",
            "SystemVerilog Verification",
            "Coverage Analysis"
          ]
        },
        {
          name: "Design for Testability (DFT)",
          features: [
            "Scan Chain Design",
            "BIST Implementation",
            "JTAG Integration",
            "Test Pattern Generation"
          ]
        },
        {
          name: "FPGA Design",
          features: [
            "FPGA Implementation",
            "IP Core Development",
            "DSP Design",
            "High-Speed Interfaces"
          ]
        },
        {
          name: "Architecture & Silicon Validation Liaison",
          features: [
            "Architecture Definition",
            "Silicon Validation",
            "Performance Analysis",
            "Debug Support"
          ]
        },
        {
          name: "Prototyping and Emulation",
          features: [
            "Hardware Prototyping",
            "FPGA Emulation",
            "System Modeling",
            "Early Software Development"
          ]
        },
        {
          name: "Physical Design",
          features: [
            "Floor Planning",
            "Place and Route",
            "Clock Tree Synthesis",
            "Power Planning"
          ]
        },
        {
          name: "RTL Design",
          features: [
            "RTL Design",
            "SystemVerilog",
            "VHDL",
            "Functional Modeling"
          ]
        },
        {
          name: "Signal flows",
          features: [
            "Signal Processing",
            "Data Flow Design",
            "Pipeline Architecture",
            "Streaming Interfaces"
          ]
        },
        {
          name: "Silicon Validation",
          features: [
            "Post-Silicon Validation",
            "Functional Testing",
            "Performance Characterization",
            "Debug and Bring-up"
          ]
        },
        {
          name: "Synthesis and STA",
          features: [
            "Logic Synthesis",
            "Timing Analysis",
            "Constraints Development",
            "Power Analysis"
          ]
        },
        {
          name: "Test and Product Engineering",
          features: [
            "Test Development",
            "ATE Programming",
            "Yield Analysis",
            "Production Testing"
          ]
        },
        {
          name: "Product Solutions",
          features: [
            "Custom Solutions",
            "System Integration",
            "Product Development",
            "Technical Consulting"
          ]
        }
      ],
      embeddedServices: {
        name: "Embedded",
        features: [
          "Bare Metal Programming",
          "Board Support Package",
          "CI/CD",
          "Device Drivers",
          "Diagnostics",
          "OS Porting and Customization",
          "Cyber Security",
          "Verification and Validation"
        ]
      }
    },
    {
      title: "Telecom and Network",
      icon: <Radio className="w-12 h-12" />,
      description: "Comprehensive telecom and networking solutions for modern communication infrastructure.",
      services: [
        {
          name: "5G/6G Technologies",
          features: [
            "5G Network Design",
            "6G Research & Development",
            "mmWave Solutions",
            "Massive MIMO"
          ]
        },
        {
          name: "Network Infrastructure",
          features: [
            "SDN Solutions",
            "NFV Implementation",
            "Edge Computing",
            "Cloud Networking"
          ]
        },
        {
          name: "Wireless Communications",
          features: [
            "RF Design",
            "Antenna Design",
            "Protocol Stack",
            "Baseband Processing"
          ]
        },
        {
          name: "Network Security",
          features: [
            "Cybersecurity Solutions",
            "Network Monitoring",
            "Threat Detection",
            "Security Protocols"
          ]
        }
      ]
    },
    {
      title: "Retail",
      icon: <ShoppingCart className="w-12 h-12" />,
      description: "Digital transformation solutions for modern retail experiences and operations.",
      services: [
        {
          name: "E-commerce Solutions",
          features: [
            "Online Store Development",
            "Payment Integration",
            "Inventory Management",
            "Customer Analytics"
          ]
        },
        {
          name: "Point of Sale Systems",
          features: [
            "POS Software",
            "Hardware Integration",
            "Multi-channel Support",
            "Real-time Reporting"
          ]
        },
        {
          name: "Digital Signage",
          features: [
            "Interactive Displays",
            "Content Management",
            "Remote Monitoring",
            "Analytics & Insights"
          ]
        },
        {
          name: "Supply Chain Technology",
          features: [
            "RFID Solutions",
            "IoT Sensors",
            "Logistics Optimization",
            "Warehouse Management"
          ]
        }
      ]
    },
    {
      title: "Automotive",
      icon: <Car className="w-12 h-12" />,
      description: "Advanced automotive electronics and software solutions for next-generation vehicles.",
      services: [
        {
          name: "ADAS Systems",
          features: [
            "Computer Vision",
            "Sensor Fusion",
            "Real-time Processing",
            "Safety Systems"
          ]
        },
        {
          name: "Electric Vehicle Solutions",
          features: [
            "Battery Management",
            "Power Electronics",
            "Charging Systems",
            "Energy Optimization"
          ]
        },
        {
          name: "Infotainment Systems",
          features: [
            "HMI Development",
            "Connectivity Solutions",
            "Media Processing",
            "User Experience"
          ]
        },
        {
          name: "Vehicle Communication",
          features: [
            "V2X Communication",
            "CAN/LIN Networks",
            "Ethernet Automotive",
            "Wireless Connectivity"
          ]
        }
      ]
    }
  ];

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

      {/* Industries and Services */}
      {industries.map((industry, industryIndex) => (
        <Section key={industryIndex}>
          <section className="py-20">
            <div className="container mx-auto px-4 lg:px-8">
              {/* Industry Header */}
              <div className="text-center mb-16">
                <div className="text-tech-blue mb-6 flex justify-center">
                  {industry.icon}
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                  {industry.title}
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  {industry.description}
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {industry.services.map((service, serviceIndex) => (
                  <div
                    key={serviceIndex}
                    className="bg-card border border-border-subtle rounded-xl p-6 card-hover group"
                    style={{ animationDelay: `${serviceIndex * 50}ms` }}
                  >
                    <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-tech-blue transition-colors">
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

              {/* Embedded Services Section (only for Semiconductors) */}
              {industry.embeddedServices && (
                <div className="mt-12">
                  <div className="bg-gradient-to-r from-card to-card-bg border border-tech-blue/20 rounded-xl p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <Settings className="w-8 h-8 text-tech-blue" />
                      <h3 className="text-2xl font-bold text-foreground">
                        {industry.embeddedServices.name} Services
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {industry.embeddedServices.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="bg-card/50 border border-border-subtle rounded-lg p-4 hover:bg-card transition-colors"
                        >
                          <div className="text-muted-foreground flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-tech-blue rounded-full flex-shrink-0"></div>
                            {feature}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
        </Section>
      ))}

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
