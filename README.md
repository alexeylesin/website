# alexeylesin.ru

Данный репозиторий является форком сайта [FelixTellmann.com](https://github.com/FelixTellmann/FelixTellmann.com). Я решил использовать именно его, поскольку таким образом я смог соединить блог и основную часть сайта в единое целое. Все ссылки `blog.alexeylesin.me` будут переадресованы на `alexeylesin.me/blog` (в том числе и сами статьи), а старые репозитории - архивированы.

## Установка

```bash
$ git clone https://github.com/alexeylesin/website.git
$ cd website
$ npm install (или yarn install)
$ npm run dev (или yarn dev)
```

Зарегистрируйтесь на buttondown для генерации API ключа и укажите его в файле `.env`. Создайте его и вставьте туда содержимое файла `.env.example`. Если вы захотите поставить сайт на Vercel, убедитесь что вы выбрали именно Environmental ключи.
