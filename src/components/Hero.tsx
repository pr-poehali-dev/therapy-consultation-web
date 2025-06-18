import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-therapy-gradient min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-warm/20 rounded-full blur-2xl"></div>

      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-8">
          <Icon name="Heart" size={64} className="text-primary mx-auto mb-6" />
        </div>

        <h1 className="text-5xl md:text-6xl font-bold font-merriweather text-slate-800 mb-6 leading-tight">
          Твой персональный
          <span className="text-primary block mt-2">ИИ-психотерапевт</span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Безопасное пространство для разговоров о важном. Анонимно,
          конфиденциально, всегда доступно.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg therapy-shadow hover:scale-105 transition-all duration-200"
            onClick={() => (window.location.href = "/chat")}
          >
            <Icon name="MessageCircle" size={20} className="mr-2" />
            Начать разговор
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary/5 px-8 py-4 text-lg warm-shadow hover:scale-105 transition-all duration-200"
          >
            <Icon name="Calendar" size={20} className="mr-2" />
            Записаться на сессию
          </Button>
        </div>

        <div className="mt-16 flex items-center justify-center gap-8 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <Icon name="Shield" size={16} className="text-primary" />
            Анонимно
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Lock" size={16} className="text-primary" />
            Конфиденциально
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Clock" size={16} className="text-primary" />
            24/7 доступно
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
