/*
Design: Minimalisme Organique Scandinave
- Page détaillée d'un service
- Espace pour photo personnalisée
- Description complète et engageante
*/

import { Link } from "wouter";
import { Button } from "@/components/ui/button";

import { ArrowRight, ArrowLeft } from "lucide-react";

const SEWER_ICON_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663339733908/lVdhPfFwVKtsOuNq.png";

export default function ServiceEgouts() {
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
            <div className="w-32 h-32 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <img src={SEWER_ICON_URL} alt="Égout" className="w-24 h-24 object-contain" />
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-3">
              Pose d'égouts et de collecteurs
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Installation professionnelle de systèmes d'évacuation et de collecte des eaux usées pour infrastructures publiques et privées.
            </p>
          </div>
        </div>
      </section>

      {/* Image Section - Hero */}
      <section className="py-16 md:py-20">
        <div className="container">
          <img
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663339733908/SUyraAtxpHDUdOwd.jpg"
            alt="Chantier pose d'égouts - chambre de visite"
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
                L'enjeu
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                L'assainissement est l'infrastructure invisible qui garantit la santé publique et la durabilité environnementale. Des collecteurs défaillants peuvent causer des dommages écologiques majeurs et des coûts de réparation considérables. Nous concevons des systèmes robustes et durables qui fonctionnent sans faille pendant décennies.
              </p>
            </div>

            {/* Our Approach */}
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Notre approche
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Diagnostic précis</h3>
                  <p className="text-muted-foreground">Nous étudions chaque site en détail pour dimensionner correctement les collecteurs et anticiper les défis géotechniques.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Qualité d'exécution</h3>
                  <p className="text-muted-foreground">Chaque joint, chaque pente, chaque regard est réalisé selon les standards les plus stricts pour éviter infiltrations et dysfonctionnements.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Conformité environnementale</h3>
                  <p className="text-muted-foreground">Nos installations protègent les nappes phréatiques et les cours d'eau, en respectant les réglementations wallonnes les plus exigeantes.</p>
                </div>
              </div>
            </div>

            {/* Scope of Work */}
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Domaines d'intervention
              </h2>
              <ul className="space-y-3">
                <li className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span className="text-lg text-muted-foreground">Pose de conduites de tous diamètres (DN 100 à DN 800+)</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span className="text-lg text-muted-foreground">Regards de visite, chambres d'inspection et postes de relèvement</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span className="text-lg text-muted-foreground">Réseaux d'assainissement collectif et autonome</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span className="text-lg text-muted-foreground">Réhabilitation et curage de réseaux existants</span>
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
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663339733908/rGZLNKjPxcjCLZrE.jpg"
              alt="Pose de tuyaux béton avec excavatrice"
              className="w-full rounded-2xl object-cover h-64"
            />
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663339733908/mTYIzZYSWKCtgMeD.jpg"
              alt="Deux excavateurs avec chambre de visite"
              className="w-full rounded-2xl object-cover h-64"
            />
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663339733908/YOLPvQJllPrjgJPa.jpg"
              alt="Excavatrice en zone humide"
              className="w-full rounded-2xl object-cover h-64"
            />
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663339733908/DbftzPqYDXYooUUl.jpg"
              alt="Détail pose de tuyau"
              className="w-full rounded-2xl object-cover h-64"
            />
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663339733908/PZhKzYvbCxWumDLH.jpg"
              alt="Chambre de visite en tranchée"
              className="w-full rounded-2xl object-cover h-64"
            />
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663339733908/qfRBWTEbjPhEboWh.jpg"
              alt="Armature de béton pour collecteur"
              className="w-full rounded-2xl object-cover h-64"
            />
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663339733908/AvgFcvZgjHgBJUxK.jpg"
              alt="Excavatrice Jérouville avec chambre"
              className="w-full rounded-2xl object-cover h-64"
            />
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663339733908/RiTafNdKyzhBvqmn.jpg"
              alt="Chambre de visite béton"
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
