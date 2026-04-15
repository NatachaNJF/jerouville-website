import { Button } from "@/components/ui/button";
import { ArrowRight, AlertCircle } from "lucide-react";
import { useEffect } from "react";

export default function Devis() {
  useEffect(() => {
    // Redirection automatique vers Odoo après 2 secondes
    const timer = setTimeout(() => {
      window.location.href = "https://jerouville.odoo.com/form-b2c";
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <section className="py-12 md:py-16 bg-accent/30">
        <div className="container">
          <h1 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-3">
            Demander un devis
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-full">
            Vous allez être redirigé vers notre formulaire de devis en ligne. Notre équipe vous répondra dans les meilleurs délais.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container max-w-2xl">
          <div className="mb-8 p-6 rounded-xl bg-primary/10 border border-primary/20 flex gap-4">
            <AlertCircle size={24} className="text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-foreground font-medium mb-2">Redirection en cours...</p>
              <p className="text-sm text-muted-foreground">
                Vous allez être redirigé vers notre formulaire en ligne dans quelques secondes. Si la redirection ne fonctionne pas, cliquez sur le bouton ci-dessous.
              </p>
            </div>
          </div>

          <div className="text-center py-12">
            <p className="text-muted-foreground mb-6">
              Cliquez ici si vous n'êtes pas redirigé automatiquement :
            </p>
            <a href="https://jerouville.odoo.com/form-b2c">
              <Button size="lg" className="rounded-xl group">
                Accéder au formulaire de devis
                <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </div>

          <div className="mt-12 p-8 rounded-3xl bg-muted">
            <h3 className="font-heading text-2xl font-semibold mb-4">Vous préférez nous contacter directement ?</h3>
            <p className="text-muted-foreground mb-6">
              Notre équipe est à votre disposition pour répondre à vos questions et discuter de votre projet.
            </p>
            <div className="space-y-3">
              <p>
                <strong>Téléphone :</strong>{" "}
                <a href="tel:+3261230340" className="text-primary hover:underline">
                  +32 61 23 03 40
                </a>
              </p>
              <p>
                <strong>Email :</strong>{" "}
                <a href="mailto:entreprise.jerouville@jerouville.be" className="text-primary hover:underline">
                  entreprise.jerouville@jerouville.be
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
