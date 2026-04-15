import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Leaf, TrendingDown, TrendingUp, Target, Zap, Users, BarChart3 } from "lucide-react";

export default function PerformanceCO2() {
  return (
    <div className="min-h-screen">
      <section className="py-12 md:py-16 bg-accent/30">
        <div className="container">
          <div className="w-full">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium mb-3">
              <Leaf size={16} />
              <span>Engagement environnemental</span>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-3">
              Notre échelle de performance CO2
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-full">
              Jérouville SA s'engage dans une démarche de réduction de son empreinte carbone. En cours de certification échelon 2.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 2xl:gap-12 mb-12">
            {[
              {
                icon: Leaf,
                title: "Réduction d'émissions",
                description: "Mise en place de mesures concrètes pour réduire nos émissions de CO2 dans nos opérations",
              },
              {
                icon: TrendingUp,
                title: "Suivi et amélioration",
                description: "Pour l'année 2023, voici comment se répartissent nos émissions",
              },
              {
                icon: Target,
                title: "Objectifs durables",
                description: "Engagement vers des objectifs de durabilité à long terme et responsabilité environnementale",
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

          <Card className="rounded-3xl bg-gradient-to-br from-primary/10 to-accent/20 border-primary/20 mb-16">
            <CardContent className="p-12 md:p-16">
              <h2 className="font-heading text-4xl font-semibold text-foreground mb-8">
                En cours d'obtention
              </h2>
              <div className="space-y-6 text-lg text-foreground leading-relaxed">
                <p>
                  Nous sommes actuellement en cours de certification pour l'Échelon 2 de l'Échelle de Performance CO2. Cet échelon valide non seulement nos efforts pour réduire nos propres émissions (scopes 1 et 2), mais aussi notre engagement à collaborer avec nos partenaires pour réduire l'empreinte carbone de l'ensemble de notre chaîne de valeur (scope 3).
                </p>
                <p>
                  Notre audit de certification est prévu pour juin 2026. Cette démarche s'inscrit dans notre vision d'une entreprise de construction responsable, capable de concilier excellence technique et respect de l'environnement.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-3xl bg-gradient-to-br from-accent/10 to-primary/5 border-accent/20 mb-16">
            <CardContent className="p-12 md:p-16">
              <h2 className="font-heading text-4xl font-semibold text-foreground mb-8">
                Réduction d'émissions
              </h2>
              <div className="space-y-8 text-lg text-foreground leading-relaxed">
                <p>
                  Notre politique en matière d'énergie et de CO2 est au cœur de notre stratégie d'entreprise. Elle repose sur quatre principes fondamentaux qui guident l'ensemble de nos actions et décisions.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">Mesurer</h3>
                    <p className="text-muted-foreground">
                      Mesurer constitue notre première priorité. Nous nous attachons à connaître précisément notre empreinte carbone pour identifier les postes d'émissions les plus importants. Cette connaissance approfondie nous permet d'orienter nos efforts là où ils auront le plus d'impact.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">Réduire</h3>
                    <p className="text-muted-foreground">
                      Réduire est notre engagement central. Nous mettons en œuvre des actions concrètes pour diminuer nos émissions de manière continue, en fixant des objectifs ambitieux mais réalistes, et en mobilisant l'ensemble de nos équipes autour de cet enjeu.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">Collaborer</h3>
                    <p className="text-muted-foreground">
                      Collaborer reflète notre conviction que la transition écologique est un effort collectif. Nous travaillons en partenariat avec nos fournisseurs, sous-traitants et clients pour amplifier notre impact et créer une dynamique positive dans l'ensemble de notre secteur.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">Communiquer</h3>
                    <p className="text-muted-foreground">
                      Communiquer traduit notre volonté de transparence totale. Nous nous engageons à partager nos objectifs, nos actions et nos résultats avec l'ensemble de nos parties prenantes, dans un esprit d'amélioration continue et de dialogue constructif.
                    </p>
                  </div>
                </div>

                <p className="font-semibold text-primary text-lg">
                  Notre objectif principal est de réduire nos émissions de CO2 (scopes 1 et 2) de 10% d'ici 2030, par rapport à notre année de référence 2023.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-3xl mb-16">
            <CardContent className="p-12 md:p-16">
              <div className="flex items-center gap-3 mb-8">
                <BarChart3 size={32} className="text-primary" />
                <h2 className="font-heading text-4xl font-semibold text-foreground">
                  Notre Empreinte Carbone - Année de Référence 2023
                </h2>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Le calcul de notre empreinte carbone a été réalisé conformément au protocole GHG (Greenhouse Gas Protocol). Pour l'année 2023, nos émissions se répartissent comme suit :
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full text-lg">
                  <thead>
                    <tr className="border-b-2 border-primary/20">
                      <th className="text-left py-4 px-4 font-semibold text-foreground">Scope</th>
                      <th className="text-left py-4 px-4 font-semibold text-foreground">Description</th>
                      <th className="text-right py-4 px-4 font-semibold text-foreground">Émissions (tCO2e)</th>
                      <th className="text-right py-4 px-4 font-semibold text-foreground">Pourcentage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-primary/10 hover:bg-primary/5">
                      <td className="py-4 px-4 text-foreground font-medium">Scope 1</td>
                      <td className="py-4 px-4 text-muted-foreground">Émissions directes : consommation de carburant de nos engins de chantier, de notre flotte de véhicules et consommation de gaz de nos bâtiments.</td>
                      <td className="py-4 px-4 text-right text-foreground font-medium">3 097</td>
                      <td className="py-4 px-4 text-right text-foreground font-medium">35,7%</td>
                    </tr>
                    <tr className="border-b border-primary/10 hover:bg-primary/5">
                      <td className="py-4 px-4 text-foreground font-medium">Scope 2</td>
                      <td className="py-4 px-4 text-muted-foreground">Émissions indirectes : consommation d'électricité de nos bureaux et ateliers.</td>
                      <td className="py-4 px-4 text-right text-foreground font-medium">24</td>
                      <td className="py-4 px-4 text-right text-foreground font-medium">0,3%</td>
                    </tr>
                    <tr className="border-b border-primary/10 hover:bg-primary/5">
                      <td className="py-4 px-4 text-foreground font-medium">Scope 3</td>
                      <td className="py-4 px-4 text-muted-foreground">Autres émissions indirectes : achats de matériaux, transport, déplacements des employés, etc.</td>
                      <td className="py-4 px-4 text-right text-foreground font-medium">5 548</td>
                      <td className="py-4 px-4 text-right text-foreground font-medium">64,0%</td>
                    </tr>
                    <tr className="bg-primary/10">
                      <td className="py-4 px-4 text-foreground font-semibold">Total</td>
                      <td className="py-4 px-4"></td>
                      <td className="py-4 px-4 text-right text-foreground font-semibold">8 669</td>
                      <td className="py-4 px-4 text-right text-foreground font-semibold">100%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                L'analyse de notre empreinte révèle que nos émissions de Scope 3, principalement liées aux achats de matériaux, constituent notre principal levier d'action (64%), suivies par les émissions de Scope 1 liées à l'utilisation de nos engins de chantier (35,7%). Le Scope 2 représente une part minime de nos émissions (0,3%), ce qui témoigne déjà d'une consommation électrique relativement maîtrisée.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-3xl mb-16">
            <CardContent className="p-12 md:p-16">
              <h2 className="font-heading text-4xl font-semibold text-foreground mb-8">
                Nos Progrès et Notre Plan d'Action
              </h2>
              <div className="space-y-8 text-lg text-foreground leading-relaxed">
                <p>
                  Nous suivons nos émissions de près et nous nous engageons à mettre à jour notre bilan carbone chaque année. Notre engagement se traduit par un plan d'action concret, qui est le pilier de notre démarche. Il comprend des initiatives structurées autour de quatre axes principaux.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Flotte et Engins */}
                  <div className="bg-accent/10 rounded-2xl p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-3xl">🚗</span>
                      <h3 className="font-heading text-2xl font-semibold text-foreground">Flotte et Engins</h3>
                    </div>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <span className="text-primary font-bold mt-1">•</span>
                        <span>Formation à l'éco-conduite</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary font-bold mt-1">•</span>
                        <span>Suivi des consommations par véhicule</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary font-bold mt-1">•</span>
                        <span>Renouvellement progressif vers des voitures électriques</span>
                      </li>
                    </ul>
                  </div>

                  {/* Bâtiments et Ateliers */}
                  <div className="bg-accent/10 rounded-2xl p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-3xl">🏢</span>
                      <h3 className="font-heading text-2xl font-semibold text-foreground">Bâtiments et Ateliers</h3>
                    </div>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <span className="text-primary font-bold mt-1">•</span>
                        <span>Optimisation de la régulation du chauffage avec des vannes thermostatiques connectées</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary font-bold mt-1">•</span>
                        <span>Remplacement progressif par éclairage LED</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary font-bold mt-1">•</span>
                        <span>Mise en place de batteries</span>
                      </li>
                    </ul>
                  </div>

                  {/* Achats et Scope 3 */}
                  <div className="bg-accent/10 rounded-2xl p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-3xl">🤝</span>
                      <h3 className="font-heading text-2xl font-semibold text-foreground">Achats et Scope 3</h3>
                    </div>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <span className="text-primary font-bold mt-1">•</span>
                        <span>Analyse de notre chaîne de valeur</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary font-bold mt-1">•</span>
                        <span>Dialogue avec nos fournisseurs stratégiques</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary font-bold mt-1">•</span>
                        <span>Intégration de critères CO2 dans nos achats</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary font-bold mt-1">•</span>
                        <span>Collaboration sur des projets pilotes bas carbone</span>
                      </li>
                    </ul>
                  </div>

                  {/* Sensibilisation */}
                  <div className="bg-accent/10 rounded-2xl p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-3xl">👥</span>
                      <h3 className="font-heading text-2xl font-semibold text-foreground">Sensibilisation</h3>
                    </div>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <span className="text-primary font-bold mt-1">•</span>
                        <span>Communication interne régulière</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary font-bold mt-1">•</span>
                        <span>Formation des équipes aux bonnes pratiques</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary font-bold mt-1">•</span>
                        <span>Implication des collaborateurs dans la démarche</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary font-bold mt-1">•</span>
                        <span>Partage des résultats et progrès dans différents groupes de travail</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="font-heading text-4xl font-semibold text-foreground mb-8">
                Nos actions pour l'environnement
              </h2>
              <div className="space-y-6">
                {[
                  "Optimisation des trajets et réduction des consommations énergétiques",
                  "Utilisation de matériels et équipements plus efficaces",
                  "Gestion responsable des déchets de chantier",
                  "Formation de nos équipes aux bonnes pratiques environnementales",
                  "Partenariats avec des fournisseurs engagés dans la durabilité",
                ].map((action, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <Zap size={24} className="text-primary flex-shrink-0 mt-1" />
                    <p className="text-lg text-muted-foreground">{action}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-muted rounded-3xl p-12">
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-8">
                Nos engagements
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Users size={20} className="text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">Impliquer toute notre équipe dans cette démarche</p>
                </div>
                <div className="flex items-start gap-3">
                  <Target size={20} className="text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">Fixer des objectifs mesurables et réalistes</p>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingDown size={20} className="text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">Réduire progressivement notre empreinte carbone</p>
                </div>
                <div className="flex items-start gap-3">
                  <Leaf size={20} className="text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">Contribuer à la transition écologique</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="rounded-3xl">
            <CardContent className="p-12 md:p-16 text-center">
              <h2 className="font-heading text-3xl font-semibold text-foreground mb-6">
                Questions sur notre performance CO2 ?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
                Contactez-nous pour en savoir plus sur notre engagement environnemental et nos actions concrètes.
              </p>
              <Link href="/contact">
                <Button className="rounded-xl group">
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
