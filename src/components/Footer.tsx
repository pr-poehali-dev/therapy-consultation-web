import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Heart" size={24} className="text-primary" />
              <span className="text-xl font-bold">ИИ-Терапевт</span>
            </div>
            <p className="text-slate-300 mb-4 leading-relaxed">
              Профессиональная психологическая поддержка с использованием
              современных технологий искусственного интеллекта.
            </p>
            <div className="flex gap-4">
              <Icon
                name="Mail"
                size={20}
                className="text-slate-400 hover:text-primary cursor-pointer transition-colors"
              />
              <Icon
                name="Phone"
                size={20}
                className="text-slate-400 hover:text-primary cursor-pointer transition-colors"
              />
              <Icon
                name="MessageSquare"
                size={20}
                className="text-slate-400 hover:text-primary cursor-pointer transition-colors"
              />
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Сервисы</h3>
            <ul className="space-y-2 text-slate-300">
              <li className="hover:text-primary cursor-pointer transition-colors">
                ИИ-чат
              </li>
              <li className="hover:text-primary cursor-pointer transition-colors">
                Сессии
              </li>
              <li className="hover:text-primary cursor-pointer transition-colors">
                База знаний
              </li>
              <li className="hover:text-primary cursor-pointer transition-colors">
                Прогресс
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Поддержка</h3>
            <ul className="space-y-2 text-slate-300">
              <li className="hover:text-primary cursor-pointer transition-colors">
                О нас
              </li>
              <li className="hover:text-primary cursor-pointer transition-colors">
                Конфиденциальность
              </li>
              <li className="hover:text-primary cursor-pointer transition-colors">
                Условия
              </li>
              <li className="hover:text-primary cursor-pointer transition-colors">
                Контакты
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2024 ИИ-Терапевт. Все права защищены.</p>
          <p className="mt-2 text-sm">
            Экстренная помощь:
            <span className="text-primary font-semibold ml-1">
              8-800-2000-122
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
