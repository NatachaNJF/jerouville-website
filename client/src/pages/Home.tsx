/*
Design: Minimalisme Organique Scandinave
- Hero avec image générée en arrière-plan
- Sections avec espacement généreux (120-200px)
- Coins arrondis, transitions fluides
*/

import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Hammer, Droplet, Cable, Leaf } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const RAILWAY_ICON_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663339733908/ArUvCIPjpQbvzcKH.png";
const SEWER_ICON_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663339733908/lVdhPfFwVKtsOuNq.png";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Détecter si c'est mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    // Lancer la vidéo immédiatement au chargement
    if (videoRef.current && !isVideoLoaded) {
      videoRef.current.play().catch(() => {});
      setIsVideoLoaded(true);
    }
  }, []);

  const services = [
    {
      icon: null,
      iconImg: RAILWAY_ICON_URL,
      title: "Voies ferr\u00e9es",
      description: "Construction et entretien d'infrastructures ferroviaires avec \u00e9quipements sp\u00e9cialis\u00e9s et \u00e9quipes qualifi\u00e9es.",
      href: "/services/voies-ferrees",
    },
    {
      icon: Hammer,
      title: "Voiries",
      description: "Construction et maintenance de voiries publiques et priv\u00e9es avec expertise technique et respect des normes.",
      href: "/services/voiries",
    },
    {
      icon: null,
      iconImg: SEWER_ICON_URL,
      title: "\u00c9gouts et collecteurs",
      description: "Installation professionnelle de syst\u00e8mes d'\u00e9vacuation et de collecte des eaux us\u00e9es pour infrastructures publiques et priv\u00e9es.",
      href: "/services/egouts",
    },
    {
      icon: Droplet,
      title: "Canalisations et distributions d'eau",
      description: "Pose et maintenance de r\u00e9seaux de distribution d'eau potable avec expertise technique et respect des normes.",
      href: "/services/canalisations",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Background Video with Overlay - Optimized for Mobile */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover"

          >
            {/* Format WebM pour les navigateurs modernes (plus léger) */}
            <source
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663339733908/mkSxbhaXRuTWacei.mov"
              type="video/mp4"
            />

          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30"></div>
        </div>

        {/* Hero Content */}
        <div className="container relative z-10">
          <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Link href="/performance-co2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 cursor-pointer hover:bg-primary/20 transition-colors">
                <Leaf size={16} />
                <span>Engagement environnemental</span>
              </div>
            </Link>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-6 leading-tight">
              Bâtir les infrastructures de demain
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 mb-8 leading-relaxed max-w-full">
              Depuis plusieurs décennies, Jérouville SA réalise des travaux publics et privés de qualité. Situés au centre de la province du Luxembourg, nous travaillons dans toute la Wallonie. Notre expertise couvre l'ensemble des infrastructures essentielles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services">
                <Button size="lg" className="rounded-xl group">
                  Découvrir nos services
                  <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="rounded-xl">
                  Nous contacter
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="w-full mb-16 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Notre expertise au service de vos projets
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nous intervenons sur l'ensemble des travaux d'infrastructure en Wallonie avec des équipes qualifiées et un matériel de pointe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 gap-8 2xl:gap-12">
            {services.map((service, index) => (
              <Link key={index} href={service.href}>
                <Card
                  className="rounded-3xl border-border hover:shadow-lg transition-all duration-500 animate-in fade-in slide-in-from-bottom-4 cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                      {service.icon ? (
                        <service.icon size={28} className="text-primary" />
                      ) : service.iconImg ? (
                        <img src={service.iconImg} alt={service.title} className="w-32 h-32 object-contain" />
                      ) : null}
                    </div>
                    <h3 className="font-heading text-2xl font-semibold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/services">
              <Button variant="outline" size="lg" className="rounded-xl group">
                Voir tous nos services
                <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CO2 Performance Teaser */}
      <section className="py-24 md:py-32 bg-accent/30">
        <div className="container">
          <div className="w-full">
            <div className="grid md:grid-cols-2 gap-12 2xl:gap-16 items-center">
              <div className="animate-in fade-in slide-in-from-left-4 duration-700">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium mb-6">
                  <Leaf size={16} />
                  <span>Performance environnementale</span>
                </div>
                <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6">
                  Notre engagement pour l'environnement
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Nous sommes en cours d'obtention de notre échelle de performance CO2, témoignant de notre engagement concret pour réduire notre empreinte environnementale et contribuer à un avenir durable.
                </p>
                <Link href="/performance-co2">
                  <Button size="lg" className="rounded-xl group">
                    En savoir plus
                    <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
              <div className="animate-in fade-in slide-in-from-right-4 duration-700">
                <img
                  src="https://private-us-east-1.manuscdn.com/sessionFile/ltJtUvczcY3Wqb4KhxLfLX/sandbox/47e40Jym9jyiSwfCwKitGu-img-5_1770472994000_na1fn_amVyb3V2aWxsZS1jbzItYWJzdHJhY3Q.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbHRKdFV2Y3pjWTNXcWI0S2h4TGZMWC9zYW5kYm94LzQ3ZTQwSnltOWp5aVN3ZkN3S2l0R3UtaW1nLTVfMTc3MDQ3Mjk5NDAwMF9uYTFmbl9hbVZ5YjNWMmFXeHNaUzFqYnpJdFlXSnpkSEpoWTNRLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=E7JXbgDkLkjjEYDkJY2sGGnj9w2Ka0h11C-9mTnVP7WznXUUhQbSjfW6W23wbmRX9Uf4WaxLa6z6GBlmT31WQLVbYn4tApz-9a0EVOCdKSwb2zM8m5YN92yHJRkcJBQbt7GUQP5NHyDER6Vlrt7YtgPfdMUVkdcicdtFB3nVr0HdM7Esq7vxvZln~pHMT5Mhs~7C3CEJKo74l-Aul7kLdpwSjZ1XnGvdS7S8NOacQC9pYQl-AKRl3zc-U4LB3ujXfpwsoo-iV2YcT0QNun8OrbjLvxw4XNUq0S05YB5yGWEMLq62vpC4gZNJUPrJgq2Z8enz3DgBYzLwrKpPYDGqBg__"
                  alt="Environmental sustainability"
                  className="w-full rounded-3xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32">
        <div className="container">
          <Card className="rounded-3xl bg-gradient-to-br from-primary/10 to-accent/20 border-primary/20">
            <CardContent className="p-12 md:p-16 text-center">
              <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6">
                Un projet en tête ?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl 2xl:max-w-4xl mx-auto mb-8 leading-relaxed">
                Que vous ayez besoin d'une infrastructure publique, d'un aménagement privé ou d'une solution spécialisée, notre équipe expérimentée est à votre écoute. Nous étudions vos besoins spécifiques, évaluons les contraintes techniques et environnementales, puis vous proposons une solution adaptée à votre budget et vos délais. Contactez-nous dès aujourd'hui pour discuter de votre projet et découvrir comment Jérouville peut vous accompagner.
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
