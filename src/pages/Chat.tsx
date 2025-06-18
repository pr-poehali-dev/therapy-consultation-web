import AITherapistChat from "@/components/AITherapistChat";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

const Chat = () => {
  const navigate = useNavigate();

  return (
    <div className="relative">
      <Button
        onClick={() => navigate("/")}
        variant="ghost"
        className="absolute top-4 left-4 z-10 text-slate-600 hover:text-slate-800"
      >
        <Icon name="ArrowLeft" size={20} className="mr-2" />
        На главную
      </Button>
      <AITherapistChat />
    </div>
  );
};

export default Chat;
