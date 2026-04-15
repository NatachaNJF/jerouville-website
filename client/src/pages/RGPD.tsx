export default function RGPD() {
  return (
    <div className="min-h-screen">
      <section className="py-20 md:py-32 bg-accent/30">
        <div className="container">
          <h1 className="font-heading text-5xl md:text-6xl font-semibold text-foreground mb-6">
            Politique de confidentialité
          </h1>
          <p className="text-xl text-muted-foreground max-w-full">
            Protection de vos données à caractère personnel
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container max-w-3xl">
          <div className="prose prose-invert max-w-none space-y-6">
            <div>
              <h2 className="font-heading text-2xl font-semibold mb-3">1. Responsable du traitement</h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Jérouville SA, située à Libramont, Quartier Haynol 1, BE6800 Libramont-Chevigny, est responsable du traitement de vos données à caractère personnel.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold mb-3">2. Données collectées</h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Nous collectons les données que vous nous fournissez volontairement via nos formulaires de contact et de devis, notamment : nom, prénom, adresse email, numéro de téléphone, et informations relatives à votre projet.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold mb-3">3. Finalité du traitement</h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Vos données sont utilisées pour :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2 text-sm">
                <li>répondre à vos demandes de devis</li>
                <li>vous contacter concernant votre projet</li>
                <li>améliorer nos services</li>
                <li>respecter nos obligations légales</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold mb-3">4. Base légale</h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Le traitement de vos données est basé sur votre consentement explicite et sur l'exécution d'un contrat (demande de devis).
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold mb-3">5. Durée de conservation</h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Vos données sont conservées pendant la durée nécessaire à la réalisation de la finalité pour laquelle elles ont été collectées, et au maximum 3 ans après votre dernière interaction avec nous.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold mb-3">6. Vos droits</h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2 text-sm">
                <li>droit d'accès à vos données</li>
                <li>droit de rectification</li>
                <li>droit à l'oubli</li>
                <li>droit à la portabilité des données</li>
                <li>droit d'opposition au traitement</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-2 text-sm">
                Pour exercer ces droits, contactez-nous à : entreprise.jerouville@jerouville.be
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold mb-3">7. Sécurité des données</h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Nous mettons en place des mesures de sécurité appropriées pour protéger vos données contre l'accès non autorisé, la modification ou la suppression.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold mb-3">8. Contact</h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Pour toute question concernant cette politique de confidentialité, veuillez nous contacter :
              </p>
              <div className="mt-2 text-muted-foreground space-y-1 text-sm">
                <p>
                  <strong>Email :</strong> entreprise.jerouville@jerouville.be
                </p>
                <p>
                  <strong>Téléphone :</strong> +32 61 23 03 40
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
