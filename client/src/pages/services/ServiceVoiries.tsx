/*
Design: Minimalisme Organique Scandinave
- Page détaillée d'un service
- Espace pour photo personnalisée
- Description complète et engageante
*/

import { Link } from "wouter";
import { Button } from "@/components/ui/button";

import { ArrowRight, ArrowLeft, Wrench } from "lucide-react";

export default function ServiceVoiries() {
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
              <Wrench size={28} className="text-primary" />
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-3">
              Construction et entretien de voirie
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Construction et maintenance de voiries publiques et privées avec expertise technique et respect des normes.
            </p>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16 md:py-20">
        <div className="container">
          <img
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663339733908/qhuKmhPLtqZZJblI.jpg"
            alt="Engins Jeréouville sur chantier résidentiel"
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
                Des routes qui durent
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Une voirie de qualité est un investissement public majeur qui doit résister aux conditions climatiques, au trafic intensif et au temps. Une mauvaise construction entraîne des nids-de-poule, des affaissements et des coûts de maintenance exponentiels. Nous construisons des routes solides, durables et sécurisées.
              </p>
            </div>

            {/* Our Method */}
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Notre méthode
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Fondations solides</h3>
                  <p className="text-muted-foreground">Nous préparons le terrain et posons les couches de fondation définies pour éviter les tassements différentiels et les déformations.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Matériaux de qualité</h3>
                  <p className="text-muted-foreground">Nous sélectionnons des matériaux certifiés et adaptés aux exigences des prescriptions du cahier des charges pour garantir une durabilité maximale.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Contrôle rigoureux</h3>
                  <p className="text-muted-foreground">Chaque étape est contrôlée : compactage, épaisseurs, alignements. Aucun détail n'est laissé au hasard.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Durabilité</h3>
                  <p className="text-muted-foreground">Nous portons une attention particulière au tri des déchets, à leurs analyses et leurs évacuations dans le respect de la législation.</p>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Domaines d'intervention
              </h2>
              <ul className="space-y-3">
                <li className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span className="text-lg text-muted-foreground">Construction de voiries neuves (routes, rues, accès)</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span className="text-lg text-muted-foreground">Renforcement et réfection de voiries existantes</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span className="text-lg text-muted-foreground">Finitions : marquages, signalisation, accotements</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span className="text-lg text-muted-foreground">Maintenance préventive et réparations d'urgence</span>
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
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663339733908/xEwLXUrBCzxxwVtL.jpg"
                  alt="Excavatrice Hitachi et camion en action"
                  className="w-full rounded-2xl object-cover h-64"
                />
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663339733908/GffnwRTfRJOJvEoD.jpg"
                  alt="Equipe construisant un muret"
                  className="w-full rounded-2xl object-cover h-64"
                />
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663339733908/noClpiiwmTkBLrfq.jpg"
                  alt="Détail du muret en pierre"
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
