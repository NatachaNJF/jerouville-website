/*
Design: Minimalisme Organique Scandinave
- Page détaillée d'un service
- Espace pour photo personnalisée
- Description complète et engageante
*/

import { Link } from "wouter";
import { Button } from "@/components/ui/button";

import { ArrowRight, ArrowLeft, Cable } from "lucide-react";

export default function ServiceCables() {
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
              <Cable size={28} className="text-primary" />
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-3">
              Pose de câbles téléphoniques et électriques
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Installation de réseaux de télécommunication et d'alimentation électrique souterrains, incluant la pose de gaine, toile, couvre-câbles et câbles avec raccordements certifiés.
            </p>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16 md:py-20">
        <div className="container">
          <img
            src="/impétrant.jpg"
            alt="Pose de câbles téléphoniques et électriques"
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
                Connecter les territoires
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                L'électricité et les télécommunications sont les artères numériques et énergétiques de nos sociétés. Une pose de câble mal exécutée peut causer des interruptions de service, des dégâts matériels ou des risques de sécurité. Nous garantissons des réseaux souterrains robustes, sécurisés et performants.
              </p>
            </div>

            {/* Our Strengths */}
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Nos atouts
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Technologie de pointe</h3>
                  <p className="text-muted-foreground">Nos équipes réalisent des tranchées et forage sous voirie pour minimiser les entraves au trafic et l'impact sur l'environnement urbain.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Sécurité maximale</h3>
                  <p className="text-muted-foreground">Chaque câble est posé avec les protections appropriées (gaine, toile, couvre-câbles) et marqué clairement pour éviter les endommagements futurs.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Respect des normes</h3>
                  <p className="text-muted-foreground">Nos interventions suivent les cahiers des charges clients (Ores, Orange, Proximus) pour chaque installation.</p>
                </div>
              </div>
            </div>

            {/* Scope */}
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Champs d'action
              </h2>
              <ul className="space-y-3">
                <li className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span className="text-lg text-muted-foreground">Réseaux électriques basse et moyenne tension</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span className="text-lg text-muted-foreground">Câbles de télécommunication (fibre optique, cuivre)</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span className="text-lg text-muted-foreground">Forage horizontal et tranchées de câbles</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span className="text-lg text-muted-foreground">Raccordements et tests de continuité</span>
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
                  src="https://private-us-east-1.manuscdn.com/sessionFile/ltJtUvczcY3Wqb4KhxLfLX/sandbox/cables-1.jpg"
                  alt="Pose de câbles électriques et eau sous voirie"
                  className="w-full rounded-2xl object-cover h-64"
                />
                <img
                  src="https://private-us-east-1.manuscdn.com/sessionFile/ltJtUvczcY3Wqb4KhxLfLX/sandbox/cables-2.jpg"
                  alt="Tranchée avec câble jaune en tunnel"
                  className="w-full rounded-2xl object-cover h-64"
                />
                <img
                  src="https://private-us-east-1.manuscdn.com/sessionFile/ltJtUvczcY3Wqb4KhxLfLX/sandbox/cables-3.jpg"
                  alt="Pose de câbles avec excavatrice"
                  className="w-full rounded-2xl object-cover h-64"
                />
                <img
                  src="https://private-us-east-1.manuscdn.com/sessionFile/ltJtUvczcY3Wqb4KhxLfLX/sandbox/cables-4.jpg"
                  alt="Tranchée de câbles avec équipe Jérouville"
                  className="w-full rounded-2xl object-cover h-64"
                />
                <img
                  src="https://private-us-east-1.manuscdn.com/sessionFile/ltJtUvczcY3Wqb4KhxLfLX/sandbox/cables-5.jpg"
                  alt="Excavatrice en tunnel pour pose de câbles"
                  className="w-full rounded-2xl object-cover h-64"
                />
                <img
                  src="https://private-us-east-1.manuscdn.com/sessionFile/ltJtUvczcY3Wqb4KhxLfLX/sandbox/cables-6.jpg"
                  alt="Câble jaune dans tunnel avec équipe"
                  className="w-full rounded-2xl object-cover h-64"
                />
                <img
                  src="https://private-us-east-1.manuscdn.com/sessionFile/ltJtUvczcY3Wqb4KhxLfLX/sandbox/cables-7.jpg"
                  alt="Inspection de tranchée de câbles"
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
