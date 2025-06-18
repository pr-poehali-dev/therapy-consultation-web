import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const CallToAction = () => {
  return (
    <section className="py-20 px-4 bg-warm-gradient">
      <div className="max-w-4xl mx-auto">
        <Card className="border-0 therapy-shadow bg-white/95 backdrop-blur-sm">
          <CardContent className="p-12 text-center">
            <div className="mb-8">
              <Icon
                name="Sparkles"
                size={48}
                className="text-primary mx-auto mb-4"
              />
              <h2 className="text-3xl md:text-4xl font-bold font-merriweather text-slate-800 mb-4">
                Готов начать путь к лучшему себе?
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Сделай первый шаг прямо сейчас. Твоё ментальное здоровье — это
                инвестиция в счастливое будущее.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg therapy-shadow hover:scale-105 transition-all duration-200"
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Начать бесплатно
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary/5 px-8 py-4 text-lg warm-shadow hover:scale-105 transition-all duration-200"
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Связаться с нами
              </Button>
            </div>

            <div className="mt-8 text-sm text-slate-500">
              <p>
                Первая консультация бесплатно • Без обязательств • Полная
                конфиденциальность
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CallToAction;
