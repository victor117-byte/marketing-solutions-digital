import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  {
    title: "Diagnóstico Inicial",
    description: "Analizamos tu negocio y definimos objetivos claros",
  },
  {
    title: "Estrategia Personalizada",
    description: "Diseñamos un plan adaptado a tus necesidades específicas",
  },
  {
    title: "Implementación",
    description: "Ponemos en marcha las soluciones tecnológicas",
  },
  {
    title: "Optimización Continua",
    description: "Mejoramos constantemente basándonos en datos reales",
  },
];

const GetStarted = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary/5">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-dark mb-6">
            Comienza Tu Transformación Digital
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            En 4 simples pasos, transformaremos tu negocio con soluciones digitales inteligentes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="relative h-full">
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-secondary-dark mb-6">
                ¿Listo para empezar?
              </h2>
              <div className="space-y-4 mb-8">
                {[
                  "Análisis gratuito de tu situación actual",
                  "Plan personalizado de transformación digital",
                  "Soporte continuo y optimización",
                  "Resultados medibles y transparentes",
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                    <span className="text-gray-600">{benefit}</span>
                  </div>
                ))}
              </div>
              <Button className="w-full md:w-auto">
                Agenda una consulta gratuita
                <ArrowRight className="ml-2" />
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="Consultoría digital"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;