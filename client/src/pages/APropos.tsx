import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Award, Users, Zap } from "lucide-react";

export default function APropos() {
  return (
    <div className="min-h-screen">
      <section className="py-12 md:py-16 bg-accent/30">
        <div className="container">
          <h1 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-3">
            À propos de nous
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-full">
            Jérouville SA : une entreprise de construction wallonne engagée dans l'excellence depuis plusieurs décennies.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container">
          {/* Notre histoire */}
          <div className="mb-16">
            <h2 className="font-heading text-4xl font-semibold text-foreground mb-8">
              Notre histoire
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Fondée par Paul Jérouville et son frère José, l'entreprise s'est construite sur une exigence technique et un engagement constant sur le terrain. Cette entreprise familiale est aujourd'hui reprise par Natacha qui en assure la direction avec la volonté de moderniser, structurer et pérenniser son développement tout en conservant l'ADN initial.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Depuis plusieurs décennies, Jérouville SA construit les infrastructures essentielles de la Wallonie. De notre base à Libramont, nous avons étendu nos opérations sur tout le territoire régional, travaillant pour les plus grandes communes, Infrabel, les distributeurs d'eau et d'électricité, et les entreprises privées.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                  Nous ne sommes pas simplement un prestataire : nous sommes des partenaires de long terme qui comprennent les défis uniques de chaque projet et les enjeux stratégiques de nos clients.
                </p>
              </div>
              <div className="rounded-3xl overflow-hidden">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663339733908/HuEGitJ4GGMp6GSRXg5pf8/pj_b3c96f7f.jpg" 
                  alt="Paul Jérouville, José Jérouville et Natacha Jérouville dans les locaux de l'entreprise"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Valeurs */}
          <div className="mb-16">
            <h2 className="font-heading text-4xl font-semibold text-foreground mb-8">
              Nos valeurs
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-muted rounded-3xl p-8">
                <div className="flex items-start gap-4">
                  <Zap size={32} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Innovation constante</h3>
                    <p className="text-muted-foreground">Nous adoptons les meilleures techniques et équipements pour améliorer nos performances et réduire les délais.</p>
                  </div>
                </div>
              </div>
              <div className="bg-muted rounded-3xl p-8">
                <div className="flex items-start gap-4">
                  <Users size={32} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Équipes de talent</h3>
                    <p className="text-muted-foreground">Des professionnels passionnés, formés continuellement aux normes les plus exigeantes et aux standards de sécurité.</p>
                  </div>
                </div>
              </div>
              <div className="bg-muted rounded-3xl p-8">
                <div className="flex items-start gap-4">
                  <CheckCircle size={32} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Fiabilité éprouvée</h3>
                    <p className="text-muted-foreground">Nos clients nous confient leurs projets les plus critiques parce que nous livrons toujours à la hauteur de leurs attentes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-16">
            <h2 className="font-heading text-3xl font-semibold text-foreground mb-8">
              Nos certifications
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-2 gap-8 2xl:gap-12">
              <Card className="rounded-3xl">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <Award size={28} className="text-primary" />
                  </div>
                  <h3 className="font-heading text-2xl font-semibold mb-4">ISO 9001</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Certification de management de la qualité qui garantit nos processus, notre organisation et notre engagement envers l'excellence dans tous nos projets.
                  </p>
                </CardContent>
              </Card>
              <Card className="rounded-3xl">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <Award size={28} className="text-primary" />
                  </div>
                  <h3 className="font-heading text-2xl font-semibold mb-4">VCA</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Certification de sécurité et de santé au travail qui démontre notre engagement pour la prévention des risques et la protection de nos équipes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Engagement de la direction */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/20 rounded-3xl p-12 md:p-16 2xl:p-20">
            <h2 className="font-heading text-4xl font-semibold text-foreground mb-8">
              Engagement de la direction
            </h2>
            <div className="space-y-6 text-lg text-foreground leading-relaxed">
              <p>
                La direction de Jérouville SA s'engage à maintenir et améliorer continuellement notre système de management de la qualité et de sécurité. Nous nous engageons à :
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>fournir les ressources nécessaires pour atteindre nos objectifs de qualité et de sécurité</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>former et sensibiliser nos équipes aux normes et aux bonnes pratiques</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>respecter la législation et les réglementations applicables</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>réduire notre empreinte environnementale et promouvoir la durabilité</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>écouter et répondre aux attentes de nos clients, collaborateurs et partenaires</span>
                </li>
              </ul>
              <p className="mt-8 font-semibold">
                Cet engagement est au cœur de notre stratégie et guide toutes nos décisions et actions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
