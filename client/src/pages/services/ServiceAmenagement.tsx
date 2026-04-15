/*
Design: Minimalisme Organique Scandinave
- Page détaillée d'un service
- Espace pour photo personnalisée
- Description complète et engageante
*/

import { Link } from "wouter";
import { Button } from "@/components/ui/button";

import { ArrowRight, ArrowLeft, Building2 } from "lucide-react";

export default function ServiceAmenagement() {
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
              <Building2 size={28} className="text-primary" />
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-3">
              Aménagement pour particuliers
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Solutions d'aménagement résidentiel et de terrassement adaptées à vos besoins.
            </p>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16 md:py-20">
        <div className="container">
          <img
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663339733908/kqiDbQeXhEWXdhhW.jpg"
            alt="Aménagement résidentiel - allée d'accès"
            className="w-full rounded-3xl object-cover h-96 md:h-96"
          />
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-20">
        <div className="container max-w-3xl">
          <div className="space-y-12">
            {/* The Vision */}
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Transformer votre propriété
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Votre terrain est un espace à valoriser. Qu'il s'agisse de créer une allée d'accès, de niveler un terrain en pente, d'installer une égouttage ou de réaliser un aménagement paysager, nous transformons vos idées en réalité. Nous écoutons vos souhaits et les adaptons à votre budget et aux contraintes du terrain.
              </p>
            </div>

            {/* Our Process */}
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Notre processus
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Écoute et diagnostic</h3>
                  <p className="text-muted-foreground">Nous visitons votre propriété, écoutons vos besoins et évaluons les contraintes géotechniques et hydrologiques pour proposer la meilleure solution.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Devis transparent</h3>
                  <p className="text-muted-foreground">Nous établissons un devis détaillé et sans surprise, avec un calendrier réaliste et des matériaux de qualité.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Exécution soignée</h3>
                  <p className="text-muted-foreground">Nos équipes travaillent avec rigueur et respect de votre propriété, en minimisant les nuisances et en nettoyant régulièrement le chantier.</p>
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
                  <span className="text-lg text-muted-foreground">Terrassement et nivellement de terrain</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span className="text-lg text-muted-foreground">Création d'allées et chemins d'accès</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span className="text-lg text-muted-foreground">Égouttage et évacuation d'eau</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span className="text-lg text-muted-foreground">Aménagement paysager et plantations</span>
                </li>
              </ul>
            </div>

            {/* Gallery */}
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Nos réalisations
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663339733908/cJVSOGTxFWgYBkJu.jpg"
                  alt="Chantier commercial avec aménagement"
                  className="w-full rounded-2xl object-cover h-64 md:h-72"
                />
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663339733908/KptFRpqJiLnGXppU.jpg"
                  alt="Chantier résidentiel avec excavatrice Jérouville"
                  className="w-full rounded-2xl object-cover h-64 md:h-72"
                />
              </div>
            </div>

            {/* CTA */}
            <div className="pt-8 space-y-4">
              <div>
                <p className="text-muted-foreground mb-4">
                  Remplissez directement votre demande de devis via le bouton ci-dessous. Nous vous répondrons au plus vite.
                </p>
                <a href="https://jerouville.odoo.com/form-b2c" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="rounded-xl group">
                    Demander un devis
                    <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
