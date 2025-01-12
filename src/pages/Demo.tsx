import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Rocket, Brain } from "lucide-react";

const cases = [
  {
    title: "Incremento en Ventas Online",
    description:
      "Una tienda local aumentó sus ventas en un 150% en 6 meses mediante nuestra estrategia de marketing digital.",
    icon: BarChart,
  },
  {
    title: "Automatización de Procesos",
    description:
      "Implementamos soluciones que redujeron el tiempo de procesamiento de pedidos en un 75%.",
    icon: Rocket,
  },
  {
    title: "Inteligencia de Negocio",
    description:
      "Desarrollamos un dashboard que permitió tomar decisiones basadas en datos en tiempo real.",
    icon: Brain,
  },
];

const Demo = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium inline-block mb-4">
            Casos de Éxito
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-4">
            Transformando Negocios con Tecnología
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre cómo hemos ayudado a empresas como la tuya a alcanzar sus objetivos digitales
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((case_, index) => (
            <motion.div
              key={case_.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <case_.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-secondary-dark">
                    {case_.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{case_.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Demo;