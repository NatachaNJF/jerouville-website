/*
Design: Minimalisme Organique Scandinave
- Présentation récapitulative de tous les services
- Liens vers pages détaillées individuelles
- Pas de demande de devis (travail par soumission)
*/

import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Hammer, Droplet, Cable, Wrench, Zap, Building2 } from "lucide-react";

const RAILWAY_ICON_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663339733908/ArUvCIPjpQbvzcKH.png";
const SEWER_ICON_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663339733908/lVdhPfFwVKtsOuNq.png";

export default function Services() {
  const services = [
    {
      icon: null,
      iconImg: SEWER_ICON_URL,
      title: "Pose d'égouts et de collecteurs",
      description: "Installation professionnelle de systèmes d'évacuation et de collecte des eaux usées.",
      link: "/services/egouts",
    },
    {
      icon: Droplet,
      title: "Pose de canalisations de gaz et d'eau",
      description: "Mise en place de réseaux de distribution d'eau potable et de gaz.",
      link: "/services/canalisations",
    },
    {
      icon: Cable,
      title: "Pose de câbles téléphoniques et électriques",
      description: "Installation de réseaux de télécommunication et d'alimentation électrique.",
      link: "/services/cables",
    },
    {
      icon: Wrench,
      title: "Construction et entretien de voirie",
      description: "Construction et maintenance de voiries publiques et privées.",
      link: "/services/voiries",
    },
    {
      icon: null,
      iconImg: RAILWAY_ICON_URL,
      title: "Construction et entretien de voies ferrées",
      description: "Travaux ferroviaires conformes aux standards Infrabel.",
      link: "/services/voies-ferrees",
    },
    {
      icon: Building2,
      title: "Aménagement pour particuliers",
      description: "Solutions d'aménagement résidentiel et de terrassement.",
      link: "/services/amenagement",
    },
    {
      icon: Zap,
      title: "Génie civil et ouvrages d'art",
      description: "Réalisation d'ouvrages d'art et de structures complexes.",
      link: "/services/genie-civil",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-accent/30">
        <div className="container">
          <div className="w-full">
            <h1 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-3">
              Nos services
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-full">
              Une expertise complète dans tous les domaines des travaux d'infrastructure publics et privés.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link key={index} href={service.link}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                      {service.icon ? (
                        <service.icon size={28} className="text-primary" />
                      ) : service.iconImg ? (
                        <img src={service.iconImg} alt={service.title} className="w-32 h-32 object-contain" />
                      ) : null}
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex items-center text-primary font-semibold group">
                      En savoir plus
                      <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-accent/30">
        <div className="container">
          <Card className="rounded-3xl bg-gradient-to-br from-primary/10 to-accent/20 border-primary/20">
            <CardContent className="p-12 md:p-16 text-center">
              <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6">
                Vous avez un projet ?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
                Contactez-nous pour discuter de vos besoins. Notre équipe étudiera votre projet et vous proposera une solution adaptée.
              </p>
              <Link href="/contact">
                <Button size="lg" className="rounded-xl group">
                  Nous contacter
                  <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
