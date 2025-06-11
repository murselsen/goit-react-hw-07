# React + Redux Phonebook

Bu proje, React, Redux Toolkit ve [mockapi.io](https://mockapi.io/) kullanılarak hazırlanmış bir telefon rehberi uygulamasıdır. Kullanıcılar kişi ekleyebilir, silebilir ve isimlerine göre arama yapabilir.

## Özellikler

- Kişi ekleme ve silme
- İsim ile filtreleme (arama)
- [mockapi.io](https://mockapi.io/) üzerinden asenkron veri yönetimi (CRUD)
- Formik ve Yup ile form doğrulama
- Modern ve responsive arayüz
- Yükleniyor animasyonu ve hata yönetimi

## Kurulum

1. Depoyu klonlayın:

   ```sh
   git clone https://github.com/kullanici-adi/goit-react-hw-07.git
   cd goit-react-hw-07
   ```

2. Bağımlılıkları yükleyin:

   ```sh
   npm install
   ```

3. Geliştirme sunucusunu başlatın:

   ```sh
   npm run dev
   ```

4. Uygulamayı [http://localhost:5173](http://localhost:5173) adresinde görüntüleyebilirsiniz.

## Kullanılan Teknolojiler

- [React](https://react.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Redux](https://react-redux.js.org/)
- [Formik](https://formik.org/)
- [Yup](https://github.com/jquense/yup)
- [Axios](https://axios-http.com/)
- [mockapi.io](https://mockapi.io/)
- [Vite](https://vitejs.dev/)

## Proje Yapısı

```
src/
  App.jsx
  main.jsx
  components/
    Form.jsx
    ContactList.jsx
  redux/
    store.js
    reducers/
      contacts/
        slice.js
        operations.js
        contants.js
      filters/
        slice.js
```

## Komutlar

- `npm run dev` – Geliştirme sunucusunu başlatır
- `npm run build` – Üretim için derler
- `npm run lint` – ESLint ile kodu kontrol eder

## Notlar

- Kişiler [mockapi.io](https://mockapi.io/) üzerinde saklanır.
- Form doğrulama için Formik ve Yup kullanılmıştır.
- Responsive ve modern bir arayüz için CSS modülleri kullanılmıştır.

---

Proje ile ilgili katkıda bulunmak veya hata bildirmek için lütfen bir issue açın veya pull request gönderin.
