import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const MainSections = () => {
  const sections = [
    {
      icon: "MessageCircle",
      title: "Чат с ИИ-терапевтом",
      description:
        "Поговори с умным и понимающим ИИ-помощником, который поможет разобраться в твоих мыслях и чувствах",
      action: "Начать разговор",
      gradient: "bg-gradient-to-br from-primary/5 to-primary/10",
    },
    {
      icon: "Info",
      title: "О сервисе",
      description:
        "Узнай, как работает ИИ-терапия, какие методы мы используем и как обеспечиваем твою безопасность",
      action: "Подробнее",
      gradient: "bg-gradient-to-br from-accent/20 to-accent/30",
    },
    {
      icon: "Calendar",
      title: "Запись на сессии",
      description:
        "Забронируй индивидуальную или групповую сессию с удобным временем и напоминаниями",
      action: "Записаться",
      gradient: "bg-gradient-to-br from-warm/20 to-warm/30",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-merriweather text-slate-800 mb-4">
            Как мы можем помочь
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Выбери наиболее подходящий для тебя способ получения поддержки
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <Card
              key={index}
              className="border-0 therapy-shadow hover:scale-105 transition-all duration-300 cursor-pointer group"
            >
              <CardHeader className={`${section.gradient} rounded-t-lg`}>
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  <Icon
                    name={section.icon}
                    size={32}
                    className="text-primary"
                  />
                </div>
                <CardTitle className="text-xl font-bold text-center text-slate-800">
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 text-center">
                <CardDescription className="text-slate-600 mb-6 leading-relaxed">
                  {section.description}
                </CardDescription>
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-white"
                  size="lg"
                >
                  {section.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainSections;
