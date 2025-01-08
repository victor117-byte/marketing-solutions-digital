import { motion } from "framer-motion";
import { Target, Lightbulb, Cog, ChartBar } from "lucide-react";

const steps = [
  {
    icon: Target,
    title: "Análisis",
    description: "Estudiamos tu negocio y mercado para identificar oportunidades",
  },
  {
    icon: Lightbulb,
    title: "Estrategia",
    description: "Diseñamos un plan personalizado para alcanzar tus objetivos",
  },
  {
    icon: Cog,
    title: "Implementación",
    description: "Ponemos en marcha las soluciones de forma rápida y eficiente",
  },
  {
    icon: ChartBar,
    title: "Resultados",
    description: "Medimos y optimizamos para maximizar el retorno de inversión",
  },
];

export const Process = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium inline-block mb-4">
            Metodología
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-4">
            Cómo Trabajamos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Un proceso simple y efectivo para transformar tu negocio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-secondary-dark">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
                <div className="absolute top-0 right-4 text-6xl font-bold text-primary/10">
                  {index + 1}
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};