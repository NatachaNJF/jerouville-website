/*
Design: Minimalisme Organique Scandinave
- Page détaillée d'un service
- Espace pour photo personnalisée
- Description complète et engageante
*/

import { Link } from "wouter";
import { Button } from "@/components/ui/button";

import { ArrowRight, ArrowLeft, Zap } from "lucide-react";

export default function ServiceGenieCivil() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-accent/30">
        <div className="container">
          <Link href="/services">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft size={18} className="mr-2" />
              Retour aux services
            </Button>
          </Link>
          <div className="w-full">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <Zap size={28} className="text-primary" />
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-3">
              Génie civil et ouvrages d'art
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Réalisation d'ouvrages d'art et de structures complexes avec expertise technique et respect des normes.
            </p>
          </div>
        </div>
      </section>

      {/* Image Section - Hero */}
      <section className="py-16 md:py-20">
        <div className="container">
          <img
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663339733908/ofWwCyFRDiRbXZsf.jpg"
            alt="Chantier ouvrages d'art - dalle béton"
            className="w-full rounded-3xl object-cover h-96 md:h-96"
          />
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-20">
        <div className="container max-w-3xl">
          <div className="space-y-12">
            {/* The Challenge */}
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Construire pour les générations futures
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Les grands ouvrages d'art — ponts, viaducs, tunnels, murs de soutènement — sont des défis techniques majeurs qui exigent une expertise rare. Une erreur de conception ou d'exécution peut avoir des conséquences catastrophiques. Nous concevons et réalisons des structures durables, sûres et esthétiques.
              </p>
            </div>

            {/* Our Capabilities */}
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Nos capacités
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Ingénierie avancée</h3>
                  <p className="text-muted-foreground">Nous collaborons avec des ingénieurs spécialisés pour concevoir des structures optimales, en tenant compte des charges, des conditions géotechniques et des impacts environnementaux.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Techniques modernes</h3>
                  <p className="text-muted-foreground">Nous utilisons des équipements de pointe et des méthodes éprouvées pour minimiser les délais, les risques et les impacts sur l'environnement.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Conformité absolue</h3>
                  <p className="text-muted-foreground">Chaque ouvrage respecte les normes Eurocode, les standards de sécurité belges et les exigences environnementales les plus strictes.</p>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Domaines de compétence
              </h2>
              <ul className="space-y-3">
                <li className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span className="text-lg text-muted-foreground">Construction de ponts et viaducs (béton, acier, mixte)</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span className="text-lg text-muted-foreground">Tunnels et ouvrages souterrains</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span className="text-lg text-muted-foreground">Murs de soutènement et stabilisation de talus</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span className="text-lg text-muted-foreground">Fondations spéciales et travaux géotechniques</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Gallery - Nos réalisations */}
      <section className="py-16 md:py-20">
        <div className="container max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-8">
            Nos réalisations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663339733908/YWqVsLmicTlivUDj.jpg"
              alt="Ouvrage béton avec excavatrice"
              className="w-full rounded-2xl object-cover h-64"
            />
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663339733908/RwAIldDrddXFAeYf.jpg"
              alt="Tranchée avec conduite grise"
              className="w-full rounded-2xl object-cover h-64"
            />
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663339733908/TCdZXrnGPrcRxRBq.jpg"
              alt="Chantier avec engins Jérouville"
              className="w-full rounded-2xl object-cover h-64"
            />
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663339733908/MLaDpFPjplNohQoq.jpg"
              alt="Blocs béton préfabriqués"
              className="w-full rounded-2xl object-cover h-64"
            />
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663339733908/ZXaQoBoOOiQxOvvE.jpg"
              alt="Aménagement paysager chantier"
              className="w-full rounded-2xl object-cover h-64"
            />
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663339733908/griQapxdlOBUhPrg.jpg"
              alt="Excavatrice en action"
              className="w-full rounded-2xl object-cover h-64"
            />
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663339733908/cawmUmSYWPkDhgei.jpg"
              alt="Engin Jérouville avec blocs"
              className="w-full rounded-2xl object-cover h-64"
            />
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663339733908/DPMOpcbwfXryRJkK.jpg"
              alt="Chantier en zone naturelle"
              className="w-full rounded-2xl object-cover h-64"
            />
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663339733908/ScOQzrdeAIxevpCm.jpg"
              alt="Béton coulé en place"
              className="w-full rounded-2xl object-cover h-64"
            />
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663339733908/JfIElIxHdAgJZEml.jpg"
              alt="Protection d'arbre ancien"
              className="w-full rounded-2xl object-cover h-64"
            />
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663339733908/vwhXdzvOgHgzxztr.jpg"
              alt="Passerelle métallique"
              className="w-full rounded-2xl object-cover h-64"
            />
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663339733908/mcpIzPvGNxkcPqrI.jpg"
              alt="Terrassement et fondations"
              className="w-full rounded-2xl object-cover h-64 md:col-span-2"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20">
        <div className="container max-w-3xl">
          <Link href="/contact">
            <Button size="lg" className="rounded-xl group">
              Nous contacter pour un projet
              <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
