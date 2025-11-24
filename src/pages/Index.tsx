import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Bike" size={32} className="text-primary" />
            <h1 className="text-2xl font-bold text-primary">МотоХаб Хабаровск</h1>
          </div>
          <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection("home")} className="hover:text-primary transition-colors">Главная</button>
            <button onClick={() => scrollToSection("rides")} className="hover:text-primary transition-colors">Мотопробеги</button>
            <button onClick={() => scrollToSection("training")} className="hover:text-primary transition-colors">Обучение</button>
            <button onClick={() => scrollToSection("gallery")} className="hover:text-primary transition-colors">Галерея</button>
            <button onClick={() => scrollToSection("contacts")} className="hover:text-primary transition-colors">Контакты</button>
          </div>
        </div>
      </nav>

      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/20 z-0"></div>
        <div 
          className="absolute inset-0 opacity-30 z-0" 
          style={{
            backgroundImage: `url(https://cdn.poehali.dev/projects/fb0fb744-da6a-4e00-82a2-33e20e661511/files/33e7dec5-80db-4f84-9a3f-95ff79c67397.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.4)'
          }}
        ></div>
        <div className="container mx-auto px-4 z-10 text-center animate-fade-in">
          <h2 className="text-6xl md:text-8xl font-bold mb-6 text-primary">
            МОТОХАБ
          </h2>
          <p className="text-3xl md:text-4xl mb-4 text-foreground font-light">
            Хабаровск
          </p>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Мотопробеги • Контраварийное вождение • Мотопрокат
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button onClick={() => scrollToSection("rides")} size="lg" className="text-lg px-8 animate-pulse-glow">
              <Icon name="MapPin" size={20} className="mr-2" />
              Мотопробеги
            </Button>
            <Button onClick={() => scrollToSection("training")} size="lg" variant="outline" className="text-lg px-8 border-primary hover:bg-primary">
              <Icon name="GraduationCap" size={20} className="mr-2" />
              Обучение
            </Button>
          </div>
        </div>
      </section>

      <section id="rides" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4 text-primary animate-fade-in">
            Мотопробеги
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Организуем незабываемые путешествия на мотоциклах
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-background border-border hover:border-primary transition-all animate-fade-in">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <Icon name="Mountain" size={24} className="text-primary" />
                </div>
                <CardTitle className="text-2xl">Выездные туры</CardTitle>
                <CardDescription>Путешествия по Дальнему Востоку</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Многодневные маршруты с посещением живописных мест региона. Профессиональное сопровождение и организация остановок.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border hover:border-primary transition-all animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4">
                  <Icon name="Users" size={24} className="text-secondary" />
                </div>
                <CardTitle className="text-2xl">Клубные встречи</CardTitle>
                <CardDescription>Регулярные выезды сообщества</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Еженедельные групповые поездки для участников мотоклуба. Общение, обмен опытом и новые знакомства.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border hover:border-primary transition-all animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                  <Icon name="Flag" size={24} className="text-accent" />
                </div>
                <CardTitle className="text-2xl">Мотофестивали</CardTitle>
                <CardDescription>Участие в крупных событиях</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Организуем поездки на мотофестивали по всей России. Совместные выезды с проживанием и развлечениями.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12 relative rounded-2xl overflow-hidden h-96">
            <img 
              src="https://cdn.poehali.dev/projects/fb0fb744-da6a-4e00-82a2-33e20e661511/files/dbfddfd3-8259-4c5c-baef-5cef2fab12df.jpg" 
              alt="Мотопробег"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end">
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-2">Присоединяйся к команде</h3>
                <p className="text-lg text-muted-foreground">Следующий выезд уже в эти выходные</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="training" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4 text-primary animate-fade-in">
            Обучение
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Курсы контраварийного вождения от профессионалов
          </p>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="bg-card border-border hover:border-primary transition-all">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Icon name="Shield" size={24} className="text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Базовый курс</CardTitle>
                      <CardDescription>Основы безопасного вождения</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      Правильная посадка и управление
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      Торможение и маневрирование
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      Преодоление препятствий
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:border-primary transition-all">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                      <Icon name="Zap" size={24} className="text-secondary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Продвинутый курс</CardTitle>
                      <CardDescription>Экстремальные ситуации</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-secondary" />
                      Экстренное торможение
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-secondary" />
                      Контроль заноса
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-secondary" />
                      Движение в группе
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:border-primary transition-all">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                      <Icon name="Trophy" size={24} className="text-accent" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Мастер-класс</CardTitle>
                      <CardDescription>Профессиональная техника</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-accent" />
                      Спортивная езда на треке
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-accent" />
                      Оптимальные траектории
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-accent" />
                      Работа с техникой
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="relative rounded-2xl overflow-hidden h-[600px]">
              <img 
                src="https://cdn.poehali.dev/projects/fb0fb744-da6a-4e00-82a2-33e20e661511/files/ddaff356-1836-427e-a9d7-a2b21c684223.jpg" 
                alt="Обучение вождению"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent flex items-end">
                <div className="p-8 w-full">
                  <Button size="lg" className="w-full text-lg animate-pulse-glow">
                    <Icon name="Calendar" size={20} className="mr-2" />
                    Записаться на курс
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4 text-primary animate-fade-in">
            Галерея
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Моменты наших мотопутешествий
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="relative aspect-video rounded-xl overflow-hidden group cursor-pointer">
                <img 
                  src={`https://cdn.poehali.dev/projects/fb0fb744-da6a-4e00-82a2-33e20e661511/files/${
                    i % 3 === 0 ? '33e7dec5-80db-4f84-9a3f-95ff79c67397' : 
                    i % 3 === 1 ? 'dbfddfd3-8259-4c5c-baef-5cef2fab12df' : 
                    'ddaff356-1836-427e-a9d7-a2b21c684223'
                  }.jpg`}
                  alt={`Gallery ${i}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Icon name="ZoomIn" size={32} className="text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4 text-primary animate-fade-in">
            Контакты
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Свяжитесь с нами любым удобным способом
          </p>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Icon name="MapPin" size={24} className="text-primary" />
                  Адрес
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  г. Хабаровск<br />
                  ул. Ленина, 1<br />
                  Офис МотоХаб
                </p>
                <div className="flex flex-col gap-3">
                  <a href="tel:+79000000000" className="flex items-center gap-2 text-primary hover:underline">
                    <Icon name="Phone" size={20} />
                    +7 (900) 000-00-00
                  </a>
                  <a href="mailto:info@motohub.ru" className="flex items-center gap-2 text-primary hover:underline">
                    <Icon name="Mail" size={20} />
                    info@motohub.ru
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Icon name="MessageCircle" size={24} className="text-primary" />
                  Социальные сети
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground mb-4">
                  Следите за новостями и событиями
                </p>
                <div className="flex flex-col gap-3">
                  <Button variant="outline" className="justify-start border-primary hover:bg-primary">
                    <Icon name="MessageCircle" size={20} className="mr-2" />
                    Telegram
                  </Button>
                  <Button variant="outline" className="justify-start border-primary hover:bg-primary">
                    <Icon name="Share2" size={20} className="mr-2" />
                    VK
                  </Button>
                  <Button variant="outline" className="justify-start border-primary hover:bg-primary">
                    <Icon name="Instagram" size={20} className="mr-2" />
                    Instagram
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Bike" size={24} className="text-primary" />
            <span className="text-xl font-bold text-primary">МотоХаб Хабаровск</span>
          </div>
          <p>&copy; 2024 МотоХаб. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
