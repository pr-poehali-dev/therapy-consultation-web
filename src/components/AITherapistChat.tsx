import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import Icon from "@/components/ui/icon";

interface Message {
  id: string;
  content: string;
  sender: "user" | "therapist";
  timestamp: Date;
}

const AITherapistChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Привет! Я твой ИИ-психотерапевт. Меня зовут Алиса. Я здесь, чтобы выслушать тебя и помочь. О чём бы ты хотел поговорить сегодня?",
      sender: "therapist",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      const scrollElement = scrollAreaRef.current.querySelector(
        "[data-radix-scroll-area-viewport]",
      );
      if (scrollElement) {
        scrollElement.scrollTop = scrollElement.scrollHeight;
      }
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateTherapistResponse = (userMessage: string): string => {
    const responses = [
      "Понимаю, что это может быть сложно для тебя. Расскажи мне больше о своих чувствах по этому поводу.",
      "Спасибо, что поделился этим со мной. Как долго ты испытываешь эти ощущения?",
      "Я слышу, что это важно для тебя. Что бы ты хотел изменить в этой ситуации?",
      "Твои чувства совершенно понятны. Давай попробуем разобраться в этом вместе.",
      "Это звучит как непростая ситуация. Какая поддержка была бы сейчас для тебя наиболее важной?",
      "Я вижу, что ты проходишь через многое. Как ты обычно справляешься с подобными переживаниями?",
      "Спасибо за доверие. Что тебе сейчас больше всего нужно - выговориться или получить совет?",
    ];

    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(
      () => {
        const therapistResponse: Message = {
          id: (Date.now() + 1).toString(),
          content: generateTherapistResponse(inputMessage),
          sender: "therapist",
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, therapistResponse]);
        setIsTyping(false);
      },
      1500 + Math.random() * 1000,
    );
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-therapy-gradient flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl h-[80vh] flex flex-col therapy-shadow">
        <CardHeader className="bg-primary/5 rounded-t-lg">
          <CardTitle className="flex items-center gap-3 text-slate-800">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <Icon name="Heart" size={20} className="text-white" />
            </div>
            <div>
              <h3 className="font-merriweather">Алиса - ИИ Психотерапевт</h3>
              <p className="text-sm text-slate-600 font-normal">
                Онлайн • Конфиденциально
              </p>
            </div>
          </CardTitle>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col p-0">
          <ScrollArea className="flex-1 p-6" ref={scrollAreaRef}>
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[70%] p-4 rounded-2xl ${
                      message.sender === "user"
                        ? "bg-primary text-white"
                        : "bg-white border therapy-shadow"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.content}</p>
                    <p
                      className={`text-xs mt-2 ${
                        message.sender === "user"
                          ? "text-primary-foreground/70"
                          : "text-slate-500"
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString("ru-RU", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border therapy-shadow p-4 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse"></div>
                      <div
                        className="w-2 h-2 bg-slate-400 rounded-full animate-pulse"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-slate-400 rounded-full animate-pulse"
                        style={{ animationDelay: "0.4s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          <div className="p-6 border-t bg-white rounded-b-lg">
            <div className="flex gap-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Напиши о том, что тебя беспокоит..."
                className="flex-1 border-slate-300 focus:border-primary"
                disabled={isTyping}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isTyping}
                className="bg-primary hover:bg-primary/90"
              >
                <Icon name="Send" size={20} />
              </Button>
            </div>

            <div className="flex items-center justify-center gap-6 mt-4 text-xs text-slate-500">
              <div className="flex items-center gap-1">
                <Icon name="Shield" size={12} />
                Анонимно
              </div>
              <div className="flex items-center gap-1">
                <Icon name="Lock" size={12} />
                Зашифровано
              </div>
              <div className="flex items-center gap-1">
                <Icon name="Heart" size={12} />
                Безопасно
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AITherapistChat;
