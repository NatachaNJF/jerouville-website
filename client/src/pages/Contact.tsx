import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <section className="py-12 md:py-16 bg-accent/30">
        <div className="container">
          <h1 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-3">
            Nous contacter
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-full">
            Vous avez une question ou un projet ? Notre équipe est à votre écoute.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 2xl:gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-3xl font-semibold mb-8">Coordonnées</h2>
              </div>

              <Card className="rounded-3xl">
                <CardContent className="p-8 flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">Adresse</h3>
                    <p className="text-muted-foreground">
                      Libramont, Quartier Haynol 1<br />
                      6800 Libramont-Chevigny<br />
                      Belgique
                    </p>
                    <p className="text-sm text-muted-foreground mt-3 italic">
                      <strong>GPS :</strong> rue des Mésanges 26, Libramont
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-3xl">
                <CardContent className="p-8 flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">Téléphone</h3>
                    <a href="tel:+3261230340" className="text-primary hover:underline font-medium">
                      +32 61 23 03 40
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-3xl">
                <CardContent className="p-8 flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">Email</h3>
                    <a href="mailto:entreprise.jerouville@jerouville.be" className="text-primary hover:underline font-medium">
                      entreprise.jerouville@jerouville.be
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-3xl">
                <CardContent className="p-8 flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">Horaires</h3>
                    <p className="text-muted-foreground">
                      Lundi - Vendredi : 8h00 - 18h00<br />
                      Samedi - Dimanche : fermé
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map */}
            <div className="rounded-3xl overflow-hidden shadow-xl h-96 md:h-full min-h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2522.4789789789787!2d5.3659243!3d49.920897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c029bdfb42d001%3A0xf6d8cb80ad4d577c!2sJérouville%20SA!5e0!3m2!1sfr!2sbe!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Demande de devis */}
          <div className="mt-12">
            <Card className="rounded-3xl bg-gradient-to-br from-primary/10 to-accent/20 border-primary/20">
              <CardContent className="p-12 md:p-16 flex flex-col md:flex-row items-center gap-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FileText size={32} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="font-heading text-3xl font-semibold text-foreground mb-3">
                    Demande de devis
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Vous êtes un particulier et souhaitez obtenir un devis pour vos travaux d'aménagement ? Remplissez notre formulaire en ligne et nous vous répondrons au plus vite.
                  </p>
                </div>
                <a href="https://jerouville.odoo.com/form-b2c" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="rounded-xl whitespace-nowrap">
                    Demander un devis
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
