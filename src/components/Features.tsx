import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Features = () => {
  const features = [
    {
      icon: "Calendar",
      title: "Планирование сессий",
      description:
        "Удобная система записи с напоминаниями и возможностью переноса встреч",
    },
    {
      icon: "BookOpen",
      title: "База знаний",
      description:
        "Библиотека упражнений, техник и медитаций для самостоятельной работы",
    },
    {
      icon: "Shield",
      title: "Анонимность",
      description:
        "Полная конфиденциальность и защита личных данных по международным стандартам",
    },
    {
      icon: "TrendingUp",
      title: "Отслеживание прогресса",
      description:
        "Визуализация твоего пути к лучшему самочувствию и достижения целей",
    },
    {
      icon: "Clock",
      title: "Доступность 24/7",
      description:
        "ИИ-терапевт всегда готов выслушать, независимо от времени суток",
    },
    {
      icon: "Users",
      title: "Групповые сессии",
      description: "Возможность участвовать в тематических группах поддержки",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-merriweather text-slate-800 mb-4">
            Возможности сервиса
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Всё необходимое для твоего ментального здоровья в одном месте
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 bg-white/80 backdrop-blur-sm therapy-shadow hover:therapy-shadow hover:scale-105 transition-all duration-300 group"
            >
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-200">
                  <Icon
                    name={feature.icon}
                    size={24}
                    className="text-primary"
                  />
                </div>
                <CardTitle className="text-lg font-semibold text-slate-800">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-slate-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
