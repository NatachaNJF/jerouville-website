/*
Design: Minimalisme Organique Scandinave
- Page détaillée d'un service
- Espace pour photo personnalisée
- Description complète et engageante
*/

import { Link } from "wouter";
import { Button } from "@/components/ui/button";

import { ArrowRight, ArrowLeft } from "lucide-react";

const RAILWAY_ICON_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663339733908/ArUvCIPjpQbvzcKH.png";

export default function ServiceVoiesFerrees() {
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
              <img src={RAILWAY_ICON_URL} alt="Voies ferrées" className="w-14 h-14 object-contain" />
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-3">
              Construction et entretien de voies ferrées
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Travaux ferroviaires spécialisés conformes aux standards Infrabel avec équipements spécialisés et équipes qualifiées.
            </p>
          </div>
        </div>
      </section>

      {/* Image Section - Hero */}
      <section className="py-16 md:py-20">
        <div className="container">
          <img
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663339733908/JUbFLKWKlvwBUkHI.jpg"
            alt="Chantier Kinkempois - voies ferrées"
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
                La mobilité ferroviaire en Wallonie
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Les voies ferrées sont les artères du transport de passagers et de marchandises. Une infrastructure ferroviaire défaillante compromet la mobilité régionale et l'économie. Nous travaillons selon les standards Infrabel les plus stricts pour garantir des voies sûres, fiables et performantes.
              </p>
            </div>

            {/* Our Expertise */}
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Notre expertise ferroviaire
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Conformité Infrabel</h3>
                  <p className="text-muted-foreground">Nos équipes sont certifiées et nos méthodes validées par Infrabel, l'opérateur ferroviaire belge. Chaque intervention respecte les protocoles de sécurité stricts.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Continuité de service</h3>
                  <p className="text-muted-foreground">Nous coordonnons les travaux pour minimiser les interruptions de trafic et respecter les calendriers serrés imposés par l'exploitation ferroviaire.</p>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Domaines de spécialisation
              </h2>
              <ul className="space-y-3">
                <li className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span className="text-lg text-muted-foreground">Pose de rails et traverses en conformité Infrabel</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span className="text-lg text-muted-foreground">Réalisation de quais</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span className="text-lg text-muted-foreground">Renouvellement de voies existantes et d'aiguillages</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span className="text-lg text-muted-foreground">Réalisation de systèmes de drainage</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span className="text-lg text-muted-foreground">Assainissement de voies</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span className="text-lg text-muted-foreground">Accompagnement de train de cribleuse de ballast et de renouvellement de traverses</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span className="text-lg text-muted-foreground">Maintenance préventive et interventions d'urgence</span>
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
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663339733908/yLVHwooXXIRsAREv.jpg"
              alt="Kinkempois - détail chantier"
              className="w-full rounded-2xl object-cover h-64"
            />
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663339733908/obWoskFIYowJhQBs.jpg"
              alt="Lustin - voies ferrées"
              className="w-full rounded-2xl object-cover h-64"
            />
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663339733908/HEkMaMGjlCzyWvXt.jpeg"
              alt="Straimont - construction voies"
              className="w-full rounded-2xl object-cover h-64"
            />
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663339733908/vuuRyViYewSVWjoB.jpg"
              alt="Chantier voies ferrées 1"
              className="w-full rounded-2xl object-cover h-64"
            />
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663339733908/saSVuYmYLIgmJaHd.jpg"
              alt="Chantier voies ferrées 2"
              className="w-full rounded-2xl object-cover h-64"
            />
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663339733908/SOkNQnAuEFGQPDyz.jpg"
              alt="Chantier voies ferrées 3"
              className="w-full rounded-2xl object-cover h-64"
            />
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663339733908/RSdtuSxBwGFLHIwe.jpg"
              alt="Chantier voies ferrées 4"
              className="w-full rounded-2xl object-cover h-64"
            />
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663339733908/CZpMLBATdIxlTopZ.jpg"
              alt="Chantier voies ferrées 5"
              className="w-full rounded-2xl object-cover h-64"
            />
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663339733908/BwzqvFhnHwixYEvC.jpg"
              alt="Chantier voies ferrées 6"
              className="w-full rounded-2xl object-cover h-64"
            />
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663339733908/AKdfqeFGWDEbqzem.jpg"
              alt="Chantier voies ferrées 7"
              className="w-full rounded-2xl object-cover h-64"
            />
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663339733908/odSFydxFwEGXylAY.jpg"
              alt="Coo - voies ferrées"
              className="w-full rounded-2xl object-cover h-64"
            />
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663339733908/zKWoJobhJKohdUIb.jpg"
              alt="Chantier voies ferrées 8"
              className="w-full rounded-2xl object-cover h-64"
            />
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663339733908/FctkrjYupGifWysg.jpg"
              alt="Chantier voies ferrées 9"
              className="w-full rounded-2xl object-cover h-64"
            />
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663339733908/uLMZgKRgCasXPtlx.jpg"
              alt="Chantier voies ferrées 10"
              className="w-full rounded-2xl object-cover h-64"
            />
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663339733908/dSZBTCdttNouYThp.jpg"
              alt="Chantier voies ferrées 11"
              className="w-full rounded-2xl object-cover h-64"
            />
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663339733908/gCgjlMJGgMztPJPI.jpg"
              alt="Chantier voies ferrées 12"
              className="w-full rounded-2xl object-cover h-64"
            />
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663339733908/MxHhdgXzqGzQOjdM.jpg"
              alt="Chantier voies ferrées 13 - Bourreuse"
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
