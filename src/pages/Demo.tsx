import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BarChart, Rocket, Brain, Target } from "lucide-react";

const cases = [
  {
    title: "Tienda de Ropa Online",
    before: "Ventas estancadas y alto costo en publicidad",
    after: "300% más ventas con 50% menos inversión",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
    icon: BarChart,
  },
  {
    title: "Restaurante Local",
    before: "Procesos manuales y pérdida de clientes",
    after: "Automatización total y 200% más reservas",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    icon: Rocket,
  },
  {
    title: "Empresa de Servicios",
    before: "Decisiones basadas en intuición",
    after: "Crecimiento del 150% con BI",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    icon: Brain,
  },
];

const Demo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary/5">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium inline-block mb-6">
            Casos de Éxito
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-dark mb-6">
            Transformaciones Reales
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre cómo hemos ayudado a empresas como la tuya a alcanzar su máximo potencial
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {cases.map((case_, index) => (
            <motion.div
              key={case_.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={case_.image}
                    alt={case_.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <case_.icon className="absolute bottom-4 left-4 w-8 h-8 text-white" />
                </div>
                <CardHeader>
                  <CardTitle>{case_.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-1">Antes</h4>
                      <p className="text-gray-600">{case_.before}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-primary mb-1">Después</h4>
                      <p className="text-gray-800 font-medium">{case_.after}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
          <Target className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-secondary-dark mb-4">
            ¿Listo para ser el próximo caso de éxito?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Únete a las empresas que ya han transformado su negocio con nuestras soluciones digitales
          </p>
          <Button size="lg">
            Ver una demostración personalizada
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Demo;