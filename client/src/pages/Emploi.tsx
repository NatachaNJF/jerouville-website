import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Users, Heart, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Emploi() {
  // Pas de redirection automatique - l'utilisateur clique sur le bouton

  return (
    <div className="min-h-screen">
      <section className="py-12 md:py-16 bg-accent/30">
        <div className="container">
          <h1 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-3">
            Rejoignez notre équipe
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-full">
            Jérouville SA recrute des talents pour renforcer ses équipes. Découvrez nos offres d'emploi.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 2xl:gap-12 mb-12">
            {[
              {
                icon: Briefcase,
                title: "Opportunités variées",
                description: "Postes en construction, management, administration et bien d'autres",
              },
              {
                icon: Users,
                title: "Équipe dynamique",
                description: "Rejoignez une équipe professionnelle et bienveillante en Wallonie",
              },
              {
                icon: Heart,
                title: "Engagement",
                description: "Nous valorisons la sécurité, la qualité et le développement personnel",
              },
            ].map((item, i) => (
              <Card key={i} className="rounded-3xl">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <item.icon size={28} className="text-primary" />
                  </div>
                  <h3 className="font-heading text-2xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="rounded-3xl bg-gradient-to-br from-primary/10 to-accent/20 border-primary/20">
            <CardContent className="p-12 md:p-16 text-center">
              <h2 className="font-heading text-4xl font-semibold text-foreground mb-6">
                Consultez nos offres d'emploi
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
                Cliquez sur le bouton ci-dessous pour consulter nos offres d'emploi.
              </p>
              <a href="https://odoo.jerouville.be/jobs" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  className="rounded-xl"
                >
                  Voir les offres d'emploi
                </Button>
              </a>
            </CardContent>
          </Card>

          {/* Particularités du poste */}
          <Card className="rounded-3xl mt-12">
            <CardContent className="p-12 md:p-16">
              <h2 className="font-heading text-3xl font-semibold text-foreground mb-6">
                Bon à savoir avant de postuler
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Nos métiers s'exercent dans un environnement exigeant. En toute transparence, voici les particularités liées à nos postes de chantier :
              </p>
              <ul className="space-y-3">
                {[
                  "travail en extérieur, quelles que soient les conditions météorologiques",
                  "travail physique nécessitant une bonne condition générale",
                  "prestations possibles le week-end selon les chantiers",
                  "prestations possibles de nuit selon les projets",
                  "prestations possibles les jours fériés en fonction des plannings",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span className="text-lg text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground mt-6 leading-relaxed">
                Ces conditions sont compensées conformément à la législation et aux conventions collectives en vigueur.
              </p>
            </CardContent>
          </Card>

          {/* Candidature spontanée */}
          <Card className="rounded-3xl mt-12">
            <CardContent className="p-12 md:p-16">
              <h2 className="font-heading text-3xl font-semibold text-foreground mb-6">
                Aucune offre d'emploi ne vous correspond ?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Déposez votre candidature spontanée via ce lien :
              </p>
              <a
                href="https://odoo.jerouville.be/jobs/apply/candidature-spontanee-employe-255"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-semibold text-lg inline-block mb-6"
              >
                Candidature spontanée →
              </a>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Vous avez un problème pour postuler ou des questions sur les offres d'emploi ?{" "}
                <Link href="/contact">
                  <a className="text-primary hover:underline font-semibold">Contactez-nous via la page Contact.</a>
                </Link>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
