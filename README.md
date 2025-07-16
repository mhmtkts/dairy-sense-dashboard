# Dairy Sense Dashboard

Bu proje, modern bir çiftlik yönetimi arayüzü sağlamak amacıyla React, Vite ve Tailwind CSS kullanılarak geliştirilmiş bir web uygulamasıdır. Uygulama, kullanıcıların sürü verilerini verimli bir şekilde görselleştirmesine ve yönetmesine olanak tanır.

## ✨ Temel Özellikler

- **Duyarlı Tasarım:** Mobil, tablet ve masaüstü cihazlarda sorunsuz çalışan tam duyarlı arayüz.
- **Dinamik Layout:** Genişletilebilir/daraltılabilir sol kenar çubuğu (sidebar) ve açılır sağ bildirim paneli.
- **Sürüklenebilir Dashboard:** `react-grid-layout` kullanılarak oluşturulmuş, kullanıcı tarafından özelleştirilebilen, sürüklenebilir ve yeniden boyutlandırılabilir widget'lar.
- **Çoklu Dil Desteği:** `i18next` ile entegre edilmiş uluslararasılaştırma (i18n) altyapısı.
- **Dinamik Hava Durumu Widget'ı:** Kenar çubuğunda anlık hava durumu bilgisi gösteren bir bileşen.
- **Modern Araçlar:** Hızlı geliştirme için Vite ve verimli stilizasyon için Tailwind CSS.

## 🛠️ Kullanılan Teknolojiler

- **Framework:** [React](https://reactjs.org/)
- **Build Aracı:** [Vite](https://vitejs.dev/)
- **Stil:** [Tailwind CSS](https://tailwindcss.com/)
- **Yönlendirme (Routing):** [React Router](https://reactrouter.com/)
- **Grid Sistemi:** [React Grid Layout](https://github.com/react-grid-layout/react-grid-layout)
- **Uluslararasılaştırma:** [i18next](https://www.i18next.com/)
- **İkonlar:** [React Icons](https://react-icons.github.io/react-icons/)

## 🚀 Projeyi Başlatma

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin.

1.  **Projeyi Klonlayın:**
    ```sh
    git clone <repository-url>
    ```

2.  **Proje Dizinine Gidin:**
    ```sh
    cd dairy-sense-dashboard
    ```

3.  **Bağımlılıkları Yükleyin:**
    ```sh
    npm install
    ```

4.  **Geliştirme Sunucusunu Başlatın:**
    ```sh
    npm run dev
    ```
    Uygulama varsayılan olarak `http://localhost:5173` adresinde çalışacaktır.

## 📜 Kullanılabilir Komutlar

- `npm run dev`: Geliştirme modunda uygulamayı başlatır.
- `npm run build`: Uygulamayı üretim için derler ve `dist` klasörüne atar.
- `npm run lint`: ESLint ile kod stilini kontrol eder.
- `npm run preview`: Üretim derlemesini yerel olarak önizler.