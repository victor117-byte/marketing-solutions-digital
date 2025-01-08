import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-[90vh] relative flex items-center justify-center bg-gradient-to-br from-primary-light via-white to-white overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium inline-block mb-6">
            Transformamos datos en resultados
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-secondary-dark mb-6">
            Marketing Digital Inteligente para tu Negocio
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Convertimos datos en estrategias efectivas para hacer crecer tu negocio de forma automática y medible
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-8 py-4 rounded-lg font-medium inline-flex items-center gap-2 shadow-lg shadow-primary/20 hover:bg-primary-dark transition-colors"
            >
              Comienza ahora
              <ChevronRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-secondary-dark px-8 py-4 rounded-lg font-medium inline-flex items-center gap-2 shadow-lg hover:bg-gray-50 transition-colors border border-gray-200"
            >
              Ver demostración
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};