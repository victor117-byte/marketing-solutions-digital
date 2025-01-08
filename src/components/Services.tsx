import { motion } from "framer-motion";
import { BarChart3, Rocket, Brain, Palette } from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Marketing Digital",
    description: "Estrategias personalizadas para llegar a tus clientes ideales en el momento perfecto",
  },
  {
    icon: Rocket,
    title: "Automatización de Procesos",
    description: "Simplificamos y automatizamos tu negocio para que funcione sin esfuerzo",
  },
  {
    icon: Brain,
    title: "Analítica Personalizada BI",
    description: "Convertimos datos complejos en decisiones simples y efectivas",
  },
  {
    icon: Palette,
    title: "Diseño y Posicionamiento",
    description: "Creamos una imagen única que destaca y conecta con tu audiencia",
  },
];

export const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium inline-block mb-4">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-4">
            Soluciones que Impulsan tu Crecimiento
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Combinamos tecnología y estrategia para transformar tu negocio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-secondary-dark">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};