import { useState } from 'react';

const ContactFormDarkMode = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    comment: ''
  });

  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300  bg-accent dark:bg-[#090935]`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">


        <div className="grid grid-cols-1 lg:grid-cols-[1fr,1px,1fr] gap-8 lg:gap-12">

          {/* Левая колонка - Форма */}
          <div className="lg:pr-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Drop Us a Line
            </h2>

            <p className="text-gray-600 dark:text-gray-400 mb-8 text-sm">
              Your email address will not be published. Required fields are marked *
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Your Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg
                           focus:ring-2 focus:ring-blue-500 focus:border-transparent
                           dark:bg-gray-700 dark:text-white transition-colors"
                  required
                />
              </div>

              {/* Email и Website */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg
                             focus:ring-2 focus:ring-blue-500 focus:border-transparent
                             dark:bg-gray-700 dark:text-white transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Website
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg
                             focus:ring-2 focus:ring-blue-500 focus:border-transparent
                             dark:bg-gray-700 dark:text-white transition-colors"
                  />
                </div>
              </div>

              {/* Your Comment */}
              <div>
                <label htmlFor="comment" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Comment *
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg
                           focus:ring-2 focus:ring-blue-500 focus:border-transparent
                           dark:bg-gray-700 dark:text-white resize-vertical transition-colors"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600
                         text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200
                         focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              >
                Submit Message
              </button>
            </form>
          </div>

          {/* Разделительная линия */}
          <div className="hidden lg:block bg-gray-200 dark:bg-gray-700 h-full" />

          {/* Правая колонка - Контакты и карта */}
          <div className="lg:pl-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Get In Touch
            </h3>

            {/* Информация о локации */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-8 border border-gray-200 dark:border-gray-700">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Лондонский Глаз
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                Riverside Building, County Hall, Westminster Bridge Rd, London SE1 7PB, Великобритания
              </p>
              <div className="flex items-center gap-4 text-sm">
                <span className="flex items-center text-amber-600 dark:text-amber-500 font-medium">
                  4,5 <span className="ml-1">★★★★</span>
                </span>
                <span className="text-gray-500 dark:text-gray-400">
                  Отзывов: 192 938
                </span>
              </div>
            </div>

            {/* Карта */}
            <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden mb-4
                          bg-white dark:bg-gray-800 shadow-sm">
              <div className="bg-gray-100 dark:bg-gray-700 p-4 text-center border-b border-gray-200 dark:border-gray-600">
                <p className="text-blue-600 dark:text-blue-400 font-medium cursor-pointer hover:underline
                            transition-colors">
                  Увеличить карту
                </p>
              </div>

              {/* Сетка карты */}
              <div className="p-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-xs">
                  {[
                    'РК КОЛИ', 'Харроу Нагом', 'ЗЭ ЛИД ДЖИНЕЛ', 'Уамбли/ Wembley',
                    'по ударі', '', 'Халес Аутоли Балкан', 'Пондонский Глаз',
                    'Каунстроу Нюлзіону', 'Фигіт Епін', 'Феттем Fatham', 'Дартфорд - Dartford',
                    'Кинстон Кирзіон', 'Аркадия Якісна', 'фол Палпех', 'Бромиш Віопнеу',
                    'Вейбридж Иефийфе', 'Крайдон Оруфан', 'Элсой Ерботі', 'Орлинтон Стридон',
                    'Суррей Хилс', 'Катерием Івана Серенко', 'Быстрее Азавіші'
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`p-2 border rounded text-center transition-all duration-200 cursor-pointer
                                ${item ?
                          'border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                          : 'border-transparent'
                        }`}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Футер карты */}
            <div className="text-xs text-gray-500 dark:text-gray-400 text-center pt-4">
              <p>Картографические данные ©2025 Google | Украина | Сообщить об ошибке на карте</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormDarkMode;
