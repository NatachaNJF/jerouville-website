/*
Design: Minimalisme Organique Scandinave
- Page détaillée d'un service
- Espace pour photo personnalisée
- Description complète et engageante
*/

import { Link } from "wouter";
import { Button } from "@/components/ui/button";

import { ArrowRight, ArrowLeft, Droplet } from "lucide-react";

export default function ServiceCanalisations() {
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
              <Droplet size={28} className="text-primary" />
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-3">
              Pose de canalisations de gaz et d'eau
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Mise en place de réseaux de distribution d'eau potable et de gaz avec expertise technique et respect des normes.
            </p>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16 md:py-20">
        <div className="container">
          <img
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663339733908/EXrKMOCyZULrECbu.jpg"
            alt="Pose de canalisations d'eau"
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
                Enjeux critiques
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                L'eau et le gaz sont des ressources vitales qui exigent des réseaux fiables, sécurisés et conformes aux normes strictes. Une fuite d'eau peut causer des dégâts structurels massifs, tandis qu'une fuite de gaz présente des risques de sécurité graves. Nous garantissons l'intégrité de ces réseaux essentiels.
              </p>
            </div>

            {/* Our Expertise */}
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Notre expertise
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Conformité réglementaire</h3>
                  <p className="text-muted-foreground">Tous nos travaux respectent les cahiers des charges clients (SPW, SWDE), les standards de potabilité et les protocoles de sécurité gaz en vigueur en Wallonie.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Qualité de pose</h3>
                  <p className="text-muted-foreground">Nous sélectionnons des conduites résistantes à la corrosion et aux variations de pression, avec agrément des poseurs et pose irréprochable.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Étanchéité garantie</h3>
                  <p className="text-muted-foreground">Chaque connexion est soumise à une épreuve d'étanchéité pour éliminer tout risque de fuite ou de contamination.</p>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Services proposés
              </h2>
              <ul className="space-y-3">
                <li className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span className="text-lg text-muted-foreground">Distribution d'eau potable (réseaux publics et privés)</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span className="text-lg text-muted-foreground">Transport de gaz naturel et propane</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span className="text-lg text-muted-foreground">Vannes de sectionnement et régulation de pression</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span className="text-lg text-muted-foreground">Maintenance préventive et réparation d'urgence</span>
                </li>
              </ul>
            </div>

            {/* Gallery */}
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Nos réalisations
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663339733908/kSlpNyRqtVlXGAjJ.jpg"
                  alt="Détail du tuyau bleu avec raccord"
                  className="w-full rounded-2xl object-cover h-64"
                />
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663339733908/QDpYnaRPcuqBPdts.jpg"
                  alt="Chambre de visite avec équipements bleus"
                  className="w-full rounded-2xl object-cover h-64"
                />
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663339733908/iklLKAeJTviYmqWg.jpg"
                  alt="Chantier en rue avec engins Jérouville"
                  className="w-full rounded-2xl object-cover h-64"
                />
              </div>
            </div>

            {/* CTA */}
            <div className="pt-8">
              <Link href="/contact">
                <Button size="lg" className="rounded-xl group">
                  Nous contacter pour un projet
                  <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
